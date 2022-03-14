/* eslint-disable import/prefer-default-export */
import { sizes } from '@/utils/imageSizes';

export const IMAGES = imageSize => {
  const size = sizes[imageSize];
  if (!size) {
    // eslint-disable-next-line no-console
    console.error(`🚨 Oops! '${imageSize}' image size doesn't exist. Add it to the helpers/imageSizes.js file`);
    return;
  }

  const { mobile, tablet, desktop, desktopL, desktopXL, desktopXXL } = size;

  // prettier-ignore
  return `
    placeholder: url @transform( width: ${parseInt(mobile[0] / 4)}, height: ${parseInt(mobile[1] / 4)}, immediately: true, mode: "${mobile[2] ? mobile[2] : 'crop'}", quality: 35)
    mobile: url @transform( width: ${mobile[0]}, height: ${mobile[1]}, immediately: false, mode: "${mobile[2] ? mobile[2] : 'crop'}")
    mobile2x: url @transform( width: ${mobile[0] * 2}, height: ${mobile[1] * 2}, immediately: false, mode: "${mobile[2] ? mobile[2] : 'crop'}")
    ${tablet ? `tablet: url @transform( width: ${tablet[0]}, height: ${tablet[1]}, immediately: false, mode: "${tablet[2] ? tablet[2] : 'crop'}")` : ''}
    ${tablet ? `tablet2x: url @transform( width: ${tablet[0] * 2}, height: ${tablet[1] * 2}, immediately: false, mode: "${tablet[2] ? tablet[2] : 'crop'}")` : ''}
    ${desktop ? `desktop: url @transform( width: ${desktop[0]}, height: ${desktop[1]}, immediately: false, mode: "${desktop[2] ? desktop[2] : 'crop'}")` : ''}
    ${desktop ? `desktop2x: url @transform( width: ${desktop[0] * 2}, height: ${desktop[1] * 2}, immediately: false, mode: "${desktop[2] ? desktop[2] : 'crop'}")` : ''}
    ${desktopL ? `desktopL: url @transform( width: ${desktopL[0]}, height: ${desktopL[1]}, immediately: false, mode: "${desktopL[2] ? desktopL[2] : 'crop'}")` : ''}
    ${desktopL ? `desktopL2x: url @transform( width: ${desktopL[0] * 2}, height: ${desktopL[1] * 2}, immediately: false, mode: "${desktopL[2] ? desktopL[2] : 'crop'}")` : ''}
    ${desktopXL ? `desktopXL: url @transform( width: ${desktopXL[0]}, height: ${desktopXL[1]}, immediately: false, mode: "${desktopXL[2] ? desktopXL[2] : 'crop'}")` : ''}
    ${desktopXXL ? `desktopXXL: url @transform( width: ${desktopXXL[0]}, height: ${desktopXXL[1]}, immediately: false, mode: "${desktopXXL[2] ? desktopXXL[2] : 'crop'}")` : ''}

    mobileWebp: url @transform( format: "webp", width: ${mobile[0]}, height: ${mobile[1]}, immediately: false, mode: "${mobile[2] ? mobile[2] : 'crop' }")
    mobile2xWebp: url @transform( format: "webp", width: ${mobile[0] * 2}, height: ${mobile[1] * 2}, immediately: false, mode: "${mobile[2] ? mobile[2] : 'crop'}")
    ${tablet ? `tabletWebp: url @transform( format: "webp", width: ${tablet[0]}, height: ${tablet[1]}, immediately: false, mode: "${tablet[2] ? tablet[2] : 'crop'}")` : ''}
    ${tablet ? `tablet2xWebp: url @transform( format: "webp", width: ${tablet[0] * 2}, height: ${tablet[1] * 2}, immediately: false, mode: "${tablet[2] ? tablet[2] : 'crop'}")` : ''}
    ${desktop ? `desktopWebp: url @transform( format: "webp", width: ${desktop[0]}, height: ${desktop[1]}, immediately: false, mode: "${desktop[2] ? desktop[2] : 'crop'}")` : ''}
    ${desktop ? `desktop2xWebp: url @transform( format: "webp", width: ${desktop[0] * 2}, height: ${desktop[1] * 2}, immediately: false, mode: "${desktop[2] ? desktop[2] : 'crop'}")` : ''}
    ${desktopL ? `desktopLWebp: url @transform( format: "webp", width: ${desktopL[0]}, height: ${desktopL[1]}, immediately: false, mode: "${desktopL[2] ? desktopL[2] : 'crop'}")` : ''}
    ${desktopL ? `desktopL2xWebp: url @transform( format: "webp", width: ${desktopL[0] * 2}, height: ${desktopL[1] * 2}, immediately: false, mode: "${desktopL[2] ? desktopL[2] : 'crop'}")` : ''}
    ${desktopXL ? `desktopXLWebp: url @transform( format: "webp", width: ${desktopXL[0]}, height: ${desktopXL[1]}, immediately: false, mode: "${desktopXL[2] ? desktopXL[2] : 'crop'}")` : ''}
    ${desktopXXL ? `desktopXXLWebp: url @transform( format: "webp", width: ${desktopXXL[0]}, height: ${desktopXXL[1]}, immediately: false, mode: "${desktopXXL[2] ? desktopXXL[2] : 'crop'}")` : ''}

    mobileRatioHeight: height @transform(width: ${mobile[0]}, height: ${mobile[1]})
    mobileRatioWidth: width @transform(width: ${mobile[0]}, height: ${mobile[1]})
    ${tablet ? `tabletRatioHeight: height @transform(width: ${tablet[0]}, height: ${tablet[1]}` : ''})
    ${tablet ? `tabletRatioWidth: width @transform(width: ${tablet[0]}, height: ${tablet[1]}` : ''})
    ${desktop ? `desktopRatioHeight: height @transform(width: ${desktop[0]}, height: ${desktop[1]}` : ''})
    ${desktop ? `desktopRatioWidth: width @transform(width: ${desktop[0]}, height: ${desktop[1]}` : ''})

    id
    title
    mimeType
    ...on images_Asset {
      altText
      url
    }
  `;
};
