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
    <footer className="bg-white text-slate-700 border-t border-slate-200">
      {/* Pre-Footer Global CTA Strip */}
      <div className="bg-white border-b border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#198754] font-semibold text-xs uppercase tracking-widest">
              Need Tailored Formulations or Bulk Supply?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-montserrat mt-1">
              Ready to Upgrade Your Industrial Chemistry Partner?
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Talk to our chemical engineers and technical specialists today for
              custom shade matching, samples, and competitive quotes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-lg bg-[#198754] hover:bg-[#146c43] text-white font-semibold text-center transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center space-x-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918800642621"
              className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-semibold text-center transition-colors border border-slate-300 flex items-center justify-center space-x-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#198754]" />
              <span>+91 8800642621</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <div className="p-2.5 bg-white  inline-block">
              <img
                src="/logo/logo.png"
                alt="Chemfarm International Logo"
                className="h-11 w-auto object-contain"
              />
            </div>
          </Link>

          <p className="text-sm text-slate-600 leading-relaxed max-w-md">
            Established in 1992, Chemfarm International is a trusted leader in
            manufacturing high-grade Dyes, Pigments, Specialty Chemicals, and
            Industrial Ingredients. Serving Textile, Paper, Wood Panel, Water
            Treatment, and Pharmaceutical industries pan-India and globally.
          </p>

          <div className="pt-2 flex items-center space-x-6 text-xs text-slate-600">
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
          <h4 className="text-slate-900 font-semibold text-sm font-montserrat uppercase tracking-wider mb-4 border-l-2 border-[#198754] pl-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-[#198754] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#198754] transition-colors">
                About Us & Our Story
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#198754] transition-colors">
                Products Catalogue
              </Link>
            </li>
            <li>
              <Link href="/quality" className="hover:text-[#198754] transition-colors">
                Quality & Certifications
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#198754] transition-colors">
                Contact & Office Locations
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Industries We Serve */}
        <div>
          <h4 className="text-slate-900 font-semibold text-sm font-montserrat uppercase tracking-wider mb-4 border-l-2 border-[#0077B6] pl-2">
            Industries We Serve
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {Object.values(INDUSTRIES_DATA).map((ind) => (
              <li key={ind.id}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="hover:text-[#198754] transition-colors"
                >
                  {ind.name} Industry Solutions
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info & Newsletter */}
        <div className="space-y-4">
          <h4 className="text-slate-900 font-semibold text-sm font-montserrat uppercase tracking-wider border-l-2 border-[#DAA520] pl-2">
            Head Office
          </h4>

          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-[#DAA520] flex-shrink-0 mt-0.5" />
              <span>DLF Palm Court, 704, 7th Floor, Sector 16, MG Road, Industrial Development Area, Near Bata Chowk, Gurugram, Haryana 122007, India</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-[#198754] flex-shrink-0" />
              <a href="tel:+918800642621" className="hover:underline">+91 8800642621</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
              <a href="mailto:sales@chemfarminternational.com" className="hover:underline">sales@chemfarminternational.com</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
            </li>
          </ul>

          <div className="pt-2">
            <label className="block text-xs text-slate-700 mb-1.5 font-medium">
              Subscribe to Technical Bulletins
            </label>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full bg-white border border-slate-300 text-xs text-slate-800 px-3 py-2 rounded-l-md focus:outline-none focus:border-[#198754]"
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
      <div className="bg-slate-200/70 border-t border-slate-300 py-6 px-4 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            © {new Date().getFullYear()} Chemfarm International. Turning Chemistry
            Into Colours Since 1992. All rights reserved.
          </p>
          <div className="flex space-x-4 text-slate-600">
            <Link href="/quality" className="hover:text-[#198754]">
              Quality Assurance
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#198754]">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#198754]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
