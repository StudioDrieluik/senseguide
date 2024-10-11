const nextTranslate = require('next-translate');
const config = require(`./config/index.js`);
const withPrismicSitemap = require('@reecem/prismic-sitemap');

const nextConfig = () => {
  const settings = process.env.SETTINGS || '<not declared>';

  const env = {
    ...config.environments.default,
    ...config.environments[settings],
  };

  console.info(
    `🙋 Hey, I'm Lucy! I'm getting ready to run ${config.meta.title} for the ${settings} environment, Hang tight.. 🙋`
  );

  // The Prismic API endpoint
  const API_ENDPOINT = `https://senseguide.cdn.prismic.io/api/v2`;

  // The hostname of the website, for example it would be https://example.com
  const SITE_URL = 'https://www.senseguide.nl';

  // this is the link resolver for the documents that are fetched.
  const linkResolver = doc => {
    switch (doc.type) {
      // single pages
      case 'homepage':
        if (doc.lang === 'en-gb') {
          return `en`;
        } else if (doc.lang === 'nl-nl') {
          return `/`;
        }

      case 'voor_wie':
        if (doc.lang === 'en-gb') {
          return `en/for-who`;
        } else if (doc.lang === 'nl-nl') {
          return `voor-wie`;
        }

      case 'over_ons':
        return `over-ons`;

      case 'stories':
        if (doc.lang === 'en-gb') {
          return `en/stories`;
        } else if (doc.lang === 'nl-nl') {
          return `verhalen`;
        }

      case 'klanten':
        if (doc.lang === 'en-gb') {
          return `en/projects`;
        } else if (doc.lang === 'nl-nl') {
          return `projecten`;
        }

      // dynamic pages
      case 'contact':
      case 'diensten':
      case 'workshops':
        return `${doc.type}`;

      case 'audience':
        if (doc.lang === 'en-gb') {
          return `en/for-who/${doc.uid}`;
        } else if (doc.lang === 'nl-nl') {
          return `voor-wie/${doc.uid}`;
        }

      case 'story':
        if (doc.lang === 'en-gb') {
          return `en/stories/${doc.uid}`;
        } else if (doc.lang === 'nl-nl') {
          return `verhalen/${doc.uid}`;
        }

      case 'dienst':
        return `diensten/${doc.uid}`;

      case 'info_page':
        if (doc.lang === 'en-gb') {
          return `en/info/${doc.uid}`;
        } else if (doc.lang === 'nl-nl') {
          return `info/${doc.uid}`;
        }

      case 'workshop':
        return `workshops/${doc.uid}`;

      default:
        throw new Error(`Unknown doc.type: "${doc.type}"`);
    }
  };

  const sitemap = {
    linkResolver,
    apiEndpoint: API_ENDPOINT,
    hostname: SITE_URL,
    accessToken: process.env.PRISMIC_API_TOKEN,
    defaultEntryOption: { priority: 0.7 },
    pagination: {
      pageSize: 99,
    },
    optionsMapPerDocumentType: {
      story: document => ({
        lastmod: document.last_publication_date,
        changefreq: 'weekly',
        priority: 0.8,
      }),
      info: { changefreq: 'monthly', priority: 0.6 },
      stories: { changefreq: 'monthly', priority: 0.9 },
      homepage: { priority: 1 },
    },
    documentTypes: [
      'homepage',
      'contact',
      'diensten',
      'workshops',
      'audience',
      'stories',
      'story',
      'dienst',
      'info_page',
      'workshop',
      'voor_wie',
      'over_ons',
    ],
  };

  return {
    env,
    sitemap,
    eslint: {
      ignoreDuringBuilds: true,
    },
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['images.prismic.io', 'picsum.photos', 'prismic-io.s3.amazonaws.com'],
    },

    async rewrites() {
      return {
        // These rewrites are checked after headers/redirects and before all files including _next/public files which allows overriding page files
        beforeFiles: config.beforeFilesRewrites,
        // These rewrites are checked after pages/public files are checked but before dynamic routes
        afterFiles: config.afterFilesRewrites,
      };
    },
  };
};

module.exports = nextTranslate(withPrismicSitemap(nextConfig()));
