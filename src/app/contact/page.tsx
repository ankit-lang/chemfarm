"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Globe2,
} from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialIndustry = searchParams.get("industry") || "";
  const initialProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: initialIndustry || "Textile",
    message: initialProduct
      ? `Enquiry regarding ${initialProduct} specifications and pricing.`
      : "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-slate-900 font-montserrat mb-6">
        Request a Quote / Business Enquiry
      </h3>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#198754] text-white flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 font-montserrat">
            Thank You for Contacting Chemfarm!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your enquiry has been assigned to our technical sales engineering team.
            We will get back to you within 24 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 bg-slate-900 text-white rounded-md text-xs font-bold"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#198754]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Company / Organization Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vanguard Textiles"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#198754]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#198754]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#198754]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Select Industry Vertical *
            </label>
            <select
              value={formData.industry}
              onChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#198754]"
            >
              <option value="Textile">Textile Industry</option>
              <option value="Paper">Paper Industry</option>
              <option value="Wooden">Wooden Industry (MDF & Panels)</option>
              <option value="Water">Water Treatment</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Other">Other Industrial Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Requirement / Message *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Describe your dye, chemical, or raw material requirement, target specifications, quantity, etc."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#198754]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl btn-gold-teal-gradient border border-white/20 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>Submit Quote Request</span>
            <Send className="w-4 h-4 text-[#facc15]" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-emerald-50/20 text-slate-900 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[#B8860B] font-bold text-xs uppercase tracking-widest">
            Enquiries & Supply Assistance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-montserrat text-slate-900">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Talk to our team about your requirement, or request a customized quote.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-8 text-center">Loading enquiry form...</div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Right Column: Contact Details Panel */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-slate-200 text-slate-900 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold font-montserrat border-b border-slate-100 pb-4 text-[#B8860B]">
              Chemfarm International Head Office
            </h3>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Head Office Address</strong>
                  <p className="leading-relaxed">
                    DLF Palm Court, 704, 7th Floor,<br />
                    Sector 16, MG Road, Industrial Development Area,<br />
                    Near Bata Chowk, Gurugram, Haryana 122007, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#198754] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Phone Support</strong>
                  <p className="space-x-2">
                    <a href="tel:+918800642621" className="hover:text-[#198754] transition-colors">+91 8800642621</a>
                    <span>,</span>
                    <a href="tel:+919871450429" className="hover:text-[#198754] transition-colors">+91 9871450429</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#0077B6] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Email Enquiries</strong>
                  <a href="mailto:sales@chemfarm-international.com" className="hover:text-[#198754] transition-colors">sales@chemfarm-international.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Website</strong>
                  <a href="https://www.chemfarminternational.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#198754] transition-colors">www.chemfarminternational.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Business Hours</strong>
                  <p>Monday - Saturday: 9:00 AM - 6:30 PM (IST)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Building2 className="w-4 h-4 mx-auto text-[#198754] mb-1" />
                <span className="text-slate-700">Pan-India Warehouses</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Globe2 className="w-4 h-4 mx-auto text-[#0077B6] mb-1" />
                <span className="text-slate-700">Export Desk Active</span>
              </div>
            </div>
          </div>

          {/* Map Container Placeholder */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-slate-900 space-y-3 shadow-sm">
            <h4 className="font-bold font-montserrat text-sm text-slate-800 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#B8860B]" />
              <span>Location Map Preview</span>
            </h4>
            <div className="w-full h-48 bg-slate-50 rounded-lg flex flex-col items-center justify-center p-4 border border-slate-200 text-center">
              <Building2 className="w-8 h-8 text-[#198754] mb-2" />
              <p className="text-xs font-semibold text-slate-900">DLF Palm Court, 704, 7th Floor</p>
              <p className="text-[11px] text-slate-600 mt-1">Sector 16, MG Road, Gurugram, Haryana 122007</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
