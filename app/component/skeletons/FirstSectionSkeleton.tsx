import { SkeletonPulse, SkeletonText } from './SkeletonBase';

export default function FirstSectionSkeleton() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <SkeletonPulse className="h-12 md:h-16 lg:h-20 w-3/4 max-w-2xl" />
            <SkeletonPulse className="h-12 md:h-16 lg:h-20 w-full max-w-3xl" />
          </div>

          {/* Typing Effect Area */}
          <div className="flex items-center gap-3">
            <SkeletonPulse className="h-10 w-32" />
            <SkeletonPulse className="h-8 w-48" />
          </div>

          {/* Description Text */}
          <div className="max-w-2xl">
            <SkeletonText lines={3} widths={['w-full', 'w-11/12', 'w-4/5']} />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <SkeletonPulse className="h-12 w-36 rounded-full" />
            <SkeletonPulse className="h-12 w-36 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
