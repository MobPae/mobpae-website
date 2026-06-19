import { ArrowRight, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <SEO
        title="Page Not Found"
        description="The MobPae page you are looking for could not be found."
        path="/404"
      />
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-200/70 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-24 h-[460px] w-[460px] rounded-full bg-cyan-100/80 blur-[110px]" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-6">
          <div className="flex h-18 w-18 h-[72px] w-[72px] items-center justify-center rounded-[28px] bg-slate-950 text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)]">
            <SearchX size={30} />
          </div>
          <p className="mt-8 text-[12px] font-[900] uppercase tracking-[0.22em] text-emerald-700">404</p>
          <h1 className="mt-4 max-w-3xl text-[48px] font-[900] leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[76px]">
            This page moved out of payroll.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-slate-600">
            The page you are looking for does not exist or may have been moved. Head back home or book a demo with MobPae.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-[14px] font-[900] text-white transition hover:-translate-y-1 hover:bg-emerald-700">
              <Home size={16} /> Go home
            </Link>
            <Link to="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/86 px-6 text-[14px] font-[900] text-slate-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:text-emerald-800">
              Book demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
