// import useTranslation from 'next-translate/useTranslation';
import { useQuery } from '@/hooks/useQuery';
import { WHO_PAGE_QUERY } from '@/queries/singles/WHO_PAGE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { WhoTemplate } from '../../templates/who/WhoTemplate';

const WhoPage = ({ preview }) => {
  const { loading, error, data } = useQuery(WHO_PAGE_QUERY);

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  console.log(data)

  return <WhoTemplate data={data?.allVoor_wies?.edges?.[0].node} audience={data?.allAudiences?.edges} />
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: WHO_PAGE_QUERY,
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 20,
  };
}

export default WhoPage;
