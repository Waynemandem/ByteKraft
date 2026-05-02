import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "Work", "About", "Contact"];

const SERVICES = [
  {
    tag: "CRYPTO & WEB3",
    title: "DeFi & Blockchain Solutions",
    desc: "Smart contracts, DEX integrations, token dashboards, and Web3 dApps built for scale and security.",
    icon: "⬡",
    accent: "#00FFB2",
  },
  {
    tag: "CRYPTO & WEB3",
    title: "Crypto Payment Integration",
    desc: "Accept crypto on any platform. Multi-chain wallets, on-ramp flows, and real-time price tracking.",
    icon: "◈",
    accent: "#00FFB2",
  },
  {
    tag: "BUSINESS GROWTH",
    title: "Web Presence & E-Commerce",
    desc: "High-converting storefronts, brand sites, and custom CMS platforms engineered to drive revenue.",
    icon: "▲",
    accent: "#FFD600",
  },
  {
    tag: "BUSINESS GROWTH",
    title: "SaaS Product Development",
    desc: "From MVP to production. Full-stack SaaS apps with auth, billing, dashboards, and integrations.",
    icon: "◉",
    accent: "#FFD600",
  },
  {
    tag: "BUSINESS GROWTH",
    title: "API & Backend Engineering",
    desc: "Scalable REST & GraphQL APIs, serverless functions, and database architectures that hold up under load.",
    icon: "⬟",
    accent: "#FFD600",
  },
  {
    tag: "CRYPTO & WEB3",
    title: "NFT & Token Platforms",
    desc: "Minting platforms, marketplace UI, royalty logic, and wallet-gated communities.",
    icon: "◆",
    accent: "#00FFB2",
  },
];

const STATS = [
  { val: "40+", label: "Projects Shipped" },
  { val: "3", label: "Blockchain Networks" },
  { val: "98%", label: "Client Retention" },
  { val: "12", label: "Countries Served" },
];

const WORKS = [
  {
    name: "Solar Trendit",
    type: "Business Growth · E-Commerce",
    desc: "Full-stack platform connecting solar businesses with customers. Lead gen + product catalog + payment flows.",
    color: "#FFD600",
    shape: "▲",
  },
  {
    name: "CoinPulse",
    type: "Crypto · SaaS Dashboard",
    desc: "Real-time meme coin tracker with tiered subscriptions, Paystack billing, and Supabase backend.",
    color: "#00FFB2",
    shape: "⬡",
  },
  {
    name: "ChainVault",
    type: "Crypto · DeFi",
    desc: "Multi-chain portfolio manager with live price feeds, P&L analytics, and wallet connect.",
    color: "#B8FF00",
    shape: "◈",
  },
];

export default function ByteKraft() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  const glitchChars = "!<>-_\\/[]{}—=+*^?#";
  const glitch = (text, active) => {
    if (!active) return text;
    return text
      .split("")
      .map((c, i) =>
        Math.random() < 0.08
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : c
      )
      .join("");
  };

  return (
    <div style={styles.root}>
      <style>{globalStyles}</style>

      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoBracket}>[</span>
            <span style={styles.logoText}>ByteKraft</span>
            <span style={styles.logoBracket}>]</span>
          </div>
          <div style={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={styles.navLink}>
                {l}
              </a>
            ))}
            <button style={styles.navCta}>Start a Project</button>
          </div>
          <button
            style={styles.menuBtn}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={styles.hero} ref={heroRef}>
        <div style={styles.gridOverlay} />
        <div style={styles.heroGlow} />
        <div style={styles.heroContent}>
          <div style={styles.heroPill}>
            <span style={styles.heroPillDot} />
            Web3 · SaaS · Business Growth
          </div>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroTitleLine}>We Build</span>
            <span style={styles.heroTitleAccent}>
              Digital Products
            </span>
            <span style={styles.heroTitleLine}>That Perform.</span>
          </h1>
          <p style={styles.heroSub}>
            ByteKraft is a software agency at the intersection of{" "}
            <em style={{ color: "#00FFB2", fontStyle: "normal" }}>
              crypto infrastructure
            </em>{" "}
            and{" "}
            <em style={{ color: "#FFD600", fontStyle: "normal" }}>
              business-grade web solutions
            </em>
            . We ship products that work.
          </p>
          <div style={styles.heroCtas}>
            <button style={styles.btnPrimary}>
              <span>Get a Free Scope</span>
              <span style={styles.btnArrow}>→</span>
            </button>
            <button style={styles.btnGhost}>See Our Work ↓</button>
          </div>
          <div style={styles.heroStats}>
            {STATS.map((s) => (
              <div key={s.label} style={styles.heroStat}>
                <span style={styles.heroStatVal}>{s.val}</span>
                <span style={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.hexGrid}>
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.hex,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.08 + (i % 3) * 0.06,
                }}
              />
            ))}
          </div>
          <div style={styles.terminalCard}>
            <div style={styles.terminalBar}>
              <span style={{ ...styles.termDot, background: "#FF5F56" }} />
              <span style={{ ...styles.termDot, background: "#FFBD2E" }} />
              <span style={{ ...styles.termDot, background: "#27C93F" }} />
              <span style={styles.termTitle}>bytekraft.sh</span>
            </div>
            <div style={styles.termBody}>
              <p style={styles.termLine}>
                <span style={styles.termPrompt}>$ </span>
                <span style={{ color: "#00FFB2" }}>init</span>
                {" bytekraft --type agency"}
              </p>
              <p style={styles.termLine}>
                <span style={{ color: "#888" }}>▸ Loading stack...</span>
              </p>
              <p style={styles.termLine}>
                <span style={{ color: "#FFD600" }}>✓</span> React + TypeScript
              </p>
              <p style={styles.termLine}>
                <span style={{ color: "#FFD600" }}>✓</span> Supabase + Edge Functions
              </p>
              <p style={styles.termLine}>
                <span style={{ color: "#FFD600" }}>✓</span> Web3 / ethers.js
              </p>
              <p style={styles.termLine}>
                <span style={{ color: "#FFD600" }}>✓</span> Paystack + Stripe
              </p>
              <p style={styles.termLine}>
                <span style={{ color: "#00FFB2" }}>✓</span>{" "}
                <span style={{ color: "#fff" }}>
                  Agency ready.{" "}
                </span>
                <span className="blink" style={{ color: "#00FFB2" }}>
                  ▌
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>// WHAT WE BUILD</div>
          <h2 style={styles.sectionTitle}>
            Crypto-Native. <br />
            <span style={{ color: "#FFD600" }}>Business-Proven.</span>
          </h2>
          <div style={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  ...styles.serviceCard,
                  ...(activeService === i ? styles.serviceCardActive : {}),
                  borderColor:
                    activeService === i ? s.accent : "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div style={styles.serviceTagRow}>
                  <span
                    style={{
                      ...styles.serviceTag,
                      color: s.accent,
                      borderColor: s.accent + "44",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div style={{ ...styles.serviceIcon, color: s.accent }}>
                  {s.icon}
                </div>
                <h3 style={styles.serviceTitle}>{s.title}</h3>
                <p style={styles.serviceDesc}>{s.desc}</p>
                <div
                  style={{
                    ...styles.serviceArrow,
                    color: s.accent,
                    opacity: activeService === i ? 1 : 0,
                  }}
                >
                  Explore →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ ...styles.section, background: "#0A0A0A" }}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>// RECENT WORK</div>
          <h2 style={styles.sectionTitle}>
            Ships We've <span style={{ color: "#00FFB2" }}>Launched</span>
          </h2>
          <div style={styles.workGrid}>
            {WORKS.map((w, i) => (
              <div key={i} style={styles.workCard}>
                <div
                  style={{
                    ...styles.workCardTop,
                    background: `linear-gradient(135deg, ${w.color}15, ${w.color}05)`,
                    borderBottomColor: w.color + "33",
                  }}
                >
                  <span style={{ ...styles.workShape, color: w.color }}>
                    {w.shape}
                  </span>
                  <span
                    style={{ ...styles.workNumber, color: w.color + "44" }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div style={styles.workCardBody}>
                  <div style={{ ...styles.workType, color: w.color }}>
                    {w.type}
                  </div>
                  <h3 style={styles.workName}>{w.name}</h3>
                  <p style={styles.workDesc}>{w.desc}</p>
                  <button
                    style={{ ...styles.workLink, color: w.color }}
                  >
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BYTEKRAFT */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionLabel}>// WHY BYTEKRAFT</div>
          <div style={styles.whyGrid}>
            <div style={styles.whyLeft}>
              <h2 style={styles.sectionTitle}>
                Built Different.<br />
                <span style={{ color: "#00FFB2" }}>Wired for Results.</span>
              </h2>
              <p style={styles.whyBody}>
                We don't just write code — we understand the business context behind every line. ByteKraft sits at a rare intersection: deep crypto/Web3 expertise and proven experience scaling real-world businesses online.
              </p>
              <p style={styles.whyBody}>
                Whether you're launching a DeFi protocol or a local business that needs a serious online presence, we treat every project like our own product.
              </p>
              <div style={styles.whyFeatures}>
                {[
                  "Crypto-native stack from day one",
                  "Paystack & Stripe payment integration",
                  "Full-stack ownership — no outsourcing",
                  "Rapid iteration with clear milestones",
                ].map((f, i) => (
                  <div key={i} style={styles.whyFeature}>
                    <span style={styles.whyFeatureDot}>◆</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.whyRight}>
              <div style={styles.stackCard}>
                <div style={styles.stackTitle}>OUR STACK</div>
                {[
                  { cat: "Frontend", items: "React · TypeScript · Tailwind" },
                  { cat: "Backend", items: "Supabase · Node · Edge Fn" },
                  { cat: "Web3", items: "ethers.js · wagmi · Solidity" },
                  { cat: "Payments", items: "Paystack · Stripe · Crypto" },
                  { cat: "Deploy", items: "Vercel · Railway · Cloudflare" },
                ].map((row) => (
                  <div key={row.cat} style={styles.stackRow}>
                    <span style={styles.stackCat}>{row.cat}</span>
                    <span style={styles.stackItems}>{row.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={styles.ctaSection}>
        <div style={styles.ctaGlow} />
        <div style={styles.ctaInner}>
          <div style={styles.sectionLabel}>// READY TO BUILD?</div>
          <h2 style={styles.ctaTitle}>
            Let's turn your idea<br />
            <span style={{ color: "#00FFB2" }}>into a product.</span>
          </h2>
          <p style={styles.ctaSub}>
            Drop us your brief. We'll scope it, price it, and ship it.
          </p>
          <div style={styles.ctaForm}>
            <input
              style={styles.ctaInput}
              placeholder="Your email address"
              type="email"
            />
            <button style={styles.ctaBtn}>
              Get Started →
            </button>
          </div>
          <p style={styles.ctaNote}>
            Response within 24 hours · No commitment required
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.logo}>
            <span style={styles.logoBracket}>[</span>
            <span style={styles.logoText}>ByteKraft</span>
            <span style={styles.logoBracket}>]</span>
          </div>
          <div style={styles.footerLinks}>
            {["Twitter", "GitHub", "LinkedIn", "Telegram"].map((l) => (
              <a key={l} href="#" style={styles.footerLink}>
                {l}
              </a>
            ))}
          </div>
          <p style={styles.footerCopy}>
            © 2025 ByteKraft · Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #080808; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .blink { animation: blink 1s step-end infinite; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes hexPulse { 0%,100%{transform:scale(1);opacity:0.08} 50%{transform:scale(1.05);opacity:0.18} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
`;

const styles = {
  root: {
    fontFamily: "'Syne', sans-serif",
    background: "#080808",
    color: "#E8E8E8",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "background 0.3s, border-bottom 0.3s",
    borderBottom: "1px solid transparent",
  },
  navScrolled: {
    background: "rgba(8,8,8,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 32px",
    height: 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  logoBracket: { color: "#00FFB2" },
  logoText: { color: "#fff", margin: "0 2px" },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 32,
  },
  navLink: {
    color: "#888",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.05em",
    transition: "color 0.2s",
  },
  navCta: {
    background: "#00FFB2",
    color: "#080808",
    border: "none",
    borderRadius: 4,
    padding: "8px 20px",
    fontFamily: "'Syne', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.04em",
  },
  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 22,
    cursor: "pointer",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "#0E0E0E",
    borderTop: "1px solid rgba(255,255,255,0.07)",
    padding: "16px 32px",
    gap: 16,
  },
  mobileLink: {
    color: "#888",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 600,
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "120px 32px 80px",
    maxWidth: 1200,
    margin: "0 auto",
    gap: 48,
    position: "relative",
  },
  gridOverlay: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    pointerEvents: "none",
    zIndex: 0,
  },
  heroGlow: {
    position: "absolute",
    top: "20%",
    left: "30%",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,255,178,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  heroContent: {
    flex: 1,
    position: "relative",
    zIndex: 1,
    animation: "fadeUp 0.8s ease both",
  },
  heroPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(0,255,178,0.08)",
    border: "1px solid rgba(0,255,178,0.2)",
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: 11,
    fontFamily: "'Space Mono', monospace",
    color: "#00FFB2",
    letterSpacing: "0.1em",
    marginBottom: 28,
  },
  heroPillDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#00FFB2",
    display: "inline-block",
    boxShadow: "0 0 6px #00FFB2",
  },
  heroTitle: {
    fontSize: "clamp(44px, 6vw, 76px)",
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    marginBottom: 24,
  },
  heroTitleLine: {
    display: "block",
    color: "#E8E8E8",
  },
  heroTitleAccent: {
    display: "block",
    background: "linear-gradient(90deg, #00FFB2, #FFD600, #00FFB2)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 4s linear infinite",
  },
  heroSub: {
    fontSize: 17,
    lineHeight: 1.7,
    color: "#999",
    maxWidth: 500,
    marginBottom: 36,
    fontWeight: 400,
  },
  heroCtas: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 56,
  },
  btnPrimary: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#00FFB2",
    color: "#080808",
    border: "none",
    borderRadius: 4,
    padding: "14px 28px",
    fontFamily: "'Syne', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.02em",
  },
  btnArrow: { fontSize: 18 },
  btnGhost: {
    background: "transparent",
    color: "#888",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 4,
    padding: "14px 28px",
    fontFamily: "'Syne', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
  },
  heroStats: {
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 32,
  },
  heroStat: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  heroStatVal: {
    fontSize: 28,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.02em",
  },
  heroStatLabel: {
    fontSize: 12,
    color: "#555",
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.06em",
  },
  heroVisual: {
    flex: 1,
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 300,
  },
  hexGrid: {
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    gap: 12,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  hex: {
    width: 80,
    height: 90,
    background: "#00FFB2",
    clipPath:
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    animation: "hexPulse 3s ease-in-out infinite",
  },
  terminalCard: {
    background: "#0E0E0E",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,178,0.1)",
    animation: "float 6s ease-in-out infinite",
    position: "relative",
    zIndex: 2,
  },
  terminalBar: {
    background: "#161616",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  termDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    display: "inline-block",
  },
  termTitle: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "#555",
    marginLeft: "auto",
  },
  termBody: {
    padding: "20px 20px 24px",
    fontFamily: "'Space Mono', monospace",
    fontSize: 13,
    lineHeight: 2,
  },
  termLine: { color: "#aaa" },
  termPrompt: { color: "#555" },
  section: {
    padding: "100px 32px",
    background: "#080808",
  },
  sectionInner: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "#444",
    letterSpacing: "0.12em",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: "clamp(32px, 4vw, 54px)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    marginBottom: 56,
    color: "#fff",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 16,
  },
  serviceCard: {
    background: "#0D0D0D",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 8,
    padding: "28px 28px 24px",
    cursor: "pointer",
    transition: "border-color 0.2s, transform 0.2s, background 0.2s",
  },
  serviceCardActive: {
    background: "#111",
    transform: "translateY(-4px)",
  },
  serviceTagRow: { marginBottom: 16 },
  serviceTag: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.12em",
    border: "1px solid",
    borderRadius: 100,
    padding: "3px 10px",
  },
  serviceIcon: {
    fontSize: 28,
    marginBottom: 12,
    lineHeight: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 10,
    letterSpacing: "-0.01em",
  },
  serviceDesc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.7,
    marginBottom: 16,
  },
  serviceArrow: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 12,
    fontWeight: 700,
    transition: "opacity 0.2s",
  },
  workGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 20,
  },
  workCard: {
    background: "#0D0D0D",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 8,
    overflow: "hidden",
  },
  workCardTop: {
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid",
    position: "relative",
    overflow: "hidden",
  },
  workShape: {
    fontSize: 64,
    lineHeight: 1,
  },
  workNumber: {
    position: "absolute",
    bottom: 12,
    right: 16,
    fontFamily: "'Space Mono', monospace",
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1,
  },
  workCardBody: {
    padding: "24px 24px 28px",
  },
  workType: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.1em",
    marginBottom: 8,
  },
  workName: {
    fontSize: 22,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 10,
    letterSpacing: "-0.02em",
  },
  workDesc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.7,
    marginBottom: 20,
  },
  workLink: {
    background: "none",
    border: "none",
    fontFamily: "'Space Mono', monospace",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.04em",
    padding: 0,
  },
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "start",
  },
  whyLeft: {},
  whyBody: {
    fontSize: 16,
    color: "#777",
    lineHeight: 1.8,
    marginBottom: 20,
  },
  whyFeatures: {
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  whyFeature: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 14,
    color: "#aaa",
    fontWeight: 600,
  },
  whyFeatureDot: {
    color: "#00FFB2",
    fontSize: 8,
  },
  whyRight: {},
  stackCard: {
    background: "#0D0D0D",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    overflow: "hidden",
  },
  stackTitle: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.14em",
    color: "#444",
    padding: "16px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  stackRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },
  stackCat: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "#555",
    letterSpacing: "0.06em",
  },
  stackItems: {
    fontSize: 13,
    color: "#aaa",
    fontWeight: 600,
    textAlign: "right",
  },
  ctaSection: {
    padding: "120px 32px",
    background: "#050505",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
  },
  ctaGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 800,
    height: 400,
    background:
      "radial-gradient(ellipse, rgba(0,255,178,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  ctaInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: 600,
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "clamp(36px, 5vw, 60px)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    color: "#fff",
    marginBottom: 20,
  },
  ctaSub: {
    fontSize: 17,
    color: "#666",
    marginBottom: 40,
  },
  ctaForm: {
    display: "flex",
    gap: 12,
    maxWidth: 480,
    margin: "0 auto 16px",
  },
  ctaInput: {
    flex: 1,
    background: "#111",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 4,
    padding: "14px 18px",
    color: "#fff",
    fontFamily: "'Syne', sans-serif",
    fontSize: 15,
    outline: "none",
  },
  ctaBtn: {
    background: "#00FFB2",
    color: "#080808",
    border: "none",
    borderRadius: 4,
    padding: "14px 24px",
    fontFamily: "'Syne', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  ctaNote: {
    fontSize: 12,
    color: "#444",
    fontFamily: "'Space Mono', monospace",
    letterSpacing: "0.06em",
  },
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "40px 32px",
    background: "#080808",
  },
  footerInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  },
  footerLinks: {
    display: "flex",
    gap: 28,
  },
  footerLink: {
    color: "#555",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  footerCopy: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 11,
    color: "#333",
    letterSpacing: "0.06em",
  },
};