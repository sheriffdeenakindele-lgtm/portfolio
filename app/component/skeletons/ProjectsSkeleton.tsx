import { SkeletonPulse, SkeletonCard } from './SkeletonBase';

export default function ProjectsSkeleton() {
  return (
    <section className="w-full bg-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <SkeletonPulse className="h-10 md:h-12 lg:h-14 w-96 mb-3" />
          <SkeletonPulse className="h-6 w-72" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="group relative block w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-900/50 border border-white/5"
            >
              {/* Image Skeleton */}
              <SkeletonPulse className="absolute inset-0" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Category Badge */}
                <div>
                  <SkeletonPulse className="h-7 w-24 rounded-full" />
                </div>
                
                {/* Title */}
                <div className="space-y-2">
                  <SkeletonPulse className="h-8 md:h-10 w-48" />
                  <SkeletonPulse className="h-4 w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
