'use client';

import { useEffect, useState } from 'react';

interface ABTestProps {
  testName: string;
  variants: {
    [key: string]: React.ReactNode;
  };
  defaultVariant?: string;
  weights?: { [key: string]: number };
}

export function ABTest({ 
  testName, 
  variants, 
  defaultVariant = 'control',
  weights = {} 
}: ABTestProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>(defaultVariant);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user already has a variant assigned
    const storageKey = `ab_test_${testName}`;
    const existingVariant = localStorage.getItem(storageKey);
    
    if (existingVariant && variants[existingVariant]) {
      setSelectedVariant(existingVariant);
    } else {
      // Assign new variant based on weights
      const variantKeys = Object.keys(variants);
      const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0) || variantKeys.length;
      
      let random = Math.random() * totalWeight;
      let chosenVariant = defaultVariant;
      
      for (const variant of variantKeys) {
        const weight = weights[variant] || 1;
        if (random < weight) {
          chosenVariant = variant;
          break;
        }
        random -= weight;
      }
      
      setSelectedVariant(chosenVariant);
      localStorage.setItem(storageKey, chosenVariant);
      
      // Track variant assignment
      if (typeof window !== 'undefined' && window.trackConversion) {
        window.trackConversion('ab_test_assigned', {
          test_name: testName,
          variant: chosenVariant,
        });
      }
    }
    
    setIsLoaded(true);
  }, [testName, variants, defaultVariant, weights]);

  // Don't render anything until variant is determined
  if (!isLoaded) {
    return null;
  }

  return <>{variants[selectedVariant] || variants[defaultVariant]}</>;
}

// Hook for tracking A/B test conversions
export function useABTestConversion(testName: string) {
  const trackConversion = (conversionType: string = 'conversion') => {
    const storageKey = `ab_test_${testName}`;
    const variant = localStorage.getItem(storageKey);
    
    if (variant && typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('ab_test_conversion', {
        test_name: testName,
        variant,
        conversion_type: conversionType,
      });
    }
  };
  
  return { trackConversion };
}