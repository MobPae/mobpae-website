import { useState } from "react";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../../config/email";

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

export function EnquirySection() {
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

    if (form.phone && form.phone.length < 10) {
      nextErrors.phone = "Phone number should be 10 digits";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    if (name === "phone") {
      setForm((prev) => ({
        ...prev,
        phone: value.replace(/\D/g, "").slice(0, 10),
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleMessageFocus() {
    if (!form.message.trim()) {
      setForm((prev) => ({
        ...prev,
        message: defaultMessage,
      }));
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

      setSuccess(
        "Enquiry submitted successfully. Our team will contact you shortly."
      );
      setTimeout(() => {
        setSuccess("");
      }, 3000);

      setForm(initialForm);
      setErrors({});
      setShowMessage(false);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setError(
        "Unable to submit enquiry at the moment. Please email support@mobpae.com."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50";

  return (
    <section id="contact" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left */}
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Submit Enquiry
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-950">
              Have Questions?
              <br />
              We're Here to Help!{" "}
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-800">
              Help employees access earned salary with a structured,
              employer-controlled and transparent process.
            </p>

            <div className="mt-8 space-y-4">
              <BenefitItem
                title="Fast Onboarding"
                text="Get started with minimal setup."
              />

              <BenefitItem
                title="Transparent Workflow"
                text="Complete visibility from request to repayment."
              />

              <BenefitItem
                title="Employer Controlled"
                text="Define limits, approvals and policies."
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submitEnquiry}
            className="rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/60"
          >
            <div className="grid gap-5">
              <Input
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={updateField}
                error={errors.companyName}
                inputClass={inputClass}
              />

              <Input
                label="Contact Name"
                name="contactName"
                value={form.contactName}
                onChange={updateField}
                error={errors.contactName}
                inputClass={inputClass}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="Work Email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  error={errors.email}
                  inputClass={inputClass}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  error={errors.phone}
                  inputClass={inputClass}
                />
              </div>

              <Input
                label="Number of Employees"
                name="employeeCount"
                value={form.employeeCount}
                onChange={updateField}
                error={errors.employeeCount}
                inputClass={inputClass}
              />

              <button
                type="button"
                onClick={handleMessageFocus}
                className="text-left text-sm font-semibold text-blue-600"
              >
                Add Message
              </button>

              {showMessage && (
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={updateField}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-50"
                />
              )}

              {success && (
                <div className="rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-xl disabled:opacity-60"
              >
                {loading && <Loader2 size={18} className="animate-spin" />}

                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  error,
  inputClass,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  inputClass: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className={inputClass}
      />

      {error && (
        <p className="mt-1 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

function BenefitItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
        ✓
      </div>

      <div>
        <h4 className="font-semibold text-slate-950">{title}</h4>

        <p className="mt-1 text-sm text-slate-700">{text}</p>
      </div>
    </div>
  );
}
