import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { GridPatternOverlay } from "../components/GridPatternOverlay";

// ── tokens ────────────────────────────────────────────────────────────────────
const B = "#315EFF";
const BH = "#2A51E0";
const T1 = "#0B0D12";
const T2 = "#5B6270";
const BD = "#E6E8EE";
const BT = "rgba(49,94,255,0.08)";
const PURP = "#7C3AED";
const GREE = "#059669";
const PAGE_MAX = 1840;
const PAGE_BG = "#FAFAFA";

// ── hero tokens (matched to the live Lovable design source, zinc/emerald scale) ─
const HFG = "#18181B";
const HMUTED = "#737373";
const HBORDER = "#E5E5E5";
const HMUTED_BG = "#F5F5F5";
const P03 = "rgba(49,94,255,0.03)";
const P04 = "rgba(49,94,255,0.04)";
const P05 = "rgba(49,94,255,0.05)";
const P08 = "rgba(49,94,255,0.08)";
const P10 = "rgba(49,94,255,0.10)";
const P15 = "rgba(49,94,255,0.15)";
const P20 = "rgba(49,94,255,0.20)";
const P25 = "rgba(49,94,255,0.25)";
const P40 = "rgba(49,94,255,0.40)";
const EM_BORDER = "#A7F3D0";
const EM_BG = "#ECFDF5";
const EM_TEXT = "#047857";
const EM_DOT = "#10B981";
const W05 = "rgba(255,255,255,0.05)";
const W10 = "rgba(255,255,255,0.10)";
const W20 = "rgba(255,255,255,0.20)";
const W70 = "rgba(255,255,255,0.70)";
const W90 = "rgba(255,255,255,0.90)";

const API_BASE = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) || ""
).replace(/\/api\/v1\/?$/, "");

type FormState = {
  contactName: string;
  email: string;
  companyName: string;
  interest: string;
  phone: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;
const initialForm: FormState = {
  contactName: "",
  email: "",
  companyName: "",
  interest: "",
  phone: "",
  message: "",
};

const W = (max: number, extra?: React.CSSProperties): React.CSSProperties => ({
  maxWidth: max,
  margin: "0 auto",
  padding: "0 clamp(20px,4vw,48px)",
  width: "100%",
  ...extra,
});

function Pill({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "green" | "purple" }) {
  const colors = {
    blue: { bg: BT, text: B },
    green: { bg: "#ECFDF5", text: GREE },
    purple: { bg: "#F5F3FF", text: PURP },
  }[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 28,
        padding: "0 12px",
        borderRadius: 999,
        background: colors.bg,
        color: colors.text,
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7.2 5.6 10 11 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── hero icons (paths matched to the live Lovable design source) ───────────────
function ShieldCheckIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function LinkChainIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
function LockIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}
function CalendarIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function TickIcon({ className = "size-3.5", strokeWidth = 3 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function CheckCircleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function BoltIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function PulseDot({ color }: { color: string }) {
  return (
    <span className="relative flex size-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: color }} />
      <span className="relative inline-flex size-1.5 rounded-full" style={{ background: color }} />
    </span>
  );
}
function TrendUpArrowIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
function DocumentChartIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function LedgerIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm3 10h4" />
    </svg>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((p) => ({ ...p, [name]: undefined }));
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
    setLoading(true);
    setSuccess("");
    setError("");
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
      setForm(initialForm);
      setErrors({});
    } catch {
      setError("Unable to submit. Please email support@mobpae.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: "Manrope, ui-sans-serif, sans-serif", color: T1, background: PAGE_BG }}>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <FeaturesSection />
        <AudiencePaths />
        <SecuritySection />
        <FaqBlock openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <EnquiryBlock
          form={form}
          errors={errors}
          loading={loading}
          success={success}
          error={error}
          updateField={updateField}
          submitEnquiry={submitEnquiry}
        />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const trustPillars = [
    { title: "Employer approved", body: "Verified before every disbursement", icon: <ShieldCheckIcon /> },
    { title: "Payroll linked", body: "Direct integration with your HRIS", icon: <LinkChainIcon /> },
    { title: "Responsible access", body: "Policy-aware limits on every request", icon: <LockIcon /> },
    { title: "Payroll cycle clarity", body: "Cutoff, approval and recovery in view", icon: <CalendarIcon /> },
  ];

  const trackerSteps = [
    { label: "Submitted", done: true, tooltip: "Employee request is captured and matched to the employer's payroll cycle." },
    { label: "Reviewed", done: true, tooltip: "Employer checks eligibility, available limit, and policy compliance." },
    { label: "Final sign-off", done: false, tooltip: "Last approval before Mobpae releases the funds instantly." },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: PAGE_BG }}>
      <GridPatternOverlay fade={false} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full blur-3xl" style={{ background: P05 }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 size-[400px] rounded-full blur-3xl" style={{ background: P04 }} />

      <div className="relative mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16" style={W(PAGE_MAX)}>
        {/* Left column */}
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full px-2.5 py-1" style={{ border: `1px solid ${P20}`, background: P10 }}>
            <PulseDot color={B} />
            <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: B }}>
              Employer-backed earned wage access
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl" style={{ color: HFG }}>
            Your Trusted <br />
            <span style={{ color: B }}>Financial Partner.</span>
          </h1>

          <p className="mb-7 max-w-lg text-base leading-relaxed" style={{ color: HMUTED }}>
            Mobpae helps salaried employees access earned wages before payday through employer-backed approvals,
            payroll-linked recovery, and a controlled financial wellness workflow.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#enquiry"
              className="rounded-lg px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: B, color: "#fff", boxShadow: "0 6px 14px -4px rgba(49,94,255,0.35)" }}
            >
              Request a Demo
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg px-5 py-2.5 text-xs font-semibold transition-all"
              style={{ border: `1px solid ${HBORDER}`, background: "#fff", color: HFG }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = HMUTED_BG; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
            >
              See how it works
            </a>
          </div>

          <p className="mb-10 mt-2.5 max-w-md text-xs" style={{ color: HMUTED }}>
            Schedule a 15-minute walkthrough. No setup fees, no obligation.
          </p>

          <div className="relative pt-8" style={{ borderTop: `1px solid ${HBORDER}` }}>
            <div className="absolute -top-px left-0 h-px w-12" style={{ background: B }} />
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: HMUTED }}>
                Built into every request
              </span>
              <span className="h-px flex-1" style={{ background: HBORDER }} />
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl sm:grid-cols-2" style={{ background: HBORDER }}>
              {trustPillars.map((p) => (
                <div
                  key={p.title}
                  className="group flex items-start gap-3 p-4 transition-colors"
                  style={{ background: "#fff" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = P03; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
                >
                  <div
                    className="grid size-8 shrink-0 place-items-center rounded-lg transition-transform group-hover:scale-105"
                    style={{ background: P10, color: B, boxShadow: `0 0 0 1px ${P15}` }}
                  >
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-tight" style={{ color: HFG }}>{p.title}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed" style={{ color: HMUTED }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — payroll cycle card */}
        <div className="relative">
          <div
            className="relative z-20 overflow-hidden rounded-[28px] p-6 md:p-8"
            style={{ border: `1px solid ${HBORDER}`, background: "#fff", boxShadow: "0 24px 48px -10px rgba(0,0,0,0.08)" }}
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full blur-3xl" style={{ background: P05 }} />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full blur-3xl" style={{ background: P04 }} />

            <div className="relative mb-6 flex items-center justify-between pb-5" style={{ borderBottom: `1px solid ${HBORDER}` }}>
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: B }}>Active Cycle</p>
                <h2 className="text-lg font-bold" style={{ color: HFG }}>Payroll cycle clarity</h2>
                <p className="text-xs" style={{ color: HMUTED }}>Cutoff → advance → approval → payout</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ border: `1px solid ${EM_BORDER}`, background: EM_BG }}>
                <PulseDot color={EM_DOT} />
                <span className="text-[10px] font-bold" style={{ color: EM_TEXT }}>On Track</span>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute left-[13px] top-2.5 bottom-2.5 w-[2px]" style={{ background: HMUTED_BG }} />
              <div className="absolute left-[13px] top-2.5 h-[62%] w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, ${B}, ${B}, ${P20})` }} />

              <div className="relative space-y-5">
                {/* Step 1: Cutoff Date — completed */}
                <div className="group relative flex items-start gap-4">
                  <div className="z-10 grid size-7 place-items-center rounded-full transition-all duration-300 hover:scale-110" style={{ background: B, color: "#fff", boxShadow: "0 0 0 4px #fff" }}>
                    <TickIcon />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold" style={{ color: HFG }}>Cutoff Date</p>
                      <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: B }}>Set by Employer</span>
                    </div>
                    <p className="mt-0.5 text-[11px]" style={{ color: HMUTED }}>Advance window opened on Aug 1</p>
                  </div>
                </div>

                {/* Step 2: Apply Advance — completed */}
                <div className="group relative flex items-start gap-4">
                  <div className="z-10 grid size-7 place-items-center rounded-full transition-all duration-300 hover:scale-110" style={{ background: B, color: "#fff", boxShadow: "0 0 0 4px #fff" }}>
                    <TickIcon />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold" style={{ color: HFG }}>Apply Advance</p>
                      <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: B }}>For Employee</span>
                    </div>
                    <p className="mt-0.5 text-[11px]" style={{ color: HMUTED }}>Request submitted by employee</p>
                  </div>
                </div>

                {/* Step 3: Approval — in progress, expanded */}
                <div className="group relative flex items-start gap-4">
                  <div
                    className="z-10 grid size-7 place-items-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{ border: `2px solid ${B}`, background: "#fff", color: B, boxShadow: `0 0 0 3px ${P08}, 0 0 0 4px #fff` }}
                  >
                    <span className="size-1.5 rounded-full animate-pulse" style={{ background: B }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold" style={{ color: B }}>Approval</p>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ background: P10, color: B }}>In Progress</span>
                    </div>
                    <p className="mt-0.5 text-[11px]" style={{ color: HMUTED }}>Employer verifying amount and eligibility</p>

                    <div className="mt-3 rounded-xl p-3" style={{ border: `1px solid ${P15}`, background: P03 }}>
                      <div className="flex items-start gap-2.5">
                        <div className="grid size-8 place-items-center rounded-lg" style={{ background: "#fff", color: B, boxShadow: `0 1px 2px rgba(0,0,0,0.05), 0 0 0 1px ${P10}` }}>
                          <CheckCircleIcon />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold" style={{ color: HFG }}>Approval verified</p>
                          <p className="mt-0.5 text-[11px] leading-relaxed" style={{ color: HMUTED }}>
                            HR has confirmed the advance request. Mobpae will release funds the moment approval is finalized.
                          </p>

                          <div className="mt-3 space-y-2.5">
                            <div className="flex items-center justify-between text-[10px] font-semibold">
                              <span style={{ color: HMUTED }}>Verification tracker</span>
                              <span style={{ color: B }}>2 of 3 complete</span>
                            </div>
                            <div className="relative">
                              <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full" style={{ background: HBORDER }} />
                              <div className="absolute left-0 top-1/2 h-[2px] w-[66%] -translate-y-1/2 rounded-full" style={{ background: B }} />
                              <div className="relative grid grid-cols-3 gap-1">
                                {trackerSteps.map((step) => (
                                  <div key={step.label} className="group/step relative flex flex-col items-center gap-1">
                                    <div
                                      className="pointer-events-none absolute -top-9 left-1/2 z-50 w-32 -translate-x-1/2 rounded-lg px-2 py-1.5 text-[10px] font-medium leading-snug opacity-0 shadow-lg transition-opacity duration-200 group-hover/step:opacity-100"
                                      style={{ background: HFG, color: "#fff" }}
                                    >
                                      {step.tooltip}
                                      <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45" style={{ background: HFG }} />
                                    </div>
                                    <div
                                      className="grid size-4 place-items-center rounded-full transition-transform duration-200 group-hover/step:scale-110"
                                      style={step.done
                                        ? { background: B, color: "#fff", boxShadow: "0 0 0 2px #fff" }
                                        : { border: `2px solid ${B}`, background: "#fff", boxShadow: "0 0 0 2px #fff" }}
                                    >
                                      {step.done ? <TickIcon className="size-2.5" /> : <span className="size-1 rounded-full animate-pulse" style={{ background: B }} />}
                                    </div>
                                    <span className="text-[10px] font-semibold" style={{ color: step.done ? HFG : B }}>{step.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Mobpae — pending */}
                <div className="group relative flex items-start gap-4">
                  <div
                    className="z-10 grid size-7 place-items-center rounded-full transition-all duration-300"
                    style={{ border: `1px dashed ${HBORDER}`, background: HMUTED_BG, color: HMUTED, boxShadow: "0 0 0 4px #fff" }}
                  >
                    <BoltIcon />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium" style={{ color: HMUTED }}>Mobpae</p>
                      <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: HMUTED }}>Instant Payout</span>
                    </div>
                    <p className="mt-0.5 text-[11px]" style={{ color: HMUTED }}>Auto-recovery scheduled on payday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between rounded-xl p-4" style={{ border: `1px solid ${HBORDER}`, background: "rgba(245,245,245,0.5)" }}>
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-lg" style={{ background: P10, color: B, boxShadow: `0 0 0 1px ${P15}` }}>
                  <CalendarIcon className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: HMUTED }}>Next Payout Window</p>
                  <p className="mt-0.5 text-base font-bold" style={{ color: HFG }}>Aug 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ border: `1px solid ${EM_BORDER}`, background: EM_BG, color: EM_TEXT }}>
                  <PulseDot color={EM_DOT} />
                  Auto-recovery on
                </span>
              </div>
            </div>
          </div>

          {/* Floating status badge */}
          <div className="absolute -bottom-16 -right-4 z-30 rounded-xl p-3 shadow-2xl" style={{ border: `1px solid ${HBORDER}`, background: "#fff" }}>
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 place-items-center rounded-full" style={{ background: P10, color: B }}>
                <ShieldCheckIcon />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: HMUTED }}>Current Status</p>
                <p className="text-xs font-bold" style={{ color: HFG }}>Automated Cycle Protected</p>
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 -left-12 -z-10 size-64 rounded-full blur-2xl" style={{ background: P10 }} />
        </div>
      </div>
    </section>
  );
}

// ── Features + How It Works (combined, matched to the live Lovable design) ─────
function FeaturesSection() {
  const steps = [
    { title: "Employee requests", desc: "Eligibility is shown in the app before the employee requests access." },
    { title: "Employer approves", desc: "HR sees policy context, salary data, and request history before approval." },
    { title: "Mobpae disburses", desc: "Admin verification completes the request before funds are released." },
    { title: "Payroll recovers", desc: "Repayment is scheduled against the salary cycle and reflected in settlements." },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 lg:py-24" style={{ background: PAGE_BG }}>
      <GridPatternOverlay fade={false} />
      <div className="relative mx-auto" style={W(PAGE_MAX)}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Card 1 — large, spans both rows */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:row-span-2"
            style={{ border: `1px solid ${HBORDER}`, background: "#fff" }}
          >
            <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" style={{ background: P05 }} />
            <div className="relative">
              <span className="mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ background: P10, color: B }}>
                Why employers choose Mobpae
              </span>
              <h2 className="max-w-md text-2xl font-extrabold tracking-tight lg:text-3xl" style={{ color: HFG }}>
                Financial wellness with <span style={{ color: B }}>operational control.</span>
              </h2>
              <p className="mt-3 max-w-sm text-xs leading-relaxed" style={{ color: HMUTED }}>
                Mobpae gives employees timely access while keeping employers in the approval seat and payroll teams away from manual follow-ups.
              </p>
            </div>
            <div className="relative mt-8">
              <div className="mb-5 grid size-12 place-items-center rounded-2xl transition-all duration-300" style={{ background: P10, color: B }}>
                <ShieldCheckIcon className="size-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ color: HFG }}>No payroll disruption</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed" style={{ color: HMUTED }}>
                Mobpae fits around existing payroll cycles, cutoff dates, and approval policies without changing your cash flow timing.
              </p>
            </div>
          </div>

          {/* Card 2 — dark */}
          <div
            className="group relative overflow-hidden rounded-[2rem] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            style={{ border: `1px solid ${HBORDER}`, background: HFG, color: "#fff" }}
          >
            <div aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150" style={{ background: W05 }} />
            <div className="relative">
              <div className="mb-5 grid size-10 place-items-center rounded-xl" style={{ background: W10, color: "#fff" }}>
                <TrendUpArrowIcon className="size-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight">Responsible employee liquidity</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed" style={{ color: W70 }}>
                Employees access earned wages through a bounded, employer-approved process that reduces stress without encouraging over-borrowing.
              </p>
            </div>
          </div>

          {/* Card 3 — light */}
          <div
            className="group relative overflow-hidden rounded-[2rem] p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            style={{ border: `1px solid ${HBORDER}`, background: "#fff" }}
          >
            <div aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150" style={{ background: P05 }} />
            <div className="relative">
              <div className="mb-5 grid size-10 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105" style={{ background: B, color: "#fff" }}>
                <DocumentChartIcon className="size-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight" style={{ color: HFG }}>Settlement clarity</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed" style={{ color: HMUTED }}>
                Recoveries and settlements remain traceable across employer, employee, and admin flows with automated reconciliation.
              </p>
            </div>
          </div>
        </div>

        {/* How it works — blue gradient card */}
        <div className="relative mt-12 overflow-hidden rounded-[2.5rem] p-8 shadow-2xl lg:p-14" style={{ background: B }}>
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full blur-3xl" style={{ background: W05 }} />
          <div className="relative z-10">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: W70 }}>How Mobpae works</span>
                <h3 className="text-2xl font-extrabold tracking-tight lg:text-3xl" style={{ color: "#fff" }}>
                  A simple cycle that <span style={{ color: W90 }}>works for everyone.</span>
                </h3>
              </div>
              <a href="#enquiry" className="group inline-flex items-center gap-1.5 text-xs font-bold transition-colors" style={{ color: "#fff" }}>
                See it in a demo
                <ArrowIcon />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="group">
                  <div className="mb-3 text-5xl font-black transition-colors" style={{ color: W20 }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-4 h-px w-12 transition-all group-hover:w-20" style={{ background: W20 }} />
                  <h4 className="text-sm font-bold" style={{ color: "#fff" }}>{step.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: W70 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudiencePaths() {
  const paths = [
    {
      eyebrow: "For employers",
      title: "Offer a benefit without adding payroll complexity.",
      description: "Explore the approval, integration, reporting and recovery experience built for HR and finance teams.",
      href: "/employers",
      action: "Explore employer experience",
    },
    {
      eyebrow: "For employees",
      title: "See the employee journey from setup to repayment.",
      description: "Preview the mobile-first flow, status visibility and support available throughout the experience.",
      href: "/employees",
      action: "Explore employee experience",
    },
  ];

  return (
    <section aria-labelledby="audience-paths-title" className="relative overflow-hidden" style={{ background: PAGE_BG, padding: "clamp(52px,7vw,88px) 0" }}>
      <GridPatternOverlay fade={false} />
      <div className="relative" style={W(PAGE_MAX)}>
        <div style={{ maxWidth: 760, marginBottom: 28 }}>
          <Pill>Choose your path</Pill>
          <h2 id="audience-paths-title" style={{ fontSize: "clamp(32px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.025em", color: T1, margin: "16px 0 0", lineHeight: 1.05 }}>
            One platform, two clear experiences.
          </h2>
        </div>
        <div className="redesign-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {paths.map((path, index) => (
            <article
              key={path.href}
              style={{
                border: `1px solid ${index === 0 ? "rgba(255,255,255,0.12)" : BD}`,
                borderRadius: 24,
                padding: "clamp(28px,4vw,46px)",
                background: index === 0
                  ? "radial-gradient(circle at 86% 22%,rgba(124,58,237,0.28),transparent 34%),linear-gradient(135deg,#080B16,#141A33)"
                  : "linear-gradient(160deg,#F7F8FC 0%,#fff 70%)",
                boxShadow: index === 0 ? "0 30px 80px -54px rgba(8,11,22,0.86)" : "0 24px 70px -52px rgba(17,24,39,0.28)",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 800, color: index === 0 ? "#CBD4FF" : B, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>{path.eyebrow}</p>
              <h3 style={{ fontSize: "clamp(22px,3vw,32px)", lineHeight: 1.12, margin: "0 0 12px", color: index === 0 ? "#fff" : T1, letterSpacing: "-0.02em" }}>{path.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: index === 0 ? "rgba(255,255,255,0.66)" : T2, margin: "0 0 22px" }}>{path.description}</p>
              <Link to={path.href} style={{ display: "inline-flex", minHeight: 44, alignItems: "center", color: index === 0 ? "#fff" : B, fontSize: 14, fontWeight: 800, textDecoration: "none" }}>
                {path.action} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────────────────────
function SecuritySection() {
  const items = [
    {
      icon: <LockIcon className="size-5" />,
      title: "Secure data handling",
      desc: "Salary, bank, and profile data flow through encrypted transfer, scoped role access, and fully auditable changes.",
      tag: "Encrypted",
    },
    {
      icon: <ShieldCheckIcon className="size-5" />,
      title: "Employer-assisted checks",
      desc: "Approvals use employer context — tenure, salary, policy window — instead of blind credit-style decisioning.",
      tag: "Contextual",
    },
    {
      icon: <LedgerIcon className="size-5" />,
      title: "Recovery discipline",
      desc: "Payroll-linked recovery keeps the workflow accountable and removes the friction of manual collections.",
      tag: "Payroll-linked",
    },
  ];

  return (
    <section id="security" className="relative overflow-hidden py-20 lg:py-28" style={{ background: PAGE_BG }}>
      <GridPatternOverlay fade={false} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full blur-3xl" style={{ background: P10 }} />

      <div className="relative mx-auto" style={W(PAGE_MAX)}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8" style={{ background: "rgba(24,24,27,0.4)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: B }}>Built for confidence</span>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl" style={{ color: HFG }}>
              Trust is designed <br className="hidden sm:block" />
              <span className="font-light italic" style={{ color: "rgba(24,24,27,0.7)" }}>into the </span>
              <span style={{ color: B }}>workflow.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl p-5 backdrop-blur-sm" style={{ border: `1px solid rgba(229,229,229,0.7)`, background: "rgba(255,255,255,0.6)" }}>
              <p className="text-sm leading-relaxed" style={{ color: HMUTED }}>
                MobPae is not positioned as quick credit. It is a controlled workplace benefit with verification, approvals, and recovery visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-20">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1"
              style={{ border: `1px solid ${HBORDER}`, background: "#fff", boxShadow: "0 1px 0 0 rgba(0,0,0,0.02)" }}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLElement;
                card.style.borderColor = P40;
                card.style.boxShadow = `0 28px 50px -20px ${P25}`;
                const iconBox = card.querySelector<HTMLElement>("[data-icon-box]");
                if (iconBox) { iconBox.style.background = B; iconBox.style.color = "#fff"; }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget as HTMLElement;
                card.style.borderColor = HBORDER;
                card.style.boxShadow = "0 1px 0 0 rgba(0,0,0,0.02)";
                const iconBox = card.querySelector<HTMLElement>("[data-icon-box]");
                if (iconBox) { iconBox.style.background = P10; iconBox.style.color = B; }
              }}
            >
              <div className="relative">
                <div
                  data-icon-box
                  className="mb-6 inline-flex size-11 items-center justify-center rounded-xl transition-all duration-500"
                  style={{ background: P10, color: B, boxShadow: `0 0 0 1px ${P15}` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight" style={{ color: HFG }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: HMUTED }}>{item.desc}</p>
                <div className="mt-6 flex items-center pt-4" style={{ borderTop: `1px solid rgba(229,229,229,0.7)` }}>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ background: HMUTED_BG, color: "rgba(24,24,27,0.7)" }}>
                    <span className="size-1.5 rounded-full" style={{ background: B }} />
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl px-5 py-4 sm:flex-row sm:items-center"
          style={{ border: `1px dashed ${HBORDER}`, background: "rgba(255,255,255,0.5)" }}
        >
          <div className="flex items-center gap-3">
            <PulseDot color={B} />
            <p className="text-xs font-medium" style={{ color: HMUTED }}>
              Every request is logged, verified, and traceable — from employer approval to payroll settlement.
            </p>
          </div>
          <a href="#security" className="text-xs font-bold" style={{ color: B }}>Read the security overview →</a>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Is Mobpae a loan product?", a: "No. Employees access wages they have already earned through an employer-backed approval process. There is no interest, no credit check, and no debt cycle." },
  { q: "Who approves salary advance requests?", a: "The employer approves every request. Mobpae only disburses funds after the employer confirms eligibility, available limit, and policy compliance." },
  { q: "Does it disrupt our payroll process?", a: "No. Mobpae fits into existing payroll cycles, cutoff dates, and settlement flows. Recovery is payroll-linked and reconciled automatically." },
  { q: "What happens if an employer rejects a request?", a: "If a request is rejected, no funds are disbursed. The employee is notified with the reason, and no recovery is initiated against payroll." },
  { q: "How is employee data protected?", a: "Data flows through encrypted transfer, scoped role access, and auditable change logs. We never sell or share employee data with third parties." },
  { q: "How long does onboarding take?", a: "Most employers are up and running within a few days. We connect to existing HRIS or payroll systems and configure policy rules before go-live." },
];

function FaqBlock({ openFaq, setOpenFaq }: { openFaq: number; setOpenFaq: (n: number) => void }) {
  return (
    <section id="faq" className="relative overflow-hidden py-16 lg:py-24" style={{ background: PAGE_BG }}>
      <GridPatternOverlay fade={false} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full blur-3xl" style={{ background: "rgba(49,94,255,0.06)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full blur-3xl" style={{ background: P05 }} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.35, backgroundImage: `radial-gradient(circle at 80% 20%, ${P08} 0%, transparent 40%)` }}
      />

      <div className="relative mx-auto" style={W(PAGE_MAX)}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ background: P10, color: B }}>
              <PulseDot color={B} />
              FAQ
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl" style={{ color: HFG }}>
              Common <br className="hidden sm:block" />
              <span style={{ color: B }}>questions.</span>
            </h2>
            <div className="mt-4 max-w-sm rounded-2xl p-5 backdrop-blur-sm" style={{ border: `1px solid rgba(229,229,229,0.7)`, background: "rgba(255,255,255,0.8)" }}>
              <p className="text-sm leading-relaxed" style={{ color: HMUTED }}>
                Everything you need to know about Mobpae, earned wage access, and how we work with employers.
              </p>
              <a
                href="#enquiry"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                style={{ color: B }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(49,94,255,0.8)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = B; }}
              >
                Still have questions? Contact us
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              className="relative overflow-hidden rounded-[2rem]"
              style={{ border: `1px solid ${HBORDER}`, background: "#fff", boxShadow: "0 24px 60px -20px rgba(49,94,255,0.12)" }}
            >
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${P40}, transparent)` }} />
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="transition-colors"
                    style={{
                      borderBottom: i < FAQS.length - 1 ? `1px solid ${HBORDER}` : "none",
                      background: isOpen ? P03 : "transparent",
                    }}
                    onMouseEnter={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.background = "rgba(49,94,255,0.02)"; }}
                    onMouseLeave={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      aria-label={f.q}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                      className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left transition-colors sm:px-8"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span className="text-base font-bold tracking-tight transition-colors" style={{ color: isOpen ? B : HFG }}>{f.q}</span>
                      <span
                        className="grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300"
                        style={
                          isOpen
                            ? { border: `1px solid ${B}`, background: B, color: "#fff" }
                            : { border: `1px solid ${HBORDER}`, background: "#fff", color: B }
                        }
                        onMouseEnter={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.borderColor = P40; }}
                        onMouseLeave={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.borderColor = HBORDER; }}
                      >
                        <svg className="size-4 transition-transform duration-300" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="min-h-0">
                        <p id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} className="px-7 pb-5 text-sm leading-relaxed sm:px-8" style={{ color: HMUTED }}>
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Enquiry form ──────────────────────────────────────────────────────────────
function EnquiryBlock({ form, errors, loading, success, error, updateField, submitEnquiry }: {
  form: FormState;
  errors: FormErrors;
  loading: boolean;
  success: string;
  error: string;
  updateField: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  submitEnquiry: (e: React.FormEvent) => void;
}) {
  const inp = (err?: string): React.CSSProperties => ({
    width: "100%",
    height: 42,
    padding: "0 13px",
    fontSize: 14,
    border: `1px solid ${err ? "#EF4444" : BD}`,
    borderRadius: 8,
    outline: "none",
    color: T1,
    background: "#fff",
    fontFamily: "inherit",
    boxSizing: "border-box",
  });
  const lbl: React.CSSProperties = { fontSize: 12.5, fontWeight: 600, color: T2, display: "block", marginBottom: 5 };

  return (
    <section id="enquiry" className="relative overflow-hidden" style={{ background: PAGE_BG, padding: "clamp(52px,7vw,88px) 0" }}>
      <GridPatternOverlay fade={false} />
      <div className="relative" style={W(PAGE_MAX)}>
        <div className="redesign-2col" style={{ display: "grid", gridTemplateColumns: "0.74fr 1.26fr", gap: 42, alignItems: "stretch" }}>
          <div style={{ background: "radial-gradient(circle at 72% 82%,rgba(49,94,255,0.14),transparent 36%),linear-gradient(160deg,#F2F6FF 0%,#fff 82%)", borderRadius: 24, padding: "34px 30px", border: `1px solid ${BD}`, boxShadow: "0 24px 70px -56px rgba(17,24,39,0.36)" }}>
            <Pill>Employer enquiry</Pill>
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.025em", color: T1, margin: "18px 0 14px", lineHeight: 1.1 }}>
              Let us build a financially stronger team with you.
            </h2>
            <p style={{ fontSize: 14.5, color: T2, lineHeight: 1.72, margin: "0 0 26px" }}>
              Share a few details and our team will schedule a product walkthrough for your payroll setup, policy needs, and employee rollout.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "A short discovery call with your team",
                "Payroll cycle and policy alignment",
                "Employee and employer portal walkthrough",
              ].map((text) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#ECFDF5", color: GREE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckIcon />
                  </span>
                  <p style={{ fontSize: 13.5, color: T1, margin: 0, fontWeight: 700 }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: `1px solid ${BD}` }}>
              <p style={{ fontSize: 12.5, color: T2, margin: 0 }}>support@mobpae.com · Gujarat, Ahmedabad</p>
            </div>
          </div>

          <form
            aria-label="Demo enquiry"
            aria-busy={loading}
            onSubmit={submitEnquiry}
            noValidate
            style={{
              background: "#fff",
              borderRadius: 22,
              border: `1px solid ${BD}`,
              padding: "28px 24px",
              boxShadow: "0 24px 70px -45px rgba(17,24,39,0.35)",
              position: "relative",
            }}
          >
            <div className="redesign-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label htmlFor="enquiry-contact-name" style={lbl}>Full name <span aria-hidden="true">*</span></label>
                <input id="enquiry-contact-name" name="contactName" required aria-invalid={Boolean(errors.contactName)} aria-describedby={errors.contactName ? "enquiry-contact-name-error" : undefined} value={form.contactName} onChange={updateField} placeholder="Rahul Mehta" style={inp(errors.contactName)} onFocus={(e) => e.target.style.borderColor = B} onBlur={(e) => e.target.style.borderColor = errors.contactName ? "#EF4444" : BD} />
                {errors.contactName && <p id="enquiry-contact-name-error" role="alert" style={{ fontSize: 12, color: "#B91C1C", margin: "3px 0 0" }}>{errors.contactName}</p>}
              </div>
              <div>
                <label htmlFor="enquiry-email" style={lbl}>Work email <span aria-hidden="true">*</span></label>
                <input id="enquiry-email" name="email" type="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "enquiry-email-error" : undefined} value={form.email} onChange={updateField} placeholder="rahul@company.com" style={inp(errors.email)} onFocus={(e) => e.target.style.borderColor = B} onBlur={(e) => e.target.style.borderColor = errors.email ? "#EF4444" : BD} />
                {errors.email && <p id="enquiry-email-error" role="alert" style={{ fontSize: 12, color: "#B91C1C", margin: "3px 0 0" }}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="enquiry-company" style={lbl}>Company name <span aria-hidden="true">*</span></label>
                <input id="enquiry-company" name="companyName" required aria-invalid={Boolean(errors.companyName)} aria-describedby={errors.companyName ? "enquiry-company-error" : undefined} value={form.companyName} onChange={updateField} placeholder="Northstar Retail Pvt Ltd" style={inp(errors.companyName)} onFocus={(e) => e.target.style.borderColor = B} onBlur={(e) => e.target.style.borderColor = errors.companyName ? "#EF4444" : BD} />
                {errors.companyName && <p id="enquiry-company-error" role="alert" style={{ fontSize: 12, color: "#B91C1C", margin: "3px 0 0" }}>{errors.companyName}</p>}
              </div>
              <div>
                <label htmlFor="enquiry-interest" style={lbl}>I'm reaching out as</label>
                <select id="enquiry-interest" name="interest" value={form.interest} onChange={updateField} style={{ ...inp(), appearance: "none", WebkitAppearance: "none" }} onFocus={(e) => e.target.style.borderColor = B} onBlur={(e) => e.target.style.borderColor = BD}>
                  <option value="">Select...</option>
                  <option value="Employer">Employer</option>
                  <option value="Employee">Employee</option>
                  <option value="Capital Partner">Capital Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="enquiry-phone" style={lbl}>Phone number <span style={{ fontWeight: 400, color: "#6B7280" }}>(optional)</span></label>
              <input id="enquiry-phone" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="+91 98765 43210" style={inp()} onFocus={(e) => e.target.style.borderColor = B} onBlur={(e) => e.target.style.borderColor = BD} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label htmlFor="enquiry-message" style={lbl}>Message <span aria-hidden="true">*</span></label>
              <textarea id="enquiry-message" name="message" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "enquiry-message-error" : undefined} value={form.message} onChange={updateField} rows={4} placeholder="Tell us what you want to explore for your team..." style={{ ...inp(errors.message), height: "auto", padding: "10px 13px", resize: "vertical" }} onFocus={(e) => e.target.style.borderColor = B} onBlur={(e) => e.target.style.borderColor = errors.message ? "#EF4444" : BD} />
              {errors.message && <p id="enquiry-message-error" role="alert" style={{ fontSize: 12, color: "#B91C1C", margin: "3px 0 0" }}>{errors.message}</p>}
            </div>
            {success && <div role="status" aria-live="polite" style={{ marginBottom: 16, padding: "10px 14px", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8 }}><p style={{ fontSize: 13.5, color: "#15803D", margin: 0, fontWeight: 600 }}>✓ {success}</p></div>}
            {error && <div role="alert" aria-live="assertive" style={{ marginBottom: 16, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8 }}><p style={{ fontSize: 13.5, color: "#B91C1C", margin: 0, fontWeight: 600 }}>{error}</p></div>}
            <p style={{ fontSize: 12.5, color: T2, lineHeight: 1.6, margin: "0 0 14px" }}>
              Fields marked * are required. By submitting, you agree that MobPae may use these details to respond to your enquiry. Read our <Link to="/privacy-policy" style={{ color: B, fontWeight: 600 }}>Privacy Policy</Link>.
            </p>
            {loading && (
              <div className="form-loading-skeleton" aria-hidden="true">
                <span className="site-skeleton" />
                <span className="site-skeleton" />
                <span className="site-skeleton" />
              </div>
            )}
            <button type="submit" disabled={loading} style={{ width: "100%", height: 48, background: loading ? "#6B80CC" : B, color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: 8, border: "none", cursor: loading ? "not-allowed" : "pointer", fontFamily: "inherit", transition: "background 120ms ease" }} onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = BH; }} onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = B; }}>
              {loading ? "Sending..." : "Send enquiry"}
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
    <section style={{ background: PAGE_BG, padding: "clamp(46px,6vw,76px) 0" }}>
      <div style={W(PAGE_MAX)}>
        <div
          style={{
            background: B,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 28,
            padding: "clamp(30px,5vw,56px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 26,
            flexWrap: "wrap",
            boxShadow: "0 30px 90px -58px rgba(8,11,22,0.86)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GridPatternOverlay opacity={0.6} lineColor="rgba(255,255,255,0.12)" fade={false} />
          <div
            aria-hidden="true"
            style={{ position: "absolute", right: -80, bottom: -80, width: 320, height: 320, borderRadius: "50%", background: W05, filter: "blur(60px)", pointerEvents: "none" }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "auto 0 0",
              height: 1,
              background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)",
            }}
          />
          <div style={{ maxWidth: 620, position: "relative" }}>
            <span style={{ display: "inline-block", marginBottom: 8, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: W70 }}>
              Ready when your team is
            </span>
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 12px" }}>
              Bring MobPae to your workplace.
            </h2>
            <p style={{ fontSize: 15.5, color: W70, lineHeight: 1.7, margin: 0 }}>
              Start with a simple walkthrough. We will map MobPae to your payroll cycle, approval policy, and employee support flow.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#enquiry" style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 48, padding: "0 26px", background: "#fff", color: "#0B0D12", fontWeight: 800, fontSize: 15, borderRadius: 10, textDecoration: "none", boxShadow: "0 16px 34px rgba(0,0,0,0.18)" }}>
              Request a demo
              <ArrowIcon />
            </a>
            <Link to="/product" style={{ display: "inline-flex", alignItems: "center", height: 48, padding: "0 22px", color: "#fff", fontSize: 14.5, fontWeight: 800, borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.20)", background: "rgba(255,255,255,0.08)" }}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
