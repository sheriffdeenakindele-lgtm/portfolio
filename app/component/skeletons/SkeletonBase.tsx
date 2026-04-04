export function SkeletonPulse({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] rounded ${className}`}
      style={{
        animation: 'shimmer 2s infinite',
      }}
    />
  );
}

export function SkeletonText({ 
  lines = 1, 
  className = "",
  widths = [] 
}: { 
  lines?: number; 
  className?: string;
  widths?: string[];
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonPulse
          key={i}
          className={`h-4 ${widths[i] || 'w-full'}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden ${className}`}>
      <SkeletonPulse className="w-full h-full" />
    </div>
  );
}
