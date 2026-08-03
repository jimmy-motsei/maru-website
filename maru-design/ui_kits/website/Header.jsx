// Maru — site header. Navy translucent bar, white logo, cyan CTA. For the kit it
// renders in its "over-hero" state (the real site swaps to white when scrolled).
const { Button } = window.MaruOnlineDesignSystem_422da4;

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Pricing", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
];

function MaruHeader({ onMenu }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "rgba(13,27,42,0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          padding: "0 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <a href="#top" aria-label="Maru Online — home" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="../../assets/brand/maru-logo.png"
            alt="Maru Online"
            style={{ height: "30px", width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </a>

        <ul
          className="maru-nav-links"
          style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(250,250,248,0.8)",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.8)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="maru-nav-cta">
          <Button variant="primary" size="sm" href="#assessment">Start Assessment</Button>
        </div>

        <button
          className="maru-nav-burger"
          onClick={onMenu}
          aria-label="Open menu"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: "6px",
            width: "28px",
            height: "28px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ display: "block", width: "28px", height: "1.5px", background: "#fff" }} />
          <span style={{ display: "block", width: "28px", height: "1.5px", background: "#fff" }} />
          <span style={{ display: "block", width: "28px", height: "1.5px", background: "#fff" }} />
        </button>
      </nav>
    </header>
  );
}

window.MaruHeader = MaruHeader;
