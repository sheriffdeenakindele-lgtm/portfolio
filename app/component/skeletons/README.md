# Skeleton Loading System

A comprehensive skeleton loading implementation for the portfolio website, providing smooth loading states and improved perceived performance.

## What's Included

### Base Components (`SkeletonBase.tsx`)

- **SkeletonPulse**: Animated shimmer effect for any content
- **SkeletonText**: Multi-line text placeholder with customizable widths
- **SkeletonCard**: Card-style container with shimmer effect

### Section Skeletons

- **FirstSectionSkeleton**: Hero section with heading, typing effect area, and CTA buttons
- **ProjectsSkeleton**: Grid layout mimicking project cards
- **AboutMeSkeleton**: Two-column layout with text content and image placeholder
- **GenericSectionSkeleton**: Reusable skeleton for generic sections
- **ContactSkeleton**: Form layout with input fields and social links

## Usage

### Basic Usage with Suspense

All sections in the main page are already wrapped with Suspense boundaries:

```tsx
import { Suspense } from "react";
import { ProjectsSkeleton } from "./component/skeletons";
import ProjectsSection from "./section/projects/page";

<Suspense fallback={<ProjectsSkeleton />}>
  <ProjectsSection />
</Suspense>
```

### Creating Custom Skeletons

Use the base components to create custom skeleton loaders:

```tsx
import { SkeletonPulse, SkeletonText } from './component/skeletons';

export default function MyCustomSkeleton() {
  return (
    <div className="p-6">
      {/* Header skeleton */}
      <SkeletonPulse className="h-12 w-64 mb-4" />
      
      {/* Text skeleton with 3 lines */}
      <SkeletonText lines={3} widths={['w-full', 'w-11/12', 'w-4/5']} />
      
      {/* Grid of cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[1, 2, 3].map((i) => (
          <SkeletonPulse key={i} className="h-32 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
```

### Customization

#### Adjust Animation Speed

Modify the shimmer animation in `globals.css`:

```css
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

Change the animation duration in `SkeletonBase.tsx`:

```css
animation: 'shimmer 2s infinite'  /* Change 2s to your preferred speed */
```

#### Custom Colors

Skeleton colors can be customized via Tailwind classes:

```tsx
<SkeletonPulse className="bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-blue-500/10" />
```

## Features

- ✨ **Smooth shimmer animation** - Professional gradient animation
- 🎯 **Component-specific skeletons** - Matches actual component layouts
- 🚀 **React Suspense integration** - Native Next.js loading states
- 📱 **Responsive design** - Works across all screen sizes
- 🎨 **Customizable** - Easy to modify colors, sizes, and timing
- ♿ **Accessible** - Provides visual feedback during loading

## Best Practices

1. **Match the real content**: Skeleton should closely resemble the actual component layout
2. **Avoid over-skeletonizing**: Don't add skeletons to content that loads instantly
3. **Keep it simple**: Use generic skeletons for similar sections to reduce code duplication
4. **Test slow networks**: Use browser DevTools to simulate slow connections and verify UX

## Performance Notes

- Skeleton components are lightweight and render quickly
- CSS animations are GPU-accelerated for smooth performance
- Lazy loading combined with skeletons provides optimal UX
- Next.js Suspense boundaries enable progressive rendering

## File Structure

```
app/
  component/
    skeletons/
      SkeletonBase.tsx           # Base building blocks
      FirstSectionSkeleton.tsx   # Hero section skeleton
      ProjectsSkeleton.tsx       # Projects grid skeleton
      AboutMeSkeleton.tsx        # About section skeleton
      GenericSectionSkeleton.tsx # Reusable skeleton
      ContactSkeleton.tsx        # Contact form skeleton
      index.tsx                  # Central exports
  loading.tsx                    # Page-level loading state
  globals.css                    # Shimmer animation styles
```
