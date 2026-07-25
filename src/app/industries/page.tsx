import Link from "next/link";
import {
  Shirt,
  FileText,
  Layers,
  Droplets,
  Activity,
  ArrowRight,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/siteData";

export default function IndustriesOverviewPage() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Shirt":
        return <Shirt className="w-10 h-10 text-[#0077B6]" />;
      case "FileText":
        return <FileText className="w-10 h-10 text-[#198754]" />;
      case "Layers":
        return <Layers className="w-10 h-10 text-[#DAA520]" />;
      case "Droplets":
        return <Droplets className="w-10 h-10 text-[#008080]" />;
      case "Activity":
        return <Activity className="w-10 h-10 text-[#CD5C5C]" />;
      default:
        return <Shirt className="w-10 h-10 text-[#198754]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-[#070d1e] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[#DAA520] font-bold text-xs uppercase tracking-widest">
            Application Verticals
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-montserrat">
            Industries We Serve
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Tailored chemical solutions engineered specifically for Textile, Paper, Wood Panel, Water Treatment, and Pharmaceutical manufacturing.
          </p>
        </div>
      </section>

      {/* Grid of 5 Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(INDUSTRIES_DATA).map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 inline-block mb-6 group-hover:scale-110 transition-transform">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-montserrat group-hover:text-[#198754] transition-colors">
                  {ind.name} Industry
                </h3>
                <p className="text-sm font-semibold text-[#198754] mt-1">
                  {ind.tagline}
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  {ind.solutions.length} Core Solution Modules
                </span>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[#0077B6] group-hover:text-[#198754] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
