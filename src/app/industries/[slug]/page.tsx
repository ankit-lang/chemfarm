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
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-emerald-50/20 text-slate-900 py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#198754]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#B8860B] uppercase tracking-wider">
            <Link href="/industries" className="hover:underline">
              Industries
            </Link>
            <span>/</span>
            <span>{industry.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat leading-tight text-slate-900">
            {industry.bannerTitle}
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            {industry.bannerSub}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-[#198754] font-bold text-xs uppercase tracking-widest">
            Chemfarm Specialty Portfolio
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-montserrat">
            Our Solutions for {industry.name}
          </h2>
          <p className="text-slate-600 text-sm">
            High-grade chemicals engineered for optimal efficiency and shade durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-[#198754] transition-all space-y-3 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#198754] flex items-center justify-center font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                {sol.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sol.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className="bg-slate-100 text-slate-900 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#198754] font-bold text-xs uppercase tracking-widest">
              Performance Breakdown
            </span>
            <h2 className="text-3xl font-bold font-montserrat text-slate-900">
              Technical Overview & Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.detailSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm"
              >
                <div className="flex items-center space-x-3 text-[#198754]">
                  <FlaskConical className="w-6 h-6" />
                  <h3 className="text-xl font-bold font-montserrat text-slate-900">
                    {sec.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sec.content}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs text-[#B8860B]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>QC Batch Verified • Custom Shade Formulation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat">
          Looking for Reliable {industry.name} Chemistry?
        </h3>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          Request a quote and our team of chemical engineers will get in touch with product specifications, samples, and pricing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link
            href={`/contact?industry=${encodeURIComponent(industry.name)}`}
            className="px-7 py-3.5 rounded-lg bg-[#198754] hover:bg-[#146c43] text-white font-semibold text-sm shadow-md flex items-center justify-center space-x-2"
          >
            <span>Request a Quote for {industry.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+918800642621"
            className="px-7 py-3.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm shadow-sm flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#B8860B]" />
            <span>+91 8800642621</span>
          </a>
        </div>
      </section>
    </div>
  );
}
