import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#E4EAE7] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <BrandLogo
              className="mb-5"
              iconClassName="h-10 w-10"
              wordmarkClassName="text-[18px]"
            />
            <p className="max-w-[300px] text-[13.5px] leading-[1.8] text-[#667085]">
              Financial flexibility for employees. Complete visibility and
              control for employers.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-[12px] text-slate-400">
              <span>Made with</span>
              <Heart size={11} className="fill-red-400 text-red-400" />
              <span>in India</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-[#101828] mb-5">
              Explore
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <a
                href="/#why-mobpae"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Why MobPae
              </a>
              <a
                href="/for-employers"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                For Employers
              </a>
              <a
                href="/security"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Security
              </a>
              <a
                href="/contact"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Book Demo
              </a>
              <a
                href="/#how-it-works"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                How It Works
              </a>
              <a
                href="/#benefits"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Benefits
              </a>
              <a
                href="/#pricing"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Pricing
              </a>
              <a
                href="/#faq"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-[#101828] mb-5">
              Legal
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <a
                href="/privacy-policy"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="/careers"
                className="text-[#667085] transition hover:text-[#0F8F72]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-[#101828] mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:support@mobpae.com"
                className="flex items-center gap-3 text-[13.5px] text-[#667085] transition hover:text-[#0F8F72]"
              >
                <Mail size={14} className="text-[#0F8F72] flex-shrink-0" />
                support@mobpae.com
              </a>
              <a
                href="tel:+919227012145"
                className="flex items-center gap-3 text-[13.5px] text-[#667085] transition hover:text-[#0F8F72]"
              >
                <Phone size={14} className="text-[#0F8F72] flex-shrink-0" />
                +91 92270 12145
              </a>
              <div className="flex items-start gap-3 text-[13.5px] text-[#667085]">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-[#0F8F72]"
                />
                <span>Gujarat, Ahmedabad - 382470</span>
              </div>
              <a
                href="https://www.linkedin.com/company/mobpae"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[13.5px] text-[#667085] transition hover:text-[#0F8F72]"
              >
                <span className="flex h-[15px] w-[15px] items-center justify-center rounded-[3px] bg-[#0F8F72] text-[8px] font-[600] text-white flex-shrink-0">
                  in
                </span>
                LinkedIn
              </a>
              <p className="max-w-[230px] text-[12.5px] leading-[1.7] text-slate-400">
                Employer-backed salary access for Indian workplaces.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E4EAE7] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-[12px] text-slate-400 md:flex-row">
            <p>© {new Date().getFullYear()} MobPae. All rights reserved.</p>
            <p>Employer-backed salary access for modern workplaces.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
