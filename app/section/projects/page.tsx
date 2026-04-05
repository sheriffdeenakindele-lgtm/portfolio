'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "VecApp",
    category: "Software",
    // Using screenshot service to capture website preview
    image: `https://api.microlink.io/?url=https://vec-app.com/&screenshot=true&meta=false&embed=screenshot.url`,
    url: "https://vec-app.com/"
  },
  {
    id: 2,
    title: "Tootuff",
    category: "Software",
    image: `https://api.microlink.io/?url=http://dev.tootuff.shop&screenshot=true&meta=false&embed=screenshot.url`,
    url: "http://dev.tootuff.shop"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">MANIFESTED IDEAS</h1>
          <p className="text-white/60 text-lg">it&apos;s not magic, it&apos;s just clean code</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={project.url}
                target="_blank"
                className="group relative block w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5"
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top - Category and Year */}
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom - Title */}
                  <div>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      <span className="text-sm">View Project</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}