import React from 'react';
import { useQuery } from '@/hooks/useQuery';
import { AUDIENCE_QUERY } from '@/queries/singles/AUDIENCE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { ContentpageTemplate } from '../../templates/contentpage/ContentpageTemplate';

const AudienceDetail = ({uid}) => {
  const { loading, error, data } = useQuery(AUDIENCE_QUERY, {
    variables: { uid },
  });

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <ContentpageTemplate data={data?.allAudiences?.edges?.[0]?.node} />;
}

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: AUDIENCE_QUERY,
      variables: {
        uid: ctx.params.slug,
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default AudienceDetail;
