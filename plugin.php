<?php
/**
 * Plugin Name: Moraqmen Blocks
 * Plugin URI: https://github.com/kfathy194/Moraqmen-Blocks
 * Description: Custom Gutenberg blocks for WordPress FSE with Tailwind CSS integration and GitHub Copilot optimization
 * Version: 1.0.0
 * Author: Kfathy194
 * Author URI: https://github.com/kfathy194
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: moraqmen-blocks
 * Domain Path: /languages
 * Requires: 6.0
 * Requires PHP: 7.4
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Define plugin constants
 */
define( 'MORAQMEN_BLOCKS_VERSION', '1.0.0' );
define( 'MORAQMEN_BLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'MORAQMEN_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'MORAQMEN_BLOCKS_ASSETS_DIR', MORAQMEN_BLOCKS_PLUGIN_DIR . 'build/' );
define( 'MORAQMEN_BLOCKS_ASSETS_URL', MORAQMEN_BLOCKS_PLUGIN_URL . 'build/' );

/**
 * Load plugin text domain for translations
 */
add_action( 'init', function() {
    load_plugin_textdomain(
        'moraqmen-blocks',
        false,
        dirname( plugin_basename( __FILE__ ) ) . '/languages'
    );
} );

/**
 * Register all custom blocks
 */
add_action( 'init', function() {
    // Blocks directory
    $blocks_dir = MORAQMEN_BLOCKS_PLUGIN_DIR . 'src/blocks/';

    // Block array with metadata
    $blocks = array(
        'hero-banner',
        'feature-cards',
        'testimonials',
        'cta-button',
    );

    // Register each block
    foreach ( $blocks as $block ) {
        $block_path = $blocks_dir . $block . '/block.json';
        if ( file_exists( $block_path ) ) {
            register_block_type( $block_path );
        }
    }
} );

/**
 * Enqueue editor styles and scripts
 */
add_action( 'enqueue_block_editor_assets', function() {
    // Enqueue editor styles
    wp_enqueue_style(
        'moraqmen-blocks-editor',
        MORAQMEN_BLOCKS_ASSETS_URL . 'index.css',
        array(),
        MORAQMEN_BLOCKS_VERSION
    );
} );

/**
 * Enqueue frontend styles and scripts
 */
add_action( 'wp_enqueue_scripts', function() {
    // Enqueue frontend styles
    wp_enqueue_style(
        'moraqmen-blocks-frontend',
        MORAQMEN_BLOCKS_ASSETS_URL . 'style-index.css',
        array(),
        MORAQMEN_BLOCKS_VERSION
    );
} );

/**
 * Activation hook - create necessary directories
 */
register_activation_hook( __FILE__, function() {
    // Ensure build directory exists
    $build_dir = MORAQMEN_BLOCKS_PLUGIN_DIR . 'build';
    if ( ! is_dir( $build_dir ) ) {
        mkdir( $build_dir, 0755, true );
    }
} );

/**
 * Deactivation hook
 */
register_deactivation_hook( __FILE__, function() {
    // Cleanup if needed
} );
