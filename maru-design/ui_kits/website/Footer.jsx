// Maru — site footer. Deep navy, logo + one-line positioning, IA columns, and
// the persistent WhatsApp affordance. IA matches the nav (Insights, not Resources).
const { WhatsAppButton: FooterWhatsApp } = window.MaruOnlineDesignSystem_422da4;

const FOOTER_COLS = [
  { title: "Services", links: ["Operations Diagnostic", "Workflow Integration", "Results & Optimisation", "POPIA-Compliant AI", "Team Training"] },
  { title: "Company", links: ["About", "How We Work", "Pricing", "Insights", "Contact"] },
  { title: "Trust", links: ["POPIA compliance", "Fixed pricing", "30-day support", "Vendor-agnostic"] },
];

function MaruFooter() {
  return (
    <footer style={{ background: "var(--color-bg-navy-deep)", padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="maru-footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px", alignItems: "start" }}
        >
          <div>
            <img
              src="../../assets/brand/maru-logo.png"
              alt="Maru Online"
              style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "20px" }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(250,250,248,0.6)",
                lineHeight: 1.7,
                margin: "0 0 24px",
                maxWidth: "320px",
              }}
            >
              AI &amp; automation consultancy for South African SMEs. We connect the tools you already pay for — no hype, fixed pricing, measured results.
            </p>
            <FooterWhatsApp variant="inline" label="Chat on WhatsApp" />
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-cyan)",
                  margin: "0 0 16px",
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 300,
                        color: "rgba(250,250,248,0.7)",
                        textDecoration: "none",
                        transition: "color 200ms",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cyan)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.7)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <small style={{ color: "rgba(250,250,248,0.4)", fontSize: "12px" }}>
            © 2026 Maru Online · Gauteng, South Africa
          </small>
          <small style={{ color: "rgba(250,250,248,0.4)", fontSize: "12px" }}>
            POPIA compliant · Privacy · Terms
          </small>
        </div>
      </div>
    </footer>
  );
}

window.MaruFooter = MaruFooter;
