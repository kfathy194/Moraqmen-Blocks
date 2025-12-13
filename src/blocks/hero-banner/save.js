/**
 * Hero Banner Save Component
 */

import { RichText } from '@wordpress/block-editor';

const HeroBannerSave = ( { attributes } ) => {
  const { headline, subheadline, ctaText, ctaUrl, backgroundImageUrl, overlayOpacity, minHeight } = attributes;

  return (
    <div
      className="moraqmen-hero wp-block-moraqmen-hero"
      style={ {
        backgroundImage: `url(${ backgroundImageUrl })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: minHeight,
      } }
    >
      <div
        className="moraqmen-hero__overlay"
        style={ {
          backgroundColor: `rgba(0, 0, 0, ${ overlayOpacity })`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        } }
      >
        <div className="moraqmen-hero__content">
          <RichText.Content tagName="h1" value={ headline } className="moraqmen-hero__headline" />
          <RichText.Content tagName="p" value={ subheadline } className="moraqmen-hero__subheadline" />
          { ctaText && (
            <a href={ ctaUrl } className="moraqmen-cta moraqmen-hero__cta">
              { ctaText }
            </a>
          ) }
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSave;
