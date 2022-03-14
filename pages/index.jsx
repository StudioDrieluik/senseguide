// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { useQuery } from '@/hooks/useQuery';
import { HOME_PAGE_QUERY } from '@/queries/singles/HOME_PAGE_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { BlocksRender } from '@/components/blocks/BlocksRender';

const IndexPage = ({ preview }) => {
  // const { loading, error, data } = useQuery(HOME_PAGE_QUERY);
  // // const { t } = useTranslation();

  // if (error) return <p>Error...</p>;

  // if (!data && loading) return <p>Loading</p>;

  const meta = {
    seoTitle: 'Home',
  };

  return (
    <Layout>
      <PageHead meta={meta} />

      {/* {data.entry.blocks && <BlocksRender blocks={data.entry.blocks} />} */}

      <section>
        <h1>HOME</h1>
      </section>
    </Layout>
  );
};

export async function getStaticProps(ctx) {
  // build queries
  // const queries = [
  //   {
  //     query: HOME_PAGE_QUERY,
  //   },
  // ];

  // // wait for page data
  // const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  // return {
  //   ...pageProps,
  //   revalidate: 20,
  // };
  return { props: {} };
}

export default IndexPage;
