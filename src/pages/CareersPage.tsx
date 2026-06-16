import { ArrowRight, Clock, TrendingUp, Users, Zap } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const roles = [
  {
    name: "Engineering",
    desc: "Build scalable systems that power seamless, secure financial experiences.",
  },
  {
    name: "Design",
    desc: "Craft intuitive experiences that make financial services simple and human.",
  },
  {
    name: "Operations",
    desc: "Drive efficiency and trust across the systems that keep MobPae moving.",
  },
];

const benefits = [
  {
    icon: <Clock size={20} />,
    title: "Flexible Hours",
    desc: "We care about outcomes, not where or when you work. Balance fuels brilliance.",
  },
  {
    icon: <Zap size={20} />,
    title: "Equity for All",
    desc: "Every team member owns a piece of the mission. We win together.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Growth Mindset",
    desc: "Learn, build, ship, repeat. We invest in your growth at every stage.",
  },
  {
    icon: <Users size={20} />,
    title: "Real Impact",
    desc: "Your work improves lives and expands access to the future of finance.",
  },
];

export function CareersPage() {
  return (
    <main className="min-h-screen bg-[#faf6f1]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#c4522a]">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#a8411f]/60 -translate-x-1/3 -translate-y-1/3" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#fde8d8]/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px]">

            {/* Left */}
            <div>
              <div className="mb-6">
                <p className="text-[13px] font-[700] text-white/70 tracking-[0.06em]">MobPae</p>
                <p className="text-[13px] text-white/55 mt-0.5">Payments that move people forward.</p>
                <div className="mt-3 h-0.5 w-8 bg-white/40" />
              </div>

              <h1
                className="font-[800] leading-[0.9] tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
              >
                Join the<br />Mission
              </h1>

              <p className="mt-7 max-w-[400px] text-[15px] leading-[1.8] text-white/75">
                We're building the financial infrastructure for emerging markets — inclusive, instant, and intelligent.
              </p>

              <a
                href="#roles"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 text-[14px] font-[600] text-white transition hover:bg-white/25 border border-white/20"
              >
                <ArrowRight size={16} />
                Be part of what's next.
              </a>
            </div>

            {/* Right: team photo placeholder */}
            <div className="flex items-center justify-center">
              <div
                className="relative h-[340px] w-[340px] rounded-full overflow-hidden"
                style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.25)" }}
              >
                {/* Placeholder gradient until real photo is added */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(145deg, #d95a2e 0%, #8b3015 60%, #5a1f0c 100%)" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Users size={28} className="text-white/60" />
                  </div>
                  <p className="text-[12px] text-white/50 font-[500]">Team photo coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="roles" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-[#9e8f85] mb-10">Open Roles</p>

          <div className="grid gap-5 md:grid-cols-3">
            {roles.map((r) => (
              <div
                key={r.name}
                className="group rounded-2xl border border-[#f1e8e3] bg-[#faf6f1] p-7 transition-all hover:-translate-y-1 hover:border-[#fde8d8] hover:shadow-warm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#c4522a] flex-shrink-0" />
                  <h3 className="text-[18px] font-[700] text-[#1c1209]">{r.name}</h3>
                </div>
                <p className="text-[13.5px] leading-[1.75] text-[#6b5e53]">{r.desc}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-[600] text-[#c4522a] group-hover:gap-2.5 transition-all"
                >
                  Explore {r.name} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MobPae ── */}
      <section className="bg-[#faf6f1] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start mb-14">
            <div>
              <h2
                className="font-[800] leading-[0.95] tracking-[-0.02em] text-[#1c1209]"
                style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
              >
                Why MobPae
              </h2>
            </div>
            <p className="text-[14.5px] leading-[1.8] text-[#6b5e53] lg:pt-2">
              We back builders, empower ownership, and move fast with purpose. Here's what you can expect.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[#f1e8e3] bg-white p-6"
                style={{ boxShadow: "0 2px 16px rgba(196,82,42,0.05)" }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c4522a] text-white">
                  {b.icon}
                </div>
                <h3 className="text-[15px] font-[700] text-[#1c1209] mb-2">{b.title}</h3>
                <p className="text-[13px] leading-[1.75] text-[#6b5e53]">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-2xl px-10 py-4 text-[15px] font-[700] text-white transition-all hover:-translate-y-px"
              style={{
                background: "linear-gradient(135deg, #c4522a, #d95a2e)",
                boxShadow: "0 10px 32px rgba(196,82,42,0.35)",
              }}
            >
              View All Openings <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
