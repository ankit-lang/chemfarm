import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Headphones,
  Truck,
  FileCheck,
  ArrowRight,
  FlaskConical,
} from "lucide-react";

export default function QualityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#012B37] text-white font-ubuntu">
      {/* Banner */}
      <section className="bg-[#02252F] text-white py-16 lg:py-24 border-b border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 font-ubuntu">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            ISO & Quality Control Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-ubuntu text-white">
            Quality You Can Rely On
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-ubuntu">
            Strict quality control across manufacturing, sourcing and supply.
          </p>
        </div>
      </section>

      {/* 4 Quality Content Blocks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-ubuntu">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-ubuntu">
          <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 shadow-xl hover:border-white transition-all space-y-4 font-ubuntu">
            <div className="w-12 h-12 rounded-xl bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-ubuntu">
              Quality Assured
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-ubuntu">
              Consistent performance through strict quality control, spectroscopic analysis, and batch testing.
            </p>
          </div>

          <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 shadow-xl hover:border-white transition-all space-y-4 font-ubuntu">
            <div className="w-12 h-12 rounded-xl bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-ubuntu">
              Technical Expertise
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-ubuntu">
              An experienced team of chemical engineers providing ongoing technical support and shade formulation matching.
            </p>
          </div>

          <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 shadow-xl hover:border-white transition-all space-y-4 font-ubuntu">
            <div className="w-12 h-12 rounded-xl bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-ubuntu">
              Reliable Supply
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-ubuntu">
              On-time delivery backed by a strong supply chain network, pan-India warehouses, and export logistics.
            </p>
          </div>

          <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 shadow-xl hover:border-white transition-all space-y-4 font-ubuntu">
            <div className="w-12 h-12 rounded-xl bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-ubuntu">
              Customer Focused
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-ubuntu">
              Customised solutions built around client requirements with flexible SKUs and responsive account managers.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-[#02252F] text-white py-20 border-y border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-ubuntu">
          <div className="text-center max-w-3xl mx-auto space-y-3 font-ubuntu">
            <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
              Compliance & Accreditations
            </span>
            <h2 className="text-3xl font-bold font-ubuntu text-white">
              Certifications & Standards
            </h2>
            <p className="text-slate-300 text-sm font-ubuntu">
              Our facilities and chemical products adhere to international compliance framework requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-ubuntu">
            <div className="bg-[#033645] border border-white/40 rounded-xl p-6 text-center space-y-3 shadow-xl font-ubuntu">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white font-ubuntu">
                ISO 9001:2015
              </h4>
              <p className="text-xs text-slate-300 font-ubuntu">
                Quality Management System certified for manufacturing and supply consistency.
              </p>
            </div>

            <div className="bg-[#033645] border border-white/40 rounded-xl p-6 text-center space-y-3 shadow-xl font-ubuntu">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white font-ubuntu">
                REACH Compliant
              </h4>
              <p className="text-xs text-slate-300 font-ubuntu">
                Adherence to European chemical export standards and environmental guidelines.
              </p>
            </div>

            <div className="bg-[#033645] border border-white/40 rounded-xl p-6 text-center space-y-3 shadow-xl font-ubuntu">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-ubuntu">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white font-ubuntu">
                Lab Batch Testing
              </h4>
              <p className="text-xs text-slate-300 font-ubuntu">
                Every dispatch is accompanied by a Certificate of Analysis (COA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center space-y-4 font-ubuntu">
        <h3 className="text-2xl font-bold font-ubuntu text-white">
          Require Technical Documentation or COA Samples?
        </h3>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full btn-gold-teal-gradient border border-white/40 text-white font-bold text-sm shadow-xl font-ubuntu hover:scale-105 transition-all"
        >
          <span>Contact Quality Assurance Team</span>
          <ArrowRight className="w-4 h-4 text-[#facc15]" />
        </Link>
      </section>
    </div>
  );
}
