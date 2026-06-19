import axios from "axios";
import { Building2, CheckCircle2, Loader2, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string).replace(/\/api\/v1\/?$/, "");
const defaultMessage = "We want to explore MobPae for our employees.";

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
  message: defaultMessage,
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  function validateForm() {
    const nextErrors: FormErrors = {};
    if (!form.companyName.trim()) nextErrors.companyName = "Required";
    if (!form.contactName.trim()) nextErrors.contactName = "Required";
    if (!form.email.trim()) nextErrors.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Invalid email";
    if (form.phone && form.phone.length < 10) nextErrors.phone = "Must be 10 digits";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

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

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");
    setSubmitError("");

    try {
      await axios.post(`${API_BASE}/employer-enquiries`, {
        companyName: form.companyName,
        contactPerson: form.contactName,
        email: form.email,
        phone: form.phone,
        employeeCount: form.employeeCount ? Number(form.employeeCount) : null,
        message: form.message || defaultMessage,
      });
      setSuccess("Demo request submitted. Our team will contact you shortly.");
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-13 min-h-[52px] w-full rounded-2xl border border-emerald-100 bg-white px-4 text-[14px] font-[700] text-slate-950 placeholder-slate-400 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100";

  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <SEO
        title="Book a Demo"
        description="Contact MobPae to set up employer-backed salary access with controlled approvals, verification, payroll recovery and settlement visibility."
        path="/contact"
      />
      <Navbar />

      <section className="relative overflow-hidden border-b border-emerald-100">
        <div className="pointer-events-none absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-200/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-24 h-[460px] w-[460px] rounded-full bg-cyan-100/80 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/86 px-4 py-2 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <Send size={14} className="text-emerald-700" />
                <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-emerald-800">Book a demo</span>
              </div>
              <h1 className="mt-6 max-w-[660px] text-[48px] font-[900] leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[76px]">
                Bring salary access to your workplace.
              </h1>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.85] text-slate-600">
                Tell us about your company and we’ll help you understand employer setup, policy controls, employee onboarding and launch timelines.
              </p>

              <div className="mt-8 grid gap-3">
                <ContactPoint icon={<Mail size={17} />} title="Email" value="support@mobpae.com" href="mailto:support@mobpae.com" />
                <ContactPoint icon={<Phone size={17} />} title="Phone" value="+91 92270 12145" href="tel:+919227012145" />
                <ContactPoint icon={<MapPin size={17} />} title="Address" value="Gujarat, Ahmedabad - 382470" />
              </div>
            </div>

            <form onSubmit={submitEnquiry} className="rounded-[38px] border border-white bg-white/86 p-5 shadow-soft backdrop-blur-xl lg:p-7">
              <div className="rounded-[30px] bg-slate-950 p-5 text-white lg:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-3xl bg-emerald-400/15 text-emerald-200">
                    <Building2 size={23} />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-[900] tracking-[-0.05em]">Book a demo</h2>
                    <p className="mt-1 text-[13px] font-[700] text-white/56">For employers who want setup, pricing and launch guidance.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Company name" error={errors.companyName}>
                    <input name="companyName" value={form.companyName} onChange={updateField} placeholder="Northstar Retail" className={inputClass} />
                  </Field>
                  <Field label="Contact name" error={errors.contactName}>
                    <input name="contactName" value={form.contactName} onChange={updateField} placeholder="Rohan Sharma" className={inputClass} />
                  </Field>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Work email" error={errors.email}>
                    <input name="email" type="email" value={form.email} onChange={updateField} placeholder="rohan@company.com" className={inputClass} />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input name="phone" value={form.phone} onChange={updateField} placeholder="9227012145" className={inputClass} />
                  </Field>
                </div>
                <Field label="Number of employees">
                  <select name="employeeCount" value={form.employeeCount} onChange={updateField} className={inputClass}>
                    <option value="">Select range</option>
                    <option value="50">1-50</option>
                    <option value="200">51-200</option>
                    <option value="1000">201-1000</option>
                    <option value="1001">1000+</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea name="message" rows={4} value={form.message} onChange={updateField} className={`${inputClass} h-auto resize-none py-4 leading-relaxed`} />
                </Field>

                {success && (
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-600" />
                    <p className="text-[13px] font-[800] text-emerald-800">{success}</p>
                  </div>
                )}
                {submitError && (
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3">
                    <p className="text-[13px] font-[800] text-red-700">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[900] text-white shadow-[0_22px_54px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-1 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="transition-transform group-hover:translate-x-1" />}
                  {loading ? "Submitting..." : "Submit demo request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-6 lg:grid-cols-3">
        <ContactTrust title="Employer policy first" body="Advance limits, approval rules and verification requirements stay controlled." />
        <ContactTrust title="Not loan-first" body="Employees access earned salary through employer-backed workflow and transparent deductions." />
        <ContactTrust title="Launch support" body="We help employers plan setup, employee onboarding and first salary access requests." />
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-[900] uppercase tracking-[0.1em] text-slate-500">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-[12px] font-[800] text-red-500">{error}</p>}
    </div>
  );
}

function ContactPoint({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const className = "flex items-center gap-4 rounded-[24px] border border-emerald-100 bg-white/82 p-4 shadow-[0_12px_34px_rgba(15,23,42,0.045)] transition hover:-translate-y-1 hover:shadow-soft";
  const content = (
    <>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">{icon}</span>
      <span>
        <span className="block text-[11px] font-[900] uppercase tracking-[0.12em] text-slate-400">{title}</span>
        <span className="mt-1 block text-[14px] font-[900] text-slate-950">{value}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className={className}>{content}</a>
  ) : (
    <div className={className}>{content}</div>
  );
}

function ContactTrust({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        <ShieldCheck size={21} />
      </div>
      <h3 className="mt-5 text-[22px] font-[900] tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.75] text-slate-600">{body}</p>
    </div>
  );
}
