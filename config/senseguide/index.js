const config = {
  meta: {
    title: 'Senseguide',
    social: {
      fb: null,
      twitter: null,
    },
    email: 'contact@senseguide.nl',
  },
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
  },
  sites: [
    {
      locale: 'en',
      handle: 'en-gb',
    },
    {
      locale: 'nl',
      handle: 'nl-nl',
    },
  ],
  pages: {
    home: {
      options: null,
    },
  },
  environments: {
    local: {
      siteUrl: 'http://localhost:8080',
      graphqlUri: 'https://senseguide.cdn.prismic.io/graphql',
      gtm: null,
      seoAllowIndexing: false,
    },
    production: {
      siteUrl: 'https://www.senseguide.nl',
      graphqlUri: 'https://senseguide.cdn.prismic.io/graphql',
      gtm: 'GTM-',
      seoAllowIndexing: true,
    },
  },
  beforeFilesRewrites: null,
  afterFilesRewrites: null,
};

module.exports = config;
