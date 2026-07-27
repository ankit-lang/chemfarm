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
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-emerald-50/20 text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[#B8860B] font-bold text-xs uppercase tracking-widest">
            Catalogue & SKU Specifications
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-montserrat text-slate-900">
            Our Products
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Dyes, pigments, specialty chemicals and industrial ingredients manufactured to
            consistent, global-standard quality.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[73px] z-30 bg-white border-b border-slate-200 shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
            </span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#198754] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories ({PRODUCTS_DATA.length})
            </button>
            {PRODUCTS_DATA.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedCategory(prod.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  selectedCategory === prod.id
                    ? "bg-[#198754] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {prod.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product / spec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-[#198754]"
            />
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <p className="text-slate-500 font-medium text-lg">
              No products found matching your filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#198754] text-white rounded-md text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div
                id={item.id}
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-36"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-[#198754] border border-emerald-200">
                      {item.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#0077B6]" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-montserrat group-hover:text-[#198754] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 space-y-2">
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Key Formulations & Types
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 flex items-center"
                        >
                          <CheckCircle className="w-3 h-3 text-[#198754] mr-1" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-serif italic">
                    Bulk Pan-India & Export Supply
                  </span>
                  <Link
                    href={`/contact?product=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#198754] hover:bg-[#146c43] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Enquire SKU</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
