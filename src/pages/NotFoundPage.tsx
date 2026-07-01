import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#FBFCFF] text-[#0B1026]">
      <header className="border-b border-[#ECEEF6] bg-white/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" aria-label="MobPae home">
            <img
              src="/brand/mobpae-logo-horizontal.png"
              alt="MobPae - Beating Your Month-End Crunch"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link
            to="/#contact"
            className="hidden h-11 items-center justify-center rounded-xl bg-[#6C4CFF] px-6 text-[13px] font-[900] text-white shadow-[0_18px_44px_rgba(91,60,227,0.28)] sm:inline-flex"
          >
            Book a Demo
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-[72vh] max-w-[900px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12">
        <p className="text-[11px] font-[900] uppercase tracking-[0.24em] text-[#5B3CE3]">404</p>
        <h1 className="mt-5 text-[46px] font-[900] leading-[1.04] tracking-[-0.045em] text-[#0B1026] lg:text-[68px]">
          This page moved.
        </h1>
        <p className="mt-6 max-w-[560px] text-[16px] font-[500] leading-[1.85] text-[#667085]">
          The page you are looking for does not exist yet or may have been renamed.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex h-[52px] items-center gap-3 rounded-xl bg-[#6C4CFF] px-7 text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(91,60,227,0.28)]"
        >
          Go Home <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
