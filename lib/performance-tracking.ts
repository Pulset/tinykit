'use client';

import {
  onCLS,
  onINP,
  onFCP,
  onLCP,
  onTTFB,
  Metric,
} from 'web-vitals';

// Extend Window interface for umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

/**
 * Send performance metrics to Umami as custom events
 */
function sendToUmami(metric: Metric) {
  // Ensure umami is available
  if (typeof window !== 'undefined' && window.umami) {
    const eventName = `web_vital_${metric.name.toLowerCase()}`;

    window.umami.track(eventName, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      delta: metric.delta,
      navigationType: metric.navigationType,
    });
  }
}

/**
 * Initialize performance tracking with Web Vitals
 * Sends all metrics to Umami as custom events
 */
export function initPerformanceTracking() {
  // Only run in production or if explicitly enabled
  if (process.env.NODE_ENV === 'production') {
    onCLS(sendToUmami);
    onINP(sendToUmami);
    onFCP(sendToUmami);
    onLCP(sendToUmami);
    onTTFB(sendToUmami);
  } else {
    // In development, log metrics to console
    onCLS((metric) => console.log('CLS:', metric));
    onINP((metric) => console.log('INP:', metric));
    onFCP((metric) => console.log('FCP:', metric));
    onLCP((metric) => console.log('LCP:', metric));
    onTTFB((metric) => console.log('TTFB:', metric));
  }
}

/**
 * Web Vitals metrics explained:
 *
 * CLS (Cumulative Layout Shift): Measures visual stability
 * - Target: < 0.1
 * - Good: < 0.25
 * - Needs improvement: >= 0.25
 *
 * INP (Interaction to Next Paint): Measures interactivity (replaces FID)
 * - Target: < 200ms
 * - Good: < 500ms
 * - Needs improvement: >= 500ms
 *
 * FCP (First Contentful Paint): Measures initial content rendering
 * - Target: < 1.8s
 * - Good: < 3s
 * - Needs improvement: >= 3s
 *
 * LCP (Largest Contentful Paint): Measures main content loading
 * - Target: < 2.5s
 * - Good: < 4s
 * - Needs improvement: >= 4s
 *
 * TTFB (Time to First Byte): Measures server response time
 * - Target: < 800ms
 * - Good: < 1.6s
 * - Needs improvement: >= 1.6s
 */