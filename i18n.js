const config = require(`./config/index.js`);

module.exports = {
  locales: config.i18n.locales,
  defaultLocale: config.i18n.defaultLocale,
  localeDetection: false,
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) => {
    return import(`./locales/${process.env.NEXT_PUBLIC_SITE}/${lang}/common.js`).then(m => m.default);
  },
};
