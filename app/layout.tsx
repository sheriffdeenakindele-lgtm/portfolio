import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed, Syne } from "next/font/google";
import "./globals.css";
import Header from "./component/header/page";
import Footer from "./component/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

import SmoothScroll from "./component/SmoothScroll";

export const metadata: Metadata = {
  title: "Sheriff - Portfolio",
  description: "Turning ideas into seamless digital interfaces",
  icons: {
    icon: '/logoport_square.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] relative overflow-x-hidden text-neutral-200">
        <SmoothScroll>
          {/* Glassmorphic Background Orbs */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] rounded-full bg-cyan-600/5 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          <Header />
          <main className="flex-grow z-10 relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
