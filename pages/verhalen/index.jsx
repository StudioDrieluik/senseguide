// import useTranslation from 'next-translate/useTranslation';
import { useQuery } from '@/hooks/useQuery';
import { STORIES_PAGE_QUERY } from '@/queries/singles/STORIES_PAGE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { useState } from 'react';
import { StoriesTemplate } from '../../templates/stories/StoriesTemplate';

const StoriesPage = ({  }) => {
  const { loading, error, data } = useQuery(STORIES_PAGE_QUERY);

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <StoriesTemplate stories={data?.allStorys?.edges} />;
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: STORIES_PAGE_QUERY
    },
  ];


  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export default StoriesPage;
