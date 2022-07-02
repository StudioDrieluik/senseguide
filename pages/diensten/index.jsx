// import useTranslation from 'next-translate/useTranslation';
import { useQuery } from '@/hooks/useQuery';
import { SERVICES_PAGE_QUERY } from '@/queries/singles/SERVICES_PAGE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { ServicesTemplate } from '../../templates/services/ServicesTemplate';

const ServicesPage = () => {
  const { loading, error, data } = useQuery(SERVICES_PAGE_QUERY);

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <ServicesTemplate data={data?.allDienstens?.edges?.[0]?.node} />;
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: SERVICES_PAGE_QUERY,
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export default ServicesPage;
