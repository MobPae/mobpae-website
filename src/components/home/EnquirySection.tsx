import { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../../config/email";

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
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSuccess("");
    setError("");
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
      setError("Unable to submit. Please email support@mobpae.com.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-full border border-slate-200 bg-white px-5 text-[13.5px] text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#0047AB] focus:ring-3 focus:ring-blue-100";

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Two-panel card */}
        <div className="overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.10)] grid lg:grid-cols-[1fr_1.5fr]">

          {/* ── LEFT — dark panel ── */}
          <div
            className="flex flex-col justify-between p-10"
            style={{ background: "linear-gradient(160deg, #0c1322 0%, #0f1e3d 100%)" }}
          >
            <div>
              <p className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#007FFF] mb-6">
                Submit Enquiry
              </p>

              <h2 className="text-[32px] font-[800] leading-[1.15] tracking-[-0.02em] text-white lg:text-[36px]">
                Have questions?{" "}
                <span className="font-serif italic font-[400] text-[#007FFF]">
                  We're here to help.
                </span>
              </h2>

              <p className="mt-5 text-[14px] leading-[1.8] text-white/50 max-w-[300px]">
                Help employees access earned salary with a structured,
                employer-controlled and transparent process.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {[
                { title: "Fast Onboarding", text: "Get started with minimal setup." },
                { title: "Transparent Workflow", text: "Complete visibility from request to repayment." },
                { title: "Employer Controlled", text: "Define limits, approvals and policies." },
              ].map(({ title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#007FFF]/40 bg-[#007FFF]/10">
                    <CheckCircle2 size={13} className="text-[#007FFF]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-[700] text-white leading-none">{title}</p>
                    <p className="mt-1 text-[12px] text-white/45 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — form ── */}
          <form onSubmit={submitEnquiry} className="bg-white p-10">
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
                  className="w-full rounded-[20px] border border-slate-200 bg-white px-5 py-3.5 text-[13.5px] text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#0047AB] focus:ring-3 focus:ring-blue-100 resize-none"
                />
              </Field>

              {success && (
                <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                  <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] font-[500] text-emerald-700">{success}</p>
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
                className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#0047AB] py-4 text-[14px] font-[600] text-white shadow-cobalt transition hover:bg-[#00358a] disabled:opacity-60"
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
      <label className="mb-1.5 block text-[12.5px] font-[600] text-slate-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-[11.5px] font-[500] text-red-500">{error}</p>}
    </div>
  );
}
