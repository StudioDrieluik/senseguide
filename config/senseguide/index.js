const config = {
  meta: {
    title: 'Cient name.',
    social: {
      fb: null,
      twitter: null,
    },
    email: 'hello@client.com',
  },
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
  },
  sites: [
    {
      locale: 'en',
      handle: 'clientNameEn',
    },
    {
      locale: 'nl',
      handle: 'clientNameNl',
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
      hosts: {
        fe: 'http://localhost:8080',
        be: 'http://webserver:8123',
      },
      gtm: null,
      facebookAppId: null,
      tracedock: null,
      seoAllowIndexing: false,
    },
    dev: {
      siteUrl: 'https://dev.client.com',
      hosts: {
        fe: 'https://dev-admin.client.com',
        be: 'https://dev-admin.client.com',
      },
    },
    test: {
      siteUrl: 'https://test.client.com',
      hosts: {
        fe: 'https://test-admin.client.com',
        be: 'https://test-admin.client.com',
      },
    },
    accept: {
      siteUrl: 'https://accept.client.com',
      hosts: {
        fe: 'https://accept-admin.client.com',
        be: 'https://accept-admin.client.com',
      },
    },
    production: {
      siteUrl: 'https://www.client.com',
      hosts: {
        fe: 'https://admin.client.com',
        be: 'https://admin.client.com',
      },
      seoAllowIndexing: true,
      gtm: 'GTM-',
      tracedock: true,
    },
  },
  beforeFilesRewrites: null,
  afterFilesRewrites: null,
};

module.exports = config;
