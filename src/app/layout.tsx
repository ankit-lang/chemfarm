import type { Metadata } from "next";
import { Montserrat, Open_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chemfarm International | Turning Chemistry Into Colours Since 1992",
  description:
    "Leading manufacturer and supplier of Dyes, Pigments, Specialty Chemicals & Industrial Ingredients for Textile, Paper, Wooden, Water, and Pharmaceutical industries.",
  keywords: [
    "Chemfarm International",
    "Textile Dyes",
    "Paper Chemicals",
    "Wood Pigments",
    "Water Treatment Chemicals",
    "Pharmaceutical Ingredients",
    "Specialty Chemicals India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${ubuntu.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#198754] selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
