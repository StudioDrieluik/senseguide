import React from 'react';
import { useQuery } from '@/hooks/useQuery';
import { WORKSHOP_QUERY } from '@/queries/singles/WORKSHOP_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { WorkshopTemplate } from '../../templates/workshop/WorkshopTemplate';

// @TODO: Not working yet
const WorkshopDetail = ({uid}) => {
  const { loading, error, data } = useQuery(WORKSHOP_QUERY, {
    variables: { uid },
  });

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;


  return <WorkshopTemplate data={data?.allWorkshops?.edges?.[0].node} />;

}

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: WORKSHOP_QUERY,
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

export default WorkshopDetail;
