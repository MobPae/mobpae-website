import { useState } from "react";
import { Plus, Minus, Mail, Loader2, CheckCircle2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../../config/email";

const faqs = [
  { q: "What is MobPae?", a: "MobPae is an employer-backed salary access platform that lets employees withdraw a portion of their earned salary before payday — at zero interest, with no credit checks." },
  { q: "How does MobPae work?", a: "Employees submit a request through the app. The employer reviews and approves it. Funds are disbursed within 24 hours and repaid automatically from the next payroll." },
  { q: "Is MobPae a loan product?", a: "No. MobPae is not a loan. Employees access money they have already earned. There is no interest, no credit scoring, and no traditional underwriting involved." },
  { q: "What platforms are supported?", a: "MobPae is available on iOS and Android for employees, and via a web-based portal for employers and administrators." },
  { q: "How long does onboarding take?", a: "Employer onboarding typically takes 2–3 working days. Once set up, employees can begin requesting advances immediately." },
  { q: "Can MobPae integrate with payroll?", a: "Yes. MobPae works alongside your existing payroll process. Repayments are structured as payroll deductions with minimal changes to your workflow." },
  { q: "What support does MobPae provide?", a: "We provide dedicated onboarding support, a help centre, and ongoing account management for employers. Employee support is available in-app." },
  { q: "How is pricing structured?", a: "MobPae charges a small platform fee to employers. There are no fees for employees — access is completely free for them." },
];

const defaultMessage = "Tell us a little about your requirement";

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

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    if (name === "phone") {
      setForm((p) => ({ ...p, phone: value.replace(/\D/g, "").slice(0, 10) }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSuccess("");
    setSubmitError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          companyName: form.companyName,
          contactName: form.contactName,
          email: form.email,
          phone: form.phone,
          employeeCount: form.employeeCount || "Not Provided",
          message: form.message || defaultMessage,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSuccess("Enquiry submitted! Our team will contact you shortly.");
      setTimeout(() => setSuccess(""), 4000);
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSubmitError("Unable to submit. Please email support@mobpae.com.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#e8ddd4] bg-[#faf6f1] px-4 py-3 text-[13px] text-[#1c1209] placeholder-[#9e8f85] outline-none transition focus:border-[#c4522a] focus:ring-2 focus:ring-[#fde8d8]";

  return (
    <section id="faq" className="relative overflow-hidden bg-[#faf7f5] pb-28 pt-20">

      {/* Blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#c4522a]/5 blur-[70px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-56 w-56 rounded-full bg-[#fde8d8]/60 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fde8d8] bg-[#fdf3ee] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4522a]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#c4522a]">FAQ & Contact</span>
          </div>
          <h2 className="mt-5 text-[40px] font-[600] tracking-[-0.02em] leading-[1.1] text-[#1c1209] lg:text-[48px]">
            Everything you need to know
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-[#c4522a]" />
        </div>

        {/* 2-col */}
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">

          {/* ── Left: Accordion ── */}
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: isOpen ? "#fde8d8" : "#f1e8e3",
                    background: isOpen ? "#fdf9f7" : "#ffffff",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className={`text-[14.5px] font-[500] transition-colors ${isOpen ? "text-[#1c1209]" : "text-[#3d3028]"}`}>
                      {faq.q}
                    </span>
                    <div className={`ml-4 flex-shrink-0 transition-colors ${isOpen ? "text-[#c4522a]" : "text-[#9e8f85]"}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-[13.5px] leading-[1.8] text-[#6b5e53]">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Right: Contact form ── */}
          <form
            id="contact"
            onSubmit={submitEnquiry}
            className="rounded-2xl border border-[#fde8d8] bg-white p-7 shadow-soft lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdf3ee]">
                <Mail size={18} className="text-[#c4522a]" />
              </div>
              <div>
                <h3 className="text-[16px] font-[600] text-[#1c1209]">Get in touch</h3>
                <p className="mt-0.5 text-[12px] text-[#9e8f85]">We'd love to learn about your business.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <FormField label="Company Name" error={errors.companyName}>
                  <input name="companyName" value={form.companyName} onChange={updateField}
                    placeholder="Acme Industries" className={inputClass} />
                </FormField>
                <FormField label="Contact Name" error={errors.contactName}>
                  <input name="contactName" value={form.contactName} onChange={updateField}
                    placeholder="Jane Doe" className={inputClass} />
                </FormField>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <FormField label="Work Email" error={errors.email}>
                  <input name="email" type="email" value={form.email} onChange={updateField}
                    placeholder="jane@acme.com" className={inputClass} />
                </FormField>
                <FormField label="Phone" error={errors.phone}>
                  <input name="phone" value={form.phone} onChange={updateField}
                    placeholder="+91 90000 00000" className={inputClass} />
                </FormField>
              </div>
              <FormField label="Number of Employees">
                <select name="employeeCount" value={form.employeeCount} onChange={updateField}
                  className={inputClass + " appearance-none"}>
                  <option value="">Select range</option>
                  <option value="1-50">1–50</option>
                  <option value="51-200">51–200</option>
                  <option value="201-1000">201–1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </FormField>
              <FormField label="Message">
                <textarea name="message" rows={3} value={form.message} onChange={updateField}
                  placeholder="Tell us a little about your requirement"
                  className={inputClass + " resize-none"} />
              </FormField>

              {success && (
                <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                  <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-emerald-600" />
                  <p className="text-[13px] font-[500] text-emerald-700">{success}</p>
                </div>
              )}
              {submitError && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                  <p className="text-[13px] font-[500] text-red-700">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-[14px] py-3.5 text-[14px] font-[600] text-white transition-all hover:-translate-y-px disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #a8411f, #c4522a)", boxShadow: "0 8px 28px rgba(196,82,42,0.30)" }}
              >
                {loading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Wave → Footer */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,40 C360,0 1080,70 1440,30 L1440,70 L0,70 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[12px] font-[700] text-[#1c1209]">{label}</label>
      {children}
      {error && <p className="mt-1 text-[11px] font-[500] text-red-500">{error}</p>}
    </div>
  );
}
