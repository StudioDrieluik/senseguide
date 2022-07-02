const ROUTES = require('./routes');

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
  afterFilesRewrites: [
    {
      source: `/en/${ROUTES.ABOUT_US.en}`,
      destination: `/${ROUTES.ABOUT_US.nl}`,
      locale: false,
    },
    {
      source: `/en/${ROUTES.STORIES.en}`,
      destination: `/${ROUTES.STORIES.nl}`,
      locale: false,
    },
    {
      source: `/en/${ROUTES.STORIES.en}/:slug*`,
      destination: `/${ROUTES.STORIES.nl}/:slug*`,
      locale: false,
    },
    {
      source: `/en/${ROUTES.AUDIENCES.en}/:slug*`,
      destination: `/${ROUTES.AUDIENCES.nl}/:slug*`,
      locale: false,
    },
  ],
};

module.exports = config;
