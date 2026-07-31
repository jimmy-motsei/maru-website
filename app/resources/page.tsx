import type { Metadata } from "next";
import Link from "next/link";
import { BGPattern } from "@/components/ui/bg-pattern";
import { FileCheck, Wrench, Clock } from "lucide-react";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Resources | Maru Online",
  description:
    "Practical guides and tools for South African SMEs navigating AI implementation — no vendor fluff.",
};

const outerPad    = "px-6 md:px-[60px]";
const innerWide   = "max-w-[1100px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className={`relative min-h-[50vh] flex items-center ${outerPad} pt-48 pb-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <BGPattern variant="grid" mask="none" size={40} fill="rgba(61, 184, 198, 0.12)" className="z-0" />
        <div className={`${innerWide} relative z-10`}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.5rem" }}>
              Free Tools &amp; Guides
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split">
              <span className="maru-headline-split-strong">Resources for South African SMEs</span>
              <br />
              <span className="maru-headline-split-light">navigating AI implementation.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontWeight:   300,
                fontSize:     "var(--text-body)",
                color:        "var(--color-ink-inverted-muted)",
                lineHeight:   "var(--leading-body)",
                maxWidth:     "560px",
                marginBottom: 0,
              }}
            >
              Practical guides, checklists, and tools. No vendor fluff.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Resource cards */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerWide}>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 — POPIA Checklist */}
            <StaggerChild key="popia">
              <Link
                href="/resources/popia-ai-checklist"
                style={{
                  display:        "flex",
                  flexDirection:  "column",
                  border:         "0.5px solid var(--color-border-default)",
                  borderRadius:   "8px",
                  padding:        "1.75rem",
                  background:     "var(--color-bg-primary)",
                  textDecoration: "none",
                  transition:     "border-color 0.15s",
                }}
              >
                <span
                  style={{
                    display:         "inline-flex",
                    width:           "40px",
                    height:          "40px",
                    borderRadius:    "8px",
                    border:          "0.5px solid var(--color-border-default)",
                    alignItems:      "center",
                    justifyContent:  "center",
                    marginBottom:    "1.5rem",
                    color:           "var(--color-cyan)",
                  }}
                >
                  <FileCheck size={20} />
                </span>
                <p
                  style={{
                    fontSize:     "var(--text-h3-sans)",
                    fontWeight:   600,
                    color:        "var(--color-ink-primary)",
                    marginBottom: "0.75rem",
                    fontFamily:   "var(--font-body)",
                    lineHeight:   "var(--leading-subheading)",
                  }}
                >
                  POPIA AI Compliance Checklist
                </p>
                <p className="body-muted" style={{ marginBottom: "1.5rem", flex: 1 }}>
                  A plain-language checklist for SA SMEs using AI tools.
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "var(--text-label)",
                    fontWeight:    500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color:         "var(--color-cyan)",
                    margin:        0,
                  }}
                >
                  View Checklist →
                </p>
              </Link>
            </StaggerChild>

            {/* Card 2 — AI Assessment Tools */}
            <StaggerChild key="assessment">
              <Link
                href="/ai-implementation-assessment"
                style={{
                  display:        "flex",
                  flexDirection:  "column",
                  border:         "0.5px solid var(--color-border-default)",
                  borderRadius:   "8px",
                  padding:        "1.75rem",
                  background:     "var(--color-bg-primary)",
                  textDecoration: "none",
                  transition:     "border-color 0.15s",
                }}
              >
                <span
                  style={{
                    display:         "inline-flex",
                    width:           "40px",
                    height:          "40px",
                    borderRadius:    "8px",
                    border:          "0.5px solid var(--color-border-default)",
                    alignItems:      "center",
                    justifyContent:  "center",
                    marginBottom:    "1.5rem",
                    color:           "var(--color-cyan)",
                  }}
                >
                  <Wrench size={20} />
                </span>
                <p
                  style={{
                    fontSize:     "var(--text-h3-sans)",
                    fontWeight:   600,
                    color:        "var(--color-ink-primary)",
                    marginBottom: "0.75rem",
                    fontFamily:   "var(--font-body)",
                    lineHeight:   "var(--leading-subheading)",
                  }}
                >
                  Free AI Assessment Tools
                </p>
                <p className="body-muted" style={{ marginBottom: "1.5rem", flex: 1 }}>
                  Four tools to diagnose your AI integration readiness, pipeline health, lead quality, and tech stack.
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "var(--text-label)",
                    fontWeight:    500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color:         "var(--color-cyan)",
                    margin:        0,
                  }}
                >
                  Use the Tools →
                </p>
              </Link>
            </StaggerChild>

            {/* Card 3 — The Maru Brief (Coming Soon) */}
            <StaggerChild key="brief">
              <div
                style={{
                  display:        "flex",
                  flexDirection:  "column",
                  border:         "0.5px dashed var(--color-border-default)",
                  borderRadius:   "8px",
                  padding:        "1.75rem",
                  background:     "var(--color-bg-primary)",
                  opacity:        0.5,
                  pointerEvents:  "none",
                  cursor:         "default",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      display:         "inline-flex",
                      width:           "40px",
                      height:          "40px",
                      borderRadius:    "8px",
                      border:          "0.5px solid var(--color-border-default)",
                      alignItems:      "center",
                      justifyContent:  "center",
                      color:           "var(--color-ink-tertiary)",
                    }}
                  >
                    <Clock size={20} />
                  </span>
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "var(--text-label)",
                      fontWeight:    500,
                      letterSpacing: "var(--tracking-eyebrow)",
                      textTransform: "uppercase",
                      color:         "var(--color-ink-tertiary)",
                      background:    "var(--color-bg-secondary)",
                      borderRadius:  "4px",
                      padding:       "0.2rem 0.5rem",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p
                  style={{
                    fontSize:     "var(--text-h3-sans)",
                    fontWeight:   600,
                    color:        "var(--color-ink-primary)",
                    marginBottom: "0.75rem",
                    fontFamily:   "var(--font-body)",
                    lineHeight:   "var(--leading-subheading)",
                  }}
                >
                  The Maru Brief
                </p>
                <p className="body-muted" style={{ flex: 1, marginBottom: 0 }}>
                  A fortnightly AI revenue insight for South African SMEs.
                </p>
              </div>
            </StaggerChild>

          </StaggerParent>
        </div>
      </section>

    </>
  );
}
