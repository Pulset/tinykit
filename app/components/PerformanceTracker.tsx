'use client';

import { useEffect } from 'react';
import { initPerformanceTracking } from '@/lib/performance-tracking';

/**
 * PerformanceTracker component
 * Initializes Web Vitals tracking and sends metrics to Umami
 *
 * Place this component in your layout to enable performance tracking
 */
export function PerformanceTracker() {
  useEffect(() => {
    // Initialize performance tracking after component mounts
    initPerformanceTracking();
  }, []);

  return null; // This component doesn't render anything
}
