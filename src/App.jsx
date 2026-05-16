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

// ─────────────────────────────────────────────────────────
// 👇 REPLACE with your Formspree form ID
// 1. Sign up free at https://formspree.io
// 2. Create a New Form
// 3. Copy the ID from the endpoint URL
//    e.g. https://formspree.io/f/xyzabcde  →  paste "xyzabcde"
const FORMSPREE_ID = "https://formspree.io/f/mbdwnvdd";
// ─────────────────────────────────────────────────────────

/* ─── COMPONENT ─────────────────────────────────────────── */
export default function Saturnlab() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ── Modal state ──
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [modalSent, setModalSent] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  // ── CTA bottom form state ──
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSent, setCtaSent] = useState(false);
  const [ctaLoading, setCtaLoading] = useState(false);

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

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const bg    = dark ? "#000" : "#fff";
  const fg    = dark ? "#fff" : "#000";
  const surf  = dark ? "#0a0a0a" : "#f5f5f7";
  const bdr   = dark ? "#1c1c1c" : "#e8e8e8";
  const navBg = scrolled ? (dark ? "rgba(0,0,0,0.88)" : "rgba(255,255,255,0.88)") : "transparent";

  // ── Open modal helper ──
  const openModal = () => {
    setForm({ name: "", email: "", message: "" });
    setModalSent(false);
    setModalOpen(true);
    setMenuOpen(false);
  };

  // ── Submit modal form to Formspree ──
  const handleModalSubmit = async () => {
    if (!form.name || !form.email) return;
    setModalLoading(true);
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New Project Enquiry — Saturn Lab",
        }),
      });
      setModalSent(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setModalLoading(false);
  };

  // ── Submit CTA email to Formspree ──
  const handleCtaSubmit = async () => {
    if (!ctaEmail) return;
    setCtaLoading(true);
    try {
      await fetch(`https://formspree.io/f/mbdwnvdd`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: ctaEmail,
          _subject: "New Lead — Saturn Lab CTA",
        }),
      });
      setCtaSent(true);
      setCtaEmail("");
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setCtaLoading(false);
  };

  return (
    <div style={{ background: bg, color: fg, minHeight: "100vh", width: "100%", fontFamily: "'DM Sans', sans-serif", transition: "background .3s, color .3s" }}>
      <style>{css}</style>

      {/* ══ MODAL ══ */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: bg, border: `1px solid ${bdr}`, borderRadius: 20, padding: "40px 40px 44px", width: "100%", maxWidth: 500, position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: fg, opacity: .4, lineHeight: 1 }}
            >✕</button>

            {modalSent ? (
              /* Success */
              <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
                <div style={{ fontSize: 52, marginBottom: 20 }}>🪐</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 700, color: fg, marginBottom: 12, letterSpacing: "-.02em" }}>
                  Message received.
                </h3>
                <p style={{ fontSize: 16, color: fg, lineHeight: 1.6, marginBottom: 28, opacity: .6 }}>
                  We'll review your brief and get back within 24 hours.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  style={{ background: GREEN, color: "#000", border: "none", borderRadius: 10, padding: "13px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
                >Done</button>
              </div>
            ) : (
              /* Form */
              <>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", color: GREEN, marginBottom: 10, textTransform: "uppercase" }}>Saturn Lab</p>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 28, fontWeight: 700, color: fg, marginBottom: 8, letterSpacing: "-.02em" }}>
                  Start a Project
                </h3>
                <p style={{ fontSize: 14, color: fg, opacity: .5, marginBottom: 28, lineHeight: 1.6 }}>
                  Tell us what you're building. We'll scope it and reply within 24 hours.
                </p>

                <FieldLabel fg={fg}>Your Name *</FieldLabel>
                <input
                  type="text" placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  style={inputStyle(surf, bdr, fg)}
                />

                <FieldLabel fg={fg}>Email Address *</FieldLabel>
                <input
                  type="email" placeholder="you@example.com"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle(surf, bdr, fg)}
                />

                <FieldLabel fg={fg}>What are you building?</FieldLabel>
                <textarea
                  placeholder="Describe your project, budget, timeline..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle(surf, bdr, fg), resize: "none", marginBottom: 24 }}
                />

                <button
                  onClick={handleModalSubmit}
                  disabled={modalLoading || !form.name || !form.email}
                  style={{
                    width: "100%",
                    background: form.name && form.email ? GREEN : bdr,
                    color: form.name && form.email ? "#000" : fg,
                    border: "none", borderRadius: 10, padding: "15px",
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
                    cursor: form.name && form.email ? "pointer" : "not-allowed",
                    transition: "background .2s",
                    opacity: modalLoading ? .7 : 1,
                  }}
                >
                  {modalLoading ? "Sending..." : "Send Message →"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ══ NAV ══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none", WebkitBackdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${bdr}` : "1px solid transparent", transition: "all .3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, width: "100%" }}>

          <a href="#" style={{ textDecoration: "none", color: fg, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-.02em", flexShrink: 0 }}>
            Saturn<span style={{ color: GREEN }}>Lab</span>
          </a>

          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} style={{ color: fg, textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: ".01em" }}>{n}</a>
              ))}
            </nav>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setDark(d => !d)}
              style={{ background: "none", border: `1px solid ${bdr}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: fg, fontSize: 15 }}
              title="Toggle theme"
            >
              {dark ? "◑" : "◐"}
            </button>

            {!isMobile && (
              <button
                onClick={openModal}
                style={{ background: fg, color: bg, border: "none", borderRadius: 8, padding: "9px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
              >
                Start a Project
              </button>
            )}

            {isMobile && (
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{ background: "none", border: `1px solid ${bdr}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}
              >
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobile && (
          <div style={{ overflow: "hidden", maxHeight: menuOpen ? 460 : 0, transition: "max-height .35s ease", background: bg, borderBottom: menuOpen ? `1px solid ${bdr}` : "none" }}>
            <div style={{ padding: "16px 24px 28px", display: "flex", flexDirection: "column" }}>
              {NAV.map((n, i, arr) => (
                <a key={n} href={`#${n.toLowerCase()}`}
                  style={{ color: fg, textDecoration: "none", fontSize: 22, fontWeight: 600, fontFamily: "'Outfit', sans-serif", padding: "14px 0", borderBottom: i < arr.length - 1 ? `1px solid ${bdr}` : "none", display: "block" }}
                  onClick={() => setMenuOpen(false)}>
                  {n}
                </a>
              ))}
              <button
                onClick={openModal}
                style={{ marginTop: 20, background: fg, color: bg, border: "none", borderRadius: 8, padding: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer" }}
              >
                Start a Project
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 0 80px" }}>
        <div className="container hero-grid">

          <div className="fade-up" style={{ animationDelay: ".1s" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: ".18em", color: GREEN, marginBottom: 24, textTransform: "uppercase" }}>
              Software Agency
            </p>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(42px, 5.5vw, 80px)", lineHeight: 1.03, letterSpacing: "-.04em", marginBottom: 24, color: fg }}>
              We build<br />software<br />that works.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.7, marginBottom: 40, fontWeight: 400, maxWidth: 440, color: fg }}>
              Saturn Lab ships Web3 infrastructure and business-grade web products — from DeFi protocols to e-commerce platforms.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
              <a href="#services"
                style={{ background: fg, color: bg, textDecoration: "none", borderRadius: 100, padding: "13px 28px", fontSize: 14, fontWeight: 600, display: "inline-block" }}
                onMouseEnter={e => e.target.style.opacity = ".8"}
                onMouseLeave={e => e.target.style.opacity = "1"}>
                See Our Services
              </a>
              <a href="#work"
                style={{ color: fg, textDecoration: "none", borderRadius: 100, padding: "13px 28px", fontSize: 14, fontWeight: 600, border: `1.5px solid ${bdr}`, display: "inline-block" }}
                onMouseEnter={e => e.target.style.borderColor = fg}
                onMouseLeave={e => e.target.style.borderColor = bdr}>
                View Work
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${bdr}`, paddingTop: 28 }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{ borderRight: i < 3 ? `1px solid ${bdr}` : "none", paddingRight: 16 }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, letterSpacing: "-.03em", marginBottom: 2, color: fg }}>{s.val}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".07em", textTransform: "uppercase", color: fg, opacity: .45 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up hero-terminal" style={{ animationDelay: ".25s" }}>
            <div style={{ background: dark ? "#111" : "#f0f0f2", border: `1px solid ${bdr}`, borderRadius: 14, overflow: "hidden", boxShadow: dark ? "0 32px 80px rgba(0,0,0,0.6)" : "0 20px 60px rgba(0,0,0,0.08)", animation: "float 6s ease-in-out infinite" }}>
              <div style={{ background: dark ? "#1a1a1a" : "#e4e4e4", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: `1px solid ${bdr}` }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 11, color: fg, opacity: .35, marginLeft: "auto" }}>saturn-lab.sh</span>
              </div>
              <div style={{ padding: "22px 24px 28px", fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 13, lineHeight: 2.1 }}>
                <p style={{ color: fg, opacity: .35 }}>$ <span style={{ color: fg, opacity: 1, fontWeight: 700 }}>init</span> saturn-lab --type agency</p>
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
            {SERVICES.map((s) => (
              <div key={s.id} className="service-card"
                style={{ background: bg, padding: "40px 36px 44px", position: "relative", cursor: "default", transition: "background .2s" }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? "#111" : "#f0f0f2"}
                onMouseLeave={e => e.currentTarget.style.background = bg}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                  <span style={{ fontFamily: "'Outfit', monospace", fontSize: 11, fontWeight: 700, letterSpacing: ".16em", color: GREEN, background: `${GREEN}18`, padding: "4px 12px", borderRadius: 100 }}>
                    {s.category === "CRYPTO" ? "CRYPTO" : s.category === "SAAS" ? "SAAS" : "GROWTH"}
                  </span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: GREEN, opacity: .5 }}>{s.id}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 16, color: fg, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: fg, fontWeight: 400 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WORK ══ */}
      <section id="work" style={{ padding: "100px 0" }}>
        <div className="container">
          <Label fg={fg} green={GREEN}>Selected Work</Label>
          <h2 className="section-title" style={{ color: fg }}>Projects we've shipped.</h2>
          <div style={{ marginTop: 56, display: "flex", flexDirection: "column" }}>
            {WORKS.map((w, i) => (
              <div key={w.name} className="work-row"
                style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", alignItems: "center", gap: "0 32px", padding: "32px 0", borderTop: `1px solid ${bdr}`, borderBottom: i === WORKS.length - 1 ? `1px solid ${bdr}` : "none" }}>
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
                <span style={{ fontSize: 20, color: bdr }}>→</span>
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
            <div style={{ border: `1px solid ${bdr}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "18px 28px", borderBottom: `1px solid ${bdr}`, background: dark ? "#0d0d0d" : "#ececec" }}>
                <span style={{ fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 10, fontWeight: 700, letterSpacing: ".22em", color: fg, textTransform: "uppercase" }}>Our Stack</span>
              </div>
              {STACK.map((row, i) => (
                <div key={row.label}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderBottom: i < STACK.length - 1 ? `1px solid ${bdr}` : "none", background: bg, transition: "background .18s" }}
                  onMouseEnter={e => e.currentTarget.style.background = dark ? "#111" : "#f5f5f7"}
                  onMouseLeave={e => e.currentTarget.style.background = bg}>
                  <span style={{ fontFamily: "'DM Mono', 'Space Mono', monospace", fontSize: 12, color: fg, letterSpacing: ".04em" }}>{row.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: fg, textAlign: "right" }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 8 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 20, color: fg }}>Proven tools.<br />Reliable results.</h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: fg, marginBottom: 24 }}>
                We don't chase trends. Every tool in our stack is production-tested — chosen for speed, reliability, and the ability to ship at scale.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: fg }}>
                From React frontends to Supabase backends and on-chain Solidity logic, the same stack powers every Saturn Lab project.
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
              Saturn Lab operates at a rare intersection — deep crypto and Web3 expertise paired with proven experience scaling businesses online.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: fg }}>
              We don't outsource, we don't cut corners. Every project gets the same rigour whether it's a DeFi protocol or a local brand's digital presence.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", border: `1px solid ${bdr}`, borderRadius: 16, overflow: "hidden" }}>
            {["Crypto-native from day one", "Paystack & Stripe integrated", "Full-stack, no outsourcing", "Rapid iteration, clear milestones", "Web3 + traditional business"].map((item, i, arr) => (
              <div key={item}
                style={{ padding: "20px 28px", borderBottom: i < arr.length - 1 ? `1px solid ${bdr}` : "none", display: "flex", alignItems: "center", gap: 16, background: bg, transition: "background .2s" }}
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
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".18em", color: GREEN, marginBottom: 24, textTransform: "uppercase" }}>
            Ready to Build?
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1.05, marginBottom: 20, color: bg }}>
            Let's turn your<br />idea into a product.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, marginBottom: 40, color: bg, opacity: .6 }}>
            Drop us a line. We'll scope it, price it, and ship it.
          </p>

          {ctaSent ? (
            <div style={{ padding: "20px 0 8px" }}>
              <p style={{ fontSize: 24, fontWeight: 700, color: GREEN, fontFamily: "'Outfit', sans-serif", marginBottom: 8 }}>🪐 We'll be in touch.</p>
              <p style={{ fontSize: 15, color: bg, opacity: .55 }}>Expect a reply within 24 hours.</p>
            </div>
          ) : (
            <div style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto 16px", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="Your email address"
                value={ctaEmail}
                onChange={e => setCtaEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCtaSubmit()}
                style={{ flex: 1, minWidth: 200, background: dark ? "#1a1a1a" : "#efefef", border: "none", borderRadius: 10, padding: "15px 18px", fontSize: 15, color: bg, fontFamily: "'DM Sans', sans-serif", outline: "none" }}
              />
              <button
                onClick={handleCtaSubmit}
                disabled={ctaLoading || !ctaEmail}
                style={{ background: GREEN, color: "#000", border: "none", borderRadius: 10, padding: "15px 24px", fontSize: 15, fontWeight: 700, cursor: ctaEmail ? "pointer" : "not-allowed", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap", opacity: ctaLoading ? .7 : 1 }}
              >
                {ctaLoading ? "Sending..." : "Get Started →"}
              </button>
            </div>
          )}

          <p style={{ fontSize: 12, color: bg, opacity: .3, letterSpacing: ".08em" }}>· REPLY WITHIN 24 HOURS ·</p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ padding: "32px 0", borderTop: `1px solid ${bdr}`, background: bg, transition: "background .3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "-.01em", color: fg }}>
            Saturn<span style={{ color: GREEN }}>Lab</span>
          </span>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Twitter", url: "https://x.com/Joseph_mandem" },
              { label: "GitHub",   url: "https://github.com" },
              { label: "LinkedIn", url: "https://linkedin.com" },
              { label: "Telegram", url: "https://t.me" },
            ].map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                style={{ color: fg, textDecoration: "none", fontSize: 13, fontWeight: 500, opacity: .45 }}>
                {l.label}
              </a>
            ))}
          </div>
          <span style={{ fontSize: 12, color: fg, opacity: .3, letterSpacing: ".04em" }}>© 2026 SATURN-LAB</span>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ── */
function Label({ fg, green, children }) {
  return (
    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".18em", color: green, marginBottom: 16, textTransform: "uppercase" }}>
      {children}
    </p>
  );
}

function FieldLabel({ fg, children }) {
  return (
    <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: fg, opacity: .45, marginBottom: 8, textTransform: "uppercase" }}>
      {children}
    </label>
  );
}

const inputStyle = (surf, bdr, fg) => ({
  width: "100%",
  background: surf,
  border: `1px solid ${bdr}`,
  borderRadius: 10,
  padding: "13px 16px",
  fontSize: 15,
  color: fg,
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  marginBottom: 16,
  display: "block",
});

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

  .fade-up { animation: fadeUp .7s ease both; }
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

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
    .hero-terminal { order: -1; }
    #stack .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
  }

  @media (max-width: 768px) {
    #about .container { grid-template-columns: 1fr !important; gap: 40px !important; }
    .work-row { grid-template-columns: 1fr !important; gap: 12px !important; }
  }

  @media (max-width: 480px) {
    .section-title { font-size: 28px !important; }
  }

  a { transition: opacity .18s; }
  a:hover { opacity: .65; }
  button:hover { opacity: .85; }
  input::placeholder, textarea::placeholder { opacity: .35; }
`;