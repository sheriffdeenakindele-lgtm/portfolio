'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { scrollYProgress } = useScroll();
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);

  return (
    <>
      {/* Large Name - Not Sticky */}
      <header className="w-full bg-black py-4 md:py-6 px-2 md:px-4 overflow-hidden relative">
        <div className="text-center mb-2 md:mb-4 w-full flex justify-center items-center px-2 min-h-[clamp(1.5rem,8vw,200px)]">
          <motion.h1
            style={{ 
              scale: headerScale,
              opacity: headerOpacity,
              fontWeight: 600,
              fontStyle: 'normal',
              fontFamily: '"Roboto Condensed", sans-serif',
              color: '#ffffff',
              fontSize: 'clamp(1.5rem, 8vw, 200px)',
              letterSpacing: 'clamp(-1px, -0.5vw, -6px)',
              textTransform: 'uppercase',
              lineHeight: '85%',
              fontFeatureSettings: 'normal',
              width: '100%',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="uppercase text-white whitespace-nowrap overflow-visible"
          >
            SHERIFF AKINDELE
          </motion.h1>
        </div>
      </header>

      {/* Navigation Pills - Sticky - Separate from header so it can stick */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 py-4 px-4">
        <nav className="flex justify-between items-center px-1 md:px-2 max-w-full mx-auto gap-1 md:gap-0">
          <button
            onClick={() => scrollToSection('top')}
            className="px-3 md:px-6 py-2 bg-black border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-3 md:px-6 py-2 bg-black border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm cursor-pointer"
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-3 md:px-6 py-2 bg-black border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm cursor-pointer"
          >
            Info
          </button>
          <button
            onClick={() => scrollToSection('whatido')}
            className="px-3 md:px-6 py-2 bg-black border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm cursor-pointer"
          >
            What I Do
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-3 md:px-6 py-2 bg-black border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
}