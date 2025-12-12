# Moraqmen-Blocks - Implementation Guide

## Current Status ✅

**Completed Files:**
- ✅ plugin.php - Main WordPress plugin entry point
- ✅ package.json - npm configuration with dependencies
- ✅ README.md - Complete documentation
- ✅ .copilot-instructions - GitHub Copilot optimization guide
- ✅ tailwind.config.js - Tailwind CSS with FSE sync
- ✅ .gitignore - Node.js ignore rules
- ✅ src/utils/constants.js - Shared constants
- ✅ src/utils/classNameHelpers.js - Utility functions

## Remaining Files to Create

The remaining files follow a specific structure. Each must be created in the correct location.

### 1. Core Entry Point: src/index.js

**File Path:** `src/index.js`

```javascript
import './styles/tailwind.css';
import './styles/global.css';

// Register all custom blocks
import './blocks/hero-banner';
import './blocks/feature-cards';
import './blocks/testimonials';
import './blocks/cta-button';
```

### 2. Styling Files

#### src/styles/tailwind.css

**File Path:** `src/styles/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Block-specific component styles */
@layer components {
  .moraqmen-hero-banner {
    @apply relative overflow-hidden;
  }

  .moraqmen-feature-cards {
    @apply grid gap-4;
  }

  .moraqmen-testimonials {
    @apply space-y-4;
  }
}
```

#### src/styles/global.css

**File Path:** `src/styles/global.css`

```css
/* Global editor styles */
.wp-block-moraqmen-blocks-hero-banner {
  margin-bottom: 1.5em;
}

.wp-block-moraqmen-blocks-feature-cards {
  margin-bottom: 1.5em;
}

.wp-block-moraqmen-blocks-testimonials {
  margin-bottom: 1.5em;
}

.wp-block-moraqmen-blocks-cta-button {
  margin-bottom: 1.5em;
}
```

### 3. Block Files

Each block requires 4 files:
- `block.json` - Block metadata
- `index.js` - Block registration
- `edit.js` - Editor component
- `save.js` - Frontend render
- `style.css` - Block styles

#### Block Template Structure

**File:** `src/blocks/[block-name]/block.json`

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "moraqmen-blocks/block-name",
  "title": "Block Title",
  "description": "Block description",
  "category": "common",
  "icon": "format-image",
  "supports": {
    "html": false,
    "align": true
  },
  "textdomain": "moraqmen-blocks",
  "attributes": {
    "content": {
      "type": "string",
      "default": ""
    }
  },
  "editorScript": "file:./index.js",
  "editorStyle": "file:./style.css"
}
```

**File:** `src/blocks/[block-name]/index.js`

```javascript
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import blockJson from './block.json';

registerBlockType( blockJson.name, {
  ...blockJson,
  edit: Edit,
  save: save,
} );
```

**File:** `src/blocks/[block-name]/edit.js`

```javascript
/**
 * [Block Name] Block Edit Component
 */
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { mergeClasses } from '../../utils/classNameHelpers';
import { BLOCK_CLASSES } from '../../utils/constants';

const Edit = ( { attributes, setAttributes, className } ) => {
  const { content } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings">
          <TextControl
            label="Content"
            value={content}
            onChange={( value ) => setAttributes( { content: value } )}
          />
        </PanelBody>
      </InspectorControls>
      <div className={mergeClasses( className, 'moraqmen-block-edit' )}>
        <RichText
          tagName="div"
          value={content}
          onChange={( value ) => setAttributes( { content: value } )}
          placeholder="Enter content..."
        />
      </div>
    </>
  );
};

export default Edit;
```

**File:** `src/blocks/[block-name]/save.js`

```javascript
/**
 * [Block Name] Block Save Component
 */
import { RichText } from '@wordpress/block-editor';

const save = ( { attributes } ) => {
  const { content } = attributes;

  return (
    <div className="moraqmen-block-save">
      <RichText.Content value={content} />
    </div>
  );
};

export default save;
```

**File:** `src/blocks/[block-name]/style.css`

```css
.moraqmen-block-save {
  padding: 1rem;
  border-radius: 0.375rem;
}

.moraqmen-block-edit {
  padding: 1rem;
  border: 2px dashed #ccc;
  border-radius: 0.375rem;
}
```

### 4. Blocks to Create

Create these 4 blocks using the template above:

1. **hero-banner** - Full-width hero section
   - Path: `src/blocks/hero-banner/`
   - Attributes: image, headline, description, cta-text, cta-url

2. **feature-cards** - Grid of feature cards
   - Path: `src/blocks/feature-cards/`
   - Attributes: cards (array), columns, align

3. **testimonials** - Testimonial display
   - Path: `src/blocks/testimonials/`
   - Attributes: testimonials (array), style

4. **cta-button** - Call-to-action button
   - Path: `src/blocks/cta-button/`
   - Attributes: text, url, variant, align

### 5. Boilerplate Block Template

**Path:** `src/blocks/_boilerplate/`

Use this structure as a template when creating new blocks. Copy the entire `_boilerplate` folder and customize the block.json, edit.js, and save.js files.

## Additional Utility Files

### src/utils/themeConfig.js (Optional but Recommended)

```javascript
/**
 * FSE Theme Configuration Parser
 * Reads theme.json and extracts design tokens
 */

export const parseThemeColors = ( themeJson ) => {
  if ( !themeJson?.settings?.color?.palette ) {
    return {};
  }

  return themeJson.settings.color.palette.reduce( ( colors, item ) => {
    colors[ item.slug ] = item.color;
    return colors;
  }, {} );
};

export const parseThemeSpacing = ( themeJson ) => {
  if ( !themeJson?.settings?.spacing?.spacingSizes ) {
    return {};
  }

  return themeJson.settings.spacing.spacingSizes.reduce( ( spacing, item ) => {
    spacing[ item.slug ] = item.size;
    return spacing;
  }, {} );
};
```

## Setup & Build Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode

```bash
npm run start
```

This watches for file changes and automatically rebuilds.

### 3. Production Build

```bash
npm run build
```

Creates minified, optimized output in `build/` directory.

### 4. Activate Plugin

1. Copy plugin folder to `wp-content/plugins/`
2. Go to WordPress Admin → Plugins
3. Activate "Moraqmen Blocks"
4. Start using blocks in the block editor

## File Checklist

Use this checklist to ensure all files are created:

- [ ] plugin.php
- [ ] package.json
- [ ] tailwind.config.js
- [ ] README.md
- [ ] .copilot-instructions
- [ ] .gitignore
- [ ] src/index.js
- [ ] src/styles/tailwind.css
- [ ] src/styles/global.css
- [ ] src/utils/constants.js
- [ ] src/utils/classNameHelpers.js
- [ ] src/utils/themeConfig.js (optional)
- [ ] src/blocks/hero-banner/block.json
- [ ] src/blocks/hero-banner/index.js
- [ ] src/blocks/hero-banner/edit.js
- [ ] src/blocks/hero-banner/save.js
- [ ] src/blocks/hero-banner/style.css
- [ ] src/blocks/feature-cards/* (same structure)
- [ ] src/blocks/testimonials/* (same structure)
- [ ] src/blocks/cta-button/* (same structure)
- [ ] src/blocks/_boilerplate/* (template)

## GitHub Copilot Tips

1. **Copy _boilerplate folder** when creating new blocks
2. **Use descriptive comments** in edit.js and save.js for better suggestions
3. **Ask Copilot**: "Create a [block-name] block with [attributes]"
4. **Reference .copilot-instructions** for patterns and conventions

## Next Steps

1. Clone the repository locally
2. Create remaining files using templates above
3. Run `npm install && npm run build`
4. Activate plugin in WordPress
5. Start building and extending blocks

## Support & Resources

- **README.md** - Complete documentation
- **.copilot-instructions** - Copilot optimization guide
- **plugin.php** - PHP structure reference
- **package.json** - Dependencies and scripts
