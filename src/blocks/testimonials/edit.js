import { useState } from 'react';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, Button, ButtonGroup } from '@wordpress/components';

const TestimonialsEdit = ({ attributes, setAttributes }) => {
  const { testimonials = [], layout = 'grid', columns = 3 } = attributes;
  const [selected, setSelected] = useState(0);

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      quote: 'Amazing product!',
      author: 'John Doe',
      role: 'CEO',
      rating: 5,
      image: '',
    };
    setAttributes({ testimonials: [...testimonials, newTestimonial] });
  };

  const updateTestimonial = (index, field, value) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setAttributes({ testimonials: updated });
  };

  const removeTestimonial = (index) => {
    setAttributes({ testimonials: testimonials.filter((_, i) => i !== index) });
  };

  const blockProps = useBlockProps();

  return (
    <>
      <InspectorControls>
        <PanelBody title="Layout Settings">
          <SelectControl
            label="Layout"
            value={layout}
            onChange={(value) => setAttributes({ layout: value })}
            options={[
              { label: 'Grid', value: 'grid' },
              { label: 'Carousel', value: 'carousel' },
              { label: 'List', value: 'list' },
            ]}
          />
          {layout === 'grid' && (
            <RangeControl
              label="Columns"
              value={columns}
              onChange={(value) => setAttributes({ columns: value })}
              min={1}
              max={4}
            />
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="testimonials-container">
          <Button isPrimary onClick={addTestimonial}>
            Add Testimonial
          </Button>

          {testimonials.map((item, idx) => (
            <div key={item.id} className="testimonial-item" onClick={() => setSelected(idx)}>
              <blockquote>{item.quote}</blockquote>
              <p>— {item.author}, {item.role}</p>
              {selected === idx && (
                <div className="testimonial-editor">
                  <textarea
                    value={item.quote}
                    onChange={(e) => updateTestimonial(idx, 'quote', e.target.value)}
                    placeholder="Quote"
                  />
                  <input
                    type="text"
                    value={item.author}
                    onChange={(e) => updateTestimonial(idx, 'author', e.target.value)}
                    placeholder="Author"
                  />
                  <Button isDestructive onClick={() => removeTestimonial(idx)}>
                    Remove
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsEdit;
