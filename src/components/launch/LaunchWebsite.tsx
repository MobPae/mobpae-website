import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Heart,
  HelpCircle,
  Landmark,
  Loader2,
  Menu,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

const API_BASE = (
  (import.meta.env.VITE_API_BASE_URL as string | undefined) || ""
).replace(/\/api\/v1\/?$/, "");

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  employeeCount: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type FaqItem = {
  category: string;
  q: string;
  a: string;
};

const initialForm: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  employeeCount: "",
  interest: "",
  message: "",
};

const navLinks = [
  { label: "For Employers", href: "/employers" },
  { label: "For Employees", href: "/employees" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/help-center", dropdown: true },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
];

const journey = [
  {
    label: "Employee raises a request",
    copy: "They see eligibility, timing and repayment before submitting.",
    icon: Users,
    color: "#315eff",
  },
  {
    label: "Employer reviews context",
    copy: "HR or finance approves with salary and policy visibility.",
    icon: BriefcaseBusiness,
    color: "#FF8A1F",
  },
  {
    label: "MobPae completes disbursal",
    copy: "The approved amount moves through a traceable payout flow.",
    icon: Landmark,
    color: "#21C985",
  },
  {
    label: "Recovery follows payroll",
    copy: "The cycle closes around cutoff and salary-date rules.",
    icon: FileCheck2,
    color: "#4F7DFF",
  },
];

const readinessCards = [
  {
    title: "Policy stays visible",
    copy: "Every request carries employer context before money moves.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Payroll dates matter",
    copy: "Cutoff and payday logic guide the right recovery cycle.",
    icon: FileCheck2,
  },
  {
    title: "No invisible handoffs",
    copy: "Each status is visible from request to disbursal to recovery.",
    icon: ShieldCheck,
  },
  {
    title: "Employees know what is next",
    copy: "Setup, repayment and pending actions are clear in-app.",
    icon: Users,
  },
];

const employerBenefits = [
  {
    title: "Reduce salary stress",
    copy: "Give teams a safer path before payday pressure becomes distraction.",
    icon: Users,
    color: "#cbd7ff",
  },
  {
    title: "Cut manual follow-ups",
    copy: "Replace ad-hoc advance requests with a trackable approval flow.",
    icon: BriefcaseBusiness,
    color: "#FF8A1F",
  },
  {
    title: "Protect payroll rhythm",
    copy: "MobPae works around cutoff dates, salary dates and recovery windows.",
    icon: FileCheck2,
    color: "#E778A8",
  },
  {
    title: "No employer cash burden",
    copy: "Offer a meaningful benefit without changing salary payout operations.",
    icon: BadgeCheck,
    color: "#21C985",
  },
  {
    title: "Clear operating record",
    copy: "Approvals, disbursals, recoveries and settlements stay visible.",
    icon: BarChart3,
    color: "#a9bcff",
  },
];

const faqCategories = ["All", "Employer", "Employee", "Security"];
const faqs: FaqItem[] = [
  {
    category: "Employer",
    q: "What is Earned Wage Access?",
    a: "Earned Wage Access lets employees access a controlled portion of salary they have already earned before payday.",
  },
  {
    category: "Employee",
    q: "Is MobPae a loan?",
    a: "No. MobPae is employer-backed salary access. It is not positioned as a loan or credit product.",
  },
  {
    category: "Employer",
    q: "Who approves salary advance requests?",
    a: "The employer reviews the request first. Admin operations handle verification, disbursal and settlement visibility.",
  },
  {
    category: "Employer",
    q: "Does it disrupt payroll?",
    a: "MobPae is built around payroll dates and cutoff logic, so recoveries can align with the correct salary cycle.",
  },
  {
    category: "Security",
    q: "How is employee data protected?",
    a: "The platform uses role-based access, audit trails and verification workflows for sensitive operations.",
  },
];

export function LaunchWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState("All");
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "MobPae | Your Trusted Financial Partner";
    const description =
      "MobPae helps employers offer responsible earned salary access through approvals, disbursal tracking and payroll-linked recovery visibility.";
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  useEffect(() => {
    if (!isEnquiryOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsEnquiryOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isEnquiryOpen]);

  const filteredFaqs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchesCategory = activeFaq === "All" || faq.category === activeFaq;
      const matchesSearch =
        !normalized ||
        faq.q.toLowerCase().includes(normalized) ||
        faq.a.toLowerCase().includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [activeFaq, query]);

  function updateField(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validateForm() {
    const nextErrors: FormErrors = {};
    if (!form.companyName.trim()) nextErrors.companyName = "Required";
    if (!form.email.trim()) nextErrors.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = "Invalid email";
    if (!form.phone.trim()) nextErrors.phone = "Required";
    else if (form.phone.length < 10) nextErrors.phone = "Must be 10 digits";
    if (!form.message.trim()) nextErrors.message = "Required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const response = await fetch(`${API_BASE}/employer-enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactPerson:
            form.contactName || form.companyName || "Website employer enquiry",
          email: form.email,
          phone: form.phone,
          employeeCount: form.employeeCount
            ? Number.parseInt(form.employeeCount.replace(/\D/g, ""), 10) || null
            : null,
          message: [form.interest, form.message || "Website employer enquiry"]
            .filter(Boolean)
            .join(" - "),
        }),
      });
      if (!response.ok) {
        throw new Error("Enquiry request failed");
      }
      setSuccess("Enquiry submitted. Our team will contact you shortly.");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      setError("Unable to submit. Please email support@mobpae.com.");
    } finally {
      setLoading(false);
    }
  }

  function openEnquiry() {
    setSuccess("");
    setError("");
    setIsEnquiryOpen(true);
  }

  return (
    <main className="launch-site min-h-screen bg-white text-[#21185F]">
      <section className="border-b border-[#dce5ff] bg-white">
        <div className="relative overflow-hidden bg-white text-[#21185F]">
          <HeroAtmosphere />
          <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-5 sm:px-8 lg:px-10">
            <header className="flex min-h-14 items-center justify-between">
              <a
                href="/"
                className="flex items-center gap-3"
                aria-label="MobPae home"
              >
                <MobPaeLogo />
              </a>

              <nav className="hidden items-center gap-7 rounded-full border border-[#eef3ff] bg-white/86 px-5 py-3 shadow-[0_16px_42px_rgba(49,94,255,0.06)] backdrop-blur-xl lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[12px] font-[760] text-[#5F657A] transition hover:text-[#315eff]"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={13} />}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={openEnquiry}
                className="hidden h-11 items-center justify-center rounded-full bg-[#315eff] px-6 text-[13px] font-[850] text-white shadow-[0_16px_34px_rgba(49,94,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#214be6] lg:inline-flex"
              >
                Book a Demo
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e9ff] bg-white text-[#315eff] shadow-[0_12px_30px_rgba(49,94,255,0.1)] lg:hidden"
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </header>

            {menuOpen && (
              <div className="mt-4 rounded-2xl border border-[#e2e9ff] bg-white/92 p-3 shadow-[0_20px_60px_rgba(49,94,255,0.12)] backdrop-blur-xl lg:hidden">
                <div className="grid gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-[14px] font-[700] text-[#4F5872] transition hover:bg-[#f5f7ff] hover:text-[#315eff]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="launch-hero-stage grid min-h-[650px] items-center gap-12 py-12 sm:py-14 lg:grid-cols-[0.88fr_1.12fr] lg:py-16">
              <div className="max-w-[700px]">
                <div className="launch-reveal inline-flex items-center gap-2 rounded-full border border-[#dce5ff] bg-white px-4 py-2 text-[12px] font-[800] text-[#315eff] shadow-[0_12px_34px_rgba(49,94,255,0.08)]">
                  <Sparkles
                    size={14}
                    className="fill-[#F7A047] text-[#F7A047]"
                  />
                  Employer-backed earned salary access
                </div>

                <h1
                  className="launch-reveal mt-7 max-w-[720px] text-[38px] leading-[0.98] tracking-normal sm:text-[56px]"
                  style={{
                    fontFamily:
                      '"TASA Orbiter Display SemiBold", "TASA Orbiter Display SemiBold Placeholder", sans-serif',
                    fontFeatureSettings: "normal",
                    fontStyle: "normal"
                  }}
                >
                  <span className="text-[#315eff]">Your Trusted</span>
                  <br />
                  <span
                    className="text-[#21185F]"
                    style={{ fontFamily: '"TASA Orbiter Display Black", sans-serif' }}
                  >
                    Financial{" "}
                    Partner.
                  </span>
                </h1>

                <p className="launch-reveal mt-7 max-w-[610px] text-[16px] font-[520] leading-[1.78] text-[#5F657A]">
                  Offer earned salary access without turning payroll into a
                  support queue. Employees see what they can access and when it
                  gets recovered; employers keep approval, disbursal and
                  settlement visibility.
                </p>

                <div className="launch-reveal mt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openEnquiry}
                    className="inline-flex h-13 min-h-[52px] items-center gap-3 rounded-full bg-[#315eff] px-7 text-[14px] font-[900] text-white shadow-[0_18px_42px_rgba(49,94,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#214be6]"
                  >
                    Book a Demo <ArrowRight size={18} />
                  </button>
                  <a
                    href="/employers"
                    className="inline-flex h-13 min-h-[52px] items-center gap-3 rounded-full border border-[#dce5ff] bg-white px-7 text-[14px] font-[850] text-[#315eff] shadow-[0_16px_34px_rgba(49,94,255,0.08)] transition hover:-translate-y-0.5 hover:bg-[#f8faff]"
                  >
                    Explore for Employers <ArrowRight size={18} />
                  </a>
                </div>

                <div className="launch-reveal mt-10 grid max-w-[620px] grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    "Approval-led",
                    "Cutoff-aware",
                    "No debt trap",
                    "Clear recovery",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-[#e2e9ff] bg-white px-3 text-[12px] font-[820] text-[#4F5872] shadow-[0_10px_26px_rgba(49,94,255,0.05)]"
                    >
                      <Check size={13} className="text-[#a9bcff]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <HeroProductVisual />
            </div>
          </div>
        </div>
      </section>

      <CrunchCalmSection />
      <EcosystemSection />
      <ImpactSection />
      <JourneySection />
      <EmployerBenefitsSection />
      <EnquiryFaqSection
        query={query}
        setQuery={setQuery}
        activeFaq={activeFaq}
        setActiveFaq={setActiveFaq}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
        faqs={filteredFaqs}
        openEnquiry={openEnquiry}
      />
      {isEnquiryOpen && (
        <EnquiryDialog
          form={form}
          errors={errors}
          loading={loading}
          success={success}
          error={error}
          updateField={updateField}
          submitEnquiry={submitEnquiry}
          onClose={() => setIsEnquiryOpen(false)}
        />
      )}
      <LaunchFooter />
    </main>
  );
}

function EnquiryDialog({
  form,
  errors,
  loading,
  success,
  error,
  updateField,
  submitEnquiry,
  onClose,
}: {
  form: FormState;
  errors: FormErrors;
  loading: boolean;
  success: string;
  error: string;
  updateField: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  submitEnquiry: (event: React.FormEvent) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close enquiry form"
        className="absolute inset-0 cursor-default bg-[#f5f7ff]/82 backdrop-blur-md"
        onClick={onClose}
      />
      <form
        onSubmit={submitEnquiry}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-dialog-title"
        className="relative max-h-[88vh] w-full max-w-[720px] overflow-y-auto rounded-[30px] border border-[#dce5ff] bg-white p-6 shadow-[0_34px_120px_rgba(49,94,255,0.18)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-[#315eff]">
              Employer Enquiry
            </p>
            <h3
              id="enquiry-dialog-title"
              className="mt-3 text-[28px] font-[900] leading-[1.12] tracking-[-0.03em] text-[#0B1026]"
            >
              Start with a quick hello.
            </h3>
            <p className="mt-3 max-w-[520px] text-[14px] font-[500] leading-[1.75] text-[#667085]">
              Share the basics. Our team will contact you to schedule the right
              conversation before onboarding.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3f6ff] text-[#315eff] transition hover:bg-[#e8eeff]"
            aria-label="Close enquiry form"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="Company" error={errors.companyName}>
            <input
              name="companyName"
              value={form.companyName}
              onChange={updateField}
              placeholder="Northstar Retail"
              className="launch-input"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="rohan@company.com"
              className="launch-input"
            />
          </Field>
          <Field label="Mobile Number" error={errors.phone}>
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              placeholder="92270 12145"
              className="launch-input"
              inputMode="numeric"
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={updateField}
                placeholder="Tell us what you want to explore for your team"
                className="launch-input h-auto resize-none py-4 sm:min-h-[112px]"
              />
            </Field>
          </div>
        </div>

        {success && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-emerald-600"
            />
            <p className="text-[13px] font-[700] text-emerald-700">{success}</p>
          </div>
        )}
        {error && (
          <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3">
            <p className="text-[13px] font-[700] text-red-700">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#315eff] text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(49,94,255,0.32)] transition hover:bg-[#315eff] disabled:opacity-60"
        >
          {loading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            "Submit Employer Enquiry"
          )}
          {!loading && <ArrowRight size={17} />}
        </button>
        <p className="mt-4 text-center text-[11px] font-[650] text-[#8A90A3]">
          One enquiry form. No spam. We contact you to schedule the right
          conversation.
        </p>
      </form>
    </div>
  );
}

function HeroAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(49,94,255,0.12),transparent_30%),radial-gradient(circle_at_18%_12%,rgba(203,212,255,0.22),transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_72%,#FBFCFF_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(49,94,255,0.12) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(180deg,transparent,#ffffff)]" />
      <div className="absolute right-[8%] top-[18%] hidden h-[540px] w-[540px] rounded-full border border-[#315eff]/10 lg:block" />
    </>
  );
}

function HeroProductVisual() {
  return (
    <div className="salary-command-center relative mx-auto w-full max-w-[650px]">
      <div className="salary-beam salary-beam-one" />
      <div className="salary-beam salary-beam-two" />

      <div className="salary-dashboard">
        <div className="salary-dashboard-header">
          <div>
            <span>Employer Portal</span>
            <strong>Payroll access control</strong>
          </div>
          <button type="button">Live</button>
        </div>

        <div className="salary-dashboard-grid">
          <div className="salary-metric salary-metric-primary">
            <span>Available salary access</span>
            <strong>₹18.4L</strong>
            <p>Across approved employees</p>
          </div>
          <div className="salary-metric">
            <span>Pending review</span>
            <strong>24</strong>
            <p>Policy-aware requests</p>
          </div>
          <div className="salary-metric">
            <span>Recovery cycle</span>
            <strong>98%</strong>
            <p>Mapped to salary date</p>
          </div>
        </div>

        <div className="salary-flow-card">
          {[
            ["Request", "Employee confirms eligibility", "01"],
            ["Approval", "Employer policy applies", "02"],
            ["Disbursal", "Payout tracked", "03"],
            ["Recovery", "Payroll cycle closes", "04"],
          ].map(([title, copy, step]) => (
            <div key={title} className="salary-flow-row">
              <span>{step}</span>
              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
              <CheckCircle2 size={16} />
            </div>
          ))}
        </div>
      </div>

      <div className="salary-floating-card salary-floating-card-right">
        <span>Employee view</span>
        <strong>₹5,000</strong>
        <p>Eligible today with clear recovery</p>
      </div>
    </div>
  );
}

function CrunchCalmSection() {
  const moments = [
    {
      label: "Before MobPae",
      title: "Month-end requests scatter across chats and calls.",
      copy: "Employees need help, HR needs context, finance needs control and everyone is chasing status.",
      accent: "#F3A34E",
    },
    {
      label: "With MobPae",
      title: "The request becomes a controlled workflow.",
      copy: "Eligibility, employer policy, approvals and disbursal status move through one visible operating path.",
      accent: "#315eff",
    },
    {
      label: "After Payday",
      title: "Recovery closes around the payroll rhythm.",
      copy: "Cutoff dates, salary dates and settlement records stay aligned, so payroll does not become a support queue.",
      accent: "#21C985",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#dce5ff] bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
          <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
              The MobPae Moment
            </p>
            <h2 className="mt-5 max-w-[580px] text-[32px] font-[900] leading-[1.12] tracking-normal text-[#21185F]">
              From scattered salary asks to one controlled payday rhythm.
            </h2>
          </div>
          <p className="max-w-[540px] text-[15px] font-[500] leading-[1.85] text-[#667085]">
            MobPae gives employers a structured way to respond before payday:
            every request has context, every approval has visibility and every
            recovery follows the payroll cycle.
          </p>
        </div>

        <div className="mt-12 grid border-y border-[#dce5ff] lg:grid-cols-3">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="relative min-h-[320px] border-b border-[#e2e9ff] p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div
                className="absolute inset-x-7 top-0 h-1.5"
                style={{ backgroundColor: moment.accent }}
              />
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] font-[950] uppercase tracking-[0.18em] text-[#315eff]">
                  {moment.label}
                </p>
                <span className="text-[54px] font-[950] leading-none text-[#d7e0ff]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-24 max-w-[300px] text-[24px] font-[950] leading-[1.08] text-[#21185F]">
                {moment.title}
              </h3>
              <p className="mt-4 max-w-[320px] text-[14px] font-[600] leading-[1.76] text-[#667085]">
                {moment.copy}
              </p>
              <div className="absolute bottom-7 left-7 right-7 h-1 overflow-hidden rounded-full bg-[#eef3ff]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${index === 0 ? 34 : index === 1 ? 72 : 100}%`,
                    backgroundColor: moment.accent,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const layers = [
    {
      title: "Employer Portal",
      copy: "Approvals, policy context and payroll visibility stay with the employer.",
      icon: BriefcaseBusiness,
      color: "#FF8A1F",
      action: "Approve",
    },
    {
      title: "Employee App",
      copy: "Employees see access, status, repayment and pending setup in one place.",
      icon: Users,
      color: "#315eff",
      action: "Access",
    },
    {
      title: "Admin Operations",
      copy: "Verification, disbursal tracking and settlement checks stay traceable.",
      icon: ShieldCheck,
      color: "#315eff",
      action: "Operate",
    },
    {
      title: "Payroll Recovery",
      copy: "Recoveries close against cutoff rules, salary dates and settlement records.",
      icon: FileCheck2,
      color: "#21C985",
      action: "Recover",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden border-t border-[#dce5ff] bg-white px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
              Product Ecosystem
            </p>
            <h2 className="mt-5 max-w-[440px] text-[32px] font-[900] leading-[1.12] tracking-normal text-[#21185F]">
              One operating layer, four clear responsibilities.
            </h2>
            <p className="mt-6 max-w-[390px] text-[15px] font-[500] leading-[1.85] text-[#667085]">
              The ecosystem is a simple accountability model: who approves, who
              accesses, who operates and how payroll recovery closes.
            </p>
          </div>

          <div className="border-y border-[#dce5ff]">
            {layers.map(({ title, copy, icon: Icon, color, action }, index) => (
              <div
                key={title}
                className="grid gap-5 border-b border-[#e2e9ff] py-6 last:border-b-0 sm:grid-cols-[88px_1fr_120px] sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[36px] font-[950] leading-none text-[#b7c7ff]">
                    0{index + 1}
                  </span>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-[0_16px_34px_rgba(49,94,255,0.14)]"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={22} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[22px] font-[950] leading-[1.1] text-[#21185F]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[560px] text-[13px] font-[600] leading-[1.7] text-[#667085]">
                    {copy}
                  </p>
                </div>
                <span className="w-fit justify-self-start rounded-lg bg-[#f5f7ff] px-3 py-2 text-[11px] font-[950] uppercase tracking-[0.14em] text-[#315eff] sm:justify-self-end">
                  {action}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-hidden border-y border-[#dce5ff] bg-[#fbfcff]">
          <div
            className="absolute inset-x-0 bottom-0 hidden h-40 opacity-[0.28] lg:block"
            style={{
              backgroundImage:
                "linear-gradient(rgba(49,94,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(49,94,255,0.08) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="relative z-10 grid lg:grid-cols-[0.32fr_0.68fr]">
            <div className="border-b border-[#dce5ff] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-[11px] font-[900] uppercase tracking-[0.2em] text-[#315eff]">
                System Shape
              </p>
              <h3 className="mt-4 max-w-[300px] text-[28px] font-[950] leading-[1.08] text-[#21185F]">
                A controlled path from request to recovery.
              </h3>
            </div>
            <div className="grid md:grid-cols-3">
              {[
                ["Request clarity", "Employees understand eligibility and repayment before submitting."],
                ["Approval control", "Employers keep policy context before money moves."],
                ["Payroll closure", "Recovery follows salary-cycle and settlement logic."],
              ].map(([title, copy], index) => (
                <div
                  key={title}
                  className="min-h-[190px] border-b border-[#e2e9ff] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <span className="text-[12px] font-[950] uppercase tracking-[0.18em] text-[#b7c7ff]">
                    0{index + 1}
                  </span>
                  <h4 className="mt-12 text-[18px] font-[950] text-[#21185F]">
                    {title}
                  </h4>
                  <p className="mt-3 text-[13px] font-[600] leading-[1.7] text-[#667085]">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#dce5ff] bg-white px-5 py-20 text-[#21185F] sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="relative overflow-hidden bg-[#315eff] p-7 text-white sm:p-9">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />
            <div className="relative z-10">
              <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-white/72">
                Operating Foundation
              </p>
          <h2 className="mt-4 max-w-[430px] text-[32px] font-[900] leading-[1.12] tracking-normal text-white">
            Built for controlled employer rollouts
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] font-[500] leading-[1.8] text-white/72">
            A focused foundation for approvals, verification, disbursal tracking
            and payroll-cycle recovery before scale.
          </p>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/18 pt-6">
                <div>
                  <strong className="text-[34px] font-[950] leading-none">4</strong>
                  <p className="mt-2 text-[12px] font-[750] text-white/70">
                    control layers
                  </p>
                </div>
                <div>
                  <strong className="text-[34px] font-[950] leading-none">1</strong>
                  <p className="mt-2 text-[12px] font-[750] text-white/70">
                    payroll rhythm
                  </p>
                </div>
              </div>
            </div>
        </div>

          <div className="border-y border-[#dce5ff]">
          {readinessCards.map(({ title, copy, icon: Icon }) => (
            <div
              key={title}
                className="grid gap-4 border-b border-[#e2e9ff] py-6 last:border-b-0 sm:grid-cols-[56px_1fr_auto] sm:items-center"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef3ff] text-[#315eff]">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-[20px] font-[950] tracking-normal text-[#21185F]">
                    {title}
                  </p>
                  <p className="mt-2 max-w-[460px] text-[13px] font-[550] leading-[1.7] text-[#667085]">
                    {copy}
                  </p>
                </div>
                <span className="w-fit rounded-lg bg-[#f5f7ff] px-3 py-2 text-[11px] font-[950] uppercase tracking-[0.14em] text-[#315eff]">
                  Controlled
                </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-[#dce5ff] bg-white px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[420px] text-[32px] font-[900] leading-[1.12] tracking-normal text-[#21185F]">
            Simple for everyone. Powerful for all.
          </h2>
          <p className="max-w-[420px] text-[15px] font-[520] leading-[1.8] text-[#667085]">
            The journey is intentionally linear: each handoff has a clear owner,
            visible status and payroll-aware next step.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto border-y border-[#dce5ff]">
          <div className="grid min-w-[900px] grid-cols-4">
              {journey.map(({ icon: Icon, ...item }, index) => (
                <div
                  key={item.label}
                  className="relative min-h-[300px] border-r border-[#e2e9ff] p-6 last:border-r-0"
                >
                  <div
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-lg text-white shadow-[0_18px_42px_rgba(49,94,255,0.18)]"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={25} />
                  </div>
                  <span className="absolute right-5 top-6 text-[56px] font-[950] leading-none text-[#b7c7ff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-20 max-w-[220px] text-[18px] font-[950] leading-[1.25] text-[#21185F]">
                    {item.label}
                  </h3>
                  <p className="mt-3 max-w-[220px] text-[13px] font-[500] leading-[1.65] text-[#667085]">
                    {item.copy}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#eef3ff]">
                    <div
                      className="h-full"
                      style={{ width: `${25 * (index + 1)}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployerBenefitsSection() {
  return (
    <section
      id="employer-benefits"
      className="relative overflow-hidden border-t border-[#dce5ff] bg-white px-5 py-20 text-[#21185F] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
          <h2 className="max-w-[420px] text-[32px] font-[900] leading-[1.12] tracking-normal">
            More than a benefit. It is a competitive advantage.
          </h2>
            <p className="mt-5 max-w-[360px] text-[15px] font-[520] leading-[1.8] text-[#667085]">
              MobPae turns salary access into an operating advantage: fewer
              manual asks, clearer records and calmer payroll cycles.
            </p>
          </div>

          <div className="border-y border-[#dce5ff]">
            {employerBenefits.map(({ icon: Icon, title, copy, color }, index) => (
              <div
                key={title}
                className="grid gap-4 border-b border-[#e2e9ff] py-5 last:border-b-0 sm:grid-cols-[80px_1fr_56px] sm:items-center"
              >
                <span className="text-[13px] font-[950] uppercase tracking-[0.18em] text-[#a9bcff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-[950] text-[#21185F]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[520px] text-[13px] font-[500] leading-[1.7] text-[#667085]">
                    {copy}
                  </p>
                </div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5f7ff]"
                  style={{ color }}
                >
                  <Icon size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnquiryFaqSection({
  query,
  setQuery,
  activeFaq,
  setActiveFaq,
  openFaq,
  setOpenFaq,
  faqs,
  openEnquiry,
}: {
  query: string;
  setQuery: (value: string) => void;
  activeFaq: string;
  setActiveFaq: (value: string) => void;
  openFaq: number | null;
  setOpenFaq: (value: number | null) => void;
  faqs: FaqItem[];
  openEnquiry: () => void;
}) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#dce5ff] bg-white px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="flex min-h-full flex-col justify-between overflow-hidden rounded-[28px] border border-[#dce5ff] bg-[#f8faff] p-7 text-[#21185F] shadow-[0_20px_70px_rgba(49,94,255,0.08)] sm:p-9">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
                  Ready to empower your team?
                </p>
                <p className="mt-2 inline-flex rounded-full bg-[#f5f7ff] px-3 py-1.5 text-[11px] font-[800] text-[#315eff]">
                  Employer enquiry · 30 seconds
                </p>
              </div>
              <button
                type="button"
                onClick={openEnquiry}
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-xl bg-[#315eff] px-7 py-4 text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(49,94,255,0.44)] transition hover:-translate-y-0.5 hover:bg-[#5f82ff]"
              >
                Book a Demo <ArrowRight size={17} />
              </button>
            </div>
            <h2 className="mt-5 max-w-[560px] text-[32px] font-[900] leading-[1.08] tracking-[-0.04em] lg:text-[44px]">
              Let us build a financially stronger tomorrow.
            </h2>
            <p className="mt-5 max-w-[520px] text-[14px] font-[500] leading-[1.8] text-[#667085]">
              Book a quick employer walkthrough. We will understand your payroll
              cycle, answer questions and schedule the right next step.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["1", "Share basics", "Company, email and phone."],
              ["2", "We align", "Policy, payroll dates and rollout fit."],
              ["3", "Demo call", "Walk through employee and employer flows."],
            ].map(([step, title, copy]) => (
              <div
                key={step}
                className="rounded-2xl border border-[#e2e9ff] bg-[#FAF9FF] p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-[900] text-[#315eff]">
                  {step}
                </span>
                <p className="mt-4 text-[13px] font-[900] text-[#21185F]">
                  {title}
                </p>
                <p className="mt-1 text-[11px] font-[600] leading-[1.55] text-[#667085]">
                  {copy}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 text-[12px] font-[800] text-[#4F5872] sm:grid-cols-3">
            {["Tailored demo", "Payroll-aware setup", "Expert Q&A"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#315eff]" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div
          id="faq"
          className="rounded-[28px] border border-[#dce5ff] bg-white p-5 shadow-[0_18px_62px_rgba(49,94,255,0.08)] sm:p-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#315eff]">
                FAQ
              </p>
              <h2 className="mt-3 text-[28px] font-[900] leading-[1.08] tracking-[-0.035em] text-[#0B1026] lg:text-[34px]">
                Everything you need to know.
              </h2>
            </div>
            <div className="flex h-[44px] min-w-0 items-center gap-3 rounded-2xl border border-[#E6E8F2] bg-[#FBFCFF] px-4 lg:w-[260px]">
              <Search size={17} className="text-[#8A90A3]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                className="h-full min-w-0 flex-1 bg-transparent text-[13px] font-[600] outline-none placeholder:text-[#9AA1B5]"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {faqCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveFaq(category);
                  setOpenFaq(0);
                }}
                className={`rounded-full px-3.5 py-2 text-[11px] font-[900] transition ${
                  activeFaq === category
                    ? "bg-[#315eff] text-white"
                    : "bg-[#f1f5ff] text-[#315eff]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="border-b border-[#ECEEF6] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-3 py-4 text-left text-[14px] font-[900] text-[#0B1026]"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      openFaq === index
                        ? "bg-[#315eff] text-white"
                        : "bg-[#F4F5FA] text-[#667085]"
                    }`}
                  >
                    {openFaq === index ? (
                      <Minus size={14} />
                    ) : (
                      <Plus size={14} />
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="px-3 pb-5 text-[13px] font-[500] leading-[1.7] text-[#667085]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
          {faqs.length === 0 && (
            <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
              <HelpCircle size={32} className="text-[#315eff]" />
              <p className="mt-4 text-[15px] font-[900] text-[#0B1026]">
                No matching questions found
              </p>
              <p className="mt-2 text-[13px] font-[500] text-[#667085]">
                Try a different keyword or category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function LaunchFooter() {
  const columns = [
    {
      title: "For Employers",
      items: [
        ["Overview", "/employers"],
        ["Benefits", "/employers/benefits"],
        ["Book a Demo", "/#contact"],
      ],
    },
    {
      title: "For Employees",
      items: [
        ["Overview", "/employees"],
        ["How It Works", "/how-it-works"],
        ["FAQs", "/faqs"],
      ],
    },
    {
      title: "Company",
      items: [
        ["About Us", "/about"],
        ["Team", "/team"],
        ["Careers", "/careers"],
        ["Blog", "/blog"],
        ["Contact Us", "/contact"],
      ],
    },
    {
      title: "Resources",
      items: [
        ["Help Center", "/help-center"],
        ["Privacy Policy", "/privacy-policy"],
        ["Terms & Conditions", "/terms"],
      ],
    },
  ];

  return (
    <footer className="border-t border-[#e2e9ff] bg-white px-5 py-16 text-[#21185F] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_repeat(4,0.72fr)_1.1fr]">
            <div>
              <MobPaeLogo />
              <p className="mt-5 max-w-[280px] text-[13px] font-[500] leading-[1.8] text-[#667085]">
                An Earned Wage Access platform that empowers employees and
                transforms workplaces.
              </p>
              <div className="mt-6 flex gap-3">
                {["in", "x", "ig"].map((item) => (
                  <a
                    key={item}
                    href="#contact"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f7ff] text-[11px] font-[900] uppercase text-[#315eff] transition hover:bg-[#315eff] hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {columns.map(({ title, items }) => (
              <div key={title}>
                <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-[#315eff]">
                  {title}
                </p>
                <div className="mt-5 grid gap-3">
                  {items.map(([item, href]) => (
                    <a
                      key={item}
                      href={href}
                      className="text-[13px] font-[600] text-[#667085] transition hover:text-[#315eff]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-[#315eff]">
                Contact
              </p>
              <div className="mt-5 grid gap-3 text-[13px] font-[600] text-[#667085]">
                <a
                  href="mailto:support@mobpae.com"
                  className="transition hover:text-[#315eff]"
                >
                  support@mobpae.com
                </a>
                <p>Gujarat, Ahmedabad - 382470</p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-[#315eff] transition hover:text-[#214be6]"
                >
                  Book a demo <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2e9ff] pt-6">
            <p className="text-[12px] font-[500] text-[#8A90A3]">
              © {new Date().getFullYear()} MobPae. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-[12px] font-[500] text-[#8A90A3]">
              Made with{" "}
              <Heart size={12} className="fill-[#FEA1A2] text-[#FEA1A2]" /> in
              India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobPaeLogo() {
  return (
    <span className="inline-flex items-center">
      <img
        src="/brand/mobpae-logo-horizontal.png"
        alt="MobPae - Your Trusted Financial Partner."
        className="h-9 w-auto object-contain"
      />
    </span>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-[800] text-[#667085]">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-[11px] font-[800] text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}
