import { useState } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

// ── tokens ────────────────────────────────────────────────────────────────────
const B    = "#315EFF";
const BH   = "#2A51E0";
const T1   = "#0B0D12";
const T2   = "#5B6270";
const BD   = "#E6E8EE";
const BG   = "#F6F7F9";
const TEAL = "#0D9488";
const PURP = "#7C3AED";
const GREE = "#059669";

const API_BASE = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) || ""
).replace(/\/api\/v1\/?$/, "");

type FormState  = { contactName:string; email:string; companyName:string; interest:string; phone:string; message:string };
type FormErrors = Partial<Record<keyof FormState, string>>;
const initialForm: FormState = { contactName:"", email:"", companyName:"", interest:"", phone:"", message:"" };

const W = (max: number, extra?: React.CSSProperties): React.CSSProperties => ({
  maxWidth: max, margin: "0 auto", padding: "0 clamp(20px,5vw,32px)", width: "100%", ...extra,
});

// ── page ──────────────────────────────────────────────────────────────────────
export function HomePage() {
  const [openFaq, setOpenFaq]   = useState<number>(0);
  const [form, setForm]         = useState<FormState>(initialForm);
  const [errors, setErrors]     = useState<FormErrors>({});
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState("");
  const [error, setError]       = useState("");

  function updateField(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(p => ({ ...p, [name]: undefined }));
  }

  function validate() {
    const n: FormErrors = {};
    if (!form.contactName.trim()) n.contactName = "Required";
    if (!form.email.trim()) n.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) n.email = "Invalid email";
    if (!form.companyName.trim()) n.companyName = "Required";
    if (!form.message.trim()) n.message = "Required";
    setErrors(n);
    return Object.keys(n).length === 0;
  }

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true); setSuccess(""); setError("");
    try {
      const res = await fetch(`${API_BASE}/employer-enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactPerson: form.contactName || form.companyName || "Website enquiry",
          email: form.email,
          phone: form.phone || null,
          employeeCount: null,
          message: [form.interest, form.message || "Website enquiry"].filter(Boolean).join(" - "),
        }),
      });
      if (!res.ok) throw new Error();
      setSuccess("Enquiry submitted. Our team will contact you shortly.");
      setForm(initialForm); setErrors({});
    } catch {
      setError("Unable to submit. Please email support@mobpae.com.");
    } finally { setLoading(false); }
  }

  return (
    <div style={{ fontFamily:"Inter, ui-sans-serif, sans-serif", color:T1, background:"#fff" }}>
      <SiteNav />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <EmployerSection />
      <SecuritySection />
      <About />
      <FaqBlock openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <EnquiryBlock form={form} errors={errors} loading={loading} success={success} error={error} updateField={updateField} submitEnquiry={submitEnquiry} />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ background:"linear-gradient(140deg,#0C1260 0%,#1837D4 52%,#315EFF 100%)", padding:"clamp(52px,6vw,84px) 0 clamp(56px,6vw,88px)", position:"relative", overflow:"hidden" }}>
      {/* grid lines */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize:"52px 52px" }} />
      {/* glow orbs */}
      <div style={{ position:"absolute", top:"-20%", right:"-5%", width:560, height:560, background:"radial-gradient(circle,rgba(147,187,255,0.18) 0%,transparent 65%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-15%", left:"-4%", width:400, height:400, background:"radial-gradient(circle,rgba(49,94,255,0.25) 0%,transparent 70%)", pointerEvents:"none" }} />

      <div style={{ ...W(1200), position:"relative", zIndex:1 }}>
        <div className="redesign-2col" style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"clamp(32px,5vw,60px)", alignItems:"center" }}>

          {/* ── copy ── */}
          <div>
            <span style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.14)", border:"1px solid rgba(255,255,255,0.22)", borderRadius:8, height:30, padding:"0 12px", fontSize:11.5, fontWeight:700, color:"rgba(255,255,255,0.9)", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:22 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#93C5FD", display:"inline-block" }} />
              Earned Wage Access · Employer Backed
            </span>

            <h1 style={{ fontSize:"clamp(44px,5.5vw,74px)", fontWeight:600, lineHeight:1.0, letterSpacing:"-0.025em", color:"#fff", margin:"0 0 8px", fontFamily:'"TASA Orbiter Display Medium","TASA Orbiter Display Medium Placeholder",sans-serif' }}>
              Your Trusted
            </h1>
            <h1 style={{ fontSize:"clamp(44px,5.5vw,74px)", fontWeight:600, lineHeight:1.0, letterSpacing:"-0.025em", color:"#93C5FD", margin:"0 0 24px", fontFamily:'"TASA Orbiter Display Medium","TASA Orbiter Display Medium Placeholder",sans-serif' }}>
              Financial Partner.
            </h1>

            <p style={{ fontSize:17, lineHeight:1.72, color:"rgba(255,255,255,0.72)", margin:"0 0 28px", maxWidth:480 }}>
              Employer-backed salary access for modern teams. Employees withdraw what they've earned. Employers stay in control. Repayment follows payroll — automatically.
            </p>

            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:32 }}>
              {["Employer approved","Auto-recovery","No debt trap","Payroll-linked"].map(t => (
                <span key={t} style={{ display:"inline-flex", alignItems:"center", gap:6, height:29, padding:"0 11px", background:"rgba(255,255,255,0.10)", border:"1px solid rgba(255,255,255,0.18)", borderRadius:6, fontSize:12, fontWeight:500, color:"rgba(255,255,255,0.85)" }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4.5" cy="4.5" r="3.5" fill="#4ADE80"/></svg>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <a href="#enquiry"
                style={{ display:"inline-flex", alignItems:"center", gap:8, height:48, padding:"0 26px", background:"#fff", color:B, fontWeight:700, fontSize:14.5, borderRadius:8, textDecoration:"none", boxShadow:"0 8px 28px rgba(0,0,0,0.25)", transition:"all 120ms ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#EEF2FF"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#fff"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
              >
                Request a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#how-it-works"
                style={{ display:"inline-flex", alignItems:"center", height:48, padding:"0 22px", color:"rgba(255,255,255,0.9)", fontWeight:500, fontSize:14, borderRadius:8, textDecoration:"none", border:"1px solid rgba(255,255,255,0.25)", background:"rgba(255,255,255,0.08)", transition:"all 120ms ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.16)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.08)"; }}
              >
                How it works
              </a>
            </div>
          </div>

          {/* ── glass card ── */}
          <div style={{ position:"relative", display:"flex", justifyContent:"center" }}>
            {/* main card */}
            <div style={{ width:"100%", maxWidth:320, background:"rgba(255,255,255,0.10)", backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.22)", borderRadius:20, overflow:"hidden", boxShadow:"0 32px 80px rgba(0,0,0,0.35)" }}>
              {/* card header */}
              <div style={{ padding:"22px 22px 18px", borderBottom:"1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.55)", textTransform:"uppercase", letterSpacing:"0.07em", margin:"0 0 6px" }}>Available to withdraw</p>
                <p style={{ fontSize:44, fontWeight:600, color:"#fff", margin:"0 0 2px", lineHeight:1, fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>₹8,400</p>
                <p style={{ fontSize:12.5, color:"rgba(255,255,255,0.55)", margin:"0 0 14px" }}>of ₹14,200 earned this cycle</p>
                <div style={{ height:5, background:"rgba(255,255,255,0.15)", borderRadius:3, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:"59%", background:"#93C5FD", borderRadius:3 }} />
                </div>
              </div>
              {/* card body */}
              <div style={{ padding:"16px 22px 20px" }}>
                {[
                  { label:"Salary in hand",     value:"₹42,000" },
                  { label:"Limit (10% free)",   value:"₹4,200"  },
                  { label:"Repayment date",      value:"Aug 1"   },
                ].map(r => (
                  <div key={r.label} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ fontSize:12.5, color:"rgba(255,255,255,0.5)" }}>{r.label}</span>
                    <span style={{ fontSize:12.5, fontWeight:600, color:"rgba(255,255,255,0.9)" }}>{r.value}</span>
                  </div>
                ))}
                <a href="#enquiry" style={{ display:"block", marginTop:16, height:42, background:B, color:"#fff", fontWeight:600, fontSize:13.5, borderRadius:8, textAlign:"center", lineHeight:"42px", textDecoration:"none" }}>
                  Withdraw now
                </a>
                <p style={{ fontSize:11, color:"rgba(255,255,255,0.38)", textAlign:"center", marginTop:8 }}>Auto-settles on payday</p>
              </div>
            </div>

            {/* approved chip */}
            <div style={{ position:"absolute", top:-12, right:-8, background:"#fff", border:`1px solid ${BD}`, borderRadius:10, padding:"8px 14px", boxShadow:"0 8px 24px rgba(0,0,0,0.18)", display:"flex", alignItems:"center", gap:8, zIndex:2 }}>
              <div style={{ width:26, height:26, borderRadius:7, background:"#ECFDF5", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5l3 3 5-5.5" stroke="#16A34A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p style={{ fontSize:11.5, fontWeight:700, color:T1, margin:0 }}>Approved</p>
                <p style={{ fontSize:10.5, color:"#8A90A0", margin:0 }}>in 12 seconds</p>
              </div>
            </div>

            {/* earnings chip */}
            <div style={{ position:"absolute", bottom:-12, left:-10, background:"#fff", border:`1px solid ${BD}`, borderRadius:10, padding:"11px 15px", boxShadow:"0 8px 24px rgba(0,0,0,0.16)", zIndex:2, minWidth:130 }}>
              <p style={{ fontSize:10, fontWeight:700, color:"#8A90A0", margin:"0 0 8px", textTransform:"uppercase", letterSpacing:"0.06em" }}>Earned this week</p>
              <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:28 }}>
                {[0.3,0.5,0.62,0.8,1].map((h,i) => (
                  <div key={i} style={{ flex:1, height:`${h*100}%`, background:B, borderRadius:3, opacity:0.3+i*0.18 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { n:"< 2 wks",  l:"Employer go-live time"        },
    { n:"60 sec",   l:"Employee request time"         },
    { n:"₹0",       l:"Employer capital required"     },
    { n:"100%",     l:"HR-controlled approvals"       },
  ];
  return (
    <div style={{ background:"#0B1028", padding:"20px 0" }}>
      <div className="redesign-4col" style={{ ...W(1200), display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
        {stats.map((s,i) => (
          <div key={s.n} style={{ textAlign:"center", padding:"8px 0", borderRight: i<3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <p style={{ fontSize:26, fontWeight:700, color:"#93C5FD", margin:"0 0 3px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>{s.n}</p>
            <p style={{ fontSize:12, color:"rgba(255,255,255,0.45)", margin:0 }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────
function Features() {
  const feats = [
    {
      color: B, lightBg:"#EEF2FF",
      title:"Zero cash from your balance sheet.",
      desc:"MobPae coordinates the capital so you never have to. You share payroll data — the funding is handled entirely outside your balance sheet.",
      icon:(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="5" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M2 9h16" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="6" cy="13" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      color: TEAL, lightBg:"#F0FDFA",
      title:"Every request runs through HR.",
      desc:"Policy-gated, salary-verified, history-aware. No rupee moves without your approval. Every time, no exceptions.",
      icon:(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L3 6v4c0 4 3 6.5 7 7 4-.5 7-3 7-7V6L10 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      color: PURP, lightBg:"#F5F3FF",
      title:"Recovery follows payroll. Automatically.",
      desc:"Repayment auto-deducts on your salary date, aligned to your cutoff. Zero collections, zero chasing, zero manual work.",
      icon:(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M3 8h14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ background:"#fff", padding:"52px 0" }}>
      <div className="redesign-2col" style={{ ...W(1200), display:"grid", gridTemplateColumns:"0.42fr 0.58fr", gap:"0 72px", alignItems:"start" }}>

        {/* ── Left: headline anchor ── */}
        <div>
          <p style={{ fontSize:11.5, fontWeight:700, color:B, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px" }}>
            Why employers choose MobPae
          </p>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)", fontWeight:600, letterSpacing:"-0.02em", color:T1, margin:"0 0 16px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
            The MobPae Advantage.
          </h2>
          <p style={{ fontSize:14.5, color:T2, lineHeight:1.72, margin:"0 0 24px", maxWidth:340 }}>
            Capital, control, and automatic recovery — all built into one employer-first workflow. MobPae lets you offer a real financial benefit without adding cash commitments, operational overhead, or payroll complexity to your team.
          </p>
          <a href="#enquiry"
            style={{ fontSize:14, fontWeight:700, color:B, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:7, transition:"gap 120ms ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap="10px"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap="7px"}
          >
            Request a demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* ── Right: feature list ── */}
        <div style={{ borderTop:`1px solid ${BD}` }}>
          {feats.map(f => (
            <div key={f.title}
              style={{ display:"flex", gap:18, padding:"28px 0", borderBottom:`1px solid ${BD}`, alignItems:"flex-start" }}
            >
              {/* icon badge */}
              <div style={{ width:46, height:46, borderRadius:12, background:f.lightBg, color:f.color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                {f.icon}
              </div>
              {/* text */}
              <div>
                <p style={{ fontSize:16, fontWeight:700, color:T1, margin:"0 0 7px", letterSpacing:"-0.01em", lineHeight:1.25 }}>{f.title}</p>
                <p style={{ fontSize:14, color:T2, lineHeight:1.72, margin:0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n:"1", color:B,
      title:"Employer integrates",
      desc:"Connect payroll data once through our secure API. No system migration, no downtime. Most employers go live in under 2 weeks.",
    },
    {
      n:"2", color:TEAL,
      title:"Employee requests access",
      desc:"Employee opens the app, sees their earned eligibility based on days worked, and submits a withdrawal request in under 60 seconds.",
    },
    {
      n:"3", color:PURP,
      title:"Employer approves with full context",
      desc:"HR reviews the request alongside salary, policy limit, and history — all in one panel. Approve or decline. Always your call.",
    },
    {
      n:"4", color:GREE,
      title:"Funds disburse. Recovery is automatic.",
      desc:"Money transfers within hours. Repayment auto-deducts from the next salary cycle, aligned to your payroll cutoff. Nothing manual.",
    },
  ];

  const highlights = [
    {
      bg:"linear-gradient(145deg,#0C1260,#315EFF)",
      icon:(
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 3L4 8v6c0 5 3.5 8 9 9 5.5-1 9-4 9-9V8L13 3z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" fill="none"/>
          <path d="M9 13l3 3 5-5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      stat:"₹0",
      label:"Employer capital committed",
      sub:"Capital handled outside your balance sheet entirely.",
    },
    {
      bg:"linear-gradient(145deg,#042F2E,#0D9488)",
      icon:(
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect x="4" y="5" width="18" height="16" rx="3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" fill="none"/>
          <path d="M4 10h18" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
          <path d="M9 3v3M17 3v3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
      stat:"Auto",
      label:"Payroll recovery",
      sub:"Repayment deducts on salary date. Zero follow-up.",
    },
    {
      bg:"linear-gradient(145deg,#2E1065,#7C3AED)",
      icon:(
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" fill="none"/>
          <path d="M9 13l3 3 5-5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      stat:"98%",
      label:"Payroll recovery rate",
      sub:"Employer-backed deductions mean near-zero defaults.",
    },
  ];

  return (
    <section id="how-it-works" style={{ background:BG, padding:"52px 0" }}>
      <div className="redesign-2col" style={{ ...W(1200), display:"grid", gridTemplateColumns:"1fr 0.72fr", gap:"0 56px", alignItems:"start" }}>

        {/* ── Left: numbered step list ── */}
        <div>
          <p style={{ fontSize:11.5, fontWeight:700, color:B, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px" }}>
            Process
          </p>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)", fontWeight:600, letterSpacing:"-0.02em", color:T1, margin:"0 0 28px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
            Four steps. One clean workflow.
          </h2>

          {/* steps */}
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display:"flex", gap:20, paddingBottom:24, marginBottom: i < steps.length-1 ? 0 : 0, position:"relative" }}>
                {/* number + vertical line */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:"#fff", border:`2px solid ${s.color}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontSize:13, fontWeight:700, color:s.color }}>{s.n}</span>
                  </div>
                  {i < steps.length-1 && (
                    <div style={{ width:2, flex:1, background:`linear-gradient(${s.color},${steps[i+1].color})`, marginTop:6, marginBottom:0, minHeight:24, borderRadius:1 }} />
                  )}
                </div>
                {/* text */}
                <div style={{ paddingTop:6, paddingBottom: i < steps.length-1 ? 20 : 0 }}>
                  <p style={{ fontSize:15.5, fontWeight:700, color:T1, margin:"0 0 6px", letterSpacing:"-0.01em" }}>{s.title}</p>
                  <p style={{ fontSize:13.5, color:T2, lineHeight:1.7, margin:0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: 3 highlight cards ── */}
        <div style={{ display:"flex", flexDirection:"column", gap:14, paddingTop:8 }}>
          {highlights.map(h => (
            <div key={h.stat} style={{ background:h.bg, borderRadius:18, padding:"24px 22px", position:"relative", overflow:"hidden" }}>
              {/* subtle grid */}
              <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />
              <div style={{ position:"relative", zIndex:1 }}>
                <div style={{ marginBottom:14 }}>{h.icon}</div>
                <p style={{ fontSize:"clamp(30px,4vw,44px)", fontWeight:700, color:"#fff", margin:"0 0 2px", lineHeight:1, fontFamily:'"TASA Orbiter Display Medium",sans-serif', letterSpacing:"-0.025em" }}>
                  {h.stat}
                </p>
                <p style={{ fontSize:13.5, fontWeight:600, color:"rgba(255,255,255,0.75)", margin:"0 0 8px" }}>{h.label}</p>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", margin:0, lineHeight:1.55 }}>{h.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Employer section ──────────────────────────────────────────────────────────
function EmployerSection() {
  const queue = [
    { name:"Priya Sharma",  amount:"₹6,000", status:"Auto-approved", blue:true  },
    { name:"Rahul Mehta",   amount:"₹3,500", status:"Auto-approved", blue:true  },
    { name:"Anjali Patel",  amount:"₹9,200", status:"Pending review", blue:false },
  ];
  return (
    <section id="employers" style={{ background:BG, padding:"44px 0" }}>
      <div style={W(1200)}>
        <div className="redesign-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center" }}>
          {/* mockup */}
          <div style={{ background:"#fff", borderRadius:16, border:`1px solid ${BD}`, padding:22, boxShadow:"0 16px 48px rgba(20,30,60,0.10)" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
              <p style={{ fontSize:13.5, fontWeight:700, color:T1, margin:0 }}>Approval queue</p>
              <div style={{ display:"flex", gap:6 }}>
                {["1 integration","Full control"].map(t => (
                  <span key={t} style={{ fontSize:11, fontWeight:600, color:B, background:"#EEF2FF", borderRadius:6, padding:"3px 9px" }}>{t}</span>
                ))}
              </div>
            </div>
            {queue.map(r => (
              <div key={r.name} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 0", borderTop:`1px solid ${BD}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:34, height:34, borderRadius:8, background:r.blue?"#EEF2FF":"#F0FDFA", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:r.blue?B:TEAL }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize:13.5, fontWeight:600, color:T1, margin:0 }}>{r.name}</p>
                    <p style={{ fontSize:12, color:T2, margin:"1px 0 0" }}>{r.amount}</p>
                  </div>
                </div>
                <span style={{ fontSize:11.5, fontWeight:600, color:r.blue?B:"#8A90A0", background:r.blue?"#EEF2FF":BG, borderRadius:6, padding:"4px 10px" }}>{r.status}</span>
              </div>
            ))}
          </div>

          {/* copy */}
          <div>
            <p style={{ fontSize:11.5, fontWeight:700, color:B, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px" }}>For employers</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)", fontWeight:600, letterSpacing:"-0.02em", margin:"0 0 14px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
              Retention without new infrastructure
            </h2>
            <p style={{ fontSize:15, lineHeight:1.7, color:T2, marginBottom:22 }}>
              Give employees a meaningful financial benefit — fully employer-controlled, zero cash burden, no payroll disruption.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {[
                { label:"No employer cash required",  sub:"Capital managed entirely outside your books" },
                { label:"Policy-driven auto-approvals", sub:"Set rules once; approvals run themselves" },
                { label:"Full audit trail",            sub:"Every request, approval, disbursal logged" },
              ].map(r => (
                <div key={r.label} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                  <div style={{ width:24, height:24, borderRadius:6, background:"#EEF2FF", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={B} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:13.5, fontWeight:600, color:T1, margin:"0 0 2px" }}>{r.label}</p>
                    <p style={{ fontSize:12.5, color:T2, margin:0 }}>{r.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────────────────────
function SecuritySection() {
  const items = [
    { color:B,    bg:"#EEF2FF", title:"Secured capital model",          desc:"Salary access is funded through structured financial partnerships. Your payroll and employee data stay protected at every step." },
    { color:TEAL, bg:"#F0FDFA", title:"Employer-verified access",     desc:"Every employee is authenticated via their employer before access is granted." },
    { color:PURP, bg:"#F5F3FF", title:"Encrypted end-to-end",        desc:"Salary and personal data encrypted in transit and at rest. Role-based access with full audit logs." },
  ];
  return (
    <section id="security" style={{ background:"#0B1028", padding:"44px 0" }}>
      <div style={W(1200)}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:28, flexWrap:"wrap", gap:12 }}>
          <div>
            <p style={{ fontSize:11.5, fontWeight:700, color:"#93C5FD", textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 8px" }}>Trust &amp; security</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)", fontWeight:600, letterSpacing:"-0.02em", color:"#fff", margin:0, fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
              Built to be trusted
            </h2>
          </div>
          <p style={{ fontSize:14.5, color:"rgba(255,255,255,0.5)", maxWidth:360, margin:0, lineHeight:1.6 }}>
            Every layer of MobPae is designed with security, compliance, and data protection as defaults — not afterthoughts.
          </p>
        </div>
        <div className="redesign-3col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {items.map(i => (
            <div key={i.title} style={{ background:i.bg, borderRadius:16, border:"none", padding:"22px 20px" }}>
              <div style={{ width:36, height:36, borderRadius:8, background:i.color, marginBottom:14, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 5v4c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V5L8 2z" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>
              </div>
              <p style={{ fontSize:15, fontWeight:700, color:T1, margin:"0 0 8px" }}>{i.title}</p>
              <p style={{ fontSize:13.5, color:T2, lineHeight:1.65, margin:0 }}>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background:"#fff", padding:"44px 0" }}>
      <div style={W(1200)}>
        <div className="redesign-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"start" }}>
          <div>
            <p style={{ fontSize:11.5, fontWeight:700, color:B, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px" }}>About us</p>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)", fontWeight:600, letterSpacing:"-0.02em", margin:"0 0 16px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
              Financial wellness,<br />built into payroll.
            </h2>
            <p style={{ fontSize:15.5, lineHeight:1.72, color:T2, margin:"0 0 22px" }}>
              MobPae connects employees and employers in a single controlled workflow. We believe financial stress is a workplace problem — and solving it starts with giving employees safe, structured access to income they've already earned.
            </p>
            <a href="#enquiry"
              style={{ display:"inline-flex", alignItems:"center", gap:8, height:44, padding:"0 22px", background:B, color:"#fff", fontWeight:600, fontSize:14, borderRadius:8, textDecoration:"none" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background=BH}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background=B}
            >
              Get started today
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8 3l4 3.5L8 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="redesign-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {[
              { color:B,    bg:"#EEF2FF", border:"#C7D2FE", title:"Responsible by design",  sub:"Access capped at earned wages only" },
              { color:TEAL, bg:"#F0FDFA", border:"#5EEAD4", title:"Employer-first",           sub:"Every request goes through HR approval" },
              { color:PURP, bg:"#F5F3FF", border:"#C4B5FD", title:"Built for scale",          sub:"50 to 50,000 employees, same workflow" },
              { color:GREE, bg:"#F0FDF4", border:"#86EFAC", title:"Zero debt trap",           sub:"No interest within the free threshold" },
            ].map(c => (
              <div key={c.title} style={{ background:c.bg, border:`1.5px solid ${c.border}`, borderRadius:14, padding:"18px 16px" }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:c.color, marginBottom:12 }} />
                <p style={{ fontSize:13.5, fontWeight:700, color:T1, margin:"0 0 5px" }}>{c.title}</p>
                <p style={{ fontSize:12.5, color:T2, margin:0, lineHeight:1.5 }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  { q:"Is MobPae a loan product?",             a:"No. Employees only access wages they've already earned. Not a loan, not a credit product." },
  { q:"Who approves salary advance requests?",  a:"The employer reviews and approves every request before funds move. MobPae provides full policy controls." },
  { q:"Does it disrupt our payroll process?",   a:"No. MobPae is built around your cutoff dates and salary cycle. Repayments auto-settle from the next salary." },
  { q:"How is employee data protected?",        a:"Encrypted in transit and at rest, role-based access, full audit trails across every transaction." },
  { q:"How long does onboarding take?",         a:"Most employers go live in under 2 weeks. We handle integration, policy setup, and HR team walkthrough." },
];

function FaqBlock({ openFaq, setOpenFaq }: { openFaq:number; setOpenFaq:(n:number)=>void }) {
  return (
    <section id="faq" style={{ background:BG, padding:"44px 0" }}>
      <div className="redesign-2col" style={{ ...W(1200), display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:40, alignItems:"start" }}>
        <div>
          <p style={{ fontSize:11.5, fontWeight:700, color:B, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px" }}>FAQ</p>
          <h2 style={{ fontSize:"clamp(26px,3.5vw,40px)", fontWeight:600, letterSpacing:"-0.02em", margin:"0 0 14px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
            Common questions
          </h2>
          <p style={{ fontSize:14.5, color:T2, lineHeight:1.7, margin:"0 0 24px" }}>
            Everything you need to know about MobPae, earned wage access, and how we work with employers.
          </p>
          <a href="#enquiry" style={{ display:"inline-flex", alignItems:"center", gap:7, fontSize:14, fontWeight:600, color:B, textDecoration:"none" }}>
            Still have questions? Contact us
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8 3l4 3.5L8 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <div style={{ background:"#fff", borderRadius:16, border:`1px solid ${BD}`, overflow:"hidden" }}>
          {FAQS.map((f,i) => (
            <div key={f.q} style={{ borderBottom: i<FAQS.length-1 ? `1px solid ${BD}` : "none" }}>
              <button
                onClick={() => setOpenFaq(openFaq===i ? -1 : i)}
                style={{ width:"100%", background:"none", border:"none", padding:"16px 20px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, cursor:"pointer", textAlign:"left" }}
              >
                <span style={{ fontSize:14.5, fontWeight:600, color:T1 }}>{f.q}</span>
                <span style={{ width:26, height:26, borderRadius:6, background: openFaq===i?"#EEF2FF":BG, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, color:B, flexShrink:0, fontWeight:400, lineHeight:1 }}>
                  {openFaq===i?"−":"+"}
                </span>
              </button>
              {openFaq===i && (
                <div style={{ padding:"0 20px 16px" }}>
                  <p style={{ fontSize:14, color:T2, lineHeight:1.7, margin:0 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Enquiry form ──────────────────────────────────────────────────────────────
function EnquiryBlock({ form, errors, loading, success, error, updateField, submitEnquiry }: {
  form:FormState; errors:FormErrors; loading:boolean; success:string; error:string;
  updateField:(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>void;
  submitEnquiry:(e:React.FormEvent)=>void;
}) {
  const inp = (err?: string): React.CSSProperties => ({
    width:"100%", height:42, padding:"0 13px", fontSize:14, border:`1px solid ${err?"#EF4444":BD}`,
    borderRadius:8, outline:"none", color:T1, background:"#fff", fontFamily:"inherit", boxSizing:"border-box",
  });
  const lbl: React.CSSProperties = { fontSize:12.5, fontWeight:600, color:T2, display:"block", marginBottom:5 };

  return (
    <section id="enquiry" style={{ background:"#fff", padding:"44px 0" }}>
      <div style={W(1200)}>
        <div className="redesign-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:40, alignItems:"start" }}>
          {/* left panel */}
          <div style={{ background:"linear-gradient(140deg,#0C1260,#315EFF)", borderRadius:16, padding:"32px 28px", color:"#fff" }}>
            <p style={{ fontSize:11.5, fontWeight:700, color:"#93C5FD", textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px" }}>Get in touch</p>
            <h2 style={{ fontSize:"clamp(24px,3vw,36px)", fontWeight:600, letterSpacing:"-0.02em", color:"#fff", margin:"0 0 14px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
              Tell us about your organization
            </h2>
            <p style={{ fontSize:14.5, color:"rgba(255,255,255,0.65)", lineHeight:1.7, margin:"0 0 28px" }}>
              We'll follow up to schedule a quick walkthrough built around your payroll cycle and team size.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                { n:"1", t:"Share basics", s:"Company, email and what you're exploring" },
                { n:"2", t:"We align",     s:"Policy, payroll dates and rollout fit"    },
                { n:"3", t:"Demo call",    s:"Live walkthrough of employee and employer flows" },
              ].map(s => (
                <div key={s.n} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{ width:26, height:26, borderRadius:6, background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"#93C5FD", flexShrink:0 }}>{s.n}</div>
                  <div>
                    <p style={{ fontSize:13.5, fontWeight:700, color:"#fff", margin:"0 0 2px" }}>{s.t}</p>
                    <p style={{ fontSize:12.5, color:"rgba(255,255,255,0.55)", margin:0 }}>{s.s}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:28, paddingTop:22, borderTop:"1px solid rgba(255,255,255,0.12)" }}>
              <p style={{ fontSize:12.5, color:"rgba(255,255,255,0.5)", margin:0 }}>support@mobpae.com · Gujarat, Ahmedabad</p>
            </div>
          </div>

          {/* form */}
          <form onSubmit={submitEnquiry} noValidate style={{ background:"#fff", borderRadius:16, border:`1px solid ${BD}`, padding:"28px 24px", boxShadow:"0 12px 40px rgba(20,30,60,0.06)" }}>
            <div className="redesign-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div>
                <label style={lbl}>Full name</label>
                <input name="contactName" value={form.contactName} onChange={updateField} placeholder="Rahul Mehta" style={inp(errors.contactName)}
                  onFocus={e => e.target.style.borderColor=B} onBlur={e => e.target.style.borderColor=errors.contactName?"#EF4444":BD} />
                {errors.contactName && <p style={{ fontSize:11.5, color:"#EF4444", margin:"3px 0 0" }}>{errors.contactName}</p>}
              </div>
              <div>
                <label style={lbl}>Work email</label>
                <input name="email" type="email" value={form.email} onChange={updateField} placeholder="rahul@company.com" style={inp(errors.email)}
                  onFocus={e => e.target.style.borderColor=B} onBlur={e => e.target.style.borderColor=errors.email?"#EF4444":BD} />
                {errors.email && <p style={{ fontSize:11.5, color:"#EF4444", margin:"3px 0 0" }}>{errors.email}</p>}
              </div>
              <div>
                <label style={lbl}>Company name</label>
                <input name="companyName" value={form.companyName} onChange={updateField} placeholder="Northstar Retail Pvt Ltd" style={inp(errors.companyName)}
                  onFocus={e => e.target.style.borderColor=B} onBlur={e => e.target.style.borderColor=errors.companyName?"#EF4444":BD} />
                {errors.companyName && <p style={{ fontSize:11.5, color:"#EF4444", margin:"3px 0 0" }}>{errors.companyName}</p>}
              </div>
              <div>
                <label style={lbl}>I'm reaching out as</label>
                <select name="interest" value={form.interest} onChange={updateField}
                  style={{ ...inp(), appearance:"none", WebkitAppearance:"none" }}
                  onFocus={e => e.target.style.borderColor=B} onBlur={e => e.target.style.borderColor=BD}
                >
                  <option value="">Select…</option>
                  <option value="Employer">Employer</option>
                  <option value="Employee">Employee</option>
                  <option value="Capital Partner">Capital Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={lbl}>Phone number <span style={{ fontWeight:400, color:"#8A90A0" }}>(optional)</span></label>
              <input name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="+91 98765 43210" style={inp()}
                onFocus={e => e.target.style.borderColor=B} onBlur={e => e.target.style.borderColor=BD} />
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={lbl}>Message</label>
              <textarea name="message" value={form.message} onChange={updateField} rows={4}
                placeholder="Tell us what you want to explore for your team…"
                style={{ ...inp(errors.message), height:"auto", padding:"10px 13px", resize:"vertical" }}
                onFocus={e => e.target.style.borderColor=B} onBlur={e => e.target.style.borderColor=errors.message?"#EF4444":BD}
              />
              {errors.message && <p style={{ fontSize:11.5, color:"#EF4444", margin:"3px 0 0" }}>{errors.message}</p>}
            </div>
            {success && <div style={{ marginBottom:16, padding:"10px 14px", background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:8 }}><p style={{ fontSize:13.5, color:"#16A34A", margin:0, fontWeight:600 }}>✓ {success}</p></div>}
            {error   && <div style={{ marginBottom:16, padding:"10px 14px", background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:8 }}><p style={{ fontSize:13.5, color:"#DC2626", margin:0, fontWeight:600 }}>{error}</p></div>}
            <button type="submit" disabled={loading}
              style={{ width:"100%", height:48, background:loading?"#6B80CC":B, color:"#fff", fontWeight:700, fontSize:15, borderRadius:8, border:"none", cursor:loading?"not-allowed":"pointer", fontFamily:"inherit", transition:"background 120ms ease" }}
              onMouseEnter={e => { if(!loading)(e.currentTarget as HTMLElement).style.background=BH; }}
              onMouseLeave={e => { if(!loading)(e.currentTarget as HTMLElement).style.background=B; }}
            >
              {loading ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCta() {
  return (
    <section style={{ background:"linear-gradient(140deg,#0C1260 0%,#1837D4 52%,#315EFF 100%)", padding:"clamp(44px,5vw,72px) 0", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />
      <div style={{ ...W(700), position:"relative", zIndex:1 }}>
        <h2 style={{ fontSize:"clamp(30px,4vw,50px)", fontWeight:600, lineHeight:1.08, letterSpacing:"-0.022em", color:"#fff", margin:"0 0 14px", fontFamily:'"TASA Orbiter Display Medium",sans-serif' }}>
          Bring MobPae to your workplace.
        </h2>
        <p style={{ fontSize:16, color:"rgba(255,255,255,0.65)", marginBottom:30 }}>
          Join employers offering earned wage access as a genuine financial benefit.
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="#enquiry"
            style={{ display:"inline-flex", alignItems:"center", height:48, padding:"0 28px", background:"#fff", color:B, fontWeight:700, fontSize:15, borderRadius:8, textDecoration:"none", boxShadow:"0 8px 24px rgba(0,0,0,0.2)", transition:"all 120ms ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#EEF2FF"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#fff"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
          >
            Request a demo
          </a>
          <a href="/product"
            style={{ display:"inline-flex", alignItems:"center", height:48, padding:"0 24px", color:"rgba(255,255,255,0.9)", fontSize:14.5, fontWeight:500, borderRadius:8, textDecoration:"none", border:"1px solid rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.1)", transition:"background 120ms ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.18)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)"}
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
