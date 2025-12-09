import type { Variants } from 'framer-motion'

/**
 * Framer Motion animation variants matching Ashley theme
 * Key patterns: Fade up on scroll, individual element triggers, sine easing
 */

// Ashley-style fade up (matches GSAP parameters exactly)
// From Ashley main.js: opacity: 0→1, y: 40→0, scale: 0.98→1, duration: 0.4s, ease: 'sine'
export const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.45, 0.05, 0.55, 0.95], // Sine-like easing curve
        },
    },
}

// Stagger container - children animate 0.15s apart
export const staggerContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

// Faster stagger for card grids
export const fastStaggerContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
}

// Slide in from left
export const slideInLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

// Slide in from right
export const slideInRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

// Scale in animation (for images and larger elements)
export const scaleInVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

// Hero entrance - slightly longer duration for impact
export const heroVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

// Menu overlay animation
export const menuOverlayVariants: Variants = {
    closed: {
        opacity: 0,
        y: '-100%',
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

// Preloader animation
export const preloaderVariants: Variants = {
    initial: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
}

// Hover scale effect for buttons/cards
export const hoverScaleVariants = {
    rest: { scale: 1 },
    hover: { 
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
        }
    },
}

// Card hover lift effect
export const cardHoverVariants = {
    rest: { 
        y: 0,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
    },
    hover: { 
        y: -5,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
        }
    },
}
