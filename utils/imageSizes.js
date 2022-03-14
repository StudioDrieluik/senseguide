/*  How this works. Quite easy, luckily:
 **  1. Create an object with a custom name (eg: hero)
 **  2. Pass this object the sizes you need (mobile, tablet, desktop, desktopL, desktopXL and/or desktopXXL).
 **     Only mobile is required
 **  3. Define the dimensions and cropping mode for this size: [width, height, mode]. Width & height are required,
 **     but can be passed 0 which will work as 'auto'. Mode is optional (mode:crop will be used as default), possible
 **     options for mode are: crop, fit, stretch
 */

export const sizes = {
  hero: {
    mobile: [480, 270],
    tablet: [1024, 576],
    desktop: [1280, 720],
    desktopL: [1440, 810],
    desktopXL: [1600, 900],
    desktopXXL: [1920, 1080],
  },
  square: {
    mobile: [480, 480],
    tablet: [480, 480],
    desktop: [640, 640],
    desktopL: [1000, 1000],
    desktopXL: [1200, 1200],
  },
};
