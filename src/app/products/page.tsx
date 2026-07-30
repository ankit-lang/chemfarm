"use client";

import { useState } from "react";
import Link from "next/link";
import { Filter, Search, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { PRODUCTS_DATA } from "@/lib/siteData";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.id === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#012B37] text-white font-ubuntu">
      {/* Banner */}
      <section className="bg-[#02252F] text-white py-16 lg:py-20 border-b border-white/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Catalogue & SKU Specifications
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-ubuntu text-white">
            Our Products
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed font-ubuntu">
            Dyes, pigments, specialty chemicals and industrial ingredients manufactured to
            consistent, global-standard quality.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[73px] z-30 bg-[#033645] border-b border-white/40 shadow-xl py-4 px-4 sm:px-6 lg:px-8 font-ubuntu">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center font-ubuntu">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto font-ubuntu">
            <span className="text-xs font-bold text-white uppercase tracking-wider mr-2 flex items-center font-ubuntu">
              <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
            </span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all font-ubuntu ${
                selectedCategory === "all"
                  ? "bg-white text-slate-950 shadow-md"
                  : "bg-[#02252F] text-white border border-white/40 hover:border-white"
              }`}
            >
              All Categories
            </button>
            {PRODUCTS_DATA.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedCategory(prod.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all font-ubuntu ${
                  selectedCategory === prod.id
                    ? "bg-white text-slate-950 shadow-md"
                    : "bg-[#02252F] text-white border border-white/40 hover:border-white"
                }`}
              >
                {prod.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 font-ubuntu">
            <Search className="w-4 h-4 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product / spec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#02252F] border border-white/40 text-white placeholder-slate-400 rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-white font-ubuntu"
            />
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow font-ubuntu">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 space-y-3 font-ubuntu">
            <p className="text-slate-300 font-medium text-lg font-ubuntu">
              No products found matching your filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-white text-slate-950 rounded-md text-xs font-bold font-ubuntu shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-ubuntu">
            {filteredProducts.map((item) => (
              <div
                id={item.id}
                key={item.id}
                className="bg-[#033645] border border-white/40 rounded-2xl p-6 shadow-xl hover:border-white transition-all duration-300 flex flex-col justify-between group scroll-mt-36 font-ubuntu"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#02252F] text-white border border-white/40 font-ubuntu">
                      {item.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white font-ubuntu transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed font-ubuntu">
                    {item.desc}
                  </p>

                  <div className="mt-6 space-y-2 font-ubuntu">
                    <p className="text-xs uppercase font-bold text-white tracking-wider font-ubuntu">
                      Key Formulations & Types
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-ubuntu">
                      {item.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#02252F] text-white text-xs font-medium border border-white/40 flex items-center font-ubuntu"
                        >
                          <CheckCircle className="w-3 h-3 text-white mr-1" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/40 flex items-center justify-between font-ubuntu">
                  <span className="text-xs text-slate-300 font-ubuntu">
                    Bulk Pan-India & Export Supply
                  </span>
                  <Link
                    href={`/contact?product=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white text-slate-950 text-xs font-bold transition-all shadow-md font-ubuntu hover:scale-105"
                  >
                    <span>Enquire SKU</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
