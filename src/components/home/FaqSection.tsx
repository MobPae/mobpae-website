import { useState } from "react";
import { Plus, Minus, Mail, Loader2, CheckCircle2, Send } from "lucide-react";
import axios from "axios";

// Strip /api/v1 suffix — employer-enquiries lives at the root path
const API_BASE = (import.meta.env.VITE_API_BASE_URL as string).replace(/\/api\/v1\/?$/, "");

const faqs = [
  { q: "What is MobPae?", a: "MobPae is an employer-backed salary access platform that lets employees withdraw a portion of their earned salary before payday — with no credit checks." },
  { q: "How does MobPae work?", a: "Employees submit a request through the app. The employer reviews and approves it. Funds are disbursed within 24 hours and repaid automatically from the next payroll." },
  { q: "Is MobPae a loan product?", a: "No. MobPae is not a loan. Employees access money they have already earned — no credit scoring, no traditional underwriting." },
  { q: "What platforms are supported?", a: "MobPae is available on iOS and Android for employees, and via a web-based portal for employers and administrators." },
  { q: "How long does onboarding take?", a: "Employer onboarding typically takes 2–3 working days. Once set up, employees can begin requesting advances immediately." },
  { q: "Can MobPae integrate with payroll?", a: "Yes. MobPae works alongside your existing payroll process. Repayments are structured as payroll deductions with minimal changes to your workflow." },
  { q: "What support does MobPae provide?", a: "We provide dedicated onboarding support, a help centre, and ongoing account management for employers. Employee support is available in-app." },
  { q: "How is pricing structured?", a: "Employees pay ₹499 per year — a mandatory annual membership covering unlimited access to up to 12 salary advances. There is no free plan. Employers are billed separately for platform access; contact us for employer pricing." },
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
  message: defaultMessage,
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
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
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
      setSuccess("Enquiry submitted! Our team will contact you shortly.");
      setTimeout(() => setSuccess(""), 4000);
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#E5E6EE] bg-[#F8F9FC] px-4 py-3 text-[13px] text-[#191A2E] placeholder-[#8D90A3] outline-none transition focus:border-[#7679FF] focus:ring-2 focus:ring-[#ECEBFF]";

  return (
    <section id="faq" className="relative overflow-hidden bg-[#F8F9FC] py-20">

      {/* Blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-[#7679FF]/5 blur-[70px]" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-56 w-56 rounded-full bg-[#ECEBFF]/60 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ECEBFF] bg-[#F7F7FF] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7679FF]" />
            <span className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#7679FF]">FAQ & Contact</span>
          </div>
          <h2 className="mt-5 text-[36px] font-[600] tracking-normal leading-[1.1] text-[#191A2E] lg:text-[42px]">
            Everything you need to know
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-[#7679FF]" />
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
                    borderColor: isOpen ? "#ECEBFF" : "#E5E6EE",
                    background: isOpen ? "#ffffff" : "#ffffff",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className={`text-[14.5px] font-[700] transition-colors ${isOpen ? "text-[#191A2E]" : "text-[#62657A]"}`}>
                      {faq.q}
                    </span>
                    <div className={`ml-4 flex-shrink-0 transition-colors ${isOpen ? "text-[#7679FF]" : "text-[#8D90A3]"}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-[13.5px] leading-[1.8] text-[#62657A]">{faq.a}</p>
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
            className="rounded-2xl border border-[#ECEBFF] bg-white p-7 shadow-soft lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F7FF]">
                <Mail size={18} className="text-[#7679FF]" />
              </div>
              <div>
                <h3 className="text-[16px] font-[600] text-[#191A2E]">Get in touch</h3>
                <p className="mt-0.5 text-[12px] text-[#8D90A3]">Use this for quick questions. For a structured employer demo, use Book Demo.</p>
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
                  <option value="50">1–50</option>
                  <option value="200">51–200</option>
                  <option value="1000">201–1000</option>
                  <option value="1001">1000+</option>
                </select>
              </FormField>
              <FormField label="Message">
                <textarea name="message" rows={3} value={form.message} onChange={updateField}
                  placeholder="Tell us a little about your requirement"
                  className={inputClass + " resize-none"} />
              </FormField>

              {success && (
                <div className="flex items-start gap-3 rounded-xl border border-[#E4E4EF] bg-[#F0F0F8] px-4 py-3">
                  <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-[#7679FF]" />
                  <p className="text-[13px] font-[500] text-[#5659D9]">{success}</p>
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
                style={{ background: "linear-gradient(135deg, #7679FF, #5659D9)", boxShadow: "0 18px 40px rgba(118,121,255,0.24)" }}
              >
                {loading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[12px] font-[700] text-[#191A2E]">{label}</label>
      {children}
      {error && <p className="mt-1 text-[11px] font-[500] text-red-500">{error}</p>}
    </div>
  );
}
