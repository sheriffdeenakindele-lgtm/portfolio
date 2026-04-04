import { SkeletonPulse, SkeletonText } from './SkeletonBase';

export default function AboutMeSkeleton() {
  return (
    <section className="w-full bg-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Section Title */}
            <SkeletonPulse className="h-8 w-48" />

            {/* Text Paragraphs */}
            <div className="space-y-4">
              <SkeletonText lines={2} />
              <SkeletonText lines={4} />
              <SkeletonText lines={4} />
              <SkeletonText lines={3} />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-white/10">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <SkeletonPulse className="h-12 w-20 mb-2" />
                <SkeletonPulse className="h-4 w-24" />
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <SkeletonPulse className="h-12 w-20 mb-2" />
                <SkeletonPulse className="h-4 w-32" />
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10">
              <SkeletonPulse className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
