import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  IndianRupee,
  Loader2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { api } from "../services/api";

const defaultMessage =
  "I am interested in MobPae for my company. Please contact me for a demo.";

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  employeeCount: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  employeeCount: "",
  message: "",
};

const beliefs = [
  "Financial wellness improves productivity",
  "Employees deserve stress-free access to support",
  "Employer-backed solutions build stronger workplaces",
  "No more borrowing from family and friends",
];

const steps = [
  {
    title: "Employer enables MobPae",
    text: "Company onboards employees and sets salary advance eligibility.",
  },
  {
    title: "Employee views limit",
    text: "Employees see their available advance limit from the mobile app.",
  },
  {
    title: "Request goes for approval",
    text: "Employer/admin reviews the request with full visibility.",
  },
  {
    title: "Track disbursal & repayment",
    text: "Every request, disbursal and repayment remains transparent.",
  },
];

const faqs = [
  {
    q: "What is MobPae?",
    a: "MobPae is an employer-supported salary advance platform that helps employees access part of their earned salary before payday.",
  },
  {
    q: "Is MobPae a personal loan app?",
    a: "No. MobPae is designed as an employer-backed financial wellness solution, not a traditional personal loan product.",
  },
  {
    q: "Who controls employee eligibility?",
    a: "Employers can define salary-based limits, approval rules and internal policies.",
  },
  {
    q: "How does it help employees?",
    a: "Employees get dignified, stress-free salary support without borrowing from friends, family or informal sources.",
  },
];

export function HomePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showMessage, setShowMessage] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!form.companyName.trim())
      nextErrors.companyName = "Company name is required";
    if (!form.contactName.trim())
      nextErrors.contactName = "Contact name is required";

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (form.phone && form.phone.trim().length < 10) {
      nextErrors.phone = "Phone number should be 10 digits";
    }

    if (form.employeeCount && Number(form.employeeCount) < 1) {
      nextErrors.employeeCount = "Employee count should be at least 1";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    if (name === "phone") {
      setForm({ ...form, phone: value.replace(/\D/g, "").slice(0, 10) });
      setErrors({ ...errors, phone: "" });
      return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleMessageFocus() {
    if (!form.message.trim()) {
      setForm({ ...form, message: defaultMessage });
    }
    setShowMessage(true);
  }

  async function submitEnquiry(event: React.FormEvent) {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await api.post("/enquiries", {
        ...form,
        message: form.message || defaultMessage,
        employeeCount: form.employeeCount
          ? Number(form.employeeCount)
          : undefined,
      });

      setSuccess(
        response.data?.data?.message ||
          "Thank you! Our team will contact you shortly."
      );

      setForm(initialForm);
      setErrors({});
      setShowMessage(false);

      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50";

  const errorClass = "mt-1.5 text-xs font-semibold text-red-600";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8ff] text-slate-950">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#dbeafe,transparent_32%),radial-gradient(circle_at_80%_15%,#e0f2fe,transparent_28%)]" />
        <div className="absolute left-1/2 top-28 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <Sparkles size={16} />
              Beating Your Month-End Crunch
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Salary support that makes employees feel secure.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              MobPae helps companies support employees with instant,
              employer-backed salary advance access — without awkward borrowing,
              personal loan pressure or manual follow-ups.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Request Demo <ArrowRight size={18} />
              </a>

              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5"
              >
                View Product
              </a>
            </div>
          </div>

          {/* Product Mockup */}
          <div id="product" className="relative mx-auto mt-16 max-w-5xl">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-blue-950/20">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-white px-6 py-8 md:px-10 md:py-10">
                <div className="absolute right-8 top-8 z-30 rounded-full bg-white px-4 py-2 text-xs font-black text-blue-700 shadow-lg shadow-slate-300/60">
                  Employer Approved
                </div>

                <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                      Employee App
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-tight">
                      Request salary advance in a few taps.
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      Employees can view their available limit, request advance
                      salary and track status with a clean mobile-first
                      experience.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <MiniCard
                        icon={<WalletCards size={18} />}
                        label="Available Limit"
                        value="₹8,000"
                      />
                      <MiniCard
                        icon={<Clock3 size={18} />}
                        label="Status"
                        value="In Review"
                      />
                    </div>
                  </div>

                  <div className="relative mx-auto w-full max-w-[360px]">
                    <div className="rounded-[2.2rem] bg-[#061b3d] p-5 text-white shadow-2xl shadow-blue-950/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-100">Good evening</p>
                          <h3 className="mt-1 text-xl font-black">
                            Hi, Sneha 👋
                          </h3>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-black">
                          SS
                        </div>
                      </div>

                      <div className="mt-7 rounded-[1.5rem] bg-white p-5 text-slate-950">
                        <p className="text-xs font-bold text-slate-400">
                          Available Limit
                        </p>

                        <div className="mt-2 flex items-center text-4xl font-black">
                          <IndianRupee size={28} />
                          8,000
                        </div>

                        <button className="mt-5 flex h-12 w-full items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                          Request Advance
                        </button>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <StatusPill label="Document" value="Verified" />
                        <StatusPill label="Repayment" value="Pending" />
                      </div>
                    </div>

                    <FloatingCard
                      className="-left-12 top-12 hidden md:block"
                      title="No awkward borrowing"
                      text="Get support with dignity"
                    />
                    <FloatingCard
                      className="-right-16 bottom-16 hidden md:block"
                      title="Employer-backed"
                      text="Controlled & transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f5f8ff] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              Overview
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Financial stress should not affect peace of mind or productivity.
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-lg leading-9 text-slate-600 shadow-xl shadow-slate-200/70">
            MobPae empowers working professionals with instant and stress-free
            access to earned salary when they need it most. Our mission is to
            create a healthier, more confident workforce by helping employees
            manage short-term financial needs with dignity, convenience and
            trust.
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Simple flow. Clear control.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="benefits" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">
              Why MobPae
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Support employees without losing operational control.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              MobPae brings salary advance requests, approvals, disbursals and
              repayment visibility into one structured workflow.
            </p>
          </div>

          <div className="grid gap-4">
            <Feature
              icon={<ShieldCheck />}
              title="Employer-controlled workflow"
            />
            <Feature icon={<Zap />} title="Fast employee request experience" />
            <Feature
              icon={<BadgeCheck />}
              title="Transparent approval tracking"
            />
            <Feature
              icon={<LockKeyhole />}
              title="Secure financial wellness layer"
            />
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              What We Believe
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Better financial support builds stronger workplaces.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {beliefs.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-slate-100 bg-[#f5f8ff] p-6"
              >
                <CheckCircle2 className="text-blue-600" size={24} />
                <p className="mt-5 font-black leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f5f8ff] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              Request Demo
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Bring MobPae to your workplace.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Share your company details and our team will reach out.
            </p>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-200/80 md:p-8"
          >
            <div className="grid gap-5">
              <Input
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={updateField}
                error={errors.companyName}
                inputClass={inputClass}
                required
              />
              <Input
                label="Contact Name"
                name="contactName"
                value={form.contactName}
                onChange={updateField}
                error={errors.contactName}
                inputClass={inputClass}
                required
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  error={errors.email}
                  inputClass={inputClass}
                  required
                />
                <Input
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  error={errors.phone}
                  inputClass={inputClass}
                />
              </div>

              <Input
                label="Employee Count"
                name="employeeCount"
                value={form.employeeCount}
                onChange={updateField}
                error={errors.employeeCount}
                inputClass={inputClass}
              />

              <button
                type="button"
                onClick={handleMessageFocus}
                className="text-left text-sm font-black text-blue-600"
              >
                Add message
              </button>

              {showMessage && (
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={4}
                  className={`${inputClass} h-auto py-3`}
                />
              )}

              {success && (
                <p className="rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
                  {success}
                </p>
              )}

              {error && (
                <p className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">
                  {error}
                </p>
              )}

              <button
                disabled={loading}
                className="flex h-13 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-black text-white shadow-xl shadow-blue-600/20 disabled:opacity-60"
              >
                {loading && <Loader2 className="animate-spin" size={18} />}
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-black tracking-tight">
            Common questions
          </h2>

          <div className="mt-10 grid gap-3">
            {faqs.map((faq, index) => (
              <button
                key={faq.q}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-black">{faq.q}</h3>
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openFaq === index && (
                  <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MiniCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="text-blue-600">{icon}</div>
      <p className="mt-3 text-xs font-bold text-slate-400">{label}</p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-3">
      <p className="text-[11px] text-blue-100">{label}</p>
      <p className="mt-1 text-sm font-black">{value}</p>
    </div>
  );
}

function FloatingCard({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl bg-white p-4 shadow-xl shadow-slate-300/50 ${className}`}
    >
      <p className="text-sm font-black text-slate-950">{title}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{text}</p>
    </div>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
      <div className="text-blue-300">{icon}</div>
      <p className="font-black">{title}</p>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  error,
  inputClass,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  inputClass: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className={inputClass}
      />

      {error && (
        <p className="mt-1.5 text-xs font-semibold text-red-600">{error}</p>
      )}
    </div>
  );
}
