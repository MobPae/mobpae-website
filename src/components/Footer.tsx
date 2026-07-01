import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="mt-24 rounded-t-[48px] bg-[#0F111A] text-white px-6">
      <div className="mx-auto max-w-7xl pt-24 pb-12">
        
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-20">
          <h2 className="text-[40px] md:text-[64px] font-[800] leading-[1.05] tracking-tight max-w-[600px]">
            Your Numbers Are Ready to Make Sense.
          </h2>
          <div className="flex flex-col items-start md:items-end gap-6 max-w-[300px] text-left md:text-right">
            <p className="text-[14px] text-[#8D90A3] leading-[1.6]">
              Step into clear, employer-backed salary access.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-[600] text-[#111827] transition-all hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Book Demo
            </a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/10 mb-16" />

        {/* 4-Column Layout */}
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                <img
                  src="/logo-icon.svg"
                  alt="MobPae Icon"
                  className="h-5 w-auto flex-shrink-0"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <img
                src="/logo-wordmark.svg"
                alt="MobPae"
                className="h-5 w-auto flex-shrink-0 brightness-0 invert"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="max-w-[300px] text-[13.5px] leading-[1.8] text-[#8D90A3]">
              Financial flexibility for employees. Complete visibility and
              control for employers.
            </p>
            <div className="mt-8 flex items-center gap-1.5 text-[12px] text-[#6B7280]">
              <span>Made with</span>
              <Heart size={11} className="fill-red-400 text-red-400" />
              <span>in India</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-white mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-4 text-[13.5px]">
              <a href="/#why-mobpae" className="text-[#8D90A3] transition hover:text-white">Why MobPae</a>
              <a href="/for-employers" className="text-[#8D90A3] transition hover:text-white">For Employers</a>
              <a href="/security" className="text-[#8D90A3] transition hover:text-white">Security</a>
              <a href="/#how-it-works" className="text-[#8D90A3] transition hover:text-white">How It Works</a>
              <a href="/#pricing" className="text-[#8D90A3] transition hover:text-white">Pricing</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-white mb-6">
              Legal
            </h4>
            <div className="flex flex-col gap-4 text-[13.5px]">
              <a href="/privacy-policy" className="text-[#8D90A3] transition hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-[#8D90A3] transition hover:text-white">Terms &amp; Conditions</a>
              <a href="/careers" className="text-[#8D90A3] transition hover:text-white">Careers</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-[0.15em] text-white mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:support@mobpae.com" className="flex items-center gap-3 text-[13.5px] text-[#8D90A3] transition hover:text-white">
                <Mail size={14} className="text-white/60 flex-shrink-0" />
                support@mobpae.com
              </a>
              <a href="tel:+919227012145" className="flex items-center gap-3 text-[13.5px] text-[#8D90A3] transition hover:text-white">
                <Phone size={14} className="text-white/60 flex-shrink-0" />
                +91 92270 12145
              </a>
              <div className="flex items-start gap-3 text-[13.5px] text-[#8D90A3]">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-white/60" />
                <span>Gujarat, Ahmedabad<br/>382470</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col items-center justify-center">
          <div className="text-center text-[12px] text-[#6B7280] leading-[1.6]">
            © {new Date().getFullYear()} MobPae.<br/>All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
