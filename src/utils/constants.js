/**
 * Shared Constants for Moraqmen Blocks
 * Centralized configuration and constant values
 */

// Block CSS class prefixes for scoping styles
export const BLOCK_CLASSES = {
  HERO: 'moraqmen-hero-banner',
  HERO_CONTENT: 'moraqmen-hero-banner__content',
  HERO_OVERLAY: 'moraqmen-hero-banner__overlay',
  
  CARDS: 'moraqmen-feature-cards',
  CARDS_CONTAINER: 'moraqmen-feature-cards__container',
  CARDS_ITEM: 'moraqmen-feature-cards__item',
  
  TESTIMONIALS: 'moraqmen-testimonials',
  TESTIMONIALS_ITEM: 'moraqmen-testimonials__item',
  TESTIMONIALS_QUOTE: 'moraqmen-testimonials__quote',
  
  CTA: 'moraqmen-cta-button',
  CTA_CONTAINER: 'moraqmen-cta-button__container',
};

// Default color palette
export const DEFAULT_COLORS = {
  primary: 'bg-blue-600',
  secondary: 'bg-indigo-600',
  accent: 'bg-cyan-500',
  success: 'bg-green-600',
  warning: 'bg-yellow-500',
  error: 'bg-red-600',
  neutral: 'bg-gray-600',
};

// Default spacing scale
export const DEFAULT_SPACING = {
  xs: 'px-2 py-2',
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-6 py-4',
  xl: 'px-8 py-6',
};

// Button variants
export const BUTTON_VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-current text-current hover:bg-current hover:text-white',
  ghost: 'text-current hover:bg-gray-100',
};

// Alignment options
export const ALIGN_OPTIONS = [
  { label: 'Left', value: 'flex-start' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'flex-end' },
  { label: 'Space Between', value: 'space-between' },
];

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 'sm',
  tablet: 'md',
  desktop: 'lg',
  wide: 'xl',
};

// Animation options
export const ANIMATION_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Fade In', value: 'fade-in' },
  { label: 'Slide In', value: 'slide-in' },
  { label: 'Bounce In', value: 'bounce-in' },
];
