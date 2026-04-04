'use client';

import { motion } from 'framer-motion';

export default function WhatIDoSection() {
  const services = [
    'Next.js & React Architecture',
    'Type-Safe Engineering',
    'Modern UI Development',
    'Full-Stack Integration',
    'State & Data Management',
    'API & Backend Logic',
    'Database & ORM Management',
    'Performance Optimization',
    'Testing & Reliability',
    'Deployment & DevOps'
  ];

  const experiences = [
    { role: 'Frontend Engineer', company: 'Determinas Technology', period: '2024 - Now' },
    { role: 'QA Engineer', company: 'Determinas Technology', period: '2023 - 2024' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="whatido" className="w-full bg-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* What I Do Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Left Column - Heading */}
          <div className="lg:col-span-3">
            <h2 className="text-white text-xl font-medium">WHAT I DO</h2>
          </div>

          {/* Right Column - Services List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-9"
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div 
                  variants={itemVariants}
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-6 group cursor-pointer"
                >
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium group-hover:text-white/70 transition-colors">
                    {service}
                  </h3>
                  <div className="flex-shrink-0 ml-8">
                    <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-colors"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-20">
          {/* Left Column - Heading */}
          <div className="lg:col-span-3">
            <h2 className="text-white text-xl font-medium">Work experience</h2>
          </div>

          {/* Right Column - Experience List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-9"
          >
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div 
                  variants={itemVariants}
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-6 group cursor-pointer"
                >
                  <div className="flex items-center gap-8 md:gap-16 flex-wrap">
                    <p className="text-white/60 text-lg md:text-xl group-hover:text-white/80 transition-colors min-w-[150px]">
                      {exp.role}
                    </p>
                    <p className="text-white/60 text-lg md:text-xl group-hover:text-white/80 transition-colors min-w-[120px]">
                      {exp.company}
                    </p>
                    <p className="text-white/60 text-lg md:text-xl group-hover:text-white/80 transition-colors">
                      {exp.period}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-8">
                    <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-colors"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
