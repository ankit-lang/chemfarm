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
  ArrowRight,
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
    <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 shadow-xl font-ubuntu">
      <h3 className="text-2xl font-bold text-white font-ubuntu mb-6">
        Request a Quote / Business Enquiry
      </h3>

      {submitted ? (
        <div className="bg-[#02252F] border border-white/40 rounded-xl p-8 text-center space-y-4 font-ubuntu">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#015863] border border-white/40 text-white flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white font-ubuntu">
            Thank You for Contacting Chemfarm!
          </h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto font-ubuntu">
            Your enquiry has been assigned to our technical sales engineering team.
            We will get back to you within 24 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 bg-white text-slate-950 rounded-md text-xs font-bold font-ubuntu shadow-md"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-ubuntu">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1 font-ubuntu">
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
                className="w-full bg-[#02252F] border border-white/40 text-white placeholder-slate-400 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-white font-ubuntu"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1 font-ubuntu">
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
                className="w-full bg-[#02252F] border border-white/40 text-white placeholder-slate-400 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-white font-ubuntu"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1 font-ubuntu">
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
                className="w-full bg-[#02252F] border border-white/40 text-white placeholder-slate-400 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-white font-ubuntu"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1 font-ubuntu">
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
                className="w-full bg-[#02252F] border border-white/40 text-white placeholder-slate-400 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-white font-ubuntu"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1 font-ubuntu">
              Select Industry Vertical *
            </label>
            <select
              value={formData.industry}
              onChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
              className="w-full bg-[#02252F] border border-white/40 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-white font-ubuntu"
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
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1 font-ubuntu">
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
              className="w-full bg-[#02252F] border border-white/40 text-white placeholder-slate-400 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-white font-ubuntu"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl btn-gold-teal-gradient border border-white/40 text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center space-x-2 font-ubuntu hover:scale-[1.01]"
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
    <div className="flex flex-col min-h-screen bg-[#012B37] text-white font-ubuntu">
      {/* Banner */}
      <section className="bg-[#02252F] text-white py-16 lg:py-20 border-b border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Enquiries & Supply Assistance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-ubuntu text-white">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed font-ubuntu">
            Talk to our team about your requirement, or request a customized quote.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 font-ubuntu">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 font-ubuntu">
          <Suspense fallback={<div className="p-8 text-center text-white">Loading enquiry form...</div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Right Column: Contact Details Panel */}
        <div className="lg:col-span-5 space-y-8 font-ubuntu">
          <div className="bg-[#033645] border border-white/40 text-white rounded-2xl p-8 space-y-6 shadow-xl font-ubuntu">
            <h3 className="text-xl font-bold font-ubuntu border-b border-white/40 pb-4 text-white">
              Chemfarm International Head Office
            </h3>

            <div className="space-y-4 text-sm text-slate-200 font-ubuntu">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Head Office Address</strong>
                  <p className="leading-relaxed">
                    DLF Palm Court, 704, 7th Floor,<br />
                    Sector 16, MG Road, Industrial Development Area,<br />
                    Near Bata Chowk, Gurugram, Haryana 122007, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Phone Support</strong>
                  <p className="space-x-2">
                    <a href="tel:+918800642621" className="hover:text-white transition-colors">+91 8800642621</a>
                    <span>,</span>
                    <a href="tel:+919871450429" className="hover:text-white transition-colors">+91 9871450429</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Email Enquiries</strong>
                  <a href="mailto:sales@chemfarm-international.com" className="hover:underline hover:text-white">sales@chemfarm-international.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Website</strong>
                  <a href="https://www.chemfarminternational.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">www.chemfarminternational.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Business Hours</strong>
                  <p>Monday - Saturday: 9:00 AM - 6:30 PM (IST)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/40 grid grid-cols-2 gap-3 text-center text-xs font-ubuntu">
              <div className="p-3 rounded-lg bg-[#02252F] border border-white/40">
                <Building2 className="w-4 h-4 mx-auto text-white mb-1" />
                <span className="text-white font-bold">Pan-India Warehouses</span>
              </div>
              <div className="p-3 rounded-lg bg-[#02252F] border border-white/40">
                <Globe2 className="w-4 h-4 mx-auto text-white mb-1" />
                <span className="text-white font-bold">Export Desk Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIND US LOCATION MAP SECTION (Directly Above Footer) */}
      <section className="py-20 bg-[#012B37] text-white border-t border-white/40 px-4 sm:px-6 lg:px-8 font-ubuntu">
        <div className="max-w-5xl mx-auto space-y-8 text-center font-ubuntu">
          <div className="inline-block bg-[#033645] border border-white/40 text-white px-8 py-2.5 rounded-full shadow-lg font-ubuntu">
            <span className="font-ubuntu text-lg sm:text-xl font-bold tracking-wide">Find Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-ubuntu text-white tracking-tight">
            Chemfarm International
          </h2>

          <div className="relative rounded-3xl overflow-hidden border border-white/40 shadow-2xl bg-[#033645] max-w-4xl mx-auto">
            <iframe
              title="Chemfarm International Location Map"
              src="https://maps.google.com/maps?q=28.4724529,77.0548273&hl=en&z=14&output=embed"
              className="w-full h-[360px] sm:h-[420px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-5 right-5 z-10">
              <a
                href="https://www.google.com/maps/dir/28.6039544,77.0905357/Chemfarm+International,+7th+floor,+DLF,+Palm+Court,+704,+Mehrauli-Gurgaon+Rd,+Industrial+Development+Area,+Sector+16,+Gurugram,+Haryana+122007/@28.5365113,77.0035152,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x390d193da2150af3:0x4ee6ad974398ab3f!2m2!1d77.0548273!2d28.4724529!3e9?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#012B37]/90 hover:bg-[#033645] border border-white/40 text-white font-ubuntu text-sm font-bold tracking-wider uppercase shadow-xl backdrop-blur-md transition-all flex items-center space-x-2"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
