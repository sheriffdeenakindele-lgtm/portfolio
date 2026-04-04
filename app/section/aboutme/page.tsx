'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section id="about" className="w-full bg-transparent py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-white text-xl font-medium">(ABOUT ME)</h2>

            <p className="text-white text-lg leading-relaxed">
              I don&apos;t just build interfaces, I solve business problems through code.
            </p>

            <p className="text-white text-lg leading-relaxed text-white/80">
              As a Frontend Engineer specializing in React and Next.js, I bridge the gap between complex logic and clean design. I don&apos;t just &quot;write features&quot;—I architect high-performance solutions that prioritize scalability and user experience. Whether I&apos;m engineering a real-time OTP service or a digital marketplace, my focus is on turning ambiguous requirements into stable, production-ready systems.
            </p>

            <p className="text-white text-lg leading-relaxed text-white/80">
              My approach is rooted in technical integrity. By leveraging TypeScript, Server Components, and TanStack Query, I transform messy data into seamless, type-safe interfaces. I treat performance as a core requirement rather than an afterthought, ensuring that every application I build is fast, maintainable, and optimized for the edge.
            </p>

            <p className="text-white text-lg leading-relaxed text-white/80">
              I build for the next generation of the web, moving beyond &quot;functional&quot; to create resilient architecture. I&apos;m looking to partner with teams that value clean code and pixel-perfect execution. If you need an engineer who can deconstruct a complex vision into a high-performance reality, let&apos;s build something that sets the standard.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-white/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-white text-5xl font-bold mb-2">5+</h3>
                <p className="text-white/60 text-sm">Projects</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-white text-5xl font-bold mb-2">4+</h3>
                <p className="text-white/60 text-sm">Years experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex justify-center items-center"
          >
            {/* Showcase Image */}
            <div className="relative w-full max-w-md aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/10">
              <Image
                src="/showcase.jpg"
                alt="Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}