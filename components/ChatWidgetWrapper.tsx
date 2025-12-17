'use client';

import { usePathname } from 'next/navigation';
import ProactiveChatWidget from './ProactiveChatWidget';

/**
 * Wrapper that handles page-specific chat widget behavior
 * - Homepage: Triggered on scroll to #process section
 * - Other pages: Triggered after 3 second delay
 * - Hidden on homepage hero (chat only appears after scroll)
 */
export default function ChatWidgetWrapper() {
  const pathname = usePathname();
  
  // Don't show chat widget on homepage at all (controlled by scroll trigger)
  const isHomepage = pathname === '/';
  
  if (isHomepage) {
    // Homepage: trigger on scroll to process section
    return (
      <ProactiveChatWidget 
        triggerOnScroll={true}
        scrollTargetId="process"
        triggerDelay={500}
      />
    );
  }
  
  // Other pages: trigger after 3 second delay
  return (
    <ProactiveChatWidget 
      triggerOnScroll={false}
      triggerDelay={3000}
    />
  );
}
