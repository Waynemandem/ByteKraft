import { useState, useEffect } from "react";

/* ─── DATA ─────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "01",
    category: "GROWTH",
    title: "Business Websites & E-Commerce",
    desc: "High-converting websites and online stores built to turn visitors into paying customers. Paystack integrated, mobile-first, fast.",
    tags: ["Landing Pages", "E-Commerce", "Paystack", "SEO"],
  },
  {
    id: "02",
    category: "GROWTH",
    title: "Social Media Marketing",
    desc: "Content systems, growth funnels, and ad campaigns that build audiences and drive real revenue for your business.",
    tags: ["Content Strategy", "Paid Ads", "Growth Funnels", "Analytics"],
  },
  {
    id: "03",
    category: "SAAS",
    title: "SaaS Product Development",
    desc: "Full-stack SaaS platforms from MVP to production. Auth, billing, dashboards, and integrations — shipped fast.",
    tags: ["React", "Supabase", "Stripe", "Paystack"],
  },
  {
    id: "04",
    category: "CRYPTO",
    title: "Crypto & Web3",
    desc: "Smart contracts, DeFi protocols, DEX integrations, and token dashboards engineered for scale, speed, and security.",
    tags: ["Solidity", "ethers.js", "DeFi", "NFT"],
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
    result: "₦2.4M in sales · First 60 days",
    color: "#FF9500",
  },
  {
    num: "02",
    name: "CoinPulse",
    tags: ["Crypto", "SaaS"],
    desc: "Real-time meme coin tracker with tiered subscriptions, Supabase backend, and Paystack billing integration.",
    result: "500+ users · First month",
    color: "#5B3FA6",
  },
  {
    num: "03",
    name: "ChainVault",
    tags: ["DeFi", "Web3"],
    desc: "Multi-chain portfolio manager with live price feeds, P&L analytics, and multi-wallet support.",
    result: "$1.2M TVL · First week",
    color: "#06b646",
  },
  {
    num: "04",
    name: "SLUT Store",
    tags: ["E-Commerce", "Fashion"],
    desc: "Full e-commerce store for a Lagos fashion brand. Product listings, cart, checkout, and order management.",
    result: "300% increase in online sales",
    color: "#FF4D00",
  },
];

// Our own SaaS products
const PRODUCTS = [
  {
    name: "OrbitCV",
    tagline: "AI-powered resume builder",
    desc: "Build professional, ATS-friendly resumes in minutes. AI writes your bullet points, generates summaries, and suggests skills. Three templates, one-click PDF export.",
    status: "LIVE",
    url: "https://orbitcv.vercel.app",
    tags: ["AI", "SaaS", "Resume", "Career"],
    color: "#5B3FA6",
    stats: [
      { val: "30+", label: "Templates" },
      { val: "AI", label: "Powered" },
      { val: "PDF", label: "Export" },
    ],
  },
  {
    name: "Solar Trendit",
    tagline: "Solar marketplace for Nigeria",
    desc: "Connecting solar suppliers with customers across Nigeria. Browse products, compare prices, and pay securely with Paystack.",
    status: "LIVE",
    url: "https://trendit-solar.vercel.app",
    tags: ["E-Commerce", "Solar", "Green Energy"],
    color: "#FF9500",
    stats: [
      { val: "20+", label: "Products" },
      { val: "₦2.4M", label: "Sales" },
      { val: "NGN", label: "Paystack" },
    ],
  },
  {
    name: "Apex-trader",
    tagline: "Real-time meme coin tracker",
    desc: "Track coins in real time with Alert system, live price feeds, and candlestick charts.",
    status: "LIVE",
    url: "https://apextrader-beta.vercel.app/",
    tags: ["Crypto", "SaaS", "DeFi"],
    color: "#06b646",
    stats: [
      { val: "100+", label: "Users" },
      { val: "<1 seconds", label: "Realtime Alert" },
      { val: "Live", label: "Prices" },
    ],
  },
];

const STATS = [
  { val: "10+", label: "Projects Shipped" },
  { val: "3",   label: "Live Products" },
  { val: "98%", label: "Client Retention" },
  { val: "4",   label: "Countries" },
];

const RESULTS = [
  {
    metric: "₦2.4M",
    context: "in sales generated for Solar Trendit in the first 60 days after launch.",
    tag: "E-Commerce",
    color: "#FF9500",
  },
  {
    metric: "300%",
    context: "increase in online revenue for a Lagos fashion brand after rebuilding their store.",
    tag: "Business Growth",
    color: "#06b646",
  },
  {
    metric: "500+",
    context: "active users on CoinPulse SaaS within the first month of launch.",
    tag: "SaaS",
    color: "#5B3FA6",
  },
  {
    metric: "$1.2M",
    context: "TVL reached on ChainVault DeFi platform in the first week.",
    tag: "Web3",
    color: "#FF4D00",
  },
];

const WHY = [
  { title: "We ship fast",       desc: "Most projects delivered in 1–3 weeks." },
  { title: "No outsourcing",     desc: "Every line of code written in-house." },
  { title: "Results focused",    desc: "We measure success by your revenue." },
  { title: "Full stack",         desc: "Design, dev, and deployment in one roof." },
  { title: "Africa-native",      desc: "Paystack, Flutterwave, local context built in." },
  { title: "Post-launch support",desc: "30 days free support after every project." },
];

const NAV = ["Services", "Products", "Work", "Contact"];
const ACCENT = "#FF4D00";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

/* ─── HELPERS ───────────────────────────────────────────── */
function Label({ fg, accent, children }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", color: accent, marginBottom: 16, textTransform: "uppercase" }}>
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
  width: "100%", background: surf,
  border: `1px solid ${bdr}`, borderRadius: 10,
  padding: "13px 16px", fontSize: 15, color: fg,
  fontFamily: "'DM Sans', sans-serif", outline: "none",
  marginBottom: 16, display: "block",
});

/* ─── COMPONENT ─────────────────────────────────────────── */
export default function AxionDigital() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeService, setActiveService] = useState(null);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", budget: "" });
  const [modalSent, setModalSent] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const bg   = dark ? "#0A0A0A" : "#FAFAFA";
  const fg   = dark ? "#F0EDE8" : "#0A0A0A";
  const surf = dark ? "#111"    : "#F0F0F0";
  const bdr  = dark ? "#1F1F1F" : "#E4E2EE";
  const navBg = scrolled ? (dark ? "rgba(10,10,10,0.92)" : "rgba(250,250,250,0.92)") : "transparent";

  const openModal = () => {
    setForm({ name: "", email: "", message: "", budget: "" });
    setModalSent(false);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const handleModalSubmit = async () => {
    if (!form.name || !form.email) return;
    setModalLoading(true);
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: "New Project Enquiry — Axion Digital" }),
      });
      setModalSent(true);
    } catch {
      alert("Failed to send. Please email us directly.");
    }
    setModalLoading(false);
  };

  return (
    <div style={{ background: bg, color: fg, minHeight: "100vh", width: "100%", fontFamily: "'DM Sans', sans-serif", transition: "background .3s, color .3s" }}>
      <style>{css}</style>

      {/* ══ MODAL ══ */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(12px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: bg, border: `1px solid ${bdr}`, borderRadius: 20, padding: "40px 40px 44px", width: "100%", maxWidth: 520, position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
            <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: fg, opacity: .4 }}>✕</button>

            {modalSent ? (
              <div style={{ textAlign: "center", padding: "24px 0 8px" }}>
                <div style={{ fontSize: 52, marginBottom: 20 }}>⚡</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 700, color: fg, marginBottom: 12 }}>Message received.</h3>
                <p style={{ fontSize: 15, color: fg, opacity: .6, marginBottom: 28, lineHeight: 1.6 }}>We'll scope your project and get back within 24 hours.</p>
                <button onClick={() => setModalOpen(false)} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 10, padding: "13px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Done</button>
              </div>
            ) : (
              <>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", color: ACCENT, marginBottom: 10, textTransform: "uppercase" }}>Axion Digital</p>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 700, color: fg, marginBottom: 8, letterSpacing: "-.02em" }}>Start a Project</h3>
                <p style={{ fontSize: 14, color: fg, opacity: .5, marginBottom: 28, lineHeight: 1.6 }}>Tell us what you're building. Free scope + quote in 24 hours.</p>

                <FieldLabel fg={fg}>Your Name *</FieldLabel>
                <input type="text" placeholder="John Doe" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle(surf, bdr, fg)} />

                <FieldLabel fg={fg}>Email Address *</FieldLabel>
                <input type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle(surf, bdr, fg)} />

                <FieldLabel fg={fg}>Budget Range</FieldLabel>
                <select value={form.budget} onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} style={{ ...inputStyle(surf, bdr, fg), cursor: "pointer" }}>
                  <option value="">Select budget range</option>
                  <option>₦150k – ₦500k</option>
                  <option>₦500k – ₦2M</option>
                  <option>₦2M – ₦5M</option>
                  <option>₦5M+</option>
                  <option>Let's discuss</option>
                </select>

                <FieldLabel fg={fg}>What are you building?</FieldLabel>
                <textarea placeholder="Describe your project, timeline, goals..." rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ ...inputStyle(surf, bdr, fg), resize: "none", marginBottom: 24 }} />

                <button
                  onClick={handleModalSubmit}
                  disabled={modalLoading || !form.name || !form.email}
                  style={{ width: "100%", background: form.name && form.email ? ACCENT : bdr, color: form.name && form.email ? "#fff" : fg, border: "none", borderRadius: 10, padding: "15px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, cursor: form.name && form.email ? "pointer" : "not-allowed", opacity: modalLoading ? .7 : 1, transition: "background .2s" }}
                >
                  {modalLoading ? "Sending..." : "Send Message →"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ══ NAV ══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${bdr}` : "1px solid transparent", transition: "all .3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, width: "100%" }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", color: fg, fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-.02em", flexShrink: 0, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 28, height: 28, background: ACCENT, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff" }}>A</span>
            Axion<span style={{ color: ACCENT }}>Digital</span>
          </a>

          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} style={{ color: fg, textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: ".01em", opacity: .6, transition: "opacity .2s" }}
                  onMouseEnter={e => e.target.style.opacity = "1"}
                  onMouseLeave={e => e.target.style.opacity = ".6"}
                >{n}</a>
              ))}
            </nav>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setDark(d => !d)} style={{ background: "none", border: `1px solid ${bdr}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: fg, fontSize: 15 }} title="Toggle theme">
              {dark ? "◑" : "◐"}
            </button>

            {!isMobile && (
              <button onClick={openModal} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "opacity .2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Start a Project →
              </button>
            )}

            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: `1px solid ${bdr}`, borderRadius: 8, width: 36, height: 36, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: "block", width: 18, height: 1.5, background: fg, transition: "all .25s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
              </button>
            )}
          </div>
        </div>

        {isMobile && (
          <div style={{ overflow: "hidden", maxHeight: menuOpen ? 480 : 0, transition: "max-height .35s ease", background: bg, borderBottom: menuOpen ? `1px solid ${bdr}` : "none" }}>
            <div style={{ padding: "16px 24px 28px", display: "flex", flexDirection: "column" }}>
              {NAV.map((n, i, arr) => (
                <a key={n} href={`#${n.toLowerCase()}`}
                  style={{ color: fg, textDecoration: "none", fontSize: 22, fontWeight: 600, fontFamily: "'Outfit', sans-serif", padding: "14px 0", borderBottom: i < arr.length - 1 ? `1px solid ${bdr}` : "none", display: "block" }}
                  onClick={() => setMenuOpen(false)}>{n}</a>
              ))}
              <button onClick={openModal} style={{ marginTop: 20, background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "14px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                Start a Project →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{ position: "absolute", top: "20%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}12 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div className="container hero-grid">
          <div className="fade-up" style={{ animationDelay: ".1s" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", border: `1px solid ${bdr}`, borderRadius: 100, padding: "6px 14px", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: fg, opacity: .6, letterSpacing: ".08em" }}>Available for projects · </span>
            </div>

            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 84px)", lineHeight: 1.02, letterSpacing: "-.04em", marginBottom: 24, color: fg }}>
              Your competitors<br />are online.{" "}
              <span style={{ color: ACCENT, fontStyle: "italic" }}>You<br />should be too.</span>
            </h1>

            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.75, marginBottom: 40, fontWeight: 400, maxWidth: 480, color: fg, opacity: .65 }}>
              Axion Digital builds websites, e-commerce stores, SaaS products, and Web3 platforms for businesses ready to dominate online.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
              <button onClick={openModal} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 100, padding: "14px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "opacity .2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Start a Project ↗
              </button>
              <a href="#work" style={{ color: fg, textDecoration: "none", borderRadius: 100, padding: "14px 28px", fontSize: 14, fontWeight: 500, border: `1px solid ${bdr}`, display: "inline-block", transition: "border-color .2s" }}
                onMouseEnter={e => e.target.style.borderColor = fg}
                onMouseLeave={e => e.target.style.borderColor = bdr}
              >
                See Our Work
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${bdr}`, paddingTop: 28 }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{ borderRight: i < 3 ? `1px solid ${bdr}` : "none", paddingRight: 16 }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, letterSpacing: "-.03em", marginBottom: 2, color: fg }}>{s.val}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".07em", textTransform: "uppercase", color: fg, opacity: .35 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="fade-up hero-terminal" style={{ animationDelay: ".25s" }}>
            <div style={{ background: dark ? "#111" : "#f0f0f2", border: `1px solid ${bdr}`, borderRadius: 14, overflow: "hidden", boxShadow: dark ? "0 32px 80px rgba(0,0,0,0.6)" : "0 20px 60px rgba(0,0,0,0.08)", animation: "float 6s ease-in-out infinite" }}>
              <div style={{ background: dark ? "#1a1a1a" : "#e4e4e4", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: `1px solid ${bdr}` }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                <span style={{ fontFamily: "monospace", fontSize: 11, color: fg, opacity: .35, marginLeft: "auto" }}>axiondigital.sh</span>
              </div>
              <div style={{ padding: "22px 24px 28px", fontFamily: "monospace", fontSize: 13, lineHeight: 2.1 }}>
                <p style={{ color: fg, opacity: .35 }}>$ <span style={{ color: fg, opacity: 1, fontWeight: 700 }}>init</span> axion-digital --type agency</p>
                <p style={{ color: fg, opacity: .4 }}>▸ Loading stack...</p>
                {["React + TypeScript", "Supabase + Edge Functions", "Web3 / ethers.js", "Paystack + Stripe"].map(item => (
                  <p key={item} style={{ color: fg }}><span style={{ color: ACCENT }}>✓</span> {item}</p>
                ))}
                <p style={{ color: fg }}><span style={{ color: "#4ade80" }}>✓</span> Agency ready.<span className="blink" style={{ color: ACCENT }}> ▌</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RESULTS TICKER ══ */}
      <div style={{ borderTop: `1px solid ${bdr}`, borderBottom: `1px solid ${bdr}`, padding: "20px 0", overflow: "hidden", background: dark ? "#060606" : "#F5F5F5" }}>
        <div style={{ display: "flex", width: "max-content", animation: "marquee 24s linear infinite" }}>
          {[...RESULTS, ...RESULTS].map((r, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, paddingRight: 56, whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 18, color: r.color }}>{r.metric}</span>
              <span style={{ fontSize: 13, color: fg, opacity: .45 }}>{r.context}</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: r.color, display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ padding: "100px 0", background: surf, transition: "background .3s" }}>
        <div className="container">
          <Label fg={fg} accent={ACCENT}>Services</Label>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
            <h2 className="section-title" style={{ color: fg, marginBottom: 0 }}>What we build for you.</h2>
            <p style={{ fontSize: 15, color: fg, opacity: .5, maxWidth: 360, lineHeight: 1.75 }}>
              Strategy, design, development, and launch, all under one roof.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {SERVICES.map((s, i) => (
              <div key={s.id}
                style={{ background: bg, padding: "40px 36px 44px", position: "relative", cursor: "default", transition: "background .2s, border-color .2s", border: `1px solid ${activeService === i ? ACCENT : "transparent"}` }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: ".14em", color: ACCENT, background: `${ACCENT}14`, padding: "4px 10px", borderRadius: 100 }}>
                    {s.category}
                  </span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: ACCENT, opacity: .4 }}>{s.id}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 12, color: fg, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: fg, opacity: .55, lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, color: fg, opacity: .4, background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border: `1px solid ${bdr}`, padding: "3px 8px", borderRadius: 6, letterSpacing: ".04em" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {activeService === i && (
                  <div style={{ position: "absolute", bottom: 24, right: 24, fontSize: 18, color: ACCENT }}>↗</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESULTS ══ */}
      <section style={{ padding: "100px 0", borderTop: `1px solid ${bdr}` }}>
        <div className="container">
          <Label fg={fg} accent={ACCENT}>Results</Label>
          <h2 className="section-title" style={{ color: fg, marginBottom: 56 }}>Numbers that speak.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {RESULTS.map((r, i) => (
              <div key={i} style={{ background: surf, border: `1px solid ${bdr}`, borderRadius: 12, padding: "32px 28px", transition: "transform .2s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: r.color + "15", border: `1px solid ${r.color}25`, borderRadius: 100, padding: "3px 10px", marginBottom: 20 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: r.color }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: r.color, letterSpacing: ".08em" }}>{r.tag}</span>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 44, fontWeight: 800, color: r.color, letterSpacing: "-.04em", lineHeight: 1, marginBottom: 12 }}>{r.metric}</p>
                <p style={{ fontSize: 14, color: fg, opacity: .55, lineHeight: 1.7 }}>{r.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" style={{ padding: "100px 0", background: surf, borderTop: `1px solid ${bdr}`, transition: "background .3s" }}>
        <div className="container">
          <Label fg={fg} accent={ACCENT}>Our Products</Label>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
            <h2 className="section-title" style={{ color: fg, marginBottom: 0 }}>
              We don't just build<br />for clients. We build<br />
              <span style={{ color: ACCENT }}>for ourselves too.</span>
            </h2>
            <p style={{ fontSize: 15, color: fg, opacity: .5, maxWidth: 360, lineHeight: 1.75 }}>
              Live SaaS products and platforms built and owned by Axion Digital. Real products solving real problems.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {PRODUCTS.map((p, i) => (
              <div key={p.name} style={{ background: bg, border: `1px solid ${bdr}`, borderRadius: 16, overflow: "hidden", transition: "transform .2s, border-color .2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = p.color }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = bdr }}
              >
                {/* Coloured top band */}
                <div style={{ height: 6, background: p.color }} />

                <div style={{ padding: "28px 28px 32px" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 800, letterSpacing: "-.02em", color: fg }}>{p.name}</h3>
                        <span style={{ fontSize: 9, fontWeight: 700, color: "#4ade80", background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 100, padding: "2px 8px", letterSpacing: ".1em" }}>
                          {p.status}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, color: p.color, fontWeight: 600 }}>{p.tagline}</p>
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${bdr}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: fg, fontSize: 16, transition: "background .2s, border-color .2s", flexShrink: 0 }}
                      onMouseEnter={e => { e.currentTarget.style.background = p.color; e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = "#fff" }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = bdr; e.currentTarget.style.color = fg }}
                    >↗</a>
                  </div>

                  <p style={{ fontSize: 14, color: fg, opacity: .55, lineHeight: 1.75, marginBottom: 24 }}>{p.desc}</p>

                  {/* Stats row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: `1px solid ${bdr}`, paddingTop: 20, marginBottom: 20 }}>
                    {p.stats.map((s, si) => (
                      <div key={s.label} style={{ borderRight: si < 2 ? `1px solid ${bdr}` : "none", paddingRight: 12, textAlign: si === 0 ? "left" : "center" }}>
                        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 800, color: p.color, letterSpacing: "-.02em", marginBottom: 2 }}>{s.val}</p>
                        <p style={{ fontSize: 9, color: fg, opacity: .4, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, color: p.color, background: p.color + "12", border: `1px solid ${p.color}25`, padding: "3px 8px", borderRadius: 100, fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Build your product CTA */}
          <div style={{ marginTop: 48, background: dark ? "#111" : "#fff", border: `1px solid ${bdr}`, borderRadius: 16, padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: fg, marginBottom: 6 }}>Have a product idea?</p>
              <p style={{ fontSize: 14, color: fg, opacity: .55 }}>We build SaaS products from scratch. MVP to production in weeks, not months.</p>
            </div>
            <button onClick={openModal} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "13px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
              Build Your Product →
            </button>
          </div>
        </div>
      </section>

      {/* ══ WORK ══ */}
      <section id="work" style={{ padding: "100px 0", borderTop: `1px solid ${bdr}` }}>
        <div className="container">
          <Label fg={fg} accent={ACCENT}>Selected Work</Label>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
            <h2 className="section-title" style={{ color: fg, marginBottom: 0 }}>Projects we've shipped.</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {WORKS.map((w, i) => (
              <div key={w.name} className="work-row"
                style={{ display: "grid", gridTemplateColumns: "60px 1fr auto", alignItems: "center", gap: "0 28px", padding: "28px 16px", borderTop: `1px solid ${bdr}`, borderBottom: i === WORKS.length - 1 ? `1px solid ${bdr}` : "none", borderRadius: 8, transition: "background .2s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: ".06em" }}>{w.num}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 700, letterSpacing: "-.02em", color: fg }}>{w.name}</h3>
                    <div style={{ display: "flex", gap: 6 }}>
                      {w.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 10, fontWeight: 600, color: fg, opacity: .4, border: `1px solid ${bdr}`, borderRadius: 100, padding: "2px 8px", letterSpacing: ".04em" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: fg, opacity: .5, maxWidth: 520, lineHeight: 1.65, marginBottom: 10 }}>{w.desc}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: w.color + "12", border: `1px solid ${w.color}25`, borderRadius: 100, padding: "3px 10px" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: w.color }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: w.color }}>{w.result}</span>
                  </div>
                </div>
                <span style={{ fontSize: 18, color: bdr }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section id="stack" style={{ padding: "100px 0", background: surf, borderTop: `1px solid ${bdr}`, transition: "background .3s" }}>
        <div className="container">
          <Label fg={fg} accent={ACCENT}>Tech Stack</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

            <div>
              <h2 className="section-title" style={{ color: fg, marginBottom: 20 }}>How we build it.</h2>
              <p style={{ fontSize: 15, color: fg, opacity: .55, lineHeight: 1.85, marginBottom: 20 }}>
                We don't chase trends. Every tool is production-tested — chosen for speed, reliability, and the ability to ship at scale.
              </p>
              <p style={{ fontSize: 15, color: fg, opacity: .55, lineHeight: 1.85 }}>
                From React frontends to Supabase backends and on-chain Solidity logic, the same battle-tested stack powers every Axion Digital project.
              </p>
            </div>

            <div style={{ border: `1px solid ${bdr}`, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 24px", borderBottom: `1px solid ${bdr}`, background: dark ? "#0d0d0d" : "#e8e8e8" }}>
                <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 700, letterSpacing: ".2em", color: fg, opacity: .4, textTransform: "uppercase" }}>Our Stack</span>
              </div>
              {STACK.map((row, i) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: i < STACK.length - 1 ? `1px solid ${bdr}` : "none", background: bg, transition: "background .18s" }}
                  onMouseEnter={e => e.currentTarget.style.background = dark ? "#111" : "#f5f5f7"}
                  onMouseLeave={e => e.currentTarget.style.background = bg}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: fg, opacity: .4, letterSpacing: ".04em" }}>{row.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: fg }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY AXION ══ */}
      <section style={{ padding: "100px 0", borderTop: `1px solid ${bdr}` }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Label fg={fg} accent={ACCENT}>Why Axion Digital</Label>
            <h2 className="section-title" style={{ color: fg, marginBottom: 24 }}>Built different.<br />Wired for results.</h2>
            <p style={{ fontSize: 16, color: fg, opacity: .55, lineHeight: 1.85, marginBottom: 20 }}>
              Axion Digital operates at a rare intersection — deep crypto and Web3 expertise paired with proven experience growing real businesses online.
            </p>
            <p style={{ fontSize: 16, color: fg, opacity: .55, lineHeight: 1.85, marginBottom: 36 }}>
              We don't outsource, we don't cut corners. Every project gets the same rigour whether it's a DeFi protocol or a local business website.
            </p>
            <button onClick={openModal} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "13px 28px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Work With Us →
            </button>
          </div>

          <div style={{ border: `1px solid ${bdr}`, borderRadius: 16, overflow: "hidden" }}>
            {WHY.map((item, i, arr) => (
              <div key={item.title} style={{ padding: "20px 28px", borderBottom: i < arr.length - 1 ? `1px solid ${bdr}` : "none", display: "flex", alignItems: "center", gap: 16, background: bg, transition: "background .2s, padding-left .2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = dark ? "#111" : "#f5f5f7"; e.currentTarget.style.paddingLeft = "36px" }}
                onMouseLeave={e => { e.currentTarget.style.background = bg; e.currentTarget.style.paddingLeft = "28px" }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700, color: fg, marginBottom: 2 }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: fg, opacity: .45 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT CTA ══ */}
      <section id="contact" style={{ padding: "120px 0", background: fg, color: bg, textAlign: "center", transition: "background .3s, color .3s" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", color: ACCENT, marginBottom: 24, textTransform: "uppercase" }}>
            Ready to Grow?
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 6vw, 70px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.04, marginBottom: 20, color: bg }}>
            Your competitors are<br />already here. Are you?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 48, color: bg, opacity: .6 }}>
            Tell us about your business. We'll scope it, price it, and ship it — no fluff, no delays.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
            <button onClick={openModal} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "15px 32px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Start a Project →
            </button>
            <a href="https://wa.me/2349078740445" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 8, padding: "15px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              💬 WhatsApp Us
            </a>
          </div>
          <p style={{ fontSize: 12, color: bg, opacity: .3, letterSpacing: ".08em" }}>· FREE SCOPE · REPLY WITHIN 24H · NO COMMITMENT ·</p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ padding: "40px 0", borderTop: `1px solid ${bdr}`, background: bg, transition: "background .3s" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <a href="#" style={{ textDecoration: "none", color: fg, fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "-.01em", display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 24, height: 24, background: ACCENT, borderRadius: 5, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>A</span>
            Axion<span style={{ color: ACCENT }}>Digital</span>
          </a>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Twitter",   url: "https://x.com/Joseph_mandem" },
              { label: "GitHub",    url: "https://github.com" },
              { label: "LinkedIn",  url: "https://linkedin.com" },
              { label: "Instagram", url: "https://instagram.com" },
            ].map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" style={{ color: fg, textDecoration: "none", fontSize: 13, fontWeight: 500, opacity: .4, transition: "opacity .2s" }}
                onMouseEnter={e => e.target.style.opacity = "1"}
                onMouseLeave={e => e.target.style.opacity = ".4"}
              >{l.label}</a>
            ))}
          </div>
          <span style={{ fontSize: 12, color: fg, opacity: .25, letterSpacing: ".04em" }}>© 2026 AXION DIGITAL · LAGOS, NIGERIA</span>
        </div>
      </footer>
    </div>
  );
}

/* ── Global CSS ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 100%; overflow-x: hidden; margin: 0; padding: 0; }
  #root { width: 100%; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
  html { scroll-behavior: smooth; }
  body { -webkit-font-smoothing: antialiased; }

  .container { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
  @media (max-width: 1024px) { .container { padding: 0 40px; } }
  @media (max-width: 768px)  { .container { padding: 0 20px; } }

  .section-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(32px, 5vw, 54px);
    font-weight: 800;
    letter-spacing: -.04em;
    line-height: 1.06;
    margin-bottom: 0;
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

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

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
  }

  @media (max-width: 768px) {
    #stack .container > div,
    #about > .container { grid-template-columns: 1fr !important; gap: 40px !important; }
    .work-row { grid-template-columns: 1fr !important; gap: 12px !important; }
  }

  @media (max-width: 480px) {
    .section-title { font-size: 28px !important; }
  }

  a { transition: opacity .18s; }
  input::placeholder, textarea::placeholder { opacity: .35; }
`;