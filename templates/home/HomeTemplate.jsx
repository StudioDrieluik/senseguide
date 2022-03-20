// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { BlocksRender } from '@/components/blocks/BlocksRender';

export const HomeTemplate = ({ data }) => {
  const meta = {
    seoTitle: 'Home',
  };

  console.log({ data });

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
