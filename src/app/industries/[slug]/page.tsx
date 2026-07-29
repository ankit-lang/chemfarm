import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Phone,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/siteData";

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#012B37] text-white font-ubuntu">
      {/* Banner */}
      <section className="bg-[#02252F] text-white py-16 lg:py-24 border-b border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 font-ubuntu">
          <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider font-ubuntu">
            <Link href="/industries" className="hover:underline">
              Industries
            </Link>
            <span>/</span>
            <span>{industry.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-ubuntu leading-tight text-white">
            {industry.bannerTitle}
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed font-ubuntu">
            {industry.bannerSub}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-ubuntu">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 font-ubuntu">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Chemfarm Specialty Portfolio
          </span>
          <h2 className="text-3xl font-bold text-white font-ubuntu">
            Our Solutions for {industry.name}
          </h2>
          <p className="text-slate-300 text-sm font-ubuntu">
            High-grade chemicals engineered for optimal efficiency and shade durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-ubuntu">
          {industry.solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-[#033645] border border-white/40 rounded-xl p-6 shadow-xl hover:border-white transition-all space-y-3 hover:-translate-y-1 font-ubuntu"
            >
              <div className="w-10 h-10 rounded-lg bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-bold text-sm font-ubuntu">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-white font-ubuntu">
                {sol.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-ubuntu">
                {sol.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className="bg-[#02252F] text-white py-20 border-y border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-ubuntu">
          <div className="text-center max-w-3xl mx-auto space-y-2 font-ubuntu">
            <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
              Performance Breakdown
            </span>
            <h2 className="text-3xl font-bold font-ubuntu text-white">
              Technical Overview & Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-ubuntu">
            {industry.detailSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#033645] border border-white/40 rounded-2xl p-8 space-y-4 shadow-xl font-ubuntu"
              >
                <div className="flex items-center space-x-3 text-white font-ubuntu">
                  <FlaskConical className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold font-ubuntu text-white">
                    {sec.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-ubuntu">
                  {sec.content}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs text-slate-200 font-ubuntu">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>QC Batch Verified • Custom Shade Formulation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 font-ubuntu">
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-ubuntu">
          Looking for Reliable {industry.name} Chemistry?
        </h3>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto font-ubuntu">
          Request a quote and our team of chemical engineers will get in touch with product specifications, samples, and pricing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 font-ubuntu">
          <Link
            href={`/contact?industry=${encodeURIComponent(industry.name)}`}
            className="px-7 py-3.5 rounded-full btn-gold-teal-gradient border border-white/40 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 font-ubuntu hover:scale-105 transition-all"
          >
            <span>Request a Quote for {industry.name}</span>
            <ArrowRight className="w-4 h-4 text-[#facc15]" />
          </Link>
          <a
            href="tel:+918800642621"
            className="px-7 py-3.5 rounded-full bg-[#033645] border border-white/40 hover:border-white text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2 font-ubuntu transition-all"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>+91 8800642621</span>
          </a>
        </div>
      </section>
    </div>
  );
}
