import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Globe2,
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

const API_BASE = ((import.meta.env.VITE_API_BASE_URL as string | undefined) || "").replace(/\/api\/v1\/?$/, "");

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
];

const ecosystemCards = [
  {
    title: "Public Website",
    copy: "Employers discover MobPae and start the enquiry conversation.",
    icon: Globe2,
    color: "#4F7DFF",
  },
  {
    title: "Employer Portal",
    copy: "Onboard teams, approve requests and track recoveries.",
    icon: BriefcaseBusiness,
    color: "#FF8A1F",
  },
  {
    title: "Employee App",
    copy: "Access, track, repay and manage setup on the go.",
    icon: Users,
    color: "#6C4CFF",
  },
  {
    title: "Admin Portal",
    copy: "Full control, compliance workflows and settlement visibility.",
    icon: ShieldCheck,
    color: "#6C4CFF",
  },
];

const journey = [
  {
    label: "Employee raises a request",
    copy: "They see eligibility, timing and repayment before submitting.",
    icon: Users,
    color: "#6C4CFF",
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
    color: "#CBD4FF",
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
    color: "#AFA4FF",
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
    document.title = "MobPae | Employer-Backed Salary Access";
    const description =
      "MobPae helps employers offer controlled earned salary access with approvals, disbursal tracking and payroll recovery visibility.";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
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

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Invalid email";
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
          contactPerson: form.contactName || form.companyName || "Website employer enquiry",
          email: form.email,
          phone: form.phone,
          employeeCount: form.employeeCount ? Number.parseInt(form.employeeCount.replace(/\D/g, ""), 10) || null : null,
          message: [form.interest, form.message || "Website employer enquiry"].filter(Boolean).join(" - "),
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
    <main className="launch-site min-h-screen bg-white text-[#0B1026]">
      <section className="bg-[#070A1E]">
        <div className="relative overflow-hidden bg-[#070A1E] text-white">
          <HeroAtmosphere />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
            <header className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3" aria-label="MobPae home">
                <MobPaeLogo />
              </a>

              <nav className="hidden items-center gap-9 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[13px] font-[650] text-white/82 transition hover:text-white"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={13} />}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={openEnquiry}
                className="hidden h-12 items-center justify-center rounded-xl bg-[#6C4CFF] px-7 text-[13px] font-[800] text-white shadow-[0_18px_44px_rgba(91,60,227,0.44)] transition hover:-translate-y-0.5 hover:bg-[#5B3CE3] lg:inline-flex"
              >
                Book a Demo
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/8 text-white lg:hidden"
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </header>

            {menuOpen && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 p-3 backdrop-blur-xl lg:hidden">
                <div className="grid gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-[14px] font-[700] text-white/82 transition hover:bg-white/8"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="grid min-h-[680px] items-center gap-10 py-12 lg:min-h-[700px] lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
              <div className="max-w-[720px]">
                <div className="launch-reveal inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[12px] font-[700] text-white/82 backdrop-blur-xl">
                  <Sparkles size={14} className="fill-[#F7A047] text-[#F7A047]" />
                  Employer-backed earned salary access
                </div>

                <h1 className="launch-reveal mt-7 text-[46px] font-[900] leading-[1.04] tracking-[-0.045em] text-white sm:text-[64px] lg:text-[78px]">
                  Beating your
                  <br />
                  month end{" "}
                  <span className="bg-gradient-to-r from-[#7B61FF] via-[#E778A8] to-[#F3A34E] bg-clip-text text-transparent">
                    crunch.
                  </span>
                </h1>

                <p className="launch-reveal mt-7 max-w-[620px] text-[16px] font-[500] leading-[1.85] text-white/70">
                  Offer earned salary access without turning payroll into a support queue. Employees see what they can
                  access and when it gets recovered; employers keep approval, disbursal and settlement visibility.
                </p>

                <div className="launch-reveal mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={openEnquiry}
                    className="inline-flex h-14 items-center gap-4 rounded-xl bg-[#6C4CFF] px-8 text-[14px] font-[900] text-white shadow-[0_18px_48px_rgba(91,60,227,0.48)] transition hover:-translate-y-0.5 hover:bg-[#5B3CE3]"
                  >
                    Book a Demo <ArrowRight size={18} />
                  </button>
                  <a
                    href="/employers"
                    className="inline-flex h-14 items-center gap-4 rounded-xl border border-white/18 px-8 text-[14px] font-[800] text-white transition hover:-translate-y-0.5 hover:bg-white/8"
                  >
                    Explore for Employers <ArrowRight size={18} />
                  </a>
                </div>

                <div className="launch-reveal mt-12 flex flex-wrap gap-3">
                  {["Approval-led", "Cutoff-aware", "No debt trap", "Clear recovery"].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-[12px] font-[800] text-white/72 backdrop-blur-xl"
                    >
                      <Check size={13} className="text-[#AFA4FF]" />
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

      <SectionWaveDivider background="#070A1D" fill="#F8FAFF" />
      <CrunchCalmSection />
      <SectionWaveDivider background="#F8FAFF" fill="#FBFCFF" flip />
      <EcosystemSection />
      <SectionWaveDivider background="#FBFCFF" fill="#090B24" flip />
      <ImpactSection />
      <SectionWaveDivider background="#090B24" fill="#FFFFFF" />
      <JourneySection />
      <SectionWaveDivider background="#FFFFFF" fill="#080B22" flip />
      <EmployerBenefitsSection />
      <SectionWaveDivider background="#080B22" fill="#F3F5FF" />
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

function SectionWaveDivider({ background, fill, flip = false }: { background: string; fill: string; flip?: boolean }) {
  return (
    <div className="launch-section-divider" style={{ backgroundColor: background }} aria-hidden="true">
      <svg className={flip ? "scale-x-[-1]" : ""} viewBox="0 0 1440 42" preserveAspectRatio="none">
        <path
          fill={fill}
          d="M0 18C180 14 308 17 470 20C632 23 790 25 960 20C1130 15 1268 10 1440 15V42H0V18Z"
        />
      </svg>
    </div>
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
  updateField: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  submitEnquiry: (event: React.FormEvent) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close enquiry form"
        className="absolute inset-0 cursor-default bg-[#050817]/70 backdrop-blur-md"
        onClick={onClose}
      />
      <form
        onSubmit={submitEnquiry}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-dialog-title"
        className="relative max-h-[88vh] w-full max-w-[720px] overflow-y-auto rounded-[30px] border border-white/70 bg-white p-6 shadow-[0_34px_120px_rgba(5,8,23,0.34)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.22em] text-[#5B3CE3]">Employer Enquiry</p>
            <h3 id="enquiry-dialog-title" className="mt-3 text-[28px] font-[900] leading-[1.12] tracking-[-0.03em] text-[#0B1026]">
              Start with a quick hello.
            </h3>
            <p className="mt-3 max-w-[520px] text-[14px] font-[500] leading-[1.75] text-[#667085]">
              Share the basics. Our team will contact you to schedule the right conversation before onboarding.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2F0FF] text-[#5B3CE3] transition hover:bg-[#E8E4FF]"
            aria-label="Close enquiry form"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="Company" error={errors.companyName}>
            <input name="companyName" value={form.companyName} onChange={updateField} placeholder="Northstar Retail" className="launch-input" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input name="email" type="email" value={form.email} onChange={updateField} placeholder="rohan@company.com" className="launch-input" />
          </Field>
          <Field label="Mobile Number" error={errors.phone}>
            <input name="phone" value={form.phone} onChange={updateField} placeholder="92270 12145" className="launch-input" inputMode="numeric" />
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
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
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
          className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#6C4CFF] text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(91,60,227,0.32)] transition hover:bg-[#5B3CE3] disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : "Submit Employer Enquiry"}
          {!loading && <ArrowRight size={17} />}
        </button>
        <p className="mt-4 text-center text-[11px] font-[650] text-[#8A90A3]">
          One enquiry form. No spam. We contact you to schedule the right conversation.
        </p>
      </form>
    </div>
  );
}

function HeroAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(91,60,227,0.42),transparent_31%),radial-gradient(circle_at_18%_12%,rgba(203,212,255,0.12),transparent_28%),linear-gradient(135deg,#070A1F_0%,#0C102F_55%,#070A1D_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.75) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute right-[10%] top-[18%] hidden h-[560px] w-[560px] rounded-full border border-[#6C4CFF]/18 lg:block" />
      <div className="absolute right-[15%] top-[25%] hidden h-[410px] w-[410px] rounded-full border border-dashed border-[#6C4CFF]/32 lg:block" />
    </>
  );
}

function HeroProductVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[650px] sm:h-[590px] lg:h-[620px]">
      <div className="absolute left-[8%] top-[12%] h-[440px] w-[440px] rounded-full border border-white/14 lg:left-[2%] lg:top-[12%]" />
      <div className="absolute left-[14%] top-[20%] h-[320px] w-[320px] rounded-full border border-dashed border-[#7B61FF]/30 lg:left-[8%]" />
      <div className="absolute right-[8%] top-[10%] hidden h-[360px] w-[360px] rounded-full bg-[#6C4CFF]/10 blur-3xl lg:block" />
      <HeroCrunchRail />

      <div className="launch-phone absolute left-1/2 top-[47%] z-20 w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[38px] border border-white/16 bg-[#12102E] p-4 shadow-[0_42px_110px_rgba(0,0,0,0.74)] sm:w-[292px] lg:left-[31%] lg:top-1/2">
        <div className="mb-5 flex items-center justify-between px-2 text-[11px] font-[800] text-white/35">
          <span>9:41</span>
          <span className="h-5 w-16 rounded-full bg-black/45" />
          <span>5G</span>
        </div>
        <div className="flex items-center justify-between px-2">
          <div>
            <p className="text-[15px] font-[850] text-white">Hello, Rohan 👋</p>
            <p className="mt-1 text-[11px] font-[650] text-white/42">Available to access</p>
          </div>
          <Bell size={15} className="text-white/50" />
        </div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-[#2F207A]/58 p-5">
          <p className="text-[36px] font-[900] tracking-tight text-white">₹5,000</p>
          <p className="mt-1 text-[11px] font-[700] text-white/45">of ₹15,000 limit</p>
          <div className="mt-4 h-2 rounded-full bg-white/12">
            <div className="h-full w-1/3 rounded-full bg-[#7B61FF]" />
          </div>
        </div>
        <button className="mt-4 h-12 w-full rounded-2xl bg-[#6C4CFF] text-[13px] font-[900] text-white">
          Request Advance
        </button>
        <div className="mt-6 px-2 pb-4">
          <p className="text-[10px] font-[900] uppercase tracking-[0.16em] text-white/32">This month activity</p>
          <PhoneActivity label="Advance Approved" date="12 May 2024" amount="₹5,000" />
          <PhoneActivity label="Repayment Deducted" date="30 Apr 2024" amount="₹5,000" muted />
          <a href="#ecosystem" className="mt-2 block text-right text-[11px] font-[800] text-[#A695FF]">
            View all
          </a>
        </div>
      </div>

      <div className="absolute right-0 top-[76px] z-30 hidden w-[282px] rounded-[28px] border border-white/12 bg-white/[0.09] p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:block">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6C4CFF] text-white">
            <ShieldCheck size={20} />
          </span>
          <div>
            <p className="text-[14px] font-[900]">Payroll-safe access</p>
            <p className="mt-1 text-[11px] font-[650] text-white/48">Every step is visible before payout.</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3">
          {[
            ["Request", "Employee sees eligibility"],
            ["Approval", "Employer policy applies"],
            ["Recovery", "Cycle mapped to payday"],
          ].map(([title, copy], index) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/9 bg-white/[0.06] p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-[900] text-[#5B3CE3]">
                {index + 1}
              </span>
              <span>
                <span className="block text-[12px] font-[900] text-white">{title}</span>
                <span className="block text-[10px] font-[650] text-white/45">{copy}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[122px] right-[28px] z-30 hidden w-[250px] rounded-[26px] border border-white/12 bg-[#0B1026]/78 p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:block">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-white/42">Cycle view</p>
          <span className="rounded-full bg-[#21C985]/12 px-3 py-1 text-[10px] font-[900] text-[#79E3B2]">Mapped</span>
        </div>
        <div className="mt-5 grid gap-4">
          {[
            ["Cutoff window", "Policy decides cycle"],
            ["Payday recovery", "Auto-visible to teams"],
          ].map(([title, copy]) => (
            <div key={title} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#AFA4FF]" />
              <span>
                <span className="block text-[13px] font-[900]">{title}</span>
                <span className="mt-1 block text-[11px] font-[600] text-white/46">{copy}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroCrunchRail() {
  return (
    <div className="absolute bottom-2 right-0 z-30 hidden w-[360px] rounded-[24px] border border-white/12 bg-[#0A0D27]/76 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:block">
      <div className="flex items-center justify-between gap-4 text-[11px] font-[900] uppercase tracking-[0.16em]">
        <span className="text-[#F3A34E]">Crunch</span>
        <span className="text-white/36">MobPae</span>
        <span className="text-[#AFA4FF]">Calm</span>
      </div>
      <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,#F3A34E_0%,#E778A8_34%,#7B61FF_64%,#21C985_100%)] opacity-90" />
        <span className="launch-flow-pulse absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#6C4CFF] shadow-[0_0_28px_rgba(123,97,255,0.78)]" />
      </div>
      <p className="mt-4 text-[11px] font-[700] leading-[1.55] text-white/56">
        Requests, approvals and recovery move through one controlled salary cycle.
      </p>
    </div>
  );
}

function CrunchCalmSection() {
  const beats = [
    {
      title: "Pressure builds",
      copy: "Employees need help before payday, but ad-hoc advances create confusion.",
      tone: "from-[#FDF6EB] to-white",
      accent: "#F3A34E",
    },
    {
      title: "MobPae organizes the ask",
      copy: "Eligibility, approvals and verification move through one controlled path.",
      tone: "from-[#ECEBFF] to-white",
      accent: "#6C4CFF",
    },
    {
      title: "Payroll stays calm",
      copy: "Recoveries follow cutoff and salary-date logic instead of manual guesswork.",
      tone: "from-[#E9F6F6] to-white",
      accent: "#21C985",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFF] px-5 py-20 sm:px-8 lg:px-12">
      <div className="launch-wave absolute -left-28 top-8 h-44 w-[520px] opacity-[0.18]" />
      <div className="launch-wave launch-wave-reverse absolute -right-28 bottom-4 h-44 w-[520px] opacity-[0.18]" />
      <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
        <div>
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">The MobPae Moment</p>
          <h2 className="mt-5 max-w-[460px] text-[32px] font-[900] leading-[1.08] tracking-[-0.035em] text-[#0B1026] lg:text-[44px]">
            Turn month-end panic into a controlled payday rhythm.
          </h2>
          <p className="mt-5 max-w-[430px] text-[15px] font-[500] leading-[1.85] text-[#667085]">
            MobPae is not just a request button. It gives cash-flow pressure a guided path, so employees stay informed
            and employers stay in control.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,#C9BFFF,transparent)] lg:block" />
          <div className="grid gap-4 md:grid-cols-3">
            {beats.map((beat, index) => (
              <article
                key={beat.title}
                className={`relative overflow-hidden rounded-[30px] border border-white bg-gradient-to-br ${beat.tone} p-6 shadow-[0_22px_80px_rgba(15,23,42,0.07)]`}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-[13px] font-[900] text-white shadow-[0_16px_34px_rgba(15,23,42,0.16)]"
                  style={{ backgroundColor: beat.accent }}
                >
                  {index + 1}
                </span>
                <h3 className="mt-8 text-[18px] font-[900] tracking-[-0.02em] text-[#0B1026]">{beat.title}</h3>
                <p className="mt-3 text-[13px] font-[600] leading-[1.72] text-[#667085]">{beat.copy}</p>
                <div
                  className="absolute -bottom-14 -right-12 h-32 w-32 rounded-full opacity-[0.15]"
                  style={{ backgroundColor: beat.accent }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const nodePositions = [
    "lg:left-8 lg:top-10",
    "lg:right-8 lg:top-10",
    "lg:left-8 lg:bottom-10",
    "lg:right-8 lg:bottom-10",
  ];

  return (
    <section id="ecosystem" className="relative overflow-hidden bg-[#FBFCFF] px-5 py-20 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">Product Ecosystem</p>
            <h2 className="mt-5 max-w-[560px] text-[34px] font-[900] leading-[1.08] tracking-[-0.035em] text-[#0B1026] lg:text-[48px]">
              One operating layer for the salary-access journey.
            </h2>
            <p className="mt-6 max-w-[500px] text-[15px] font-[500] leading-[1.85] text-[#667085]">
              MobPae connects discovery, employee access, employer approval and admin operations without making teams
              chase updates across disconnected tools.
            </p>

            <div className="mt-9 grid gap-3">
              {[
                ["Public entry point", "Employers can enquire without exposing internal workflows."],
                ["Employer control", "Requests stay policy-aware and approval-led."],
                ["Employee clarity", "Every setup, request and recovery status stays visible."],
                ["Admin oversight", "Verification, disbursal and settlement work from one view."],
              ].map(([title, copy]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-[#E7EAF4] bg-white/70 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ECEBFF] text-[#5B3CE3]">
                    <Check size={15} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-[900] text-[#0B1026]">{title}</span>
                    <span className="mt-1 block text-[12px] font-[600] leading-[1.6] text-[#667085]">{copy}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[620px] overflow-hidden rounded-[36px] border border-[#E4E7F4] bg-[linear-gradient(135deg,#FFFFFF_0%,#F4F2FF_48%,#EEF7FF_100%)] p-6 shadow-[0_26px_90px_rgba(15,23,42,0.08)] lg:p-8">
            <div className="absolute inset-0 opacity-[0.34]" style={{ backgroundImage: "radial-gradient(circle, rgba(91,60,227,0.18) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 760 620" fill="none" aria-hidden="true">
              <path d="M180 145 C 270 215, 310 250, 380 310 C 460 380, 510 410, 590 485" stroke="#CBD4FF" strokeWidth="2" strokeDasharray="7 8" />
              <path d="M580 145 C 490 215, 450 250, 380 310 C 300 380, 250 410, 170 485" stroke="#CBD4FF" strokeWidth="2" strokeDasharray="7 8" />
              <path d="M130 310 C 250 290, 500 290, 630 310" stroke="#D9D5FF" strokeWidth="2" strokeDasharray="7 8" />
            </svg>

            <div className="absolute left-1/2 top-1/2 z-20 hidden h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-[#0B1026] text-center shadow-[0_28px_80px_rgba(91,60,227,0.18)] lg:flex">
              <span>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <img src="/brand/mobpae-icon-color.png" alt="" className="h-8 w-8 object-contain" />
                </span>
                <span className="mt-4 block text-[18px] font-[900] text-white">MobPae</span>
                <span className="mt-1 block text-[11px] font-[700] uppercase tracking-[0.18em] text-white/44">Core platform</span>
              </span>
            </div>

            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:block lg:min-h-[560px]">
              {ecosystemCards.map(({ icon: Icon, title, copy, color }, index) => (
                <article
                  key={title}
                  className={`rounded-[26px] border border-white/80 bg-white/78 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white lg:absolute lg:w-[255px] ${nodePositions[index]}`}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_16px_36px_rgba(15,23,42,0.16)]"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-[900] tracking-[-0.01em] text-[#0B1026]">{title}</h3>
                  <p className="mt-2 text-[13px] font-[500] leading-[1.65] text-[#667085]">{copy}</p>
                </article>
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
    <section className="relative overflow-hidden bg-[#090B24] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(91,60,227,0.38),transparent_30%),linear-gradient(135deg,#080A20_0%,#151039_100%)]" />
      <div className="launch-wave absolute bottom-0 right-0 h-64 w-[620px] opacity-35" />
      <div className="launch-wave launch-wave-reverse absolute left-[-140px] top-10 h-52 w-[520px] opacity-20" />
      <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#AFA4FF]">Operating Foundation</p>
          <h2 className="mt-4 max-w-[430px] text-[32px] font-[900] leading-[1.12] tracking-[-0.035em] lg:text-[44px]">
            Built for controlled employer rollouts
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] font-[500] leading-[1.8] text-white/64">
            A focused foundation for approvals, verification, disbursal tracking and payroll-cycle recovery before scale.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {readinessCards.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="rounded-[22px] border border-white/10 bg-white/8 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12">
              <Icon size={27} className="text-[#C9BFFF]" />
              <p className="mt-7 text-[18px] font-[900] tracking-[-0.02em] text-white">{title}</p>
              <p className="mt-3 text-[13px] font-[500] leading-[1.7] text-white/60">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">How It Works</p>
            <h2 className="mt-4 max-w-[420px] text-[34px] font-[900] leading-[1.08] tracking-[-0.035em] text-[#0B1026] lg:text-[46px]">
              Simple for everyone. Powerful for all.
            </h2>
          </div>

          <div className="relative pt-10">
            <svg className="absolute left-0 right-0 top-20 hidden h-20 w-full lg:block" viewBox="0 0 920 90" fill="none" aria-hidden="true">
              <path d="M52 44 C 170 8, 248 8, 356 44 S 538 80, 642 44 S 794 8, 880 44" stroke="#CBD4FF" strokeWidth="2" strokeDasharray="6 7" />
            </svg>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map(({ icon: Icon, ...item }, index) => (
                <article key={item.label} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full text-white shadow-[0_18px_42px_rgba(91,60,227,0.22)]" style={{ backgroundColor: item.color }}>
                    <Icon size={25} />
                  </div>
                  <span className="mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#5B3CE3] text-[12px] font-[900] text-white">
                    {index + 1}
                  </span>
                  <h3 className="mx-auto mt-6 max-w-[210px] text-[15px] font-[900] leading-[1.35] text-[#0B1026]">{item.label}</h3>
                  <p className="mx-auto mt-3 max-w-[220px] text-[13px] font-[500] leading-[1.65] text-[#667085]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployerBenefitsSection() {
  return (
    <section id="employer-benefits" className="relative overflow-hidden bg-[#080B22] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(91,60,227,0.36),transparent_28%),linear-gradient(135deg,#080B22_0%,#17103A_100%)]" />
      <div className="launch-wave absolute right-0 top-0 h-80 w-[720px] opacity-25" />
      <div className="mx-auto max-w-[1320px]">
        <div className="relative z-10">
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#AFA4FF]">Why Employers Choose MobPae</p>
          <h2 className="mt-4 max-w-[620px] text-[34px] font-[900] leading-[1.1] tracking-[-0.035em] lg:text-[46px]">
            More than a benefit. It is a competitive advantage.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {employerBenefits.map(({ icon: Icon, title, copy, color }) => (
              <article key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/7" style={{ color }}>
                  <Icon size={24} />
                </div>
                <h3 className="mt-7 text-[15px] font-[900] text-white">{title}</h3>
                <p className="mt-3 text-[13px] font-[500] leading-[1.7] text-white/58">{copy}</p>
              </article>
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
    <section id="contact" className="relative overflow-hidden bg-[#F3F5FF] px-5 py-16 sm:px-8 lg:px-12">
      <div className="absolute left-[5%] top-12 h-64 w-64 rounded-full bg-white/75 blur-3xl" />
      <div className="absolute bottom-6 right-[8%] h-72 w-72 rounded-full bg-[#CBD4FF]/32 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="flex min-h-full flex-col justify-between overflow-hidden rounded-[32px] bg-[#0B1026] p-7 text-white shadow-[0_24px_90px_rgba(11,16,38,0.2)] sm:p-9">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#C9BFFF]">
                  Ready to empower your team?
                </p>
                <p className="mt-2 inline-flex rounded-full bg-white/8 px-3 py-1.5 text-[11px] font-[800] text-white/64">
                  Employer enquiry · 30 seconds
                </p>
              </div>
              <button
                type="button"
                onClick={openEnquiry}
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-xl bg-[#6C4CFF] px-7 py-4 text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(91,60,227,0.44)] transition hover:-translate-y-0.5 hover:bg-[#7B61FF]"
              >
                Book a Demo <ArrowRight size={17} />
              </button>
            </div>
            <h2 className="mt-5 max-w-[560px] text-[32px] font-[900] leading-[1.08] tracking-[-0.04em] lg:text-[44px]">
              Let us build a financially stronger tomorrow.
            </h2>
            <p className="mt-5 max-w-[520px] text-[14px] font-[500] leading-[1.8] text-white/64">
              Book a quick employer walkthrough. We will understand your payroll cycle, answer questions and schedule the right next step.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["1", "Share basics", "Company, email and phone."],
              ["2", "We align", "Policy, payroll dates and rollout fit."],
              ["3", "Demo call", "Walk through employee and employer flows."],
            ].map(([step, title, copy]) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] font-[900] text-[#5B3CE3]">
                  {step}
                </span>
                <p className="mt-4 text-[13px] font-[900] text-white">{title}</p>
                <p className="mt-1 text-[11px] font-[600] leading-[1.55] text-white/50">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 text-[12px] font-[800] text-white/72 sm:grid-cols-3">
              {["Tailored demo", "Payroll-aware setup", "Expert Q&A"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#AFA4FF]" />
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div id="faq" className="rounded-[32px] border border-white/80 bg-white/88 p-5 shadow-[0_18px_70px_rgba(91,60,227,0.08)] backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">FAQ</p>
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
                  activeFaq === category ? "bg-[#5B3CE3] text-white" : "bg-[#F0EDFF] text-[#5B3CE3]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="border-b border-[#ECEEF6] last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-3 py-4 text-left text-[14px] font-[900] text-[#0B1026]"
              >
                <span>{faq.q}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${openFaq === index ? "bg-[#5B3CE3] text-white" : "bg-[#F4F5FA] text-[#667085]"}`}>
                  {openFaq === index ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {openFaq === index && <p className="px-3 pb-5 text-[13px] font-[500] leading-[1.7] text-[#667085]">{faq.a}</p>}
            </div>
          ))}
          </div>
          {faqs.length === 0 && (
            <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
              <HelpCircle size={32} className="text-[#5B3CE3]" />
              <p className="mt-4 text-[15px] font-[900] text-[#0B1026]">No matching questions found</p>
              <p className="mt-2 text-[13px] font-[500] text-[#667085]">Try a different keyword or category.</p>
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
    <footer className="bg-[#080B18] px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_repeat(4,0.72fr)_1.1fr]">
            <div>
              <MobPaeLogo />
              <p className="mt-5 max-w-[280px] text-[13px] font-[500] leading-[1.8] text-white/56">
                An Earned Wage Access platform that empowers employees and transforms workplaces.
              </p>
              <div className="mt-6 flex gap-3">
                {["in", "x", "ig"].map((item) => (
                  <a key={item} href="#contact" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-[11px] font-[900] uppercase text-white/62 transition hover:bg-[#5B3CE3] hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {columns.map(({ title, items }) => (
              <div key={title}>
                <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-white/48">{title}</p>
                <div className="mt-5 grid gap-3">
                  {items.map(([item, href]) => (
                    <a key={item} href={href} className="text-[13px] font-[600] text-white/52 transition hover:text-white">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-[11px] font-[900] uppercase tracking-[0.18em] text-white/48">Contact</p>
              <div className="mt-5 grid gap-3 text-[13px] font-[600] text-white/52">
                <a href="mailto:support@mobpae.com" className="transition hover:text-white">support@mobpae.com</a>
                <p>Gujarat, Ahmedabad - 382470</p>
                <a href="/#contact" className="inline-flex items-center gap-2 text-[#C9BFFF] transition hover:text-white">
                  Book a demo <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-[12px] font-[500] text-white/38">© {new Date().getFullYear()} MobPae. All rights reserved.</p>
            <p className="flex items-center gap-1 text-[12px] font-[500] text-white/38">
              Made with <Heart size={12} className="fill-[#FEA1A2] text-[#FEA1A2]" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobPaeLogo() {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3.5 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
      <img
        src="/brand/mobpae-logo-horizontal.png"
        alt="MobPae - Beating Your Month-End Crunch"
        className="h-8 w-auto object-contain"
      />
    </span>
  );
}

function PhoneActivity({ label, date, amount, muted = false }: { label: string; date: string; amount: string; muted?: boolean }) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div>
        <p className="text-[11px] font-[800] text-white/78">{label}</p>
        <p className="mt-1 text-[9px] font-[600] text-white/32">{date}</p>
      </div>
      <p className={`text-[11px] font-[900] ${muted ? "text-white/46" : "text-white"}`}>{amount}</p>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-[800] text-[#667085]">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[11px] font-[800] text-red-500">{error}</span>}
    </label>
  );
}
