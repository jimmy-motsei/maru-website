/**
 * Maru Online — Assessment Scoring Logic
 * 
 * Converts five assessment answers into a readiness level (1, 2, or 3)
 * across two dimensions:
 *   - Readiness: how systematised is the business already
 *   - Activation: how present and painful is the operational friction
 * 
 * Level 1 — Early Stage: informal operations, pain present, no prior attempts
 * Level 2 — Building: some structure, integration gaps, possible prior attempt
 * Level 3 — Primed: operational maturity, scaling pressure, connected systems
 */

export type ReadinessLevel = 1 | 2 | 3;

export interface ScoreResult {
  level: ReadinessLevel;
  label: string;
  tagline: string;
  summary: string;
  nextStep: string;
  readinessScore: number;
  activationScore: number;
  segmentB: boolean; // flag for frustrated adopter — intake probe needed
}

// Answer option keys mapped to their index position (0-based)
// Each question has options A through D/E

/**
 * Q1: How would you describe the way your business manages day-to-day operations?
 * A: We have clear processes that most of the team follows consistently
 * B: We have processes but they depend heavily on specific people knowing what to do
 * C: Most things work but we often find ourselves solving the same problems repeatedly
 * D: Honestly, it's organised chaos — we get things done but not always efficiently
 */
const q1Readiness: Record<string, number> = {
  "clear-processes": 3,       // A — highest maturity
  "people-dependent": 2,      // B — moderate maturity
  "same-problems": 1,         // C — low maturity
  "organised-chaos": 0,       // D — very low maturity
};

/**
 * Q2: Where does your team's time go that you wish it didn't?
 * A: Chasing information that should already be in one place
 * B: Doing the same tasks repeatedly that feel like they should just happen automatically
 * C: Fixing mistakes that came from information being entered or moved manually
 * D: Waiting on other people or systems before work can continue
 * E: Honestly, I'm not sure — we're too busy to track it properly
 */
const q2Activation: Record<string, number> = {
  "chasing-information": 2,   // A — clear data friction signal
  "repetitive-tasks": 2,      // B — clear automation signal
  "manual-errors": 2,         // C — clear data processing signal
  "waiting-on-others": 1,     // D — workflow friction signal
  "too-busy-to-track": 1,     // E — activation present but unfocused
};

/**
 * Q3: When a new client or order comes in, what happens next?
 * A: Someone handles it personally and figures it out as they go
 * B: We have a rough process but it varies depending on who's available
 * C: We have a defined process but it involves a lot of manual steps across different tools
 * D: We have a streamlined process — information flows automatically from one step to the next
 */
const q3Readiness: Record<string, number> = {
  "handles-personally": 0,    // A — very low systematisation
  "rough-process": 1,         // B — low systematisation
  "defined-manual": 2,        // C — moderate — defined but manual
  "streamlined-automatic": 3, // D — high — already some automation
};

/**
 * Q4: If you could fix one thing in the next six months, what would it be?
 * A: Reduce the amount of time my team spends on repetitive manual tasks
 * B: Make the business less dependent on specific people to keep things running
 * C: Get better visibility into what's actually happening across the business
 * D: Convert more of the enquiries or leads we're already receiving
 * E: Scale the business without having to hire proportionally more people
 * 
 * Note: Q4 informs Brevo personalisation tag — not primary scoring
 */
const q4Tags: Record<string, string> = {
  "reduce-manual-tasks": "pain:efficiency",
  "less-people-dependent": "pain:dependency",
  "better-visibility": "pain:visibility",
  "convert-more-leads": "pain:conversion",
  "scale-without-hiring": "pain:scaling",
};

/**
 * Q5: Have you tried to improve how your operations run before?
 * A: No — this hasn't been a priority until now
 * B: Yes — we tried to figure it out internally but haven't got far
 * C: Yes — we brought someone in to help but it didn't fully deliver what we needed
 * D: Yes — we have something in place but it needs to work better
 */
const q5Readiness: Record<string, number> = {
  "no-not-priority": 0,       // A — early stage, no prior attempt
  "tried-internally": 1,      // B — attempted, limited progress
  "brought-someone-in": 1,    // C — prior external attempt → Segment B flag
  "something-in-place": 2,    // D — has existing system → higher readiness
};

const q5SegmentBFlag: Record<string, boolean> = {
  "no-not-priority": false,
  "tried-internally": false,
  "brought-someone-in": true,  // Prior external help → intake probe needed
  "something-in-place": false,
};

export function calculateScore(answers: {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}): ScoreResult {
  // Readiness dimension: Q1 (40%), Q3 (40%), Q5 (20%)
  const readinessRaw =
    (q1Readiness[answers.q1] ?? 1) * 0.4 +
    (q3Readiness[answers.q3] ?? 1) * 0.4 +
    (q5Readiness[answers.q5] ?? 0) * 0.2;

  // Activation dimension: Q2 (100%) — is the pain present and specific?
  const activationRaw = q2Activation[answers.q2] ?? 1;

  // Normalise to 0-10
  const readinessScore = Math.round((readinessRaw / 3) * 10);
  const activationScore = Math.round((activationRaw / 2) * 10);

  // Combined score weighted: readiness 60%, activation 40%
  const combined = readinessScore * 0.6 + activationScore * 0.4;

  // Map to level
  let level: ReadinessLevel;
  if (combined <= 3.5) {
    level = 1;
  } else if (combined <= 6.5) {
    level = 2;
  } else {
    level = 3;
  }

  // Segment B flag
  const segmentB = q5SegmentBFlag[answers.q5] ?? false;

  // Build result
  const results: Record<ReadinessLevel, Omit<ScoreResult, "level" | "readinessScore" | "activationScore" | "segmentB">> = {
    1: {
      label: "Early Stage",
      tagline: "Your biggest opportunity is getting the right foundations in place.",
      summary:
        "Your answers suggest that most processes in the business are handled informally — they work because the right people know what to do, not because the systems make it automatic. That's a common starting point, and it means the opportunity is significant. The right first step is understanding exactly where the time and cost is concentrated before building anything.",
      nextStep:
        "A 30-minute Operations Discovery call is the right starting point. We'll map where the highest-friction processes sit and what a realistic first step looks like — without committing to anything beyond the conversation.",
    },
    2: {
      label: "Building",
      tagline: "You have structure. The opportunity is in connecting the gaps.",
      summary:
        "Your answers suggest the business has real processes in place — but they still depend on manual steps or disconnected systems at key points. Information moves between tools by hand. Specific people are the connective tissue between steps that should be automatic. That's exactly where targeted integration delivers the fastest return.",
      nextStep:
        "A 30-minute Operations Discovery call will identify the two or three specific integration points that would eliminate the most manual work. We'll tell you honestly what's worth building first — and what isn't.",
    },
    3: {
      label: "Primed",
      tagline: "Your systems are ready. The question is what to optimise next.",
      summary:
        "Your answers suggest the business already has operational maturity — defined processes, connected systems, and a team that mostly knows what to do. The opportunity at this stage is usually in the gaps between systems: reporting that still requires manual compilation, approval workflows that depend on specific people, or data that lives in one system and needs to reach another. Targeted optimisation at these points compounds quickly.",
      nextStep:
        "A 30-minute Operations Discovery call will map the highest-value optimisation opportunities in your current setup. We'll prioritise by impact and tell you what a realistic implementation looks like — scoped from what we find, not from a rate card.",
    },
  };

  return {
    level,
    ...results[level],
    readinessScore,
    activationScore,
    segmentB,
  };
}

export function getPainTag(q4Answer: string): string {
  return q4Tags[q4Answer] ?? "pain:general";
}
