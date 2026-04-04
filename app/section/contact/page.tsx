'use client';

import Link from 'next/link';
import { useState } from 'react';

import { motion } from 'framer-motion';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone1, setCopiedPhone1] = useState(false);
  const [copiedPhone2, setCopiedPhone2] = useState(false);

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-transparent py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Ready for the next challenge.
          </h2>
          <p className="text-white/60 text-xl md:text-2xl">
            I&apos;m just a click away
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Email */}
          <div className="space-y-4">
            <h3 className="text-white/60 text-sm uppercase tracking-wider">Email</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Link 
                href="mailto:sheriffdeenakindele@gmail.com"
                className="text-white text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors duration-300"
              >
                sheriffdeenakindele@gmail.com
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard('sheriffdeenakindele@gmail.com', setCopiedEmail)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors duration-300 border border-white/20"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-4">
            <h3 className="text-white/60 text-sm uppercase tracking-wider">Phone</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 flex-wrap">
                <Link 
                  href="tel:+2347049441095"
                  className="text-white text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors duration-300"
                >
                  +234 7049441095
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard('+234 7049441095', setCopiedPhone1)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors duration-300 border border-white/20"
                >
                  {copiedPhone1 ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link 
                  href="tel:+2349016267739"
                  className="text-white text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors duration-300"
                >
                  +234 9016267739
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard('+234 9016267739', setCopiedPhone2)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors duration-300 border border-white/20"
                >
                  {copiedPhone2 ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
