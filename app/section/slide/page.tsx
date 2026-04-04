'use client';

const skills = [
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'TanStack Query', icon: 'reactquery' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'REST', icon: 'fastapi' },
  { name: 'Vite', icon: 'vite' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Cursor', icon: 'cursor' },
  { name: 'Claude', icon: 'anthropic' }
];

export default function SlideSection() {
  return (
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* Sliding content */}
        <div className="flex animate-slide">
          {/* First set of skills */}
          <div className="flex gap-20 px-6 whitespace-nowrap">
            {skills.map((skill, index) => (
              <div key={`first-${index}`} className="flex items-center gap-4">
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                  alt={skill.name}
                  className="w-8 h-8"
                />
                <span className="text-white text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-20 px-6 whitespace-nowrap">
            {skills.map((skill, index) => (
              <div key={`second-${index}`} className="flex items-center gap-4">
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                  alt={skill.name}
                  className="w-8 h-8"
                />
                <span className="text-white text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </section>
  );
}