"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/siteData";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#050914] text-slate-300 border-t border-slate-800">
      {/* Pre-Footer Global CTA Strip */}
      <div className="bg-gradient-to-r from-[#071329] via-[#091e3d] to-[#071329] border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#DAA520] font-semibold text-xs uppercase tracking-widest">
              Need Tailored Formulations or Bulk Supply?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-montserrat mt-1">
              Ready to Upgrade Your Industrial Chemistry Partner?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Talk to our chemical engineers and technical specialists today for
              custom shade matching, samples, and competitive quotes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-lg bg-[#198754] hover:bg-[#146c43] text-white font-semibold text-center transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center space-x-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center transition-colors border border-slate-700 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#DAA520]" />
              <span>Talk to Our Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-700 p-1.5">
              <div className="grid grid-cols-2 gap-1 w-full h-full">
                <div className="bg-[#198754] rounded-sm"></div>
                <div className="bg-[#0077B6] rounded-sm"></div>
                <div className="bg-[#DAA520] rounded-sm"></div>
                <div className="bg-[#CD5C5C] rounded-sm"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-white tracking-wider uppercase font-montserrat">
              CHEM<span className="text-[#198754]">FARM</span> INTERNATIONAL
            </span>
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            Established in 1992, Chemfarm International is a trusted leader in
            manufacturing high-grade Dyes, Pigments, Specialty Chemicals, and
            Industrial Ingredients. Serving Textile, Paper, Wood Panel, Water
            Treatment, and Pharmaceutical industries pan-India and globally.
          </p>

          <div className="pt-2 flex items-center space-x-6 text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#198754]" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Globe className="w-4 h-4 text-[#0077B6]" />
              <span>Global Exporter</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-[#DAA520]" />
              <span>Since 1992</span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-white font-semibold text-sm font-montserrat uppercase tracking-wider mb-4 border-l-2 border-[#198754] pl-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us & Our Story
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition-colors">
                Products Catalogue
              </Link>
            </li>
            <li>
              <Link href="/quality" className="hover:text-white transition-colors">
                Quality & Certifications
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Office Locations
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Industries We Serve */}
        <div>
          <h4 className="text-white font-semibold text-sm font-montserrat uppercase tracking-wider mb-4 border-l-2 border-[#0077B6] pl-2">
            Industries We Serve
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {Object.values(INDUSTRIES_DATA).map((ind) => (
              <li key={ind.id}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {ind.name} Industry Solutions
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info & Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm font-montserrat uppercase tracking-wider border-l-2 border-[#DAA520] pl-2">
            Corporate Office
          </h4>

          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-[#DAA520] flex-shrink-0 mt-0.5" />
              <span>Chemfarm House, Industrial Zone, Gujarat / India</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-[#198754] flex-shrink-0" />
              <span>+91 98765 43210 / +91 22 1234 5678</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
              <span>info@chemfarm.com</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
            </li>
          </ul>

          <div className="pt-2">
            <label className="block text-xs text-slate-300 mb-1.5 font-medium">
              Subscribe to Technical Bulletins
            </label>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full bg-slate-900 border border-slate-700 text-xs text-white px-3 py-2 rounded-l-md focus:outline-none focus:border-[#198754]"
              />
              <button
                type="submit"
                className="bg-[#198754] hover:bg-[#146c43] text-white px-3 py-2 rounded-r-md transition-colors"
                title="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#198754] mt-1">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#03060f] border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            © {new Date().getFullYear()} Chemfarm International. Turning Chemistry
            Into Colours Since 1992. All rights reserved.
          </p>
          <div className="flex space-x-4 text-slate-400">
            <Link href="/quality" className="hover:text-white">
              Quality Assurance
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
