import React from 'react';
import { useQuery } from '@/hooks/useQuery';
import { ABOUT_US_QUERY } from '@/queries/singles/ABOUT_US_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { ContentpageTemplate } from '@/templates/contentpage/ContentpageTemplate';

const OverOnsPage = ({ uid }) => {
  const { loading, error, data } = useQuery(ABOUT_US_QUERY, {
    variables: { uid },
  });

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <ContentpageTemplate data={data?.allOver_onss?.edges?.[0]?.node} />;
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: ABOUT_US_QUERY,
      variables: {
        uid: 'over-ons',
      },
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 20,
  };
}

export default OverOnsPage;
