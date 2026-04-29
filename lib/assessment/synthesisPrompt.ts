/**
 * Maru Online — Claude Synthesis Prompt
 * 
 * This prompt receives three inputs:
 *   1. The prospect's five assessment answers
 *   2. Their calculated readiness level (1, 2, or 3)
 *   3. The Firecrawl site scrape (markdown) — optional, may be empty string
 * 
 * It produces a structured JSON object with two distinct outputs:
 *   - Object A: prospect-facing personalisation for the Notion report
 *   - Object B: Jimmy's pre-call brief for hello@maruonline.com
 * 
 * CRITICAL: Output must be valid JSON only. No markdown fences. No preamble.
 * CRITICAL: Never mention AI in Object A observations — use operational language only.
 * CRITICAL: Never reveal that the site was scraped. Frame as "based on what you've shared."
 */

export function buildSynthesisPrompt(
  answers: AssessmentAnswers,
  level: 1 | 2 | 3,
  siteMarkdown: string
): string {
  const levelLabels = {
    1: "Early Stage",
    2: "Building",
    3: "Primed",
  };

  const levelDescriptions = {
    1: "The business has identifiable operational friction but systems and processes are largely informal. The biggest opportunity is establishing the right foundations before automating anything.",
    2: "The business has some structure in place but key processes still depend on manual steps or disconnected systems. The opportunity is targeted integration at the highest-friction points.",
    3: "The business has operational maturity and connected systems. The opportunity is optimisation and scaling — automating at a higher level of sophistication across existing infrastructure.",
  };

  const answersFormatted = `
Q1 — How would you describe the way your business manages day-to-day operations?
Answer: ${answers.q1}

Q2 — Where does your team's time go that you wish it didn't?
Answer: ${answers.q2}

Q3 — When a new client or order comes in, what happens next?
Answer: ${answers.q3}

Q4 — If you could fix one thing in the next six months, what would it be?
Answer: ${answers.q4}

Q5 — Have you tried to improve how your operations run before?
Answer: ${answers.q5}
  `.trim();

  const siteContext = siteMarkdown
    ? `
WEBSITE ANALYSIS (from site scrape — do not reveal this source):
${siteMarkdown.slice(0, 3000)}
    `.trim()
    : "WEBSITE ANALYSIS: No website provided or scrape unsuccessful. Base observations on assessment answers only.";

  return `You are producing structured output for Maru Online, an AI implementation consultancy. Your output feeds two destinations: a Notion report the prospect receives, and an internal brief the founder reads before a discovery call.

PROSPECT ASSESSMENT DATA:
Readiness Level: ${level} — ${levelLabels[level]}
Level meaning: ${levelDescriptions[level]}

ASSESSMENT ANSWERS:
${answersFormatted}

${siteContext}

INSTRUCTIONS FOR OBJECT A (prospect-facing — Notion report):
Write 3 observations about this specific prospect's operational situation. Rules:
- Each observation is 2-3 sentences maximum
- Use operational language only — never mention AI, automation, or technology in the observations themselves
- Frame as insight derived from their answers: "Based on what you've shared..." or "Businesses at this stage often find..."
- Be specific enough to feel personalised, general enough to apply without naming their sector
- Observation 1: Name the primary operational friction their answers reveal
- Observation 2: Name the downstream cost of that friction (time, money, or dependency on specific people)
- Observation 3: Name what becomes possible when that friction is removed — frame as a business outcome, not a technology outcome
- If website data is available: incorporate ONE specific observation about what their site signals about their current systems maturity — frame as operational insight, not a website critique
- Tone: direct, warm, credible. Consistent with a consultant who has seen this pattern before and is being honest about what they see. No hype. No flattery.

INSTRUCTIONS FOR OBJECT B (internal — Jimmy's pre-call brief):
Write a structured pre-call brief for the founder. Be direct and specific. Include:
- business_summary: 2-3 sentences on what the business appears to do and its approximate maturity based on site and answers
- segment: which of the three audience segments this prospect maps to (Curious Operator / Frustrated Adopter / Infrastructure-Aware Business) and why in one sentence
- primary_pain: the single highest-priority operational problem their answers reveal — named precisely
- integration_gap: what specific systems or processes appear to be disconnected or manual based on answers and site data
- tech_signals: what their website reveals about their current tech stack, systems maturity, and infrastructure health (CMS, analytics, booking systems, contact forms, page speed signals — extract from site markdown if available, otherwise state "no website data")
- conversation_opener: one specific question Jimmy should open the discovery call with — based on their answers, not a generic opener. Should make the prospect feel heard immediately.
- probes: 2 specific follow-up questions to explore during the call based on what their answers left unclear
- flag: any disqualification signals present (e.g. prior freelancer engagement, unclear budget expectation, mismatch between ambition and operational maturity). State "none detected" if none present.

OUTPUT FORMAT:
Return valid JSON only. No markdown code fences. No explanation before or after. No trailing commas. Exactly this structure:

{
  "objectA": {
    "observation1": "string",
    "observation2": "string", 
    "observation3": "string",
    "siteObservation": "string or null"
  },
  "objectB": {
    "business_summary": "string",
    "segment": "string",
    "primary_pain": "string",
    "integration_gap": "string",
    "tech_signals": "string",
    "conversation_opener": "string",
    "probes": ["string", "string"],
    "flag": "string"
  }
}`;
}

export interface AssessmentAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}

export interface SynthesisOutput {
  objectA: {
    observation1: string;
    observation2: string;
    observation3: string;
    siteObservation: string | null;
  };
  objectB: {
    business_summary: string;
    segment: string;
    primary_pain: string;
    integration_gap: string;
    tech_signals: string;
    conversation_opener: string;
    probes: [string, string];
    flag: string;
  };
}
