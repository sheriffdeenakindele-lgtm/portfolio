'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 py-6 px-4 w-full">
      <div className="w-full max-w-full">
        {/* Social Links - Spread across full width */}
        <div className="flex justify-between items-center mb-4 text-[10px] md:text-xs tracking-wider px-1 md:px-2 max-w-full gap-1 md:gap-0">
          <Link
            href="https://www.instagram.com/easyt3ddy?igsh=cWl3d3liemlyNGt5&utm_source=qr"
            target="_blank"
            className="group relative text-white hover:text-white/60 transition-colors duration-300 uppercase inline-flex items-center gap-1"
          >
            <span className="relative">
              INSTA
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-xs">↗</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="group relative text-white hover:text-white/60 transition-colors duration-300 uppercase inline-flex items-center gap-1"
          >
            <span className="relative">
              LNKDN
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-xs">↗</span>
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            className="group relative text-white hover:text-white/60 transition-colors duration-300 uppercase inline-flex items-center gap-1"
          >
            <span className="relative">
              GitHub
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-xs">↗</span>
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            className="group relative text-white hover:text-white/60 transition-colors duration-300 uppercase inline-flex items-center gap-1"
          >
            <span className="relative">
              DRIBBLE
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-xs">↗</span>
          </Link>
          <Link
            href="https://behance.net"
            target="_blank"
            className="group relative text-white hover:text-white/60 transition-colors duration-300 uppercase inline-flex items-center gap-1"
          >
            <span className="relative">
              BB
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-xs">↗</span>
          </Link>
        </div>

        {/* Large Name - Full width stretch */}
        <div className="w-full flex justify-center items-center overflow-hidden px-2">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="uppercase text-white whitespace-nowrap"
            style={{
              fontWeight: 600,
              fontStyle: 'normal',
              fontFamily: '"Roboto Condensed", sans-serif',
              color: '#ffffff',
              fontSize: 'clamp(2.5rem, 15vw, 220px)',
              letterSpacing: 'clamp(-4px, -1vw, -18px)',
              textTransform: 'uppercase',
              lineHeight: '85%',
              fontFeatureSettings: 'normal',
              width: '100%',
              textAlign: 'center',
            }}
          >
            AKINDELE
          </motion.h2>
        </div>
      </div>
    </footer>
  );
}