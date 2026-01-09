import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/compnents/shared/Navber/Navber";
import Footer from "@/compnents/shared/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Tech Blogs",
  description: "This is the technological blog site. Which will help to increase knowledge of the technical person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><div>
        <Navbar></Navbar>
      </div>
        <div className="max-w-7xl mx-auto">
        {children}

      </div>
      <div>
        <Footer></Footer>
      </div>

      </body>
    </html>
  );
}
