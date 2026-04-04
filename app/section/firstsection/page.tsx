'use client';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

export default function FirstSection() {
  const skills = [
    "Next.js",
    "React 19",
    "Typescript",
    "Github",
    "Tailwind CSS",
    "Claude",
    "TanStack Query",
    "Supabase",
    "Cursor",
    "Firebase",
    "REST",
    "Vite",
    "Playwright",
    "Vercel",
    "Figma",
    "Cursor"
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentSkill.length) {
          setDisplayedText(currentSkill.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentSkill.substring(0, displayedText.length - 1));
        } else {
          // Move to next skill
          setIsDeleting(false);
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSkillIndex, skills]);

  return (
    <section
      id="top"
      style={{
        boxSizing: 'border-box',
        width: '100%',
        height: 'min-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '160px 20px 100px 20px',
        overflow: 'clip',
        alignContent: 'center',
        flexWrap: 'nowrap',
        position: 'relative',
        borderRadius: '0px',
      }}
      className="bg-transparent"
    >
      {/* Top decorative line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-8 h-1 bg-blue-500 mb-12 origin-left"
      />
      
      {/* Main content - Two columns */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        {/* Left side - GIF */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-md aspect-square rounded-lg overflow-hidden relative shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            <img 
              src="/animation.gif" 
              alt="Animation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
        
        {/* Right side - Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 text-left"
        >
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
            I&apos;m <span className="font-semibold text-blue-400">Sheriffdeen Akindele</span>, A passionate frontend developer building responsive, user-focused interfaces using modern web technologies, focused on performance, accessibility, and clean, maintainable code.
          </p>
          
          {/* Core Skills - Typing Effect */}
          <div className="mt-10">
            <p className="text-white/80 text-2xl md:text-3xl">
              <span className="text-white/60">Core Skills: </span>
              <span className="text-blue-400 font-medium">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="w-8 h-1 bg-blue-500 mt-12"></div>
    </section>
  );
}