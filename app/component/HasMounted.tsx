'use client';

import { ReactNode, useEffect, useState } from 'react';

interface HasMountedProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A hydration guard component that ensures children are only rendered on the client.
 * This prevents "Hydration failed" or "Minified React error" when server-rendered HTML
 * doesn't match client-rendered initial state (common with animations and dynamic logic).
 */
export default function HasMounted({ children, fallback = null }: HasMountedProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
