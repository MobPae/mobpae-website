import { ArrowRight, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <SEO
        title="Page Not Found"
        description="The MobPae page you are looking for could not be found."
        path="/404"
      />
      <Navbar />

      <section className="relative overflow-hidden">

        <div className="relative mx-auto flex min-h-[72vh] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-6">
          <div className="flex h-18 w-18 h-[72px] w-[72px] items-center justify-center rounded-[28px] bg-[#5B3CE3] text-white shadow-[0_22px_54px_rgba(15,23,42,0.24)]">
            <SearchX size={30} />
          </div>
          <p className="mt-8 text-[12px] font-[700] uppercase tracking-[0.22em] text-[#4E32CA]">404</p>
          <h1 className="mt-4 max-w-3xl text-[42px] font-[700] leading-[0.96] tracking-normal text-[#111827] sm:text-[64px]">
            This page moved out of payroll.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-[#6B7280]">
            The page you are looking for does not exist or may have been moved. Head back home or book a demo with MobPae.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#5B3CE3] px-6 text-[14px] font-[700] text-white transition hover:-translate-y-1 hover:bg-[#4E32CA]">
              <Home size={16} /> Go home
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white/86 px-6 text-[14px] font-[700] text-[#111827] shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:text-[#111827]">
              Book demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
