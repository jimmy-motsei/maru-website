'use client';

import { useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        trackMetric({
          name: 'LCP',
          value: lcp,
          rating: lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs-improvement' : 'poor'
        });
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          
          trackMetric({
            name: 'FID',
            value: fid,
            rating: fid <= 100 ? 'good' : fid <= 300 ? 'needs-improvement' : 'poor'
          });
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        trackMetric({
          name: 'CLS',
          value: clsValue,
          rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor'
        });
      }).observe({ entryTypes: ['layout-shift'] });
    };

    const trackMetric = (metric: PerformanceMetric) => {
      // Send to analytics
      if (typeof window !== 'undefined' && window.trackConversion) {
        window.trackConversion('performance_metric', {
          metric_name: metric.name,
          metric_value: metric.value,
          metric_rating: metric.rating,
          page_path: window.location.pathname,
        });
      }

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: metric.name,
          value: Math.round(metric.value),
          custom_map: { metric_rating: metric.rating },
        });
      }
    };

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      trackMetric({
        name: 'Page Load Time',
        value: loadTime,
        rating: loadTime <= 2000 ? 'good' : loadTime <= 4000 ? 'needs-improvement' : 'poor'
      });
    });

    // Initialize Web Vitals tracking
    if (typeof window !== 'undefined') {
      trackWebVitals();
    }
  }, []);

  return null;
}

// Hook for manual performance tracking
export function usePerformanceTracking() {
  const trackCustomMetric = (name: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('custom_performance', {
        metric_name: name,
        duration,
        page_path: window.location.pathname,
      });
    }
  };

  const startTimer = () => performance.now();

  return { trackCustomMetric, startTimer };
}