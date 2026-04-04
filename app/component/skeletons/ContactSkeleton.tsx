import { SkeletonPulse, SkeletonText } from './SkeletonBase';

export default function ContactSkeleton() {
  return (
    <section className="w-full bg-transparent py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SkeletonPulse className="h-12 w-64 mx-auto mb-4" />
          <SkeletonPulse className="h-6 w-96 mx-auto" />
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-6">
          {/* Name Field */}
          <div>
            <SkeletonPulse className="h-4 w-20 mb-2" />
            <SkeletonPulse className="h-12 w-full rounded-lg" />
          </div>

          {/* Email Field */}
          <div>
            <SkeletonPulse className="h-4 w-20 mb-2" />
            <SkeletonPulse className="h-12 w-full rounded-lg" />
          </div>

          {/* Message Field */}
          <div>
            <SkeletonPulse className="h-4 w-24 mb-2" />
            <SkeletonPulse className="h-32 w-full rounded-lg" />
          </div>

          {/* Submit Button */}
          <SkeletonPulse className="h-12 w-full rounded-full" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonPulse key={i} className="h-12 w-12 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
