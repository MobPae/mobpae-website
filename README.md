# MobPae Website

MobPae Website is the public portfolio/landing website for MobPae.
It explains the MobPae salary advance platform, highlights benefits for employers and employees, and allows companies to submit enquiry/demo requests.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

---

## Features

- Modern responsive landing page
- Mobile navbar
- Employer/employee benefit sections
- How it works section
- FAQ section
- Enquiry/contact form
- API integration with MobPae backend
- Privacy Policy page
- Terms & Conditions page
- 404 page
- SEO metadata
- Custom favicon

---

## Routes

| Route             | Description         |
| ----------------- | ------------------- |
| `/`               | Home / landing page |
| `/privacy-policy` | Privacy Policy      |
| `/terms`          | Terms & Conditions  |
| `*`               | 404 Not Found page  |

---

## Backend API Dependency

The enquiry form connects to the MobPae backend API:

```txt
POST /api/v1/enquiries

Expected backend local URL:

http://localhost:3000/api/v1

⸻

Environment Variables

Create a .env file in the project root:

VITE_API_BASE_URL=http://localhost:3000/api/v1

Example file:

.env.example

⸻

Local Development

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:5173

Run on local network/mobile:

npm run dev -- --host 0.0.0.0

Then open using your machine IP:

http://YOUR_LOCAL_IP:5173

⸻

Production Build

npm run build

Preview production build:

npm run preview

⸻

Important Notes

* Backend must be running for enquiry form submission.
* For mobile testing, update .env with your local IP backend URL:

VITE_API_BASE_URL=http://YOUR_LOCAL_IP:3000/api/v1

* For deployment, update VITE_API_BASE_URL with the hosted backend URL.

⸻

```
