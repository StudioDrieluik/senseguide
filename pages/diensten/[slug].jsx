import React from 'react';
import { useQuery } from '@/hooks/useQuery';
import { SERVICE_QUERY } from '@/queries/singles/SERVICE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { ContentpageTemplate } from '../../templates/contentpage/ContentpageTemplate';

const ServiceDetail = ({ uid }) => {
  const { loading, error, data } = useQuery(SERVICE_QUERY, {
    variables: { uid },
  });

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <ContentpageTemplate data={data?.allDiensts?.edges?.[0]?.node} />;
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: SERVICE_QUERY,
      variables: {
        uid: ctx.params.slug,
      },
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default ServiceDetail;
