import { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import axios from "axios";

// Strip /api/v1 suffix — employer-enquiries lives at the root path
const API_BASE = (import.meta.env.VITE_API_BASE_URL as string || "").replace(/\/api\/v1\/?$/, "");

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

export function EnquirySection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
    setError("");
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
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-full border border-black/5 bg-white/50 backdrop-blur-sm px-5 text-[13.5px] text-[#111827] placeholder-[#B7B9C7] outline-none transition hover:bg-white/80 focus:border-[#5B3CE3] focus:ring-3 focus:ring-[#F0EDFF]";

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-24">

      {/* Decorative brand glow behind the card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B3CE3]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-[40px] font-[700] leading-none tracking-tighter text-[#111827] lg:text-[48px]">
            Book a demo
          </h2>
        </div>

        {/* Two-panel card */}
        <div className="grid overflow-hidden rounded-[42px] border border-white/50 bg-white/60 backdrop-blur-3xl shadow-[0_32px_90px_rgba(17,24,39,0.06)] lg:grid-cols-[0.95fr_1.35fr]">

          {/* ── LEFT — product context ── */}
          <div className="brand-dark-card relative flex flex-col justify-between overflow-hidden p-8 lg:p-10">

            <div className="relative">
              <p className="mb-6 text-[11px] font-[700] uppercase tracking-[0.2em] text-[#B8ACFF]">
                Book a demo
              </p>

              <h2 className="text-[28px] font-[700] leading-[1.08] tracking-tighter text-white lg:text-[36px]">
                Make salary access feel like a benefit, not a back-office process.
              </h2>

              <p className="mt-5 max-w-[360px] text-[15px] leading-[1.8] text-white/65">
                Tell us about your company. We will help you shape a clear salary-access benefit for your team.
              </p>
            </div>

            <div className="relative mt-10 space-y-4">
              {[
                { title: "Fast Onboarding", text: "Get started with minimal setup." },
                { title: "Clear Experience", text: "A simple journey employees and teams can understand." },
                { title: "Employer Controlled", text: "Keep the benefit aligned with your workplace policy." },
              ].map(({ title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#5B3CE3]/40 bg-[#5B3CE3]/15">
                    <CheckCircle2 size={13} className="text-[#5B3CE3]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-[600] leading-none text-white">{title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/58">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — form ── */}
          <form onSubmit={submitEnquiry} className="bg-white/20 p-10">
            <div className="grid gap-4">

              {/* Row 1 */}
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Company Name" error={errors.companyName}>
                  <input name="companyName" value={form.companyName} onChange={updateField}
                    placeholder="Acme Industries" className={inputClass} />
                </Field>
                <Field label="Contact Name" error={errors.contactName}>
                  <input name="contactName" value={form.contactName} onChange={updateField}
                    placeholder="Jane Doe" className={inputClass} />
                </Field>
              </div>

              {/* Row 2 */}
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Work Email" error={errors.email}>
                  <input name="email" type="email" value={form.email} onChange={updateField}
                    placeholder="jane@acme.com" className={inputClass} />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input name="phone" value={form.phone} onChange={updateField}
                    placeholder="+91 90000 00000" className={inputClass} />
                </Field>
              </div>

              {/* Row 3 */}
              <Field label="Number of Employees" error={errors.employeeCount}>
                <input name="employeeCount" value={form.employeeCount} onChange={updateField}
                  placeholder="e.g. 250" className={inputClass} />
              </Field>

              {/* Message */}
              <Field label="Message">
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us a little about your requirement"
                  className="w-full rounded-[20px] border border-black/5 bg-white/50 backdrop-blur-sm px-5 py-3.5 text-[13.5px] text-[#111827] placeholder-[#B7B9C7] outline-none transition focus:border-[#5B3CE3] focus:ring-3 focus:ring-[#F0EDFF] resize-none hover:bg-white/80"
                />
              </Field>

              {success && (
                <div className="flex items-start gap-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] px-4 py-3">
                  <CheckCircle2 size={15} className="text-[#5B3CE3] mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] font-[500] text-[#4E32CA]">{success}</p>
                </div>
              )}

              {error && (
                <div className="rounded-2xl bg-red-50 border border-red-100 px-4 py-3">
                  <p className="text-[13px] font-[500] text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#5B3CE3] px-8 py-4 text-[14px] font-[600] text-white transition-all hover:bg-[#4E32CA] hover:-translate-y-px disabled:opacity-60"
                style={{ boxShadow: "0 18px 40px rgba(91,60,227,0.24)" }}
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[12.5px] font-[700] text-[#111827]">{label}</label>
      {children}
      {error && <p className="mt-1 text-[11.5px] font-[500] text-red-500">{error}</p>}
    </div>
  );
}
