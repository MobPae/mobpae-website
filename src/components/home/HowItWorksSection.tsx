import { User, Building2, Wallet, CalendarDays, ShieldCheck, Zap } from "lucide-react";

const steps = [
  { num: "01", icon: <User size={20} />, title: "Request Advance", description: "Enter the amount you need and submit your advance request in seconds." },
  { num: "02", icon: <Building2 size={20} />, title: "Employer Reviews", description: "Your employer reviews and approves according to their defined policy." },
  { num: "03", icon: <Wallet size={20} />, title: "Funds Disbursed", description: "Approved funds are transferred to your account securely within 24 hours." },
  { num: "04", icon: <CalendarDays size={20} />, title: "Auto Repayment", description: "Repayment happens automatically from your next salary. No action needed." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#faf7f5] py-24">

      {/* Blobs */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c4522a]/5 blur-[70px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-20 h-48 w-48 rounded-full bg-[#fde8d8]/60 blur-[60px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[300px_1fr] lg:items-start">

          {/* ── Left: Title column ── */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#c4522a]">MOBPAE</p>
            <div className="mt-2 h-0.5 w-10 bg-[#c4522a]" />
            <h2 className="mt-6 text-[52px] font-[700] leading-[0.95] tracking-[-0.02em] text-[#1c1209]">
              How It<br />Works
            </h2>
            <p className="mt-5 text-[14px] leading-[1.8] text-[#6b5e53]">
              Access your earned salary instantly. Simple, secure, and built for you.
            </p>
            <div className="mt-8 space-y-5">
              <Bullet icon={<ShieldCheck size={16} />} title="Secure & Private" description="Bank-grade security to protect your data." />
              <Bullet icon={<Zap size={16} />} title="Instant Access" description="Get funds when you need them the most." />
              <Bullet icon={<User size={16} />} title="Built for Employees" description="Transparent, fair, and designed for your financial well-being." />
            </div>
          </div>

          {/* ── Right panel ── */}
          <div>
            {/* Mobile: simple vertical stack */}
            <div className="flex flex-col gap-8 lg:hidden">
              {steps.map((s) => (
                <div key={s.num}>
                  <span className="font-serif text-[48px] font-[400] leading-none text-[#c4522a]">{s.num}</span>
                  <StepCard icon={s.icon} title={s.title} description={s.description} />
                </div>
              ))}
            </div>

            {/* Desktop: staggered 2×2 with SVG connectors */}
            <div className="relative hidden lg:block" style={{ height: 680 }}>

              {/* ── SVG connecting lines ── */}
              <svg
                className="pointer-events-none absolute inset-0"
                width="100%"
                height="100%"
                viewBox="0 0 600 680"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* 01 → 02: right of card01 curves to left of card02 */}
                <path
                  d="M 282,164 C 308,164 308,244 318,244"
                  stroke="#c4522a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
                <circle cx="282" cy="164" r="4" fill="#c4522a" />
                <circle cx="318" cy="244" r="4" fill="#c4522a" />

                {/* 02 → 03: bottom of card02 sweeps left and down to top of card03 */}
                <path
                  d="M 318,338 C 318,358 282,358 282,378"
                  stroke="#c4522a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
                <circle cx="318" cy="338" r="4" fill="#c4522a" />
                <circle cx="282" cy="378" r="4" fill="#c4522a" />

                {/* 03 → 04: right of card03 curves to left of card04 */}
                <path
                  d="M 282,473 C 308,473 308,553 318,553"
                  stroke="#c4522a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
                <circle cx="282" cy="473" r="4" fill="#c4522a" />
                <circle cx="318" cy="553" r="4" fill="#c4522a" />
              </svg>

              {/* Card 01 — top-left */}
              <div className="absolute" style={{ left: 0, top: 0, width: "47%" }}>
                <span className="font-serif text-[56px] font-[400] leading-none text-[#c4522a]">01</span>
                <StepCard icon={<User size={20} />} title="Request Advance" description="Enter the amount you need and submit your advance request in seconds." />
              </div>

              {/* Card 02 — top-right, pushed down */}
              <div className="absolute" style={{ right: 0, top: 80, width: "47%" }}>
                <span className="font-serif text-[56px] font-[400] leading-none text-[#c4522a]">02</span>
                <StepCard icon={<Building2 size={20} />} title="Employer Reviews" description="Your employer reviews and approves according to their defined policy." />
              </div>

              {/* Card 03 — bottom-left */}
              <div className="absolute" style={{ left: 0, top: 310, width: "47%" }}>
                <span className="font-serif text-[56px] font-[400] leading-none text-[#c4522a]">03</span>
                <StepCard icon={<Wallet size={20} />} title="Funds Disbursed" description="Approved funds are transferred to your account securely within 24 hours." />
              </div>

              {/* Card 04 — bottom-right, pushed down slightly */}
              <div className="absolute" style={{ right: 0, top: 390, width: "47%" }}>
                <span className="font-serif text-[56px] font-[400] leading-none text-[#c4522a]">04</span>
                <StepCard icon={<CalendarDays size={20} />} title="Auto Repayment" description="Repayment happens automatically from your next salary. No action needed." />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave → Benefits white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full" style={{ height: 70 }}>
          <path d="M0,55 C480,0 960,70 1440,20 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function StepCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="mt-3 rounded-2xl border border-[#f1e8e3] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#fde8d8] hover:shadow-warm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf3ee] text-[#c4522a]">
        {icon}
      </div>
      <h3 className="mt-4 text-[15px] font-[600] text-[#1c1209]">{title}</h3>
      <p className="mt-2 text-[13px] leading-[1.7] text-[#6b5e53]">{description}</p>
    </div>
  );
}

function Bullet({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#fdf3ee] text-[#c4522a]">
        {icon}
      </div>
      <div>
        <p className="text-[13px] font-[700] text-[#1c1209]">{title}</p>
        <p className="mt-0.5 text-[12px] leading-[1.6] text-[#6b5e53]">{description}</p>
      </div>
    </div>
  );
}
