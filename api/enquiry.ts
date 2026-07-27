// Vercel serverless function — temporary stand-in for the backend's
// POST /employer-enquiries route while that backend isn't deployed yet.
//
// Emails the enquiry directly to the support inbox over SMTP using the
// mailbox's own credentials. Delete this file (and remove the fetch call
// in src/pages/HomePage.tsx that points at it) once the real backend is
// live — see the comments there for the original code to restore.
//
// handleEnquiryRequest is also called directly by the Vite dev-server
// middleware (vite.config.ts) so `npm run dev` works without needing
// `vercel dev`.
import nodemailer from "nodemailer";

interface VercelRequest {
  method?: string;
  body: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

interface EnquiryPayload {
  companyName?: unknown;
  contactPerson?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
}

export interface EnquiryResult {
  status: number;
  body: { ok: boolean; error?: string };
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function handleEnquiryRequest(payload: unknown): Promise<EnquiryResult> {
  const body = payload as EnquiryPayload;

  const companyName = asTrimmedString(body?.companyName);
  const contactPerson = asTrimmedString(body?.contactPerson);
  const email = asTrimmedString(body?.email).toLowerCase();
  const phone = asTrimmedString(body?.phone);
  const message = asTrimmedString(body?.message);

  if (!companyName || !contactPerson || !email || !EMAIL_PATTERN.test(email)) {
    return { status: 400, body: { ok: false, error: "Missing or invalid required fields" } };
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    MAIL_FROM,
    MAIL_FROM_NAME,
    ENQUIRY_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !ENQUIRY_TO_EMAIL) {
    console.error(
      "Enquiry email is not configured: missing SMTP_* / MAIL_FROM / ENQUIRY_TO_EMAIL env vars"
    );
    return { status: 500, body: { ok: false, error: "Email is not configured" } };
  }

  try {
    const port = Number(SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: SMTP_SECURE === "true",
      requireTLS: port === 587,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME || "MobPae"}" <${MAIL_FROM}>`,
      to: ENQUIRY_TO_EMAIL,
      replyTo: email,
      subject: `New employer enquiry: ${companyName}`,
      text: [
        `Company: ${companyName}`,
        `Contact person: ${contactPerson}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Message:",
        message || "(no message)",
      ].join("\n"),
    });

    return { status: 200, body: { ok: true } };
  } catch (error) {
    console.error("Failed to send employer enquiry email", error);
    return { status: 502, body: { ok: false, error: "Failed to send enquiry email" } };
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const result = await handleEnquiryRequest(payload);
  res.status(result.status).json(result.body);
}
