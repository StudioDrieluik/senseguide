const { BREAKPOINTS } = require('../constants/breakpoints');

export const Image = ({ image, lazyload = true, withCredits = false }) => {
  if (!image) return null;

  const {
    placeholder,
    mobile,
    mobile2x,
    tablet,
    tablet2x,
    desktop,
    desktop2x,
    desktopL,
    desktopL2x,
    desktopXL,
    desktopXXL,
    mobileWebp,
    mobile2xWebp,
    tabletWebp,
    tablet2xWebp,
    desktopWebp,
    desktop2xWebp,
    desktopLWebp,
    desktopL2xWebp,
    desktopXLWebp,
    desktopXXLWebp,
    title,
    mimeType,
    altText,
    credit,
  } = image;

  const ratioStyles = {
    '--mobile-ratio-width': image.mobileRatioWidth,
    '--mobile-ratio-height': image.mobileRatioHeight,
    '--tablet-ratio-width': image.tabletRatioWidth,
    '--tablet-ratio-height': image.tabletRatioHeight,
    '--desktop-ratio-width': image.desktopRatioWidth,
    '--desktop-ratio-height': image.desktopRatioHeight,
  };

  return (
    <div className={`lazyload-image ${lazyload ? 'lazyloaded' : ''}`}>
      <picture>
        {desktopXXL && lazyload && (
          <source
            data-srcset={`${desktopXXLWebp} 1x`}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type="image/webp"
          />
        )}

        {desktopXXL && !lazyload && (
          <source
            srcSet={`${desktopXXLWebp} 1x`}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type="image/webp"
          />
        )}

        {desktopXL && lazyload && (
          <source
            data-srcset={`${desktopXLWebp} 1x`}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type="image/webp"
          />
        )}

        {desktopXL && !lazyload && (
          <source
            srcSet={`${desktopXLWebp} 1x`}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type="image/webp"
          />
        )}

        {desktopL && lazyload && (
          <source
            data-srcset={`${desktopLWebp} 1x, ${desktopL2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type="image/webp"
          />
        )}

        {desktopL && !lazyload && (
          <source
            srcSet={`${desktopLWebp} 1x, ${desktopL2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type="image/webp"
          />
        )}

        {desktop && lazyload && (
          <source
            data-srcset={`${desktopWebp} 1x, ${desktop2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type="image/webp"
          />
        )}

        {desktop && !lazyload && (
          <source
            srcSet={`${desktopWebp} 1x, ${desktop2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type="image/webp"
          />
        )}

        {tablet && lazyload && (
          <source
            data-srcset={`${tabletWebp} 1x, ${tablet2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type="image/webp"
          />
        )}

        {tablet && !lazyload && (
          <source
            srcSet={`${tabletWebp} 1x, ${tablet2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type="image/webp"
          />
        )}

        {lazyload && (
          <source
            data-srcset={`${mobileWebp} 1x, ${mobile2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.xs})`}
            type="image/webp"
          />
        )}

        {!lazyload && (
          <source
            srcSet={`${mobileWebp} 1x, ${mobile2xWebp} 2x`}
            media={`(min-width: ${BREAKPOINTS.xs})`}
            type="image/webp"
          />
        )}

        {desktopXXL && lazyload && (
          <source
            data-srcset={`${desktopXXL} 1x`}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type={mimeType}
          />
        )}

        {desktopXXL && !lazyload && (
          <source
            srcSet={`${desktopXXL} 1x`}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type={mimeType}
          />
        )}

        {desktopXL && lazyload && (
          <source
            data-srcset={`${desktopXL} 1x`}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type={mimeType}
          />
        )}

        {desktopXL && !lazyload && (
          <source
            srcSet={`${desktopXL} 1x`}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type={mimeType}
          />
        )}

        {desktopL && lazyload && (
          <source
            data-srcset={`${desktopL} 1x, ${desktopL2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type={mimeType}
          />
        )}

        {desktopL && !lazyload && (
          <source
            srcSet={`${desktopL} 1x, ${desktopL2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type={mimeType}
          />
        )}

        {desktop && lazyload && (
          <source
            data-srcset={`${desktop} 1x, ${desktop2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type={mimeType}
          />
        )}

        {desktop && !lazyload && (
          <source
            srcSet={`${desktop} 1x, ${desktop2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type={mimeType}
          />
        )}

        {tablet && lazyload && (
          <source
            data-srcset={`${tablet} 1x, ${tablet2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type={mimeType}
          />
        )}

        {tablet && !lazyload && (
          <source
            srcSet={`${tablet} 1x, ${tablet2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type={mimeType}
          />
        )}

        {lazyload && (
          <source
            data-srcset={`${mobile} 1x, ${mobile2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.xs})`}
            type={mimeType}
          />
        )}

        {!lazyload && (
          <source
            srcSet={`${mobile} 1x, ${mobile2x} 2x`}
            media={`(min-width: ${BREAKPOINTS.xs})`}
            type={mimeType}
          />
        )}

        {lazyload ? (
          <img
            data-src={mobile}
            data-sizes="auto"
            data-lowsrc={placeholder}
            className="lazyload"
            alt={altText || title}
            style={ratioStyles}
          />
        ) : (
          <img src={mobile} sizes="auto" alt={altText || title} style={ratioStyles} />
        )}
      </picture>
      {withCredits && credit && (
        <span>
          <p className="text-sm opacity-30">{credit}</p>
        </span>
      )}
    </div>
  );
};
