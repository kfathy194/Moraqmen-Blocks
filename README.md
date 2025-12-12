# Moraqmen-Blocks

🚀 Custom Gutenberg blocks for WordPress FSE with Tailwind CSS integration and GitHub Copilot optimization.

## Overview

Moraqmen-Blocks is a production-ready WordPress plugin providing five foundational custom Gutenberg blocks designed for Full Site Editing (FSE) in WordPress 6.x. All blocks feature seamless Tailwind CSS integration with FSE theme.json inheritance, functional React components, and GitHub Copilot-optimized code structure.

### Featured Blocks

1. **Hero Banner** - Full-width hero section with image, text overlay, and CTA
2. **Feature Cards** - Grid layout with icon, title, and description
3. **Testimonials** - Carousel/grid display with avatar, quote, and author
4. **CTA Button** - Standalone call-to-action with multiple variations
5. **Boilerplate** - Reusable template for creating new custom blocks

## Features

✨ **Tailwind CSS + FSE Integration**
- Automatic color/spacing inheritance from FSE theme.json
- Dynamic Tailwind config syncing at build time
- Zero hardcoded design tokens - fully theme-aware

✨ **GitHub Copilot Optimized**
- Copilot-friendly folder structure
- Comprehensive JSDoc comments for better AI suggestions
- Clear naming conventions and modular design

✨ **Modern React Development**
- Functional React components (no TypeScript)
- ES6+ syntax with modern hooks
- Production-ready code quality

✨ **Complete Build Pipeline**
- npm scripts for dev/prod workflows
- Minification and optimization included
- Source maps for debugging

## Installation

### Step 1: Clone or Download

```bash
git clone https://github.com/kfathy194/Moraqmen-Blocks.git
cd Moraqmen-Blocks
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Build the Plugin

```bash
# Development build with watch mode
npm run start

# Production build
npm run build
```

### Step 4: Activate in WordPress

1. Copy the plugin folder to `wp-content/plugins/`
2. Go to WordPress Admin Dashboard
3. Navigate to Plugins
4. Activate "Moraqmen-Blocks"
5. Start using blocks in the block editor

## Project Structure

```
moraqmen-blocks/
├── plugin.php                    # Main plugin file
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind + FSE sync config
├── webpack.config.js             # Build configuration
├── src/
│   ├── blocks/
│   │   ├── hero-banner/          # Hero Banner block
│   │   ├── feature-cards/        # Feature Cards block
│   │   ├── testimonials/         # Testimonials block
│   │   ├── cta-button/           # CTA Button block
│   │   └── _boilerplate/         # Template for new blocks
│   ├── utils/
│   │   ├── themeConfig.js        # FSE theme parser
│   │   ├── classNameHelpers.js   # Utility functions
│   │   └── constants.js          # Shared constants
│   ├── styles/
│   │   ├── tailwind.css          # Tailwind directives
│   │   └── global.css            # Global editor styles
│   └── index.js                  # Entry point
├── build/                        # Compiled output
└── .github/
    └── copilot-patterns.md       # Copilot optimization guide
```

## Development Workflow

### Using GitHub Copilot

1. Open the project in VSCode
2. Enable GitHub Copilot extension
3. Reference the `.copilot-instructions` file for prompting patterns
4. Start typing comments - Copilot will suggest block implementations

### Adding New Blocks

1. Copy the `_boilerplate` folder
2. Rename to your block name
3. Update `block.json` metadata
4. Implement `edit.js` and `save.js` components
5. Run `npm run build` to compile

## npm Scripts

```bash
npm run start       # Development mode with file watching
npm run build       # Production build
npm run lint        # Code quality checks
npm run format      # Code formatting (Prettier)
```

## Tailwind CSS Integration

The plugin automatically reads FSE theme.json and syncs colors/spacing:

```javascript
// Colors, spacing, and typography inherit from FSE theme
<div className="bg-primary-500 p-4 md:p-6">
  // Uses theme-defined colors and spacing
</div>
```

## Browser Support

- WordPress 6.x with FSE enabled
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Block editor compatible

## Requirements

- WordPress 6.x
- Node.js 16+
- npm 8+

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

GPL v2 or later

## Support

For issues and feature requests, please use the GitHub issues section.

## Changelog

### Version 1.0.0
- Initial release
- 5 foundational blocks included
- Tailwind CSS + FSE integration
- GitHub Copilot optimization
- Complete build pipeline
