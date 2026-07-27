"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Shirt,
  FileText,
  Layers,
  Droplets,
  Activity,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Shirt":
        return <Shirt className="w-4 h-4 text-[#0077B6]" />;
      case "FileText":
        return <FileText className="w-4 h-4 text-[#198754]" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-[#DAA520]" />;
      case "Droplets":
        return <Droplets className="w-4 h-4 text-[#008080]" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-[#CD5C5C]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#198754]" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-100 text-slate-600 text-xs py-2 px-4 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#198754] animate-pulse"></span>
              <span>Est. 1992 | Pan-India & Global Export Supplier</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">
              ISO Quality Assured Dyes & Specialty Chemicals
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:sales@chemfarminternational.com"
              className="hover:text-[#198754] transition-colors"
            >
              sales@chemfarminternational.com
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="tel:+918800642621"
              className="hover:text-[#198754] font-medium transition-colors"
            >
              +91 8800642621
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Main */}
      <nav
        className={`w-full transition-all duration-300 glass-nav ${
          isScrolled ? "py-3 shadow-md bg-white/95 border-b border-slate-200" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-11 w-auto flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo/logo.png"
                alt="Chemfarm International Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-[#198754] font-semibold"
                  : "text-slate-700 hover:text-[#198754]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-[#198754] font-semibold"
                  : "text-slate-700 hover:text-[#198754]"
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                href="/products"
                className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                  pathname?.startsWith("/products")
                    ? "text-[#198754] font-semibold"
                    : "text-slate-700 hover:text-[#198754]"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {productsOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2 backdrop-blur-xl">
                    <Link
                      href="/products"
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#198754] border-b border-slate-100 mb-1 hover:bg-emerald-50 rounded-md"
                    >
                      All Product Categories →
                    </Link>
                    <Link
                      href="/products#dyes"
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#198754] rounded-lg transition-colors"
                    >
                      Dyes
                    </Link>
                    <Link
                      href="/products#pigments"
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#198754] rounded-lg transition-colors"
                    >
                      Pigments
                    </Link>
                    <Link
                      href="/products#specialty-chemicals"
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#198754] rounded-lg transition-colors"
                    >
                      Specialty Chemicals
                    </Link>
                    <Link
                      href="/products#industrial-ingredients"
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#198754] rounded-lg transition-colors"
                    >
                      Industrial Ingredients
                    </Link>
                    <Link
                      href="/products#paper-chemicals"
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#198754] rounded-lg transition-colors"
                    >
                      Paper Chemicals
                    </Link>
                    <Link
                      href="/products#textile-chemicals"
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#198754] rounded-lg transition-colors"
                    >
                      Textile Chemicals
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <Link
                href="/industries"
                className={`text-sm font-medium transition-colors flex items-center space-x-1 ${
                  pathname?.startsWith("/industries")
                    ? "text-[#198754] font-semibold"
                    : "text-slate-700 hover:text-[#198754]"
                }`}
              >
                <span>Industries We Serve</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2 backdrop-blur-xl space-y-1">
                    <Link
                      href="/industries"
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#198754] border-b border-slate-100 mb-1 hover:bg-emerald-50 rounded-md"
                    >
                      Industries Overview →
                    </Link>
                    {Object.values(INDUSTRIES_DATA).map((ind) => (
                      <Link
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="p-2 rounded-md bg-slate-100 border border-slate-200 group-hover/item:border-[#198754]/40">
                          {getIndustryIcon(ind.iconName)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover/item:text-[#198754] transition-colors">
                            {ind.name} Industry
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            {ind.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/quality"
              className={`text-sm font-medium transition-colors ${
                pathname === "/quality"
                  ? "text-[#198754] font-semibold"
                  : "text-slate-700 hover:text-[#198754]"
              }`}
            >
              Quality & Certifications
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-[#198754] font-semibold"
                  : "text-slate-700 hover:text-[#198754]"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right CTA Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/products"
              className="p-2 text-slate-600 hover:text-[#198754] transition-colors"
              title="Search Dyes & Chemicals"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#198754] hover:bg-[#146c43] shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#198754]"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-black focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-[#198754]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-[#198754]"
            >
              About Chemfarm
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-[#198754]"
            >
              Products Catalogue
            </Link>

            <div className="pl-3 border-l-2 border-slate-200 space-y-2 py-1">
              <p className="text-xs uppercase font-bold text-[#198754] tracking-wider">
                Industries We Serve
              </p>
              {Object.values(INDUSTRIES_DATA).map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-600 hover:text-[#198754]"
                >
                  • {ind.name} Industry
                </Link>
              ))}
            </div>

            <Link
              href="/quality"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-[#198754]"
            >
              Quality Policy & Assurance
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-[#198754]"
            >
              Contact & Enquiries
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-center font-semibold text-white bg-[#198754]"
              >
                Request a Custom Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
