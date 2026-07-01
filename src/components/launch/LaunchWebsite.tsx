import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
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
    label: "Employee requests an advance",
    copy: "They access a controlled portion of earned salary.",
    icon: Users,
    color: "#6C4CFF",
  },
  {
    label: "Employer approves the request",
    copy: "You review and approve with policy context.",
    icon: BriefcaseBusiness,
    color: "#FF8A1F",
  },
  {
    label: "MobPae disburses instantly",
    copy: "Amount is transferred to the employee account.",
    icon: Landmark,
    color: "#21C985",
  },
  {
    label: "Repaid via payroll",
    copy: "The advance is recovered in the next payroll cycle.",
    icon: FileCheck2,
    color: "#4F7DFF",
  },
];

const readinessCards = [
  {
    title: "Employer controlled",
    copy: "Requests stay approval-led with employer policy and salary context.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Payroll aligned",
    copy: "Cutoff dates and payday logic guide recovery timing.",
    icon: FileCheck2,
  },
  {
    title: "Traceable flow",
    copy: "Every request moves through clear statuses from submission to recovery.",
    icon: ShieldCheck,
  },
  {
    title: "Employee clarity",
    copy: "Setup, advance, repayment and status are visible in the employee app.",
    icon: Users,
  },
];

const employerBenefits = [
  {
    title: "Improve Retention",
    copy: "Financially healthy employees are more loyal and stay longer.",
    icon: Users,
    color: "#CBD4FF",
  },
  {
    title: "Boost Productivity",
    copy: "Reduce financial stress and improve focus at work.",
    icon: BriefcaseBusiness,
    color: "#FF8A1F",
  },
  {
    title: "Zero Payroll Disruption",
    copy: "MobPae works around your existing payroll cycle.",
    icon: FileCheck2,
    color: "#E778A8",
  },
  {
    title: "No Cost to Employer",
    copy: "A high-value benefit for teams, with no additional employer cost.",
    icon: BadgeCheck,
    color: "#21C985",
  },
  {
    title: "Data You Can Trust",
    copy: "Real-time dashboards, reports and settlement insights.",
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

            <div className="grid min-h-[740px] items-center gap-14 py-16 lg:grid-cols-[0.96fr_1fr] lg:py-20">
              <div className="max-w-[720px]">
                <div className="launch-reveal inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[12px] font-[700] text-white/82 backdrop-blur-xl">
                  <Sparkles size={14} className="fill-[#F7A047] text-[#F7A047]" />
                  Earned Wage Access for the Modern Workforce
                </div>

                <h1 className="launch-reveal mt-7 text-[46px] font-[900] leading-[1.04] tracking-[-0.045em] text-white sm:text-[64px] lg:text-[78px]">
                  Empower your team.
                  <br />
                  Elevate{" "}
                  <span className="bg-gradient-to-r from-[#7B61FF] via-[#E778A8] to-[#F3A34E] bg-clip-text text-transparent">
                    performance.
                  </span>
                </h1>

                <p className="launch-reveal mt-7 max-w-[620px] text-[16px] font-[500] leading-[1.85] text-white/70">
                  MobPae enables employees to access their earned salary instantly before payday. No loans. No debt traps.
                  Just financial wellness that drives productivity and retention.
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

                <div className="launch-reveal mt-12 flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-3">
                    {["#F8B5A6", "#F8D2A0", "#EAB1CE", "#BEE3F8", "#D4B8FF"].map((color, index) => (
                      <div
                        key={color}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#080B22] text-[12px] font-[900] text-[#101322]"
                        style={{ backgroundColor: color }}
                      >
                        {["A", "R", "S", "M", "P"][index]}
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] font-[700] text-white/72">Trusted by forward-thinking companies</p>
                </div>
              </div>

              <HeroProductVisual />
            </div>
          </div>
        </div>
      </section>

      <SectionWaveDivider background="#070A1D" fill="#FBFCFF" />
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
      <div className="absolute right-[10%] top-[18%] h-[560px] w-[560px] rounded-full border border-[#6C4CFF]/18" />
      <div className="absolute right-[15%] top-[25%] h-[410px] w-[410px] rounded-full border border-dashed border-[#6C4CFF]/32" />
    </>
  );
}

function HeroProductVisual() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[610px]">
      <FloatingHeroCard className="left-0 top-[150px]" icon={<Users size={17} />} title="Instant Access" copy="Get paid before payday" />
      <FloatingHeroCard className="right-0 top-[150px]" icon={<ShieldCheck size={17} />} title="Employer Powered" copy="Fully integrated with your payroll" />
      <FloatingHeroCard className="bottom-[150px] left-[-8px]" icon={<CircleDollarSign size={17} />} title="No Debt Trap" copy="0% compounding. No hidden charges" />
      <FloatingHeroCard className="bottom-[150px] right-[-8px]" icon={<Heart size={17} />} title="Financial Wellness" copy="Happier employees. Stronger teams" />

      <div className="launch-phone absolute left-1/2 top-1/2 w-[292px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[38px] border border-white/16 bg-[#12102E] p-4 shadow-[0_42px_110px_rgba(0,0,0,0.74)]">
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
    </div>
  );
}

function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-[#FBFCFF] px-5 py-24 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="text-center">
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">Product Ecosystem</p>
          <h2 className="mx-auto mt-5 max-w-[720px] text-[34px] font-[900] leading-[1.1] tracking-[-0.035em] text-[#0B1026] lg:text-[44px]">
            One Platform. Every Stakeholder.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ecosystemCards.map(({ icon: Icon, title, copy, color }) => (
            <article
              key={title}
              className="group rounded-[22px] border border-[#E7EAF4] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(91,60,227,0.12)]"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_16px_36px_rgba(15,23,42,0.16)]"
                style={{ backgroundColor: color }}
              >
                <Icon size={25} />
              </div>
              <h3 className="mt-7 text-[18px] font-[900] tracking-[-0.01em] text-[#0B1026]">{title}</h3>
              <p className="mt-3 min-h-[70px] text-[14px] font-[500] leading-[1.7] text-[#667085]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-[#090B24] px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(91,60,227,0.38),transparent_30%),linear-gradient(135deg,#080A20_0%,#151039_100%)]" />
      <div className="launch-wave absolute bottom-0 right-0 h-64 w-[620px] opacity-35" />
      <div className="launch-wave launch-wave-reverse absolute left-[-140px] top-10 h-52 w-[520px] opacity-20" />
      <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#AFA4FF]">MVP Ready</p>
          <h2 className="mt-4 max-w-[430px] text-[32px] font-[900] leading-[1.12] tracking-[-0.035em] lg:text-[44px]">
            Built for pilot-ready operations
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] font-[500] leading-[1.8] text-white/64">
            A focused operating foundation for the first employer rollouts, with the controls needed before scale.
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
    <section id="journey" className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12">
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
    <section id="employer-benefits" className="relative overflow-hidden bg-[#080B22] px-5 py-24 text-white sm:px-8 lg:px-12">
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

function FloatingHeroCard({ className, icon, title, copy }: { className: string; icon: ReactNode; title: string; copy: string }) {
  return (
    <div className={`absolute z-20 hidden w-[190px] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_22px_64px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block ${className}`}>
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C4CFF]/22 text-[#C9BFFF]">{icon}</div>
      <p className="text-[13px] font-[900] text-white">{title}</p>
      <p className="mt-1 text-[11px] font-[500] leading-[1.55] text-white/62">{copy}</p>
    </div>
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
