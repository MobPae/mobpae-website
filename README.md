# MobPae Website

MobPae Website is the public portfolio/landing website for MobPae.
It explains the MobPae salary advance platform, highlights benefits for employers and employees, and allows companies to submit enquiry/demo requests.

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Lucide React

---

## Features

- Modern responsive landing page
- Mobile navbar
- Employer/employee benefit sections
- How it works section
- FAQ section
- Enquiry/contact form, with spam protection (honeypot + fill-time check)
- Careers, Contact, Help Center pages
- Privacy Policy page
- Terms & Conditions page
- 404 page
- SEO metadata (per-route title/description/canonical, sitemap, structured data)
- Custom favicon

---

## Routes

| Route             | Description         |
| ----------------- | -------------------- |
| `/`               | Home / landing page |
| `/help-center`    | Help Center          |
| `/careers`        | Careers              |
| `/contact`        | Contact              |
| `/privacy-policy` | Privacy Policy       |
| `/terms`          | Terms & Conditions   |
| `*`               | 404 Not Found page   |

---

## Enquiry Form API

The homepage enquiry form posts to `POST /api/enquiry` — see [api/enquiry.ts](api/enquiry.ts). It's a framework-agnostic handler (works as an Express route or wired into a plain Node server) currently standing in for the real backend by emailing enquiries directly over SMTP.

**Request body:**

```json
{
  "companyName": "Acme Pvt Ltd",
  "contactPerson": "Jane Doe",
  "email": "jane@acme.com",
  "phone": "+91 98765 43210",
  "message": "We have 120 employees and want to offer earned wage access.",
  "honeypot": "",
  "startedAt": 1735300000000
}
```

`phone` may be `null`. `honeypot` must arrive empty from a real client — non-empty means a bot auto-filled it. `startedAt` is the epoch-ms time the form loaded; a submission arriving under ~1.5s later is treated as spam. Both spam signals fail silently with `200 { ok: true }` rather than an error, so a bot gets no signal to adapt to.

**Responses:** `200 { "ok": true }` on success; any other status with `{ "ok": false, "error": "..." }` on failure. The site shows a generic "please email support@mobpae.com" message on any non-2xx response — no need to match error text exactly.

Once a real backend is live, point `VITE_API_BASE_URL` at it (see `.env.example`) — the form will call `${VITE_API_BASE_URL}/employer-enquiries` instead, and `api/enquiry.ts` can be deleted.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in real values for local development. See that file for what each variable does.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

To test from another device on the same network:

```bash
npm run dev -- --host 0.0.0.0
```

then open `http://YOUR_LOCAL_IP:5173` from that device.

---

## Production Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

---

## Deployment

`dist/` is a static build — any web server can serve it. Two things the server needs to do that a plain static file server won't do by default:

1. **SPA fallback** — every route except `/api/*` must serve `dist/index.html` (React Router handles the actual routing client-side). In nginx:

   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

2. **Security headers** — set on every response:

   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   Referrer-Policy: strict-origin-when-cross-origin
   Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
   ```

3. **The `/api/enquiry` endpoint** needs a real Node process to run — `handleEnquiryRequest` in [api/enquiry.ts](api/enquiry.ts) is plain and framework-agnostic, so it drops into an Express route (`app.post('/api/enquiry', handler)`) or any other Node HTTP setup. It needs the `SMTP_*` / `MAIL_FROM*` / `ENQUIRY_TO_EMAIL` environment variables set (see `.env.example`) wherever that process runs.

No source maps are shipped in the production build (`vite.config.ts` sets `build.sourcemap: false`) — browser DevTools will only show the bundled, minified output, not the original source tree.
