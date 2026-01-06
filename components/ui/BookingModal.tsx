"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // The user's specific scheduling page
  const CALENDLY_URL = "https://calendly.com/hello-maruonline"; 

  useEffect(() => {
    // Listen for the custom trigger event
    const handleOpen = () => setIsOpen(true);
    
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  // Avoid hydration mismatch by checking for window
  if (typeof window === "undefined") return null;

  return (
    <PopupModal
      url={CALENDLY_URL}
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={document.body}
    />
  );
}
