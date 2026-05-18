import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Montserrat,
  Nunito_Sans,
  Sora,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berita Kini",
  description: "Website berisi berita berita terpopuler dari berbagai kategori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${nunitoSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
