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
              I&apos;m a Frontend Engineer who builds high-performance web apps with React and Next.js. I don&apos;t just write code, I bridge the gap between complex business logic and clean, intuitive design. Whether it&apos;s a real-time OTP service or a digital marketplace, I turn messy requirements into stable, production-ready systems.
            </p>

            <p className="text-white text-lg leading-relaxed text-white/80">
              I&apos;m big on technical integrity, using TypeScript, Server Components, and TanStack Query to keep things fast, type-safe, and maintainable. For me, performance isn&apos;t an afterthought, it&apos;s a core requirement.
            </p>

            <p className="text-white text-lg leading-relaxed text-white/80">
              I&apos;m looking to partner with teams that value clean architecture and pixel-perfect execution. If you need someone who can turn a complex vision into a high-performance reality, let&apos;s build something great together.
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