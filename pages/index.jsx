// import useTranslation from 'next-translate/useTranslation';
import { useQuery } from '@/hooks/useQuery';
import { HOME_PAGE_QUERY } from '@/queries/singles/HOME_PAGE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { HomeTemplate } from '../templates/home/HomeTemplate';

const IndexPage = ({ preview }) => {
  const { loading, error, data } = useQuery(HOME_PAGE_QUERY);

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <HomeTemplate data={data?.allHomepages?.edges?.[0].node} />;
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: HOME_PAGE_QUERY,
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export default IndexPage;
