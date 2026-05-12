/**
 * Maru Online — Operations Assessment Scoring Logic (v2)
 *
 * 10 questions across 5 operational areas (2 per area).
 * Each area scores 0–4. Score bands:
 *   0–1 = Critical gap
 *   2   = Significant gap
 *   3   = Partial — some structure, clear gaps
 *   4   = Strong foundations
 *
 * Overall level (1–3) derived from average area score:
 *   ≤ 1.5 = Level 1 — Early Stage
 *   ≤ 2.8 = Level 2 — Building
 *   > 2.8 = Level 3 — Primed
 */

export type ReadinessLevel = 1 | 2 | 3;
export type AreaStatus = "critical" | "significant" | "partial" | "strong";

export interface AreaResult {
  area: string;
  areaKey: string;
  score: number;          // 0–4
  status: AreaStatus;
  answers: string[];      // raw answer values for this area
}

export interface ScoreResult {
  level: ReadinessLevel;
  label: string;
  tagline: string;
  summary: string;
  areas: AreaResult[];
  overallScore: number;   // 0–10 normalised
  segmentB: boolean;
  painTag: string;
}

// ── Area definitions ───────────────────────────────────────────────────────

export const AREAS = [
  { key: "process",    label: "Process & Workflow",       questions: ["q1", "q2"] },
  { key: "data",       label: "Data & Information Flow",  questions: ["q3", "q4"] },
  { key: "client",     label: "Client & Lead Management", questions: ["q5", "q6"] },
  { key: "visibility", label: "Visibility & Reporting",   questions: ["q7", "q8"] },
  { key: "people",     label: "People & Dependency",      questions: ["q9", "q10"] },
] as const;

// ── Scoring maps ───────────────────────────────────────────────────────────

// Q1: Process & Workflow — How does work move through the business?
// A: Documented steps, team follows them consistently
// B: Processes exist but vary by person/situation
// C: Things get done but same problems keep repeating
// D: It's ad hoc — whoever is available figures it out
const q1: Record<string, number> = {
  "documented-consistent":  4,
  "exist-vary":             2,
  "recurring-problems":     1,
  "ad-hoc":                 0,
};

// Q2: Process & Workflow — What happens when a key team member is unavailable?
// A: Someone else picks it up without skipping a beat — it's documented
// B: It usually gets covered but there's scrambling
// C: Things slow down significantly until they're back
// D: It stalls — only they know how to handle it
const q2: Record<string, number> = {
  "documented-covered":  4,
  "scramble-covered":    2,
  "significant-slowdown": 1,
  "stalls-completely":   0,
};

// Q3: Data & Information Flow — Where does your business data live?
// A: Mostly in one system — tools are connected and talk to each other
// B: In a few tools that we move data between manually when needed
// C: Spread across email, spreadsheets, and WhatsApp — no single source
// D: Mostly in people's heads and informal notes
const q3: Record<string, number> = {
  "connected-central":  4,
  "few-tools-manual":   2,
  "scattered-no-source": 1,
  "heads-and-notes":    0,
};

// Q4: Data & Information Flow — How often does information get lost, re-entered, or entered incorrectly?
// A: Rarely — our systems catch it and we have checks in place
// B: Occasionally — we usually catch it before it causes a problem
// C: Regularly — it's a source of frustration and wasted time
// D: All the time — it's one of our biggest operational issues
const q4: Record<string, number> = {
  "rarely-caught":       4,
  "occasionally-caught": 2,
  "regularly-frustrating": 1,
  "constant-major-issue": 0,
};

// Q5: Client & Lead Management — When a new enquiry comes in, what happens?
// A: It enters a defined process automatically — assigned, logged, and followed up
// B: We have a process but it depends on who's available to action it
// C: Someone handles it personally — varies based on capacity
// D: It's reactive — we respond when we see it or someone flags it
const q5: Record<string, number> = {
  "defined-automatic":   4,
  "process-person-dep":  2,
  "personal-varies":     1,
  "reactive":            0,
};

// Q6: Client & Lead Management — How confident are you that your business follows up with every lead consistently?
// A: Very — it's systematic and we track it
// B: Reasonably — most leads get followed up but some fall through
// C: Not very — follow-up depends on memory or whoever has capacity
// D: Not at all — we know we're losing leads but don't have a fix
const q6: Record<string, number> = {
  "systematic-tracked":   4,
  "reasonably-some-gaps": 2,
  "memory-based":         1,
  "losing-leads-no-fix":  0,
};

// Q7: Visibility & Reporting — How do you get a current view of how your business is performing?
// A: From a dashboard or tool that updates automatically
// B: By pulling reports from our systems — takes some manual effort
// C: By asking the team or checking in across different tools
// D: I mostly go on instinct and experience
const q7: Record<string, number> = {
  "automatic-dashboard":  4,
  "manual-reports":       2,
  "asking-checking":      1,
  "instinct-experience":  0,
};

// Q8: Visibility & Reporting — When something goes wrong in the business, how do you typically find out?
// A: Our systems flag it before it becomes a real problem
// B: It surfaces during a team check-in or review
// C: A client or team member tells us — usually after the fact
// D: We often only find out when the damage is already done
const q8: Record<string, number> = {
  "systems-flag-early":  4,
  "checkin-review":      2,
  "told-after-fact":     1,
  "damage-done":         0,
};

// Q9: People & Dependency — How would you describe your business's reliance on specific individuals?
// A: Low — most processes can be handled by any trained team member
// B: Moderate — some roles are critical but most things can be covered
// C: High — a few people hold most of the operational knowledge
// D: Very high — if one or two people left, the business would struggle significantly
const q9: Record<string, number> = {
  "low-any-trained":     4,
  "moderate-coverable":  2,
  "high-few-hold-knowledge": 1,
  "very-high-critical":  0,
};

// Q10: People & Dependency — Have you tried to systematise or improve operations before?
// A: No — this hasn't been a priority until now
// B: Yes — we've worked on it internally but haven't got far
// C: Yes — we brought someone in to help but it didn't fully deliver
// D: Yes — we have systems in place but they need to work better
const q10: Record<string, number> = {
  "no-not-priority":     1,
  "internal-not-far":    2,
  "external-fell-short": 1,   // Segment B — flags separately
  "partial-needs-work":  3,
};

const q10SegmentB: Record<string, boolean> = {
  "no-not-priority":     false,
  "internal-not-far":    false,
  "external-fell-short": true,
  "partial-needs-work":  false,
};

// ── Pain tag (from Q6 — highest intent signal) ─────────────────────────────

const q6PainTags: Record<string, string> = {
  "systematic-tracked":   "pain:conversion",
  "reasonably-some-gaps": "pain:conversion",
  "memory-based":         "pain:conversion",
  "losing-leads-no-fix":  "pain:conversion",
};

// Q4 informs secondary pain tag
const q4PainTags: Record<string, string> = {
  "rarely-caught":         "pain:efficiency",
  "occasionally-caught":   "pain:efficiency",
  "regularly-frustrating": "pain:efficiency",
  "constant-major-issue":  "pain:efficiency",
};

// ── Status thresholds ──────────────────────────────────────────────────────

function areaStatus(score: number): AreaStatus {
  if (score <= 1) return "critical";
  if (score <= 2) return "significant";
  if (score <= 3) return "partial";
  return "strong";
}

// ── Main scoring function ──────────────────────────────────────────────────

export function calculateScore(answers: {
  q1: string;  q2: string;  q3: string;  q4: string;  q5: string;
  q6: string;  q7: string;  q8: string;  q9: string;  q10: string;
}): ScoreResult {

  const processScore    = Math.round(((q1[answers.q1] ?? 1) + (q2[answers.q2] ?? 1)) / 2);
  const dataScore       = Math.round(((q3[answers.q3] ?? 1) + (q4[answers.q4] ?? 1)) / 2);
  const clientScore     = Math.round(((q5[answers.q5] ?? 1) + (q6[answers.q6] ?? 1)) / 2);
  const visibilityScore = Math.round(((q7[answers.q7] ?? 1) + (q8[answers.q8] ?? 1)) / 2);
  const peopleScore     = Math.round(((q9[answers.q9] ?? 1) + (q10[answers.q10] ?? 1)) / 2);

  const areas: AreaResult[] = [
    { area: "Process & Workflow",       areaKey: "process",    score: processScore,    status: areaStatus(processScore),    answers: [answers.q1, answers.q2] },
    { area: "Data & Information Flow",  areaKey: "data",       score: dataScore,       status: areaStatus(dataScore),       answers: [answers.q3, answers.q4] },
    { area: "Client & Lead Management", areaKey: "client",     score: clientScore,     status: areaStatus(clientScore),     answers: [answers.q5, answers.q6] },
    { area: "Visibility & Reporting",   areaKey: "visibility", score: visibilityScore, status: areaStatus(visibilityScore), answers: [answers.q7, answers.q8] },
    { area: "People & Dependency",      areaKey: "people",     score: peopleScore,     status: areaStatus(peopleScore),     answers: [answers.q9, answers.q10] },
  ];

  const avgScore = (processScore + dataScore + clientScore + visibilityScore + peopleScore) / 5;
  const overallScore = Math.round((avgScore / 4) * 10);

  let level: ReadinessLevel;
  if (avgScore <= 1.5) level = 1;
  else if (avgScore <= 2.8) level = 2;
  else level = 3;

  const segmentB = q10SegmentB[answers.q10] ?? false;

  // Pain tag: lead management is highest intent, data is secondary
  const painTag = q6PainTags[answers.q6] ?? q4PainTags[answers.q4] ?? "pain:efficiency";

  const levelResults: Record<ReadinessLevel, { label: string; tagline: string; summary: string }> = {
    1: {
      label: "Early Stage",
      tagline: "Your biggest opportunity is getting the right foundations in place.",
      summary: "Your answers point to a business running largely on effort and institutional knowledge. Most processes are informal — they work because the right people know what to do, not because the systems make it automatic. This is where most SA businesses start. The opportunity is significant and the fixes are identifiable.",
    },
    2: {
      label: "Building",
      tagline: "You have structure. The opportunity is in closing the gaps.",
      summary: "Your business has real processes in place — but they still depend on manual steps and disconnected systems at key points. Information moves by hand between tools. Specific people act as the connective tissue between steps that should be automatic. Targeted integration at those handoff points is where the return is fastest.",
    },
    3: {
      label: "Primed",
      tagline: "Your systems are ready. The question is what to optimise next.",
      summary: "Your business has operational maturity — defined processes, connected systems, a team that mostly knows what to do. The opportunity now is in the precision gaps: reporting that still requires manual compilation, approval flows that depend on specific people, or data that lives in one system but needs to reach another. Targeted optimisation here compounds quickly.",
    },
  };

  return {
    level,
    ...levelResults[level],
    areas,
    overallScore,
    segmentB,
    painTag,
  };
}

// Legacy shim — used by existing API route
export function getPainTag(q10Answer: string): string {
  return q10SegmentB[q10Answer] ? "pain:conversion" : "pain:efficiency";
}
