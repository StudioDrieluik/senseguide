const nextTranslate = require('next-translate');

const config = require(`./config/index.js`);

// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.SETTINGS === 'accept',
});

const nextConfig = () => {
  const settings = process.env.SETTINGS || '<not declared>';

  const env = {
    ...config.environments.default,
    ...config.environments[settings],
  };

  console.info(
    `🙋 Hey, I'm Lucy! I'm getting ready to run ${config.meta.title} for the ${settings} environment, Hang tight.. 🙋`
  );

  return {
    env,
    eslint: {
      ignoreDuringBuilds: true,
    },
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['images.prismic.io', 'picsum.photos'],
    },

    async rewrites() {
      return {
        // These rewrites are checked after headers/redirects and before all files including _next/public files which allows overriding page files
        beforeFiles: config.beforeFilesRewrites,
        // These rewrites are checked after pages/public files are checked but before dynamic routes
        afterFiles: config.afterFilesRewrites,
        source: "/public/needeforcontactform.html",
        destination: "/pages/api/needeforcontactform.js",
      };
    },
  };
};

module.exports = nextTranslate(withBundleAnalyzer(nextConfig()));
