import { NextRequest, NextResponse } from 'next/server';

interface GenerateIntelligenceRequest {
  websiteUrl: string;
  companyName: string;
  sector: string;
  city: string;
  analysisScore: number;
  gaps: string[];
}

interface SerperOrganic {
  title: string;
  link: string;
  snippet: string;
}

async function searchSerper(query: string): Promise<SerperOrganic[]> {
  try {
    const response = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': process.env.SERPER_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q: query, num: 3, gl: 'za' }),
    });

    if (!response.ok) {
      console.error('Serper error:', response.status, await response.text());
      return [];
    }

    const data = await response.json();
    return ((data.organic ?? []) as SerperOrganic[]).slice(0, 3).map((r) => ({
      title: r.title,
      link: r.link,
      snippet: r.snippet,
    }));
  } catch (err) {
    console.error('Serper fetch failed:', err);
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateIntelligenceRequest = await request.json();
    console.log('[generate-intelligence] received body:', JSON.stringify(body));

    const { websiteUrl, companyName, sector, city, analysisScore, gaps } = body;

    if (!websiteUrl || !companyName) {
      console.error('[generate-intelligence] missing required fields — websiteUrl:', websiteUrl, 'companyName:', companyName);
      return NextResponse.json(
        { success: false, intelligenceReport: null, error: 'Missing required fields: websiteUrl and companyName' },
        { status: 400 }
      );
    }
    // sector and city are optional — use fallbacks if not provided
    const resolvedSector = sector || 'business services';
    const resolvedCity = city || 'South Africa';

    if (!process.env.SERPER_API_KEY) {
      console.error('[generate-intelligence] SERPER_API_KEY not set in environment');
      return NextResponse.json(
        { success: false, intelligenceReport: null, error: 'Serper API key not configured' },
        { status: 500 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('[generate-intelligence] ANTHROPIC_API_KEY not set in environment');
      return NextResponse.json(
        { success: false, intelligenceReport: null, error: 'Anthropic API key not configured' },
        { status: 500 }
      );
    }

    // 3 parallel Serper searches
    const [competitorResults, prospectResults, marketResults] = await Promise.all([
      searchSerper(`${resolvedSector} ${resolvedCity}`),
      searchSerper(`${companyName} ${resolvedCity}`),
      searchSerper(`${resolvedSector} services ${resolvedCity} South Africa`),
    ]);

    const serperData = {
      competitors: competitorResults,
      prospect: prospectResults,
      market: marketResults,
    };

    // Direct fetch to Anthropic Messages API
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system:
          "You are a strategic marketing analyst specialising in the South African SME market. You produce sharp, specific, revenue-focused intelligence reports for business owners who have no marketing manager and limited time. Every claim must reference specific data from the search results provided. Never write generic advice. Never write sentences that could apply to any business. Write as if you are a senior consultant who has just spent an hour researching this specific company and their market.\n\nOutput must use exactly these five HTML section headers and nothing else:\n<h3>Who's Winning Your Market</h3>\n<h3>What Your Website Is Costing You</h3>\n<h3>Your Biggest Structural Gap</h3>\n<h3>Your 30-Day Action</h3>\n<h3>What This Looks Like in 90 Days</h3>\n\nEach section: 2-4 sentences. Total length: 400-500 words. No preamble. No conclusion. Start directly with the first h3 tag. Use plain HTML only — no markdown, no asterisks, no bullet points. Wrap each section body in <p> tags.",
        messages: [
          {
            role: 'user',
            content: `You are analysing: ${companyName}
Website: ${websiteUrl}
Sector: ${resolvedSector}
City: ${resolvedCity}
Lead Generation Score: ${analysisScore}/100

Key gaps identified in their website analysis:
${gaps.join(', ')}

Serper search data from three queries:
Query 1 — "${resolvedSector} ${resolvedCity}": ${JSON.stringify(serperData.competitors)}
Query 2 — "${companyName} ${resolvedCity}": ${JSON.stringify(serperData.prospect)}
Query 3 — "${resolvedSector} services ${resolvedCity} South Africa": ${JSON.stringify(serperData.market)}

Using this data, write the five-section intelligence report.

WHO'S WINNING YOUR MARKET: Name the specific sites, directories, or competitors dominating search results from the Serper data. Be precise — name URLs, quote listing counts, describe their positioning strategy.

WHAT YOUR WEBSITE IS COSTING YOU: Translate the ${analysisScore}/100 score into a business consequence specific to their sector. Estimate monthly revenue impact in Rands based on typical ${resolvedSector} deal values. Make it feel real and specific.

YOUR BIGGEST STRUCTURAL GAP: The single most damaging gap from the analysis data — not a list, just the one thing that if fixed would move the needle most. Connect it to what competitors are doing that this business isn't.

YOUR 30-DAY ACTION: One specific, executable action. Name the actual page slug, actual keyword phrase to target, actual resource titles to create. Something they could brief a web developer on today with no ambiguity.

WHAT THIS LOOKS LIKE IN 90 DAYS: If they execute the 30-day action and fix the top structural gap, what specifically changes? Frame it in leads per month, search visibility, or pipeline value — not vague "growth" language.`,
          },
        ],
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error('Anthropic API error:', anthropicResponse.status, errorText);
      return NextResponse.json(
        {
          success: false,
          intelligenceReport: null,
          error: `Anthropic API error: ${anthropicResponse.status}`,
        },
        { status: 500 }
      );
    }

    const anthropicData = await anthropicResponse.json();
    const intelligenceReport: string = anthropicData.content?.[0]?.text ?? '';

    return NextResponse.json({ success: true, intelligenceReport });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;
    console.error('[generate-intelligence] unhandled error:', message);
    if (stack) console.error('[generate-intelligence] stack:', stack);
    return NextResponse.json(
      {
        success: false,
        intelligenceReport: null,
        error: message,
      },
      { status: 500 }
    );
  }
}
