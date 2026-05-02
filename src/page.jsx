import { useState, useEffect } from "react";

const NAV_LINKS = ["Services", "Work", "About", "Contact"];

const SERVICES = [
  { tag: "CRYPTO & WEB3", title: "DeFi & Blockchain Solutions", desc: "Smart contracts, DEX integrations, token dashboards, and Web3 dApps built for scale and security.", icon: "⬡" },
  { tag: "CRYPTO & WEB3", title: "Crypto Payment Integration", desc: "Accept crypto on any platform. Multi-chain wallets, on-ramp flows, and real-time price tracking.", icon: "◈" },
  { tag: "BUSINESS GROWTH", title: "Web Presence & E-Commerce", desc: "High-converting storefronts, brand sites, and custom CMS platforms engineered to drive revenue.", icon: "▲" },
  { tag: "BUSINESS GROWTH", title: "SaaS Product Development", desc: "From MVP to production. Full-stack SaaS apps with auth, billing, dashboards, and integrations.", icon: "◉" },
  { tag: "BUSINESS GROWTH", title: "API & Backend Engineering", desc: "Scalable REST & GraphQL APIs, serverless functions, and database architectures that hold up.", icon: "⬟" },
  { tag: "CRYPTO & WEB3", title: "NFT & Token Platforms", desc: "Minting platforms, marketplace UI, royalty logic, and wallet-gated communities.", icon: "◆" },
];

const STATS = [
  { val: "40+", label: "Projects Shipped" },
  { val: "3", label: "Blockchain Networks" },
  { val: "98%", label: "Client Retention" },
  { val: "12", label: "Countries Served" },
];

const WORKS = [
  { name: "Solar Trendit", type: "Business Growth · E-Commerce", desc: "Full-stack platform connecting solar businesses with customers. Lead gen + product catalog + payment flows.", shape: "▲", idx: "01" },
  { name: "CoinPulse", type: "Crypto · SaaS Dashboard", desc: "Real-time meme coin tracker with tiered subscriptions, Paystack billing, and Supabase backend.", shape: "⬡", idx: "02" },
  { name: "ChainVault", type: "Crypto · DeFi", desc: "Multi-chain portfolio manager with live price feeds, P&L analytics, and wallet connect.", shape: "◈", idx: "03" },
];

const STACK = [
  { cat: "Frontend", items: "React · TypeScript · Tailwind" },
  { cat: "Backend", items: "Supabase · Node · Edge Fn" },
  { cat: "Web3", items: "ethers.js · wagmi · Solidity" },
  { cat: "Payments", items: "Paystack · Stripe · Crypto" },
  { cat: "Deploy", items: "Vercel · Railway · Cloudflare" },
];

function SectionLabel({ t, children, center }) {
  return (
    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.textFaint, letterSpacing: "0.14em", marginBottom: 18, textAlign: center ? "center" : "left" }}>
      {children}
    </div>
  );
}

export default function ByteKraft() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = dark
    ? {
        bg: "#0C0C0C", bg2: "#111", surface: "#161616",
        border: "rgba(255,255,255,0.07)", borderHover: "rgba(255,255,255,0.2)",
        text: "#EFEFEF", textMuted: "#666", textFaint: "#333",
        navBg: "rgba(12,12,12,0.9)",
        pill: "rgba(255,255,255,0.04)", pillBorder: "rgba(255,255,255,0.1)", pillText: "#888",
        btn: "#fff", btnText: "#0C0C0C",
        ghostBorder: "rgba(255,255,255,0.12)", ghostText: "#555",
        termBg: "#141414", termBar: "#1b1b1b", termText: "#888", termFaint: "#3a3a3a",
        termCheck: "#555", termReady: "#ccc",
        cardHover: "#1a1a1a",
        workTop: "#131313", workShape: "#2a2a2a", workIdx: "#1e1e1e",
        workType: "#444", workLink: "#888",
        stackCat: "#444", stackItem: "#aaa", stackDivider: "rgba(255,255,255,0.04)",
        ctaBg: "#090909", ctaInput: "#141414", ctaInputBorder: "rgba(255,255,255,0.08)",
        footerBorder: "rgba(255,255,255,0.05)", footerLink: "#444", footerCopy: "#252525",
        toggleBg: "#1a1a1a", toggleBorder: "rgba(255,255,255,0.08)", toggleText: "#444",
        toggleIcon: "○", toggleLabel: "LIGHT",
      }
    : {
        bg: "#F8F8F8", bg2: "#F1F1F1", surface: "#FFFFFF",
        border: "rgba(0,0,0,0.07)", borderHover: "rgba(0,0,0,0.2)",
        text: "#111", textMuted: "#888", textFaint: "#bbb",
        navBg: "rgba(248,248,248,0.9)",
        pill: "rgba(0,0,0,0.04)", pillBorder: "rgba(0,0,0,0.09)", pillText: "#999",
        btn: "#111", btnText: "#fff",
        ghostBorder: "rgba(0,0,0,0.12)", ghostText: "#bbb",
        termBg: "#fff", termBar: "#f0f0f0", termText: "#888", termFaint: "#ccc",
        termCheck: "#bbb", termReady: "#333",
        cardHover: "#fff",
        workTop: "#eee", workShape: "#d4d4d4", workIdx: "#e6e6e6",
        workType: "#bbb", workLink: "#999",
        stackCat: "#bbb", stackItem: "#555", stackDivider: "rgba(0,0,0,0.04)",
        ctaBg: "#EFEFEF", ctaInput: "#fff", ctaInputBorder: "rgba(0,0,0,0.09)",
        footerBorder: "rgba(0,0,0,0.07)", footerLink: "#bbb", footerCopy: "#ccc",
        toggleBg: "#fff", toggleBorder: "rgba(0,0,0,0.09)", toggleText: "#bbb",
        toggleIcon: "●", toggleLabel: "DARK",
      };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: t.bg, color: t.text, minHeight: "100vh", overflowX: "hidden", transition: "background 0.35s, color 0.35s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .blink { animation: blink 1s step-end infinite; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .svc-card { transition: transform 0.22s, border-color 0.22s, background 0.22s; }
        .svc-card:hover { transform: translateY(-3px); }
        a { transition: opacity 0.18s; }
        a:hover { opacity: 0.55; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? t.navBg : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: `1px solid ${scrolled ? t.border : "transparent"}`, transition: "all 0.3s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 15, fontWeight: 700, color: t.text, letterSpacing: "-0.01em" }}>
            <span style={{ opacity: 0.28 }}>[</span>ByteKraft<span style={{ opacity: 0.28 }}>]</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: t.textMuted, textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>{l}</a>
            ))}

            {/* Lowkey theme toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              style={{ display: "flex", alignItems: "center", gap: 7, background: t.toggleBg, border: `1px solid ${t.toggleBorder}`, borderRadius: 100, padding: "5px 11px 5px 9px", cursor: "pointer", fontFamily: "'Space Mono', monospace", transition: "all 0.3s" }}
              title="Toggle theme"
            >
              <span style={{ fontSize: 9, color: t.toggleText, lineHeight: 1 }}>{t.toggleIcon}</span>
              <span style={{ fontSize: 9, color: t.toggleText, letterSpacing: "0.1em" }}>{t.toggleLabel}</span>
            </button>

            <button style={{ background: t.btn, color: t.btnText, border: "none", borderRadius: 4, padding: "8px 18px", fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em", transition: "opacity 0.2s" }}>
              Start a Project
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 80px", maxWidth: 1200, margin: "0 auto", gap: 48 }}>
        <div style={{ flex: 1, animation: "fadeUp 0.7s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.pill, border: `1px solid ${t.pillBorder}`, borderRadius: 100, padding: "5px 14px", fontSize: 10, fontFamily: "'Space Mono', monospace", color: t.pillText, letterSpacing: "0.1em", marginBottom: 28 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: t.textFaint, display: "inline-block" }} />
            Web3 · SaaS · Business Growth
          </div>

          <h1 style={{ fontSize: "clamp(44px, 6vw, 74px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            <span style={{ display: "block" }}>We Build</span>
            <span style={{ display: "block" }}>Digital Products</span>
            <span style={{ display: "block", color: t.textMuted }}>That Perform.</span>
          </h1>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.textMuted, maxWidth: 460, marginBottom: 36 }}>
            ByteKraft is a software agency at the intersection of{" "}
            <strong style={{ color: t.text, fontWeight: 700 }}>crypto infrastructure</strong> and{" "}
            <strong style={{ color: t.text, fontWeight: 700 }}>business-grade web solutions</strong>.
            We ship products that work.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 }}>
            <button style={{ display: "flex", alignItems: "center", gap: 8, background: t.btn, color: t.btnText, border: "none", borderRadius: 4, padding: "13px 24px", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Get a Free Scope <span>→</span>
            </button>
            <button style={{ background: "transparent", color: t.ghostText, border: `1px solid ${t.ghostBorder}`, borderRadius: 4, padding: "13px 24px", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              See Our Work ↓
            </button>
          </div>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", borderTop: `1px solid ${t.border}`, paddingTop: 28 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: t.text, letterSpacing: "-0.02em" }}>{s.val}</span>
                <span style={{ fontSize: 10, color: t.textFaint, fontFamily: "'Space Mono', monospace", letterSpacing: "0.07em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
          <div style={{ background: t.termBg, border: `1px solid ${t.border}`, borderRadius: 10, overflow: "hidden", width: "100%", maxWidth: 390, boxShadow: dark ? "0 28px 72px rgba(0,0,0,0.55)" : "0 20px 56px rgba(0,0,0,0.07)", animation: "float 6s ease-in-out infinite", transition: "background 0.3s, box-shadow 0.3s" }}>
            <div style={{ background: t.termBar, padding: "11px 15px", display: "flex", alignItems: "center", gap: 7, borderBottom: `1px solid ${t.border}` }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.textFaint, marginLeft: "auto" }}>bytekraft.sh</span>
            </div>
            <div style={{ padding: "18px 20px 22px", fontFamily: "'Space Mono', monospace", fontSize: 12, lineHeight: 2.1, color: t.termText }}>
              <p><span style={{ color: t.termFaint }}>$ </span><span style={{ color: t.text, fontWeight: 700 }}>init</span>{" bytekraft --type agency"}</p>
              <p><span style={{ color: t.termFaint }}>▸ Loading stack...</span></p>
              {["React + TypeScript", "Supabase + Edge Functions", "Web3 / ethers.js", "Paystack + Stripe"].map((item) => (
                <p key={item}><span style={{ color: t.termCheck }}>✓</span> {item}</p>
              ))}
              <p><span style={{ color: t.textMuted }}>✓</span> <span style={{ color: t.termReady }}>Agency ready. </span><span className="blink" style={{ color: t.textMuted }}>▌</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "96px 32px", background: t.bg2, transition: "background 0.35s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel t={t}>// WHAT WE BUILD</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48, lineHeight: 1.1, color: t.text }}>
            Crypto-Native.<br /><span style={{ color: t.textMuted }}>Business-Proven.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="svc-card"
                style={{ background: activeService === i ? t.cardHover : t.surface, border: `1px solid ${activeService === i ? t.borderHover : t.border}`, borderRadius: 8, padding: "24px 24px 20px", cursor: "pointer" }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: t.textFaint, letterSpacing: "0.12em", border: `1px solid ${t.border}`, borderRadius: 100, padding: "3px 10px", display: "inline-block", marginBottom: 18 }}>
                  {s.tag}
                </span>
                <div style={{ fontSize: 24, marginBottom: 10, color: t.textMuted, lineHeight: 1 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 9, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.7, marginBottom: 12 }}>{s.desc}</p>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, color: t.textFaint, opacity: activeService === i ? 1 : 0, transition: "opacity 0.2s" }}>Explore →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: "96px 32px", background: t.bg, transition: "background 0.35s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel t={t}>// RECENT WORK</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48, lineHeight: 1.1, color: t.text }}>
            Ships We've <span style={{ color: t.textMuted }}>Launched</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {WORKS.map((w, i) => (
              <div key={i} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, overflow: "hidden", transition: "background 0.3s" }}>
                <div style={{ height: 124, background: t.workTop, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: `1px solid ${t.border}` }}>
                  <span style={{ fontSize: 52, color: t.workShape, lineHeight: 1 }}>{w.shape}</span>
                  <span style={{ position: "absolute", bottom: 8, right: 14, fontFamily: "'Space Mono', monospace", fontSize: 32, fontWeight: 700, color: t.workIdx, lineHeight: 1 }}>{w.idx}</span>
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.1em", color: t.workType, marginBottom: 8 }}>{w.type}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: t.text, marginBottom: 9, letterSpacing: "-0.02em" }}>{w.name}</h3>
                  <p style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.7, marginBottom: 16 }}>{w.desc}</p>
                  <button style={{ background: "none", border: "none", fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, color: t.workLink, cursor: "pointer", padding: 0, letterSpacing: "0.04em" }}>View Case Study →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "96px 32px", background: t.bg2, transition: "background 0.35s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <SectionLabel t={t}>// WHY BYTEKRAFT</SectionLabel>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.1, color: t.text }}>
              Built Different.<br /><span style={{ color: t.textMuted }}>Wired for Results.</span>
            </h2>
            <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.85, marginBottom: 14 }}>
              We don't just write code — we understand the business context behind every line. ByteKraft sits at a rare intersection: deep crypto/Web3 expertise and proven experience scaling real-world businesses online.
            </p>
            <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.85, marginBottom: 28 }}>
              Whether you're launching a DeFi protocol or a local business that needs a serious online presence, we treat every project like our own product.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {["Crypto-native stack from day one", "Paystack & Stripe payment integration", "Full-stack ownership — no outsourcing", "Rapid iteration with clear milestones"].map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14, color: t.text, fontWeight: 600 }}>
                  <span style={{ fontSize: 6, color: t.textFaint }}>◆</span>{f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, overflow: "hidden", transition: "background 0.3s" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: t.textFaint, letterSpacing: "0.14em", padding: "13px 20px", borderBottom: `1px solid ${t.border}` }}>OUR STACK</div>
              {STACK.map((row, i) => (
                <div key={row.cat} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", borderBottom: i < STACK.length - 1 ? `1px solid ${t.stackDivider}` : "none" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.stackCat, letterSpacing: "0.06em" }}>{row.cat}</span>
                  <span style={{ fontSize: 13, color: t.stackItem, fontWeight: 600 }}>{row.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{ padding: "108px 32px", background: t.ctaBg, textAlign: "center", position: "relative", overflow: "hidden", transition: "background 0.35s" }}>
        <div style={{ position: "relative", maxWidth: 540, margin: "0 auto" }}>
          <SectionLabel t={t} center>// READY TO BUILD?</SectionLabel>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1, color: t.text }}>
            Let's turn your idea<br /><span style={{ color: t.textMuted }}>into a product.</span>
          </h2>
          <p style={{ fontSize: 15, color: t.textMuted, marginBottom: 32 }}>Drop us your brief. We'll scope it, price it, and ship it.</p>
          <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto 12px" }}>
            <input style={{ flex: 1, background: t.ctaInput, border: `1px solid ${t.ctaInputBorder}`, borderRadius: 4, padding: "12px 15px", color: t.text, fontFamily: "'Syne', sans-serif", fontSize: 14, outline: "none", transition: "background 0.3s" }} placeholder="Your email address" type="email" />
            <button style={{ background: t.btn, color: t.btnText, border: "none", borderRadius: 4, padding: "12px 20px", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              Get Started →
            </button>
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.textFaint, letterSpacing: "0.07em" }}>Response within 24 hours · No commitment required</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${t.footerBorder}`, padding: "32px 32px", background: t.bg, transition: "background 0.35s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: 700, color: t.text }}>
            <span style={{ opacity: 0.25 }}>[</span>ByteKraft<span style={{ opacity: 0.25 }}>]</span>
          </div>
          <div style={{ display: "flex", gap: 22 }}>
            {["Twitter", "GitHub", "LinkedIn", "Telegram"].map((l) => (
              <a key={l} href="#" style={{ color: t.footerLink, textDecoration: "none", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>{l}</a>
            ))}
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.footerCopy, letterSpacing: "0.06em" }}>© 2025 ByteKraft · Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}