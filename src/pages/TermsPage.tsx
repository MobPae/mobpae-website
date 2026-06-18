import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const sections = [
  {
    num: "01",
    title: "Acceptance",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="2" width="15" height="19" rx="2" stroke="#10b981" strokeWidth="1.7" />
        <path d="M8 13l2.5 2.5 5.5-5.5" stroke="#10b981" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7.5h7M8 10h4.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    body: "By accessing or using MobPae, you confirm that you have read, understood, and agree to be bound by these Terms of Service, along with our Privacy Policy and any applicable legal notices.",
  },
  {
    num: "02",
    title: "User Obligations",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="8.5" r="4" stroke="#10b981" strokeWidth="1.7" />
        <path d="M5 23c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#10b981" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    body: "You agree to use MobPae only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
  },
  {
    num: "03",
    title: "Limitations",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3.5L22 19.5H4L13 3.5z" stroke="#10b981" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M13 11v4M13 17.5v.5" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    body: "MobPae is provided \"as is\" and \"as available\" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.",
  },
  {
    num: "04",
    title: "Governing Law",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="18" width="18" height="2.5" rx="1" fill="#10b981" />
        <rect x="5" y="22" width="16" height="1.8" rx="0.9" fill="#10b981" />
        <path d="M13 3.5l-7 6.5h14L13 3.5z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="10" width="2.5" height="8" rx="1" fill="#10b981" />
        <rect x="11.75" y="10" width="2.5" height="8" rx="1" fill="#10b981" />
        <rect x="16.5" y="10" width="2.5" height="8" rx="1" fill="#10b981" />
      </svg>
    ),
    body: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved in the appropriate courts of jurisdiction, and you consent to the exclusive jurisdiction of such courts.",
  },
];

export function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:items-start">

            {/* Left column */}
            <div className="relative">
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[#10b981]/10" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 h-32 w-32 rounded-full bg-[#10b981]/20" />

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
                  style={{ fontSize: "clamp(52px, 6.5vw, 78px)" }}
                >
                  Terms<br />of<br />Service
                </h1>

                <div className="mt-6 h-0.5 w-12 bg-[#10b981]" />

                <p className="mt-7 text-[14px] leading-[1.85] text-[#64748b] max-w-[300px]">
                  These Terms of Service govern your access to and use of MobPae's products and services. By using MobPae, you agree to be bound by these terms.
                </p>

                <p className="mt-5 text-[11.5px] text-[#94a3b8]">Last updated: January 2026</p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              {sections.map((s) => (
                <div
                  key={s.num}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-7"
                  style={{ boxShadow: "0 2px 20px rgba(16,185,129,0.05)" }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#10b981] text-[12px] font-[700] text-white">
                      {s.num}
                    </div>
                    <h2 className="text-[22px] font-[700] tracking-[-0.01em] text-[#0f172a]">{s.title}</h2>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5]">
                      {s.icon}
                    </div>
                    <p className="text-[13.5px] leading-[1.85] text-[#64748b] pt-1">{s.body}</p>
                  </div>
                </div>
              ))}

              {/* Trust tagline */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white px-7 py-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#10b981]/30">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M8 11V7a4 4 0 018 0v4" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-[500] italic text-[#64748b]">Your trust drives everything we do.</p>
                  <p className="text-[10.5px] font-[700] tracking-[0.18em] text-[#10b981] uppercase mt-0.5">MobPae. Money. Moved Better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
