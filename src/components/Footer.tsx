import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E6EE] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <BrandLogo
              className="mb-5"
              iconClassName="h-10 w-10"
              wordmarkClassName="text-[18px]"
            />
            <p className="max-w-[300px] text-[13.5px] leading-[1.8] text-[#62657A]">
              Financial flexibility for employees. Complete visibility and
              control for employers.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-[12px] text-[#B7B9C7]">
              <span>Made with</span>
              <Heart size={11} className="fill-red-400 text-red-400" />
              <span>in India</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-[#191A2E] mb-5">
              Explore
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <a
                href="/#why-mobpae"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Why MobPae
              </a>
              <a
                href="/for-employers"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                For Employers
              </a>
              <a
                href="/security"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Security
              </a>
              <a
                href="/contact"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Book Demo
              </a>
              <a
                href="/#how-it-works"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                How It Works
              </a>
              <a
                href="/#benefits"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Benefits
              </a>
              <a
                href="/#pricing"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Pricing
              </a>
              <a
                href="/#faq"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-[#191A2E] mb-5">
              Legal
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <a
                href="/privacy-policy"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="/careers"
                className="text-[#62657A] transition hover:text-[#7679FF]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-[#191A2E] mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:support@mobpae.com"
                className="flex items-center gap-3 text-[13.5px] text-[#62657A] transition hover:text-[#7679FF]"
              >
                <Mail size={14} className="text-[#7679FF] flex-shrink-0" />
                support@mobpae.com
              </a>
              <a
                href="tel:+919227012145"
                className="flex items-center gap-3 text-[13.5px] text-[#62657A] transition hover:text-[#7679FF]"
              >
                <Phone size={14} className="text-[#7679FF] flex-shrink-0" />
                +91 92270 12145
              </a>
              <div className="flex items-start gap-3 text-[13.5px] text-[#62657A]">
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0 text-[#7679FF]"
                />
                <span>Gujarat, Ahmedabad - 382470</span>
              </div>
              <a
                href="https://www.linkedin.com/company/mobpae"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[13.5px] text-[#62657A] transition hover:text-[#7679FF]"
              >
                <span className="flex h-[15px] w-[15px] items-center justify-center rounded-[3px] bg-[#7679FF] text-[8px] font-[600] text-white flex-shrink-0">
                  in
                </span>
                LinkedIn
              </a>
              <p className="max-w-[230px] text-[12.5px] leading-[1.7] text-[#B7B9C7]">
                Employer-backed salary access for Indian workplaces.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E5E6EE] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-[12px] text-[#B7B9C7] md:flex-row">
            <p>© {new Date().getFullYear()} MobPae. All rights reserved.</p>
            <p>Employer-backed salary access for modern workplaces.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
