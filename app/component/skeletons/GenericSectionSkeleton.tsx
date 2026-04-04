import { SkeletonPulse, SkeletonText } from './SkeletonBase';

export default function GenericSectionSkeleton() {
  return (
    <section className="w-full bg-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <SkeletonPulse className="h-10 md:h-12 w-80 mb-3" />
          <SkeletonPulse className="h-6 w-64" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-4"
            >
              <SkeletonPulse className="h-12 w-12 rounded-full" />
              <SkeletonPulse className="h-6 w-32" />
              <SkeletonText lines={3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
