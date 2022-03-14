import dayjs from 'dayjs';
import { initializeApollo, addApolloState } from '@/lib/apollo/apolloClient';
import { REDIRECT_URL_QUERY } from '@/queries/REDIRECT_URL_QUERY.js';
import config from '@/config';

async function getRedirectUrl({ id, site }) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: REDIRECT_URL_QUERY,
    variables: { site, id },
  });

  return data.entry ? data.entry : null;
}

export const cmsDataService = {
  getSiteId(locale) {
    const lang = locale;
    const matchedLocale = config.sites.find(site => site.locale === lang);

    if (!matchedLocale) {
      console.error('No matching locale found');
      return;
    }

    dayjs.locale(matchedLocale.locale);
    return matchedLocale.handle;
  },

  async getPageProps({ ctx, queries }) {
    const apolloClient = initializeApollo();
    let headers;

    const { preview, previewData } = ctx;

    if (preview) {
      headers = { 'X-Craft-Token': previewData?.previewToken };
    }

    const data = await Promise.all(
      queries.map(async ({ query, variables }) => {
        const site = this.getSiteId(ctx.locale);
        const { data } = await apolloClient.query({
          query,
          variables: {
            ...variables,
            site,
          },
          context: { headers },
        });

        if ('entry' in data && !data.entry && variables.id) {
          const { id } = variables;

          const response = await getRedirectUrl({ id, site });

          if (response && response.url) {
            return { redirect: { permanent: true, destination: response.url } };
          }
          return { notFound: true };
        }

        if ('entry' in data && !data.entry && !variables.id) {
          return { notFound: true };
        }

        return data;
      })
    );

    if ('entry' in data[0]) {
      return addApolloState(apolloClient, {
        props: {
          initialApolloState: apolloClient.cache.extract(),
          preview: preview || false,
          ...queries[0].variables,
        },
      });
    }
    return data[0];
  },
};
