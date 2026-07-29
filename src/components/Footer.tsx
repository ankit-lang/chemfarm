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
import SpecularButton from "./SpecularButton";

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
    <footer className="bg-[#012B37] text-white border-t border-white/40 font-ubuntu">
      {/* Pre-Footer Global CTA Strip */}
      <div className="bg-[#02252F] border-b border-white/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
              Need Tailored Formulations or Bulk Supply?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-ubuntu mt-1">
              Ready to Upgrade Your Industrial Chemistry Partner?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl font-ubuntu">
              Talk to our chemical engineers and technical specialists today for
              custom shade matching, samples, and competitive quotes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full md:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <SpecularButton
                size="md"
                bgGradient="linear-gradient(110deg, #444517 0%, #094f48 18%, #015863 50%, #007686 80%, #008c9d 100%)"
                lineColor="rgba(255, 255, 255, 0.4)"
                baseColor="#015863"
                textColor="#ffffff"
                radius={999}
                autoAnimate
                className="font-medium shadow-xl font-ubuntu w-full sm:w-auto justify-center"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#facc15]" />
              </SpecularButton>
            </Link>
            <a href="tel:+918800642621" className="w-full sm:w-auto">
              <SpecularButton
                size="md"
                bgGradient="linear-gradient(110deg, rgba(68, 69, 23, 0.5) 0%, rgba(9, 79, 72, 0.6) 18%, rgba(1, 88, 99, 0.6) 50%, rgba(0, 118, 134, 0.6) 80%, rgba(0, 140, 157, 0.6) 100%)"
                blur={12}
                lineColor="rgba(255, 255, 255, 0.4)"
                baseColor="#02252F"
                textColor="#ffffff"
                radius={999}
                autoAnimate
                className="font-medium border border-white/40 shadow-lg font-ubuntu w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 text-[#facc15]" />
                <span>+91 8800642621</span>
              </SpecularButton>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center md:text-left">
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
          <Link href="/" className="inline-block group">
            <div className="px-3.5 py-2 bg-white rounded-xl shadow-md border border-white/40 inline-block group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo/logo.png"
                alt="Chemfarm International Logo"
                className="h-10 sm:h-11 w-auto object-contain mx-auto md:mx-0"
              />
            </div>
          </Link>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto md:mx-0 font-ubuntu">
            Established in 1992, Chemfarm International is a trusted leader in
            manufacturing high-grade Dyes, Pigments, Specialty Chemicals, and
            Industrial Ingredients. Serving Textile, Paper, Wood Panel, Water
            Treatment, and Pharmaceutical industries pan-India and globally.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 font-ubuntu">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Globe className="w-4 h-4 text-white" />
              <span>Global Exporter</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-white" />
              <span>Since 1992</span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold text-sm font-ubuntu uppercase tracking-wider mb-4 border-b-2 md:border-b-0 md:border-l-2 border-white/40 pb-1 md:pb-0 md:pl-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300 flex flex-col items-center md:items-start font-ubuntu">
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
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold text-sm font-ubuntu uppercase tracking-wider mb-4 border-b-2 md:border-b-0 md:border-l-2 border-white/40 pb-1 md:pb-0 md:pl-2">
            Industries We Serve
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300 flex flex-col items-center md:items-start font-ubuntu">
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
        <div className="space-y-4 flex flex-col items-center md:items-start w-full">
          <h4 className="text-white font-semibold text-sm font-ubuntu uppercase tracking-wider border-b-2 md:border-b-0 md:border-l-2 border-white/40 pb-1 md:pb-0 md:pl-2">
            Head Office
          </h4>

          <ul className="space-y-3 text-xs text-slate-300 flex flex-col items-center md:items-start font-ubuntu">
            <li className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-2.5 text-center md:text-left">
              <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <span>DLF Palm Court, 704, 7th Floor, Sector 16, MG Road, Industrial Development Area, Near Bata Chowk, Gurugram, Haryana 122007, India</span>
            </li>
            <li className="flex items-center space-x-2.5 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-white flex-shrink-0" />
              <div className="space-x-1">
                <a href="tel:+918800642621" className="hover:underline hover:text-white">+91 8800642621</a>
                <span>,</span>
                <a href="tel:+919871450429" className="hover:underline hover:text-white">+91 9871450429</a>
              </div>
            </li>
            <li className="flex items-center space-x-2.5 justify-center md:justify-start">
              <Mail className="w-4 h-4 text-white flex-shrink-0" />
              <a href="mailto:sales@chemfarm-international.com" className="hover:underline hover:text-white">sales@chemfarm-international.com</a>
            </li>
            <li className="flex items-center space-x-2.5 justify-center md:justify-start">
              <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
            </li>
          </ul>

          <div className="pt-2 w-full max-w-xs md:max-w-none font-ubuntu">
            <label className="block text-xs text-slate-300 mb-1.5 font-medium text-center md:text-left">
              Subscribe to Technical Bulletins
            </label>
            <form onSubmit={handleSubscribe} className="flex justify-center">
              <input
                type="email"
                placeholder="Your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full bg-[#033645] border border-white/40 text-xs text-white placeholder-slate-400 px-3 py-2 rounded-l-md focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-[#033645] hover:bg-[#02252F] text-white px-3.5 py-2 rounded-r-md transition-colors flex items-center justify-center border border-white/40"
                title="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-white mt-1 text-center md:text-left font-medium">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#02252F] border-t border-white/40 py-6 px-4 text-center text-xs text-slate-400 font-ubuntu">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Chemfarm International. Turning Chemistry
            Into Colours Since 1992. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-slate-400 font-ubuntu">
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
