/**
 * Testimonials Block - Registration
 */

import { registerBlockType } from '@wordpress/blocks';
import TestimonialsEdit from './edit';
import TestimonialsSave from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
  ...metadata,
  edit: TestimonialsEdit,
  save: TestimonialsSave,
});
