// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { SplitHero } from '../../components/SplitHero/SplitHero';

export const HomeTemplate = ({ data }) => {
  const meta = {
    seoTitle: 'Home',
  };

  const { hero_cta_link, hero_cta_title, hero_image, hero_links, hero_title } = data;

  const heroContent = {
    hero_cta_link,
    hero_cta_title,
    hero_image,
    hero_links,
    hero_title,
  };

  // console.log({ data });

  return (
    <Layout>
      <PageHead meta={meta} />
      <SplitHero {...heroContent} />

      {data.slices && <BlocksRender blocks={data.slices} />}

      <section>
        <h1>HOME</h1>
      </section>
    </Layout>
  );
};
