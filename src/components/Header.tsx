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
        return <Shirt className="w-4 h-4 text-white" />;
      case "FileText":
        return <FileText className="w-4 h-4 text-white" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-white" />;
      case "Droplets":
        return <Droplets className="w-4 h-4 text-white" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-white" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-white" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 font-ubuntu">
      {/* Top Banner Bar */}
      <div className="bg-[#094f48] text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span>Est. 1992 | Pan-India & Global Export Supplier</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-slate-200">
              ISO Quality Assured Dyes & Specialty Chemicals
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:sales@chemfarm-international.com"
              className="text-white hover:underline transition-colors"
            >
              sales@chemfarm-international.com
            </a>
            <span className="text-white/30">|</span>
            <a
              href="tel:+918800642621"
              className="text-white font-medium hover:underline transition-colors"
            >
              +91 8800642621
            </a>
            <span className="text-white/30">,</span>
            <a
              href="tel:+919871450429"
              className="text-white font-medium hover:underline transition-colors"
            >
              +91 9871450429
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Main with Rich Green Menu Background */}
      <nav
        className={`w-full bg-[#015863] border-b border-white/20 text-white transition-all duration-300 font-ubuntu ${isScrolled ? "py-3 shadow-xl" : "py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1">
            <div className="bg-white px-3 py-1.5 shadow-md border border-white/40 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <img
                src="/logo/logo.png"
                alt="Chemfarm International Logo"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 font-ubuntu">
            <Link
              href="/"
              className={`text-sm font-medium font-ubuntu transition-colors ${pathname === "/"
                  ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                  : "text-white/90 hover:text-white"
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium font-ubuntu transition-colors ${pathname === "/about"
                  ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                  : "text-white/90 hover:text-white"
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
                className={`text-sm font-medium font-ubuntu transition-colors flex items-center space-x-1 ${pathname?.startsWith("/products")
                    ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {productsOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 font-ubuntu">
                  <div className="bg-[#015863] border border-white/20 rounded-xl shadow-2xl p-2 backdrop-blur-xl text-white">
                    <Link
                      href="/products"
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 mb-1 hover:bg-[#094f48] rounded-md font-ubuntu"
                    >
                      All Product Categories →
                    </Link>
                    <Link
                      href="/products#dyes"
                      className="block px-3 py-2 text-sm text-white/90 hover:bg-[#094f48] hover:text-white rounded-lg transition-colors font-ubuntu"
                    >
                      Dyes
                    </Link>
                    <Link
                      href="/products#pigments"
                      className="block px-3 py-2 text-sm text-white/90 hover:bg-[#094f48] hover:text-white rounded-lg transition-colors font-ubuntu"
                    >
                      Pigments
                    </Link>
                    <Link
                      href="/products#specialty-chemicals"
                      className="block px-3 py-2 text-sm text-white/90 hover:bg-[#094f48] hover:text-white rounded-lg transition-colors font-ubuntu"
                    >
                      Specialty Chemicals
                    </Link>
                    <Link
                      href="/products#industrial-ingredients"
                      className="block px-3 py-2 text-sm text-white/90 hover:bg-[#094f48] hover:text-white rounded-lg transition-colors font-ubuntu"
                    >
                      Industrial Ingredients
                    </Link>
                    <Link
                      href="/products#paper-chemicals"
                      className="block px-3 py-2 text-sm text-white/90 hover:bg-[#094f48] hover:text-white rounded-lg transition-colors font-ubuntu"
                    >
                      Paper Chemicals
                    </Link>
                    <Link
                      href="/products#textile-chemicals"
                      className="block px-3 py-2 text-sm text-white/90 hover:bg-[#094f48] hover:text-white rounded-lg transition-colors font-ubuntu"
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
                className={`text-sm font-medium font-ubuntu transition-colors flex items-center space-x-1 ${pathname?.startsWith("/industries")
                    ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                <span>Industries We Serve</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50 font-ubuntu">
                  <div className="bg-[#015863] border border-white/20 rounded-xl shadow-2xl p-2 backdrop-blur-xl space-y-1 text-white">
                    <Link
                      href="/industries"
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 mb-1 hover:bg-[#094f48] rounded-md font-ubuntu"
                    >
                      Industries Overview →
                    </Link>
                    {Object.values(INDUSTRIES_DATA).map((ind) => (
                      <Link
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-[#094f48] transition-colors group/item font-ubuntu"
                      >
                        <div className="p-2 rounded-md bg-[#094f48] border border-white/20 group-hover/item:border-white">
                          {getIndustryIcon(ind.iconName)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover/item:text-white transition-colors font-ubuntu">
                            {ind.name} Industry
                          </p>
                          <p className="text-xs text-slate-300 line-clamp-1 font-ubuntu">
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
              className={`text-sm font-medium font-ubuntu transition-colors ${pathname === "/quality"
                  ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                  : "text-white/90 hover:text-white"
                }`}
            >
              Quality
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium font-ubuntu transition-colors ${pathname === "/contact"
                  ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-white"
                  : "text-white/90 hover:text-white"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right CTA Actions */}
          <div className="hidden lg:flex items-center space-x-4 font-ubuntu">
            <Link
              href="/products"
              className="p-2 text-white/80 hover:text-white transition-colors"
              title="Search Dyes & Chemicals"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-sm text-white btn-gold-teal-gradient border border-white/40 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all font-ubuntu space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#facc15]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3 font-ubuntu">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full font-medium text-xs text-white btn-gold-teal-gradient border border-white/40 shadow-sm transition-all font-ubuntu space-x-1"
            >
              <span>Contact</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-slate-200 focus:outline-none"
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
          <div className="lg:hidden bg-[#015863] border-b border-white/20 text-white px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300 font-ubuntu">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold font-ubuntu text-white hover:text-slate-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold font-ubuntu text-white hover:text-slate-200"
            >
              About Chemfarm
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold font-ubuntu text-white hover:text-slate-200"
            >
              Products Catalogue
            </Link>

            <div className="pl-3 border-l-2 border-white/30 space-y-2 py-1 font-ubuntu">
              <p className="text-xs uppercase font-bold text-white tracking-wider font-ubuntu">
                Industries We Serve
              </p>
              {Object.values(INDUSTRIES_DATA).map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-200 hover:text-white font-ubuntu"
                >
                  • {ind.name} Industry
                </Link>
              ))}
            </div>

            <Link
              href="/quality"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold font-ubuntu text-white hover:text-slate-200"
            >
              Quality Policy & Assurance
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold font-ubuntu text-white hover:text-slate-200"
            >
              Contact & Enquiries
            </Link>

            <div className="pt-2 font-ubuntu">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-white btn-gold-teal-gradient border border-[#facc15]/70 font-ubuntu"
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
