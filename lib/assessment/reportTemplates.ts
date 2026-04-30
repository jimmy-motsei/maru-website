/**
 * Maru Online — Operations Assessment Report Templates
 *
 * 15 templates: 3 readiness levels × 5 pain categories (q4 answer)
 * Plus a Segment B overlay for prospects who had a prior external implementation attempt.
 *
 * Each template contains:
 *   - intro: opening paragraph, acknowledges their specific situation
 *   - insight1: the primary operational friction pattern their answers reveal
 *   - insight2: downstream costs and real-world implications
 *   - insight3: what changes when that friction is removed (business outcome framing)
 *
 * Segment B overlay adds a fourth paragraph when q5 === "brought-someone-in".
 *
 * Keys: `${level}_${painTag}` e.g. "1_pain:efficiency"
 */

export interface ReportTemplate {
  intro: string;
  insight1: string;
  insight2: string;
  insight3: string;
}

export interface FullTemplate extends ReportTemplate {
  segmentBOverlay?: string;
}

// ── Template Map ───────────────────────────────────────────────────────────

const templates: Record<string, ReportTemplate> = {

  // ── LEVEL 1 (Early Stage) ────────────────────────────────────────────────

  "1_pain:efficiency": {
    intro:
      "Your assessment points to a business that is getting things done through effort and institutional knowledge rather than through systems. The processes that exist are largely in people's heads — and the team compensates for that by working harder than they should have to.",
    insight1:
      "The most common pattern at this stage is what we call the 'effort tax' — where a business grows its revenue but also grows its workload at almost exactly the same rate. Every new client or order means more manual steps, more coordination overhead, and more time spent on tasks that should have become automatic long ago. The friction is not caused by a lack of skill or commitment. It is caused by an absence of structure that allows the skill and commitment to compound.",
    insight2:
      "The downstream cost of running on effort rather than systems is usually invisible until it isn't. It shows up as key team members burning out. It shows up as simple tasks taking longer than they should because the person who usually handles them is unavailable. It shows up as revenue growth plateauing — not because demand has stalled, but because the business physically cannot absorb more without hiring more. And hiring more without fixing the underlying structure just replicates the problem at a larger scale.",
    insight3:
      "When businesses at this stage get the right foundations in place — even basic ones — the change in operating tempo is disproportionate. The goal is not to automate everything at once. It is to identify the two or three processes that consume the most manual time and replace the effort with a reliable structure. Once those are in place, the capacity the team gets back can be redirected to the work that actually moves the business forward.",
  },

  "1_pain:dependency": {
    intro:
      "Your assessment describes a business where the institutional knowledge lives in specific people rather than in systems. Things run well when the right people are present and available — but the business has a fragility built into it that most owners do not fully register until something breaks.",
    insight1:
      "Person-dependent operations are one of the most common and underestimated risks in early-stage businesses. When a key team member is on leave, overwhelmed, or exits, the processes they carry in their heads do not transfer automatically. What looks like a capable, self-sufficient team from the outside is often a set of informal arrangements that require the same specific individuals every time to function correctly. That is not a people problem — it is a systems problem.",
    insight2:
      "The cost of this dependency compounds in two ways. First, it limits the owner's ability to step back, because the business needs them — or a small group of individuals — to hold critical processes together. Second, it creates a ceiling on growth: the business can only scale as fast as those individuals can absorb additional load. When businesses rely on people rather than processes, growth does not create leverage. It creates pressure.",
    insight3:
      "Reducing dependency on specific individuals does not mean removing them or diminishing their value — it means capturing what they know and making it replicable. When the critical processes are documented, automated where possible, and no longer tied to any single person, the business becomes genuinely resilient. The team members who were previously the bottleneck become free to apply their expertise at a higher level rather than spending it on tasks that a well-designed system should handle.",
  },

  "1_pain:visibility": {
    intro:
      "Your assessment suggests that the business is operating with limited visibility into its own performance. Work gets done, clients get served, and revenue comes in — but the full picture of what is happening, where things stand, and where time is going is rarely clear without someone manually pulling it together.",
    insight1:
      "Low operational visibility is almost always a symptom of fragmented information rather than a lack of data. At this stage, the data that would tell you what is working and what is not exists — it is just scattered across email threads, spreadsheets, WhatsApp conversations, and individual team members' judgment. No single view of the business exists because no system has been asked to create one. The information is there. It is just not organised in a way that makes it usable.",
    insight2:
      "The practical cost of low visibility is that decisions get made on instinct rather than information. Owners know roughly how the business is doing, but not precisely enough to act on what they know. Problems tend to surface later than they should — after a client has already gone quiet, after a team member has already been overwhelmed for weeks, after a revenue shortfall has already arrived. The gap between 'things are probably fine' and 'things are actually fine' is where avoidable problems accumulate.",
    insight3:
      "When the business gets a working operational view — even a simple one — the shift in decision quality is immediate. The goal at this stage is not to build sophisticated reporting infrastructure. It is to get a clear, consistent view of the four or five things that most directly drive the business: pipeline status, task completion, client health, and team load. Once those are visible in one place, the ability to anticipate problems rather than react to them changes the way the business operates.",
  },

  "1_pain:conversion": {
    intro:
      "Your assessment points to a business that is generating interest but losing value somewhere between first contact and closed client. Given that your operations are mostly informal at this stage, the most likely cause is inconsistency in how leads are handled — not in the quality of what you offer.",
    insight1:
      "At this stage of business, lead conversion rarely fails because the product or service is wrong. It fails because the process from first enquiry to signed client is not consistent enough to create predictable outcomes. When intake is handled personally and varies depending on who is available, response times are inconsistent, follow-up depends on memory rather than a system, and opportunities quietly fall away without anyone noticing. This is not a sales problem. It is an operational one.",
    insight2:
      "The downstream cost of inconsistent intake is that it makes marketing investment unpredictable. You can increase the number of leads coming in, but if the process for handling them is not reliable, increasing volume just means more inconsistency at scale. Businesses at this stage often underestimate how much revenue they are leaving on the table not because they cannot close, but because leads do not receive consistent enough engagement to reach the closing conversation at all.",
    insight3:
      "When the intake process is systematised — even at a basic level — conversion rates tend to rise without any increase in marketing spend. The fix is usually simpler than it appears: a consistent initial response, a defined sequence of follow-up steps, and a reliable way of tracking where each lead sits. Once those are in place, the business knows what it has in its pipeline at any given moment and can act on it deliberately rather than reactively.",
  },

  "1_pain:scaling": {
    intro:
      "Your assessment describes a business that has a clear sense of where it wants to go but an operational structure that will constrain how quickly it can get there. The ambition to scale without proportional hiring is the right instinct — but it requires a foundation that does not yet exist in most businesses at this stage.",
    insight1:
      "The fundamental challenge with scaling an informal operation is that growth amplifies the existing structure — including its weaknesses. A business where things work because the right people know what to do can grow modestly, but at a certain point the coordination overhead becomes unsustainable. Every additional client, team member, or product line adds complexity to a system that was never designed to absorb it. You hire to cope, not to grow, and the ratio of overhead to output stays roughly constant.",
    insight2:
      "This pattern has a predictable endpoint: a business that is generating more revenue than it was twelve months ago but not meaningfully more profitable, because the cost of managing the additional complexity consumes the margin. Owners at this stage often describe working harder than ever while feeling less in control than they used to. That is not a function of the business getting bigger. It is a function of the business getting bigger without the systems to support the size.",
    insight3:
      "Scaling without proportional hiring is not a technology outcome — it is a systems outcome. The path to it is identifying which processes currently require human effort at every instance and replacing the per-instance effort with a one-time structure. When the recurring work is handled by reliable systems, the team's capacity is redirected to the work that actually requires human judgment. That is what creates leverage, and leverage is what makes growth feel different from simply doing more of the same.",
  },

  // ── LEVEL 2 (Building) ────────────────────────────────────────────────────

  "2_pain:efficiency": {
    intro:
      "Your assessment describes a business with real structure in place — processes exist, roles are reasonably clear, and the team generally knows how things work. The issue is that the processes still require significant manual effort to execute, particularly at the points where information or work moves between tools or people.",
    insight1:
      "This is one of the most common operational profiles in growing businesses: defined processes that still depend on manual steps for the things that should flow automatically. The team spends time copying data from one tool to another, re-entering information that already exists somewhere else, or doing a version of the same task repeatedly because no one has built a single instance that handles it reliably. The process is there. The systematisation is not.",
    insight2:
      "The cost at this stage is primarily measured in time and error rate. Estimates vary widely by business, but the pattern is consistent: a significant portion of team time that could be productive is spent on coordination, re-entry, and manual handoffs. More importantly, each manual step is a point of failure — an opportunity for information to be lost, delayed, or entered incorrectly. The more volume the business handles, the more those points of failure compound.",
    insight3:
      "Businesses at this stage typically see the fastest return on targeted integration at the specific handoff points — not broad automation, but precise connections between the systems that already exist. The goal is to identify the three or four places where information currently travels by hand and replace those journeys with reliable automatic flows. When those connections are in place, the team's time shifts from administration to output, and the error rate at those points drops to near zero.",
  },

  "2_pain:dependency": {
    intro:
      "Your assessment suggests a business that has built processes but whose processes still run through specific individuals at critical points. The structure exists — but it is not yet self-executing. When the right person is unavailable, the process either stalls or falls to whoever is available and knows enough to improvise.",
    insight1:
      "Process-with-person-dependency is a transitional state that many businesses sit in longer than they intend to. Processes were built to reduce chaos, and they have — the business runs more reliably than it did before. But the processes were built around the people who created them rather than being designed to run independently of any individual. The difference matters most under pressure: when the team is at capacity, when someone is sick or leaves, or when the business needs to bring someone new in quickly.",
    insight2:
      "The practical implication is that the business's operational ceiling is still effectively set by its most critical individuals rather than by its systems. Growth creates pressure on those individuals rather than on the structure — because the structure has not been designed to absorb growth independently. This is the stage at which the founder or senior team members often find themselves still involved in operational decisions they expected to have delegated by now.",
    insight3:
      "The path forward is not removing the dependency on experienced people — it is capturing what they know in a form that the business can execute without them needing to be present for every instance. When the process is documented, the decision rules are clear, and the routine steps are automated, a capable team member can execute reliably from day one rather than after six months of institutional osmosis. The experienced individuals get their capacity back, and the business gets resilience.",
  },

  "2_pain:visibility": {
    intro:
      "Your assessment points to a business that has operational data but does not yet have operational intelligence. Information exists across the tools the business uses — but getting a clear, current picture of what is happening still requires someone to manually pull it together, which means it rarely happens in real time.",
    insight1:
      "This is a common gap in businesses that have grown past informal operations but have not yet connected their systems in a way that surfaces useful information automatically. The CRM has customer data. The project management tool has task data. The accounting system has financial data. But these systems do not talk to each other, and the synthesis that would turn that data into actionable insight requires someone with context and time to do it manually — which means it happens occasionally, not continuously.",
    insight2:
      "When visibility requires effort, it tends to be deprioritised. The business makes decisions based on the owner or manager's mental model of how things are going rather than on current information. Problems surface later than they should — after a client relationship has deteriorated, after a deadline has been missed, after revenue has softened. This is not a symptom of bad management. It is a symptom of information that is available but not accessible.",
    insight3:
      "When the systems are connected in a way that surfaces information without requiring manual effort, the quality of decision-making changes. The goal is not a comprehensive data infrastructure — it is a single reliable view of the five or six metrics that most directly indicate the health of the business. When that view exists and stays current automatically, the owner and leadership team are working from fact rather than feel, and the gap between when something goes wrong and when it is addressed compresses significantly.",
  },

  "2_pain:conversion": {
    intro:
      "Your assessment describes a business with a defined intake process — but one that still depends on manual steps and individual availability at key points. The process works when conditions are right. The issue is that conditions are not always right, and the inconsistency costs you clients you should be closing.",
    insight1:
      "At this stage, the conversion challenge is usually not about the offer or the team's ability to sell — it is about consistency. The rough process exists and closes business when it runs well. But because it still depends on manual steps and the availability of specific people, it does not run at the same quality every time. Some prospects get a fast, thorough response. Others wait longer than they should or receive a version of the process that lacks the elements that make it effective. The variance is the problem.",
    insight2:
      "The cost of process variance in conversion is difficult to measure directly but significant in aggregate. Every lead that falls through a gap in the process — a follow-up that did not happen, a document that was not sent on time, a response that came two days late — represents revenue that should have been earned but was not. And because the gaps are invisible within a broadly functioning process, they often go unexamined. The business concludes that certain leads were not ready, rather than that the process did not serve them consistently enough.",
    insight3:
      "Systematising the intake and nurture process does not mean removing the human element from sales — it means ensuring the human element is consistently applied where it matters most, rather than consumed by coordination and manual tasks. When the routine steps are automated and the handoffs happen reliably, the team's attention can be directed to the high-value moments of client engagement rather than to the administrative work that surrounds them. The conversion rate rises not because anything about the offer changed, but because the process no longer works against it.",
  },

  "2_pain:scaling": {
    intro:
      "Your assessment describes a business that has built operational structure and is now running into the ceiling that structure creates. The processes that got you to this point were right for where you were — but they were not designed to absorb significantly more volume without proportionally more effort.",
    insight1:
      "This is a critical inflection point that many businesses reach without fully recognising it. The systems are not broken — they are working as designed. The problem is that they were designed for the scale the business was at when they were built, not the scale the business wants to reach. Effort scales linearly with volume because the process requires the same human input at every instance. To grow, the business either absorbs that additional input across the existing team or hires to handle it — neither of which creates the leverage scaling is supposed to deliver.",
    insight2:
      "The practical symptom is that the business can see the path to growth but finds it harder to execute than the logic suggests it should be. The pipeline might be strong. The offer might be well-positioned. But when a significant increase in volume arrives — or is anticipated — the operational infrastructure shows its limits quickly. Team capacity becomes the constraint before market demand does, which means the business is leaving opportunity on the table that its systems cannot currently absorb.",
    insight3:
      "Scaling with leverage requires identifying the specific points in the current process where human effort is being applied to things that do not require human judgment. At the Building stage, these points are identifiable and addressable. The goal is not a complete process redesign — it is targeted integration at the three or four highest-leverage points that, once connected or automated, change the ratio of output to effort significantly enough that the business can take on meaningfully more volume without adding proportionally more headcount.",
  },

  // ── LEVEL 3 (Primed) ──────────────────────────────────────────────────────

  "3_pain:efficiency": {
    intro:
      "Your assessment reflects a business with genuine operational maturity — processes are defined, the team executes reliably, and the systems you have invested in are doing meaningful work. At this stage, the efficiency conversation is no longer about establishing basics. It is about identifying the invisible overhead that has accumulated as the business has grown and that the current infrastructure has normalised.",
    insight1:
      "In operationally mature businesses, the most significant inefficiencies are rarely obvious. They are not broken processes — they are processes that work, but that work at a higher cost than they need to. Information that is already in one system gets re-entered into another because the integration was never built. Reports that could generate themselves still require someone to compile them on a schedule. Approvals that follow a clear rule still route through a person rather than a system because that is how they have always been handled. Each of these is small. In aggregate, they represent a meaningful slice of team capacity.",
    insight2:
      "The challenge at this stage is that the friction has become invisible through familiarity. The team does not experience it as a problem because they have adapted their workflows to accommodate it. But adaptation has a cost: it means the team's capacity is partially absorbed by work that the systems could handle if they were connected differently. And it means the business's operational ceiling is slightly lower than it appears — because some of what looks like productive capacity is actually overhead.",
    insight3:
      "Optimising efficiency in a primed business is a precision exercise. The goal is not to change how the business operates — it is to remove the manual steps that sit between the things the business does well. When those steps are identified and addressed, the team's effective output increases without any change in headcount, working hours, or effort. The leverage at this stage is not in doing more — it is in eliminating the invisible tax on what the business is already doing.",
  },

  "3_pain:dependency": {
    intro:
      "Your assessment describes a business that has achieved significant operational maturity but where certain decisions and approvals still route through specific individuals — typically senior people or the founder — rather than being handled by the systems themselves. The processes exist. The automation is in place. But the critical junctions still have a human in the loop who arguably does not need to be.",
    insight1:
      "At this stage, person-dependency is rarely about knowledge gaps in the team or poorly designed processes. It is about approval and decision flows that were set up when the business was smaller and have not been revisited as the business has grown. The founder still reviews certain client communications. Senior managers still approve decisions that fall within established parameters. These are rational patterns when the business is young — they reflect appropriate oversight. But at scale, they become operational constraints rather than risk controls.",
    insight2:
      "The cost is measured in speed and focus. Decisions that should take minutes take hours because they are waiting in someone's inbox. Senior capacity that should be allocated to strategic work is partially consumed by operational review. And the team below the approval layer becomes slower and less confident, because they have learned that certain categories of decision require escalation regardless of whether they are within established guidelines. The bottleneck is not a people problem. It is a system that has not been updated to reflect the business's current maturity.",
    insight3:
      "Reducing dependency at this stage means redesigning the approval and decision flows to match the business's actual risk tolerance, not the risk tolerance of an earlier version of the business. When the rules are clear and the systems enforce them consistently, the senior team's involvement shifts from review to exception-handling. The business moves faster at every level, the team operates with more autonomy, and the founder or CEO's attention is freed for the decisions that actually require it.",
  },

  "3_pain:visibility": {
    intro:
      "Your assessment reflects a business with sophisticated operational infrastructure but where the data that would support the best decision-making is still distributed across systems that do not communicate with each other in real time. The individual systems work well. The synthesis across them does not happen automatically.",
    insight1:
      "In mature businesses, the visibility challenge is usually not about data availability — it is about data consolidation. Revenue data lives in the accounting system. Client data lives in the CRM. Project status lives in the project management tool. Each of these systems has good information within its domain. But the insight that comes from seeing how those domains relate to each other — how pipeline health affects revenue forecasting, how client satisfaction correlates with project load — requires someone to manually extract and combine data from multiple sources, which means it happens periodically rather than continuously.",
    insight2:
      "The practical consequence is that the business's decision-making often lags behind its actual performance by days or weeks. By the time a metric has been manually compiled, reviewed, and acted on, the situation has evolved. This matters most in fast-moving situations: a client relationship that is deteriorating, a delivery load that is approaching capacity, a revenue trend that warrants attention. The information exists to identify these signals early — it just is not surfacing in a way that makes early action possible.",
    insight3:
      "At the Primed stage, the investment in connecting the existing systems pays back disproportionately. The goal is not to build new reporting infrastructure from scratch — it is to create the connections that allow the systems you have already invested in to surface intelligence automatically. When the view is current, accurate, and always available without effort, the quality of decisions improves across every level of the business. Strategy is built on real data rather than recent data, and the gap between what is happening and what leadership knows is happening compresses to near zero.",
  },

  "3_pain:conversion": {
    intro:
      "Your assessment reflects a business with operational maturity and a functioning conversion process. At this stage, the conversion opportunity is not about fixing a broken process — it is about identifying the precise points where the current process loses value that the business should be capturing, and closing those gaps with intention.",
    insight1:
      "In operationally mature businesses, conversion optimisation is a precision discipline. The broad process works: leads come in, they are handled, clients are onboarded. But within that working process, there are specific moments where leads disengage, where follow-up is slightly too slow, where the nurture sequence does not quite match the prospect's buying stage, or where a data point that would enable personalisation is captured somewhere in the system but not applied at the moment it would matter. These are not visible from above — they require close examination of where the process actually loses momentum.",
    insight2:
      "At this stage, even marginal improvements in conversion rate have significant revenue impact because the volume of leads the business handles is meaningful. A consistent improvement across the intake, nurture, and close sequence — even something as specific as a faster initial response or a better-timed follow-up — compounds into material revenue over time. The business is not starting from zero. It is refining a machine that is already working to extract more of the value it is currently leaving on the table.",
    insight3:
      "The optimisation at this stage is usually in the connections between steps: the handoff from marketing to sales, the transition from proposal to onboarding, the follow-up cadence in the middle of a nurture sequence where most disengagement occurs. When those connections are tightened and the right information reaches the right team member at the right time, the process stops losing value at the margins and the conversion rate reflects more accurately the quality of the opportunity the business is working with.",
  },

  "3_pain:scaling": {
    intro:
      "Your assessment describes a business that is positioned for its next phase of growth and is making a deliberate choice about how to execute it. The operational infrastructure is in place. The question is whether it has the headroom to absorb the growth you are targeting without requiring proportional investment in headcount or management overhead.",
    insight1:
      "Primed businesses face a specific version of the scaling challenge: the systems that support current operations are working, but they were dimensioned for the current level of volume. Scaling through them — rather than redesigning them — is possible up to a point, but that point arrives sooner than most owners expect. The manual steps that are manageable at current volume become bottlenecks at two or three times the volume. The approval flows that are tolerable now become organisational friction at scale. The reporting that works now requires more effort as the data volume grows.",
    insight2:
      "The risk at this stage is not that the systems fail visibly — it is that they absorb the additional overhead in ways that are distributed and hard to attribute. Team members start working longer hours without anyone's workload crossing an obvious line. Process quality quietly degrades as volume increases, but the signal is slow to emerge. The business grows its revenue but finds the margin does not expand at the rate the revenue growth would suggest it should. This is the signature pattern of infrastructure that has hit its ceiling.",
    insight3:
      "Scaling from a Primed position is an infrastructure exercise rather than a process redesign. The goal is to identify the three or four points in the current operation where human effort scales linearly with volume and to replace that linear effort with a fixed-cost structure. When those connections are made before the volume arrives rather than in response to it, growth creates leverage rather than pressure. The business has the operational headroom to take on significantly more without significantly more cost — which is the condition that makes scaling actually valuable.",
  },
};

// ── Segment B Overlay ──────────────────────────────────────────────────────

const segmentBOverlay: Record<1 | 2 | 3, string> = {
  1: "One thing worth naming directly: your assessment indicates you have brought external help in before and it did not fully deliver what you needed. That is a common experience, and it is worth understanding why before committing to anything further. In most cases, the gap between what was promised and what was delivered comes down to one of three things: the scope was too broad relative to the business's readiness at the time, the implementation was delivered without enough internal ownership to sustain it, or the recommended approach was technically sound but not calibrated to how the business actually operates. The discovery call is a good place to examine which of these applies — and what a different approach would look like.",
  2: "Your assessment notes a prior external engagement that did not fully achieve what you needed. This is worth addressing directly rather than glossing over. Businesses at the Building stage that have had an unsuccessful implementation attempt often have a specific gap: the work that was done was real, but it was not connected to the rest of the business in a way that made it self-sustaining. The output was delivered, but the integration between the new work and existing operations was incomplete. If that is the case, the starting point for any new work is not beginning from scratch — it is assessing what already exists, identifying why the connections did not hold, and building from there.",
  3: "Your assessment flags a prior external implementation that did not fully deliver on expectations. At the Primed stage, this kind of experience usually has a specific cause: a vendor who was technically competent but did not account for the specific operational context of the business, or a scope that was right in principle but delivered without the level of change management the organisation needed to absorb it. It is worth examining that experience before the discovery call so we can understand clearly what worked, what did not, and what a different engagement structure would look like for a business at your level of maturity.",
};

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Retrieve the correct template for a given level and pain tag.
 * Falls back gracefully if the combination does not match.
 */
export function getReportTemplate(
  level: 1 | 2 | 3,
  painTag: string
): ReportTemplate {
  const key = `${level}_${painTag}`;
  return (
    templates[key] ??
    templates[`${level}_pain:efficiency`] ?? {
      intro:
        "Your assessment gives us a clear starting point for understanding how your business currently operates and where the highest-impact opportunities sit.",
      insight1:
        "Based on your answers, the most significant operational friction in the business is concentrated in the points where work or information moves between people or tools without a reliable system to manage the handoff.",
      insight2:
        "The downstream cost of this friction is measured in time, errors, and a ceiling on the business's ability to grow without adding proportionally more overhead.",
      insight3:
        "The right first step is a structured conversation about where specifically the friction is concentrated and what a realistic, targeted response looks like for a business at your stage.",
    }
  );
}

/**
 * Retrieve the Segment B overlay paragraph for a given level.
 * Returns null if the prospect is not Segment B.
 */
export function getSegmentBOverlay(
  level: 1 | 2 | 3,
  isSegmentB: boolean
): string | null {
  if (!isSegmentB) return null;
  return segmentBOverlay[level] ?? null;
}

/**
 * Convenience: get the full template including optional Segment B overlay.
 */
export function getFullTemplate(
  level: 1 | 2 | 3,
  painTag: string,
  isSegmentB: boolean
): FullTemplate {
  const base = getReportTemplate(level, painTag);
  const overlay = getSegmentBOverlay(level, isSegmentB);
  return {
    ...base,
    ...(overlay ? { segmentBOverlay: overlay } : {}),
  };
}
