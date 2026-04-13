import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/header/page";
import Footer from "./component/footer/page";
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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] relative text-neutral-200">
        <SmoothScroll>
          {/* Glassmorphic Background Orbs - Reduced blur for mobile GPU stability */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[40px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[40px] animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] rounded-full bg-cyan-600/5 blur-[30px] animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          <Header />
          <main className="flex-grow z-10 relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
