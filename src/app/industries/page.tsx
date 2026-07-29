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
        return <Shirt className="w-10 h-10 text-white" />;
      case "FileText":
        return <FileText className="w-10 h-10 text-white" />;
      case "Layers":
        return <Layers className="w-10 h-10 text-white" />;
      case "Droplets":
        return <Droplets className="w-10 h-10 text-white" />;
      case "Activity":
        return <Activity className="w-10 h-10 text-white" />;
      default:
        return <Shirt className="w-10 h-10 text-white" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#012B37] text-white font-ubuntu">
      {/* Banner */}
      <section className="bg-[#02252F] text-white py-16 lg:py-20 border-b border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 font-ubuntu">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Application Verticals
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-ubuntu text-white">
            Industries We Serve
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed font-ubuntu">
            Tailored chemical solutions engineered specifically for Textile, Paper, Wood Panel, Water Treatment, and Pharmaceutical manufacturing.
          </p>
        </div>
      </section>

      {/* Grid of 5 Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow font-ubuntu">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-ubuntu">
          {Object.values(INDUSTRIES_DATA).map((ind) => (
            <div
              key={ind.id}
              className="bg-[#033645] border border-white/40 rounded-2xl p-8 shadow-xl hover:border-white transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 font-ubuntu"
            >
              <div>
                <div className="p-4 rounded-xl bg-[#02252F] border border-white/40 inline-block mb-6 group-hover:scale-110 transition-transform">
                  {getIndustryIcon(ind.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-white font-ubuntu transition-colors">
                  {ind.name} Industry
                </h3>
                <p className="text-sm font-bold text-white mt-1 font-ubuntu">
                  {ind.tagline}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed font-ubuntu">
                  {ind.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/40 flex items-center justify-between font-ubuntu">
                <span className="text-xs font-medium text-slate-300 font-ubuntu">
                  {ind.solutions.length} Core Solution Modules
                </span>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-slate-200 transition-colors font-ubuntu"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#facc15]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
