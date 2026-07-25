export interface IndustryInfo {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  tagline: string;
  bannerTitle: string;
  bannerSub: string;
  description: string;
  accentColor: string;
  solutions: { title: string; desc: string }[];
  detailSections: { title: string; content: string }[];
}

export const INDUSTRIES_DATA: Record<string, IndustryInfo> = {
  textile: {
    id: "textile",
    name: "Textile",
    slug: "textile",
    iconName: "Shirt",
    tagline: "Dyes, pigments & processing chemicals",
    bannerTitle: "Textile Industry: Colour and Performance Chemistry",
    bannerSub:
      "Chemfarm supplies dyes, pigments and processing chemicals that help textile manufacturers achieve consistent colour, strength and finish across every stage of fabric production.",
    description:
      "A complete range of dye formulations, pigments, and finishing auxiliaries engineered for cotton, synthetic blends, yarn, and woven fabric processing.",
    accentColor: "#0077B6",
    solutions: [
      {
        title: "Dyes & Pigments",
        desc: "Wide shade range for consistent, durable colouring.",
      },
      {
        title: "Textile Finishing Chemicals",
        desc: "Softeners and finishing agents for feel and drape.",
      },
      {
        title: "Processing Aids",
        desc: "Wetting, scouring and bleaching support chemicals.",
      },
      {
        title: "Colour-Fastness Solutions",
        desc: "Formulations aimed at wash and light fastness.",
      },
    ],
    detailSections: [
      {
        title: "Dyes & Pigments",
        content:
          "A broad colour palette formulated for even uptake and consistent, repeatable shade matching across fabric batches.",
      },
      {
        title: "Finishing & Processing Aids",
        content:
          "Chemicals that support softness, handle and overall fabric quality through the finishing stage.",
      },
    ],
  },
  paper: {
    id: "paper",
    name: "Paper",
    slug: "paper",
    iconName: "FileText",
    tagline: "Chemicals for pulp & paper making",
    bannerTitle: "Paper Industry: Chemistry for Every Stage of Paper Making",
    bannerSub:
      "From pulp processing to final finishing, Chemfarm's paper chemicals support strength, brightness and efficiency for paper mills of every scale.",
    description:
      "High-performance wet-end additives, surface coating ingredients, and paper dyes tailored for specialty papers, packaging boards, and tissue production.",
    accentColor: "#198754",
    solutions: [
      {
        title: "Paper Dyes & Pigments",
        desc: "Consistent colour and brightness for various paper grades.",
      },
      {
        title: "Wet-End Chemicals",
        desc: "Additives supporting strength and sheet formation.",
      },
      {
        title: "Coating Additives",
        desc: "Chemicals for smoother, higher-quality paper surfaces.",
      },
      {
        title: "Process Efficiency Aids",
        desc: "Support for retention, drainage and mill efficiency.",
      },
    ],
    detailSections: [
      {
        title: "Colour & Brightness",
        content:
          "Dyes and pigments formulated to give paper manufacturers consistent shade and brightness, batch after batch.",
      },
      {
        title: "Process Support",
        content:
          "Additives that support the wet-end and coating stages, helping mills run efficiently while maintaining sheet quality.",
      },
    ],
  },
  wooden: {
    id: "wooden",
    name: "Wooden",
    slug: "wooden",
    iconName: "Layers",
    tagline: "Solutions for MDF & panel manufacturing",
    bannerTitle: "Wood Panel Industry: Chemistry for MDF & HDHMR Manufacturing",
    bannerSub:
      "Chemfarm supplies pigments and specialty chemicals that support colour consistency, bonding and surface quality in engineered wood panel production.",
    description:
      "Industrial dye concentrates, resin binders, and surface treatments engineered specifically for MDF, HDF, particleboard, and HDHMR manufacturers.",
    accentColor: "#DAA520",
    solutions: [
      {
        title: "Wood Pigments & Dyes",
        desc: "Consistent colour for MDF and HDHMR panels.",
      },
      {
        title: "Surface Treatment Chemicals",
        desc: "Support for finish quality and durability.",
      },
      {
        title: "Bonding Additives",
        desc: "Chemicals that support resin and bonding performance.",
      },
      {
        title: "Colour-Matching Support",
        desc: "Assistance in achieving precise, repeatable shades.",
      },
    ],
    detailSections: [
      {
        title: "Colour Consistency",
        content:
          "Pigments developed to give panel manufacturers even, repeatable colour across large production runs.",
      },
      {
        title: "Surface & Bonding Quality",
        content:
          "Additives that support a smooth, durable surface finish and consistent bonding performance.",
      },
    ],
  },
  water: {
    id: "water",
    name: "Water",
    slug: "water",
    iconName: "Droplets",
    tagline: "Ingredients for water treatment",
    bannerTitle: "Water Treatment: Reliable Chemistry for Clean Water Solutions",
    bannerSub:
      "Chemfarm provides industrial ingredients used in water treatment processes, supporting municipal and industrial clients with dependable quality and supply.",
    description:
      "Purification agents, coagulants, flocculants, and pH adjusters for industrial effluent treatment plants (ETP) and municipal water purification facilities.",
    accentColor: "#008080",
    solutions: [
      {
        title: "Treatment Chemicals",
        desc: "Ingredients supporting clarification and purification.",
      },
      {
        title: "pH Correction Chemicals",
        desc: "Products for balanced, treatment-ready water.",
      },
      {
        title: "Industrial Process Chemicals",
        desc: "Support for industrial water treatment needs.",
      },
      {
        title: "Consistent Supply",
        desc: "Pan-India and export-ready supply for ongoing projects.",
      },
    ],
    detailSections: [
      {
        title: "Dependable Ingredients",
        content:
          "Water treatment ingredients supplied with consistent quality, supporting both municipal and industrial applications.",
      },
      {
        title: "Supply You Can Plan Around",
        content:
          "Backed by Chemfarm's pan-India distribution and export capability, ensuring water treatment operators can rely on steady availability.",
      },
    ],
  },
  pharmaceuticals: {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    slug: "pharmaceuticals",
    iconName: "Activity",
    tagline: "Quality-assured raw materials",
    bannerTitle: "Pharmaceutical Industry: Quality-Assured Chemical Ingredients",
    bannerSub:
      "Chemfarm supplies specialty chemicals and industrial ingredients manufactured to meet the quality expectations of pharmaceutical and allied manufacturing processes.",
    description:
      "Strictly controlled raw materials, excipients, and specialty synthesis aids crafted for pharmaceutical formulations and chemical synthesis.",
    accentColor: "#CD5C5C",
    solutions: [
      {
        title: "Specialty Ingredients",
        desc: "Chemicals formulated for consistent, quality-assured supply.",
      },
      {
        title: "Quality-Assured Raw Materials",
        desc: "Strict quality control across every batch.",
      },
      {
        title: "Technical Support",
        desc: "Experienced team available for formulation queries.",
      },
      {
        title: "Reliable Supply Chain",
        desc: "Pan-India and export-ready delivery.",
      },
    ],
    detailSections: [
      {
        title: "Quality First",
        content:
          "Every ingredient is backed by Chemfarm's quality-control processes, an essential requirement for pharmaceutical and allied manufacturing.",
      },
      {
        title: "Technical Partnership",
        content:
          "Our technical team works with clients to support consistent, dependable sourcing for ongoing production needs.",
      },
    ],
  },
};

export const PRODUCTS_DATA = [
  {
    id: "dyes",
    title: "Dyes",
    desc: "A wide colour range for consistent, durable shade matching.",
    badge: "Core Focus",
    specs: ["Reactive Dyes", "Acid Dyes", "Direct Dyes", "Disperse Dyes"],
  },
  {
    id: "pigments",
    title: "Pigments",
    desc: "Stable, high-strength pigments for varied industrial uses.",
    badge: "High Stability",
    specs: ["Organic Pigments", "Inorganic Pigments", "Pigment Emulsions"],
  },
  {
    id: "specialty-chemicals",
    title: "Specialty Chemicals",
    desc: "Application-specific chemicals formulated for performance.",
    badge: "Custom Formulations",
    specs: ["Synthesised Auxiliaries", "Bonding Promoters", "Modifiers"],
  },
  {
    id: "industrial-ingredients",
    title: "Industrial Ingredients",
    desc: "Reliable raw materials for manufacturing processes.",
    badge: "Pan-India Supply",
    specs: ["Process Aids", "Raw Salts", "Clarifying Agents"],
  },
  {
    id: "paper-chemicals",
    title: "Paper Chemicals",
    desc: "Additives supporting strength, brightness and finish.",
    badge: "Pulp & Board",
    specs: ["Wet-End Additives", "Sizing Agents", "Coating Chemicals"],
  },
  {
    id: "textile-chemicals",
    title: "Textile Chemicals",
    desc: "Processing and finishing chemicals for fabric manufacturing.",
    badge: "High Fastness",
    specs: ["Scouring Agents", "Softeners", "Fixing Agents"],
  },
];
