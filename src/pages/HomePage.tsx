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

export function HomePage() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    employeeCount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submitEnquiry(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await api.post("/enquiries", {
        ...form,
        employeeCount: form.employeeCount
          ? Number(form.employeeCount)
          : undefined,
      });

      setSuccess("Thank you! Our team will contact you shortly.");
      setForm({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        employeeCount: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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
          className="rounded-3xl bg-white p-6 shadow-soft"
        >
          <div className="grid gap-4">
            <input
              name="companyName"
              value={form.companyName}
              onChange={updateField}
              required
              placeholder="Company Name"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />
            <input
              name="contactName"
              value={form.contactName}
              onChange={updateField}
              required
              placeholder="Contact Name"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />
            <input
              name="email"
              value={form.email}
              onChange={updateField}
              required
              type="email"
              placeholder="Email"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              placeholder="Phone"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />
            <input
              name="employeeCount"
              value={form.employeeCount}
              onChange={updateField}
              type="number"
              placeholder="Employee Count"
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Message"
              rows={4}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary"
            />

            {success && (
              <p className="rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700">
                {success}
              </p>
            )}
            {error && (
              <p className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              disabled={loading}
              className="rounded-full bg-primary px-6 py-3 font-semibold text-white disabled:opacity-60"
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
