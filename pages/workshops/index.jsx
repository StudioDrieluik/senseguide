// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { useQuery } from '@/hooks/useQuery';
import { WORKSHOP_PAGE_QUERY } from '@/queries/singles/WORKSHOP_PAGE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { WorkshopsTemplate } from '../../templates/workshops/WorkshopsTemplate';

const WorkshopsPage = ({ preview, uid }) => {
  const { loading, error, data } = useQuery(WORKSHOP_PAGE_QUERY);

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return (
    <WorkshopsTemplate
      data={data?.allWorkshopss?.edges?.[0]?.node}
      workshops={data?.allWorkshops?.edges}
    />
  );
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: WORKSHOP_PAGE_QUERY,
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export default WorkshopsPage;
