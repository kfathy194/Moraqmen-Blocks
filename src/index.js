/**
 * Moraqmen Blocks - Main Entry Point
 * 
 * Register all custom Gutenberg blocks for the plugin.
 * This file imports and registers each block with the proper FSE integration.
 */

// Import block registrations
import './blocks/hero-banner';
import './blocks/feature-cards';
import './blocks/testimonials';
import './blocks/cta-button';
import './_boilerplate';

// Import styles
import './styles/global.css';
import './styles/tailwind.css';

/**
 * Moraqmen Blocks Plugin
 * 
 * Custom Gutenberg blocks with:
 * - Tailwind CSS v3+ integration
 * - FSE theme.json color/spacing inheritance
 * - Full-width editing capabilities
 * - GitHub Copilot optimized structure
 */

wp.hooks.addFilter(
  'blocks.registerBlockType',
  'moraqmen-blocks/register',
  ( settings, name ) => {
    // Add any global block settings here
    return settings;
  }
);

console.log( '[Moraqmen Blocks] Plugin initialized successfully' );
