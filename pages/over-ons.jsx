import React from 'react';
import { useQuery } from '@/hooks/useQuery';
import { ABOUT_US_QUERY } from '@/queries/singles/ABOUT_US_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { ContentpageTemplate } from '@/templates/contentpage/ContentpageTemplate';
import { ROUTES } from '../config/senseguide/routes';

const OverOnsPage = ({ uid }) => {
  const { loading, error, data } = useQuery(ABOUT_US_QUERY, {
    variables: { uid },
  });

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <ContentpageTemplate data={data?.allOver_onss?.edges?.[0]?.node} />;
};

export async function getStaticProps(ctx) {
  const uid = ROUTES.ABOUT_US[ctx.locale];
  // build queries
  const queries = [
    {
      query: ABOUT_US_QUERY,
      variables: { uid },
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export default OverOnsPage;
