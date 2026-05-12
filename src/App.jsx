import { useState, useEffect } from "react";

/* ─── DATA ─────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "01",
    category: "CRYPTO",
    title: "Crypto & Blockchain",
    desc: "Smart contracts, DeFi protocols, DEX integrations, and token dashboards engineered for scale, speed, and security.",
  },
  {
    id: "02",
    category: "BUSINESS",
    title: "Business Growth & Social Media",
    desc: "Brand strategy, social media marketing, content systems, and growth funnels that turn audiences into paying customers.",
  },
  {
    id: "03",
    category: "SAAS",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS platforms — auth, billing, dashboards, and integrations — shipped from MVP to production.",
  },
  {
    id: "04",
    category: "CRYPTO",
    title: "NFT & Token Platforms",
    desc: "Minting platforms, marketplace UI, royalty logic, wallet-gated communities, and token launch infrastructure.",
  },
];

const STACK = [
  { label: "Frontend", value: "React · TypeScript · Tailwind CSS" },
  { label: "Backend", value: "Supabase · Node.js · Edge Functions" },
  { label: "Web3", value: "ethers.js · wagmi · Solidity" },
  { label: "Payments", value: "Paystack · Stripe · Crypto" },
  { label: "Deploy", value: "Vercel · Railway · Cloudflare" },
];

const WORKS = [
  {
    num: "01",
    name: "Solar Trendit",
    tags: ["E-Commerce", "Business Growth"],
    desc: "Full-stack solar marketplace connecting suppliers with customers — product catalog, lead gen, and Paystack checkout.",
  },
  {
    num: "02",
    name: "CoinPulse",
    tags: ["Crypto", "SaaS"],
    desc: "Real-time meme coin tracker with tiered subscriptions, Supabase backend, and Paystack billing integration.",
  },
  {
    num: "03",
    name: "ChainVault",
    tags: ["DeFi", "Web3"],
    desc: "Multi-chain portfolio manager with live price feeds, P&L analytics, and multi-wallet support.",
  },
];

const STATS = [
  { val: "2+", label: "Projects Shipped" },
  { val: "3", label: "Chains Supported" },
  { val: "98%", label: "Client Retention" },
  { val: "2", label: "Countries" },
];

const NAV = ["Services", "Work", "Stack", "Contact"];
const GREEN = "#06b646";

/* ─── COMPONENT ─────────────────────────────────────────── */
export default function saturnlab() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const bg   = dark ? "#000" : "#fff";
  const fg   = dark ? "#fff" : "#000";
  const surf = dark ? "#0a0a0a" : "#f5f5f7";
  const bdr  = dark ? "#1c1c1c" : "#e8e8e8";
  const navBg = scrolled ? (dark ? "rgba(0,0,0,0.88)" : "rgba(255,255,255,0.88)") : "transparent";

  return (
    <div style={{ background: bg, color: fg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", transition: "background .3s, color .3s", overflowX: "hidden" }}>
      <style>{css}</style>

      {/* ══ NAV ══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none", WebkitBackdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${bdr}` : "1px solid transparent", transition: "all .3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, width: "100%" }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", color: fg, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-.02em", flexShrink: 0 }}>
            Byte<span style={{ color: GREEN }}>Kraft</span>
          </a>

          {/* ── DESKTOP NAV ── */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} style={{ color: fg, textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: ".01em" }}>
                  {n}
                </a>
              ))}
            </nav>
          )}

          {/* ── RIGHT CONTROLS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Theme toggle — always visible */}
            <button onClick={() => setDark(d => !d)}
              style={{ background: "none", border: `1px solid ${bdr}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: fg, fontSize: 15 }}
              title="Toggle theme">
              {dark ? "◑" : "◐"}
            </button>

            {/* CTA — desktop only */}
            {!isMobile && (
              <button style={{ background: fg, color: bg, border: "none", borderRadius: 8, padding: "9px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Start a Project
              </button>
            )}

            {/* Hamburger — mobile only */}
            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)}
                style={{ background: "none", border: `1px solid ${bdr}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
              </button>
            )}
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {isMobile && (
          <div style={{ overflow: "hidden", maxHeight: menuOpen ? 420 : 0, transition: "max-height .35s ease", background: bg, borderBottom: menuOpen ? `1px solid ${bdr}` : "none" }}>
            <div style={{ padding: "16px 24px 28px", display: "flex", flexDirection: "column" }}>
              {NAV.map((n, i, arr) => (
                <a key={n} href={`#${n.toLowerCase()}`}
                  style={{ color: fg, textDecoration: "none", fontSize: 22, fontWeight: 600, fontFamily: "'Outfit', sans-serif", padding: "14px 0", borderBottom: i < arr.length - 1 ? `1px solid ${bdr}` : "none", display: "block" }}
                  onClick={() => setMenuOpen(false)}>
                  {n}
                </a>
              ))}
              <button style={{ marginTop: 20, background: fg, color: bg, border: "none", borderRadius: 8, padding: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer" }}
                onClick={() => setMenuOpen(false)}>
                Start a Project
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 0 80px" }}>
        <div className="container hero-grid">

          {/* Left — text */}
          <div className="fade-up" style={{ animationDelay: ".1s" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: ".18em", color: GREEN, marginBottom: 24, textTransform: "uppercase" }}>
              Software Agency
            </p>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.7, marginBottom: 40, fontWeight: 400, maxWidth: 440 }}>
              ByteKraft ships Web3 infrastructure and business-grade web products from DeFi protocols to e-commerce platforms.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
              <a href="#services" style={{ background: fg, color: bg, textDecoration: "none", borderRadius: 100, padding: "13px 28px", fontSize: 14, fontWeight: 600, display: "inline-block" }}
                onMouseEnter={e => e.target.style.opacity = ".8"}
                onMouseLeave={e => e.target.style.opacity = "1"}>
                See Our Services
              </a>
              <a href="#work" style={{ color: fg, textDecoration: "none", borderRadius: 100, padding: "13px 28px", fontSize: 14, fontWeight: 600, border: `1.5px solid ${bdr}`, display: "inline-block" }}
                onMouseEnter={e => e.target.style.borderColor = fg}
                onMouseLeave={e => e.target.style.borderColor = bdr}>
                View Work
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${bdr}`, paddingTop: 28, gap: 0 }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{ borderRight: i < 3 ? `1px solid ${bdr}` : "none", paddingRight: 16 }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, letterSpacing: "-.03em", marginBottom: 2 }}>{s.val}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".07em", textTransform: "uppercase", opacity: .45 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="fade-up hero-terminal" style={{ animationDelay: ".25s" }}>
            <div style={{ background: dark ? "#111" : "#f0f0f2", border: `1px solid ${bdr}`, borderRadius: 14, overflow: "hidden", boxShadow: dark ? "0 32px 80px rgba(0,0,0,0.6)" : "0 20px 60px rgba(0,0,0,0.08)", animation: "float 6s ease-in-out infinite" }}>
              {/* Title bar */}
              <div style={{ background: dark ? "#1a1a1a" : "#e4e4e4", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: `1px solid ${bdr}` }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 11, color: fg, opacity: .35, marginLeft: "auto" }}>bytekraft.sh</span>
              </div>
              {/* Body */}
              <div style={{ padding: "22px 24px 28px", fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 13, lineHeight: 2.1 }}>
                <p style={{ color: fg, opacity: .35 }}>$ <span style={{ color: fg, opacity: 1, fontWeight: 700 }}>init</span> bytekraft --type agency</p>
                <p style={{ color: fg, opacity: .4 }}>▸ Loading stack...</p>
                {["React + TypeScript", "Supabase + Edge Functions", "Web3 / ethers.js", "Paystack + Stripe"].map(item => (
                  <p key={item} style={{ color: fg }}><span style={{ color: GREEN }}>✓</span> {item}</p>
                ))}
                <p style={{ color: fg }}><span style={{ color: GREEN }}>✓</span> Agency ready.<span className="blink" style={{ color: GREEN }}> ▌</span></p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ padding: "100px 0", background: surf, transition: "background .3s" }}>
        <div className="container">
          <Label fg={fg} green={GREEN}>Services</Label>
          <h2 className="section-title" style={{ color: fg }}>What we build.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2, marginTop: 56 }}>
            {SERVICES.map((s) => {
              const isCrypto = s.category === "CRYPTO";
              return (
                <div key={s.id} className="service-card" style={{ background: bg, padding: "40px 36px 44px", position: "relative", cursor: "default", transition: "background .2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = dark ? "#111" : "#f0f0f2"}
                  onMouseLeave={e => e.currentTarget.style.background = bg}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                    <span style={{ fontFamily: "'Outfit', monospace", fontSize: 11, fontWeight: 700, letterSpacing: ".16em", color: GREEN, background: `${GREEN}18`, padding: "4px 12px", borderRadius: 100 }}>
                      {isCrypto ? "CRYPTO" : s.category === "SAAS" ? "SAAS" : "GROWTH"}
                    </span>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: GREEN, opacity: .5 }}>{s.id}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 16, color: fg, lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: fg, fontWeight: 400 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WORK ══ */}
      <section id="work" style={{ padding: "100px 0" }}>
        <div className="container">
          <Label fg={fg} green={GREEN}>Selected Work</Label>
          <h2 className="section-title" style={{ color: fg }}>Projects we've shipped.</h2>

          <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 0 }}>
            {WORKS.map((w, i) => (
              <div key={w.name} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", alignItems: "center", gap: "0 32px", padding: "32px 0", borderTop: `1px solid ${bdr}`, borderBottom: i === WORKS.length - 1 ? `1px solid ${bdr}` : "none" }}
                className="work-row">
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: GREEN, letterSpacing: ".06em" }}>{w.num}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-.02em", color: fg }}>{w.name}</h3>
                    <div style={{ display: "flex", gap: 6 }}>
                      {w.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: fg, border: `1px solid ${bdr}`, borderRadius: 100, padding: "2px 10px", letterSpacing: ".04em" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: fg, maxWidth: 560 }}>{w.desc}</p>
                </div>
                <span style={{ fontSize: 20, color: bdr, display: "flex", alignItems: "center" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section id="stack" style={{ padding: "100px 0", background: surf, transition: "background .3s" }}>
        <div className="container">
          <Label fg={fg} green={GREEN}>Tech Stack</Label>
          <h2 className="section-title" style={{ color: fg }}>How we build it.</h2>

          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* Stack card — matches image 1 */}
            <div style={{ border: `1px solid ${bdr}`, borderRadius: 14, overflow: "hidden" }}>
              {/* Card header */}
              <div style={{ padding: "18px 28px", borderBottom: `1px solid ${bdr}`, background: dark ? "#0d0d0d" : "#ececec" }}>
                <span style={{ fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 10, fontWeight: 700, letterSpacing: ".22em", color: fg, opacity: 1, textTransform: "uppercase" }}>Our Stack</span>
              </div>
              {/* Rows */}
              {STACK.map((row, i) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderBottom: i < STACK.length - 1 ? `1px solid ${bdr}` : "none", background: bg, transition: "background .18s" }}
                  onMouseEnter={e => e.currentTarget.style.background = dark ? "#111" : "#f5f5f7"}
                  onMouseLeave={e => e.currentTarget.style.background = bg}>
                  <span style={{ fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 12, color: fg, opacity: 1, letterSpacing: ".04em" }}>{row.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: fg, textAlign: "right" }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Right column — short description */}
            <div style={{ paddingTop: 8 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 20, color: fg }}>Proven tools.<br />Reliable results.</h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: fg, marginBottom: 24 }}>
                We don't chase trends. Every tool in our stack is production-tested — chosen for speed, reliability, and the ability to ship at scale.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: fg }}>
                From React frontends to Supabase backends and on-chain Solidity logic, the same stack powers every ByteKraft project.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding: "100px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Label fg={fg} green={GREEN}>About</Label>
            <h2 className="section-title" style={{ color: fg, marginBottom: 28 }}>Built different.<br />Wired for results.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: fg, marginBottom: 20 }}>
              ByteKraft operates at a rare intersection — deep crypto and Web3 expertise paired with proven experience scaling businesses online.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: fg }}>
              We don't outsource, we don't cut corners. Every project gets the same rigour whether it's a DeFi protocol or a local brand's digital presence.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${bdr}`, borderRadius: 16, overflow: "hidden" }}>
            {[
              "Crypto-native from day one",
              "Paystack & Stripe integrated",
              "Full-stack, no outsourcing",
              "Rapid iteration, clear milestones",
              "Web3 + traditional business",
            ].map((item, i, arr) => (
              <div key={item} style={{ padding: "20px 28px", borderBottom: i < arr.length - 1 ? `1px solid ${bdr}` : "none", display: "flex", alignItems: "center", gap: 16, background: bg, transition: "background .2s" }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? "#111" : "#f0f0f2"}
                onMouseLeave={e => e.currentTarget.style.background = bg}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 500, color: fg }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section id="contact" style={{ padding: "120px 0", background: fg, color: bg, textAlign: "center", transition: "background .3s, color .3s" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".18em", color: GREEN, marginBottom: 24, textTransform: "uppercase" }}>Ready to Build?</p>
          
          <p style={{ fontSize: 17, lineHeight: 1.65, marginBottom: 48, opacity: .7 }}>
            Drop us a line. We'll scope it, price it, and ship it.
          </p>
          <div style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto 16px", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{ flex: 1, minWidth: 200, background: dark ? "#1a1a1a" : "#efefef", border: "none", borderRadius: 10, padding: "15px 18px", fontSize: 15, color: bg, fontFamily: "'DM Sans', sans-serif", outline: "none" }}
            />
            <button style={{ background: GREEN, color: "#000", border: "none", borderRadius: 10, padding: "15px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
              Get Started →
            </button>
          </div>
          <p style={{ fontSize: 12, opacity: .4, letterSpacing: ".06em" }}>· REPLY WITHIN 24 HOURS · </p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ padding: "32px 0", borderTop: `1px solid ${bdr}`, background: bg, transition: "background .3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "-.01em" }}>
            Byte<span style={{ color: GREEN }}>Kraft</span>
          </span>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Twitter", "GitHub", "LinkedIn", "Telegram"].map(l => (
              <a key={l} href="#" style={{ color: fg, textDecoration: "none", fontSize: 13, fontWeight: 500, opacity: .45 }}>{l}</a>
            ))}
          </div>
          <span style={{ fontSize: 12, opacity: .3, letterSpacing: ".04em" }}>© 2026 BYTEKRAFT</span>
        </div>
      </footer>
    </div>
  );
}

/* ── Label helper ── */
function Label({ fg, green, children }) {
  return (
    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".18em", color: green, marginBottom: 16, textTransform: "uppercase" }}>
      {children}
    </p>
  );
}

/* ── Global CSS ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
   html, body { width: 100%; overflow-x: hidden; margin: 0; padding: 0; }
  #root { width: 100%; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }

  .container { max-width: 1400px; margin: 0 auto; padding: 0 64px; }
  @media (max-width: 1024px) { .container { padding: 0 40px; } }
  @media (max-width: 768px)  { .container { padding: 0 20px; } }

  .section-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(34px, 5vw, 58px);
    font-weight: 700;
    letter-spacing: -.035em;
    line-height: 1.08;
  }

  .fade-up {
    animation: fadeUp .7s ease both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes float {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .blink { animation: blink 1s step-end infinite; }

  /* Hero two-column */
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    width: 100%;
  }

  /* Desktop nav hidden on mobile */
  .desk-nav { display: flex; }
  .mob-only  { display: none; }

  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 48px !important;
    }
    .hero-terminal { order: -1; }

    #stack .container > div:last-child {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }

  @media (max-width: 768px) {
    .desk-nav { display: none !important; }
    .mob-only  { display: flex !important; }

    #about .container {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .work-row {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 480px) {
    .section-title { font-size: 28px !important; }
  }

  a { transition: opacity .18s; }
  a:hover { opacity: .65; }
  button:hover { opacity: .85; }
`;