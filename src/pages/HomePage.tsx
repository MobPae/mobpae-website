import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  IndianRupee,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { api } from "../services/api";

const defaultMessage =
  "I am interested in MobPae for my company. Please contact me for a demo.";

const benefits = [
  "Improve employee financial wellness",
  "Reduce salary advance manual work",
  "Transparent request and approval flow",
  "Configurable salary-based limits",
];

const steps = [
  {
    title: "Employer Onboards Employees",
    description: "HR uploads employees and assigns salary details securely.",
    icon: Users,
  },
  {
    title: "MobPae Calculates Limit",
    description: "Eligible employees get a pre-approved salary advance limit.",
    icon: WalletCards,
  },
  {
    title: "Employee Requests Advance",
    description:
      "Employees request advance salary from a simple mobile-first app.",
    icon: Smartphone,
  },
  {
    title: "Employer Approves",
    description: "Employer reviews and approves requests with full visibility.",
    icon: BadgeCheck,
  },
];

const faqs = [
  {
    q: "What is MobPae?",
    a: "MobPae is a salary advance platform that helps employees access a part of their earned salary before payday.",
  },
  {
    q: "Who can use MobPae?",
    a: "Companies can onboard their employees. Employees can use MobPae after employer activation.",
  },
  {
    q: "Is the limit fixed?",
    a: "No. Limits can be configured based on salary rules and employer policy.",
  },
];

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

export function HomePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!form.companyName.trim()) {
      nextErrors.companyName = "Company name is required";
    }

    if (!form.contactName.trim()) {
      nextErrors.contactName = "Contact name is required";
    }

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
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: digitsOnly });
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
      await api.post("/enquiries", {
        ...form,
        message: form.message || defaultMessage,
        employeeCount: form.employeeCount
          ? Number(form.employeeCount)
          : undefined,
      });

      setSuccess("Thank you! Our team will contact you shortly.");
      setForm(initialForm);
      setErrors({});
      setShowMessage(false);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-50";

  const errorClass = "mt-2 text-sm font-medium text-red-600";

  return (
    <main className="min-h-screen bg-soft text-dark">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <ShieldCheck size={16} />
              Salary advance made simple
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Financial flexibility for employees. Control for employers.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              MobPae helps companies offer salary advance benefits with
              transparent limits, approval flows, disbursal tracking, and
              repayment visibility.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-soft"
              >
                Request Demo <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm text-slate-300">Available Limit</p>
              <div className="mt-3 flex items-center gap-2 text-5xl font-bold">
                <IndianRupee size={36} />
                8,000
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  ["Request Status", "Approved"],
                  ["Disbursal", "Pending"],
                  ["Repayment Due", "30 Jun 2026"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl bg-white/10 p-4"
                  >
                    <span className="text-slate-300">{label}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-semibold text-primary">How it works</p>
          <h2 className="mt-3 text-4xl font-bold">
            Simple flow from onboarding to repayment
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-3xl bg-white p-6 shadow-soft"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="benefits" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-primary">Benefits</p>
            <h2 className="mt-3 text-4xl font-bold">
              Built for employers and employees
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              MobPae gives employees timely access to funds while employers
              maintain approval control, visibility, and repayment tracking.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <CheckCircle2 className="text-primary" size={22} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="employers" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "For Employers",
              "Manage employees, requests, approvals, disbursals, and repayments.",
              Building2,
            ],
            [
              "For Employees",
              "Request advance salary with a clean mobile-first experience.",
              Smartphone,
            ],
            [
              "Fast Operations",
              "Track pending requests, disbursals, and repayments in one place.",
              Clock3,
            ],
          ].map(([title, desc, Icon]) => (
            <div
              key={String(title)}
              className="rounded-3xl bg-white p-7 shadow-soft"
            >
              <Icon className="text-primary" size={30} />
              <h3 className="mt-5 text-xl font-bold">{String(title)}</h3>
              <p className="mt-3 leading-7 text-slate-600">{String(desc)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-center font-semibold text-primary">FAQ</p>
          <h2 className="mt-3 text-center text-4xl font-bold">
            Common questions
          </h2>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="font-bold">{faq.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <p className="font-semibold text-primary">Contact</p>
          <h2 className="mt-3 text-4xl font-bold">
            Interested in MobPae for your company?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share your company details and our team will reach out for a demo.
          </p>
        </div>

        <form
          onSubmit={submitEnquiry}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Request a demo</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in your details. We’ll get back to you shortly.
            </p>
          </div>

          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                name="companyName"
                value={form.companyName}
                onChange={updateField}
                placeholder="Example: ABC Technologies"
                className={inputClass}
              />
              {errors.companyName && (
                <p className={errorClass}>{errors.companyName}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                name="contactName"
                value={form.contactName}
                onChange={updateField}
                placeholder="Your full name"
                className={inputClass}
              />
              {errors.contactName && (
                <p className={errorClass}>{errors.contactName}</p>
              )}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  type="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10 digit mobile number"
                  className={inputClass}
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Employee Count
              </label>
              <input
                name="employeeCount"
                value={form.employeeCount}
                onChange={updateField}
                type="number"
                min="1"
                placeholder="Example: 100"
                className={inputClass}
              />
              {errors.employeeCount && (
                <p className={errorClass}>{errors.employeeCount}</p>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={handleMessageFocus}
                className="text-sm font-semibold text-primary hover:text-blue-700"
              >
                Add message
              </button>

              {showMessage && (
                <div className="mt-3">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    rows={4}
                    className={inputClass}
                  />
                </div>
              )}
            </div>

            {success && (
              <p className="rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-700">
                {success}
              </p>
            )}

            {error && (
              <p className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}
