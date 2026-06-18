import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const sections = [
  {
    title: "Data We Collect",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#10b981" strokeWidth="1.7" />
        <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#10b981" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    body: "We collect only the information necessary to provide secure, reliable financial services. This includes personal details, account information, transaction data, and device information.",
  },
  {
    title: "How We Use It",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.7" />
        <path d="M12 7v5l3 3" stroke="#10b981" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    body: "Your data helps us deliver and improve our services, process transactions, prevent fraud, and comply with legal obligations. We never sell your personal information.",
  },
  {
    title: "Your Rights",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 4.418 3.582 8 8 9 4.418-1 8-4.582 8-9V7L12 3z" stroke="#10b981" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#10b981" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    body: "You have the right to access, update, or delete your personal data. You may also object to certain processing or withdraw consent at any time.",
  },
  {
    title: "Contact Us",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#10b981" strokeWidth="1.7" />
        <path d="M3 8l9 6 9-6" stroke="#10b981" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    body: "Questions or concerns about your privacy? We're here to help.",
    contact: true,
  },
];

export function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[400px_1fr] lg:items-start">

            {/* Left column */}
            <div className="relative">
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#10b981]">
                    <svg width="18" height="13" viewBox="0 0 22 16" fill="none">
                      <path d="M1 13C1 13 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-[800] tracking-[0.12em] text-[#0f172a] uppercase">MobPae</span>
                </div>

                <h1
                  className="font-[800] leading-[0.92] tracking-[-0.03em] text-[#0f172a]"
                  style={{ fontSize: "clamp(52px, 6.5vw, 76px)" }}
                >
                  Privacy<br />Policy
                </h1>

                <p className="mt-7 text-[14px] leading-[1.85] text-[#64748b] max-w-[320px]">
                  Your privacy is fundamental to everything we do. We are committed to protecting your data with transparency, respect, and industry-leading security.
                </p>

                {/* Lock visual */}
                <div className="relative mt-10 h-[220px] w-[220px]">
                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full bg-[#10b981]" />
                  {/* Inner circle */}
                  <div className="absolute inset-5 rounded-full bg-[#059669]" />
                  {/* Padlock SVG */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
                      <rect x="10" y="45" width="70" height="50" rx="10" fill="white" fillOpacity="0.95" />
                      <rect x="20" y="55" width="50" height="30" rx="6" fill="white" fillOpacity="0.6" />
                      <circle cx="45" cy="68" r="8" fill="white" fillOpacity="0.9" />
                      <rect x="42" y="68" width="6" height="10" rx="3" fill="#10b981" />
                      <path d="M25 45V30a20 20 0 0140 0v15" stroke="white" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Decorative dot pattern */}
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#d1fae5]" />
                </div>

                {/* Security note */}
                <div className="mt-8 flex items-start gap-3 max-w-[280px]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M12 3L4 7v5c0 4.418 3.582 8 8 9 4.418-1 8-4.582 8-9V7L12 3z" stroke="#10b981" strokeWidth="1.7" />
                  </svg>
                  <div>
                    <p className="text-[12px] italic text-[#64748b] leading-[1.7]">Security is in our DNA. We use advanced encryption and industry best practices to keep your data safe.</p>
                  </div>
                </div>

                <p className="mt-5 text-[11.5px] text-[#94a3b8]">Last updated: January 2026</p>
              </div>
            </div>

            {/* Right column */}
            <div className="divide-y divide-[#e2e8f0] rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden"
              style={{ boxShadow: "0 4px 30px rgba(16,185,129,0.06)" }}>
              {sections.map((s, i) => (
                <div key={i} className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#ecfdf5]">
                      {s.icon}
                    </div>
                    <h2 className="text-[21px] font-[700] tracking-[-0.01em] text-[#0f172a]">{s.title}</h2>
                  </div>
                  <p className="text-[13.5px] leading-[1.85] text-[#64748b] pl-[60px]">{s.body}</p>
                  {s.contact && (
                    <div className="pl-[60px] mt-3 space-y-1.5">
                      <a href="mailto:privacy@mobpae.com" className="block text-[13.5px] font-[600] text-[#10b981] hover:underline">privacy@mobpae.com</a>
                      <a href="tel:+919227012145" className="block text-[13.5px] font-[600] text-[#10b981] hover:underline">+91 92270 12145</a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
