import React from 'react';
import { Download, FileText, ChevronRight, FileDown } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Downloads | Chemfarm',
  description: 'Download technical data sheets, product catalogs, and informative content for Chemfarm Dyes, Pigments, and Specialty Chemicals.',
};

const resourceCategories = [
  {
    category: "Dyes & Pigments",
    description: "Technical data and content for our comprehensive range of dyes and pigments.",
    files: [
      { name: "Acid Dyes", filename: "Chemfarm_Acid_Dyes_Content.pdf" },
      { name: "Basic Dyes", filename: "Chemfarm_Basic_Dyes_Content.pdf" },
      { name: "Direct Dyes", filename: "Chemfarm_Direct_Dyes_Content.pdf" },
      { name: "Disperse Dyes", filename: "Chemfarm_Disperse_Dyes_Content.pdf" },
      { name: "Inorganic Pigments", filename: "Chemfarm_Inorganic_Pigments_Content.pdf" },
      { name: "Organic Pigments", filename: "Chemfarm_Organic_Pigments_Content.pdf" },
      { name: "Pigment Emulsions", filename: "Chemfarm_Pigment_Emulsions_Content.pdf" },
    ]
  },
  {
    category: "Water Treatment",
    description: "Solutions and guidelines for ETP, STP, and industrial water conditioning.",
    files: [
      { name: "ETP Treatment Chemicals", filename: "Chemfarm_Water_Treatment_01_ETP_Treatment_Chemicals.pdf" },
      { name: "STP Treatment & Sludge Management", filename: "Chemfarm_Water_Treatment_02_STP_Treatment_and_Sludge_Management.pdf" },
      { name: "Water Conditioning & Industrial Process Chemicals", filename: "Chemfarm_Water_Treatment_03_Water_Conditioning_and_Industrial_Process_Chemicals.pdf" },
      { name: "Disinfection, Biocides & Specialty Water Chemicals", filename: "Chemfarm_Water_Treatment_04_Disinfection,_Biocides_and_Specialty_Water_Chemicals.pdf" },
    ]
  },
  {
    category: "Paper & Wood Processing",
    description: "Chemicals for paper manufacturing and wood surface treatments.",
    files: [
      { name: "Paper Chemicals Advanced Categories", filename: "Chemfarm_Paper_Chemicals_Advanced_Categories.pdf" },
      { name: "Paper Dyes & Chemicals", filename: "Chemfarm_Paper_Dyes_and_Chemicals_Content.pdf" },
      { name: "Wood Pigments & Dyes", filename: "Chemfarm_Wood_Pigments_Dyes_Content.pdf" },
      { name: "Wood Surface Treatment Chemicals", filename: "Chemfarm_wood_Surface_Treatment_Chemicals_Content.pdf" },
    ]
  },
  {
    category: "Textiles & Finishing",
    description: "Detergents, fixing agents, and silicone finishes for textiles.",
    files: [
      { name: "Silicone Finishing Chemicals", filename: "Chemfarm_Silicone_Finishing_Chemicals_Content.pdf" },
      { name: "Textile Detergents", filename: "Chemfarm_Textile_Detergents_Content.pdf" },
      { name: "Textile Fixing Agents", filename: "Chemfarm_Textile_Fixing_Agents_Content.pdf" },
      { name: "Wetting Agents", filename: "Chemfarm_Wetting_Agents_Content.pdf" },
    ]
  },
  {
    category: "Additives & Modifiers",
    description: "Bonding promoters, defoamers, and performance modifiers.",
    files: [
      { name: "Bonding Additives", filename: "Chemfarm_Bonding_Additives_Content.pdf" },
      { name: "Bonding Promoters & Functional Additives", filename: "Chemfarm_Bonding_Promoters_Functional_Additives_Content.pdf" },
      { name: "Defoamers & Antifoaming Agents", filename: "Chemfarm_Defoamers_Antifoaming_Agents_Content.pdf" },
      { name: "Process Performance Modifiers", filename: "Chemfarm_Process_Performance_Modifiers_Content.pdf" },
    ]
  },
  {
    category: "Pharmaceuticals & Support",
    description: "Excipients and color matching support documentation.",
    files: [
      { name: "Pharmaceutical Excipients", filename: "Chemfarm_Pharmaceutical_Excipients_Content.pdf" },
      { name: "Colour Matching Support (Manufacturer Edition)", filename: "Chemfarm_Colour_Matching_Support_Manufacturer_Edition.pdf" },
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] relative overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--bg-top-highlight)] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--bg-darker-right)] rounded-full mix-blend-screen filter blur-[100px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-blur-text">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--brand-border)] bg-white/5 backdrop-blur-sm mb-6 text-sm font-medium tracking-wider text-[var(--brand-border)] uppercase">
            Downloads & Information
          </div>
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-6 text-gradient-champagne drop-shadow-gold">
            Product Resources
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-open-sans leading-relaxed">
            Access our comprehensive library of technical data sheets, product catalogs, and informative content tailored to your industry needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {resourceCategories.map((category, idx) => (
            <div 
              key={idx}
              className={`animate-reveal-content delay-${(idx % 5 + 1) * 100} bg-[#02252F]/80 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl hover:border-[var(--brand-border)]/50 transition-all duration-500 group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-border)] opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-bl-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-[var(--brand-border)]" />
                </div>
                <div>
                  <h2 className="text-2xl font-ubuntu font-bold text-white group-hover:text-gradient-champagne transition-colors">
                    {category.category}
                  </h2>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-8 font-open-sans">{category.description}</p>

              <div className="space-y-3">
                {category.files.map((file, fileIdx) => (
                  <div 
                    key={fileIdx}
                    className="group/item relative bg-white/5 hover:bg-white/10 rounded-xl p-4 flex items-center justify-between transition-all duration-300 border border-white/5 hover:border-[var(--brand-border)]/30"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <FileDown className="w-5 h-5 text-white/40 group-hover/item:text-[var(--brand-border)] transition-colors shrink-0" />
                      <span className="font-medium text-white/90 group-hover/item:text-white transition-colors truncate">
                        {file.name}
                      </span>
                    </div>
                    <Link
                      href={`/resources/${file.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover/item:bg-[var(--brand-border)] text-white hover:scale-110 transition-all duration-300 shadow-lg"
                      title={`Download ${file.name}`}
                    >
                      <Download className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-[#033645] to-[#012B37] border border-white/10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden animate-reveal-content delay-500 shadow-2xl">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[var(--brand-border)] blur-[100px] opacity-20" />
          <div className="relative z-10 md:pr-10 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-cormorant font-bold text-white mb-3">Need Custom Formulations?</h3>
            <p className="text-white/70 font-open-sans">
              Contact our technical team for specialized product specifications, safety data sheets (MSDS), and custom requirements.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="relative z-10 flex items-center gap-2 px-8 py-4 rounded-full btn-gold-teal-gradient text-white font-semibold shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 shrink-0"
          >
            Contact Technical Team
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
