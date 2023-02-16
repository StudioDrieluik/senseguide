// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Hero } from '../../components/Hero/Hero';
import { BlocksRender } from '../../components/blocks/BlocksRender';
import { BlockWrapper } from '../../components/blocks/BlockWrapper.styles';

export const ContentpageTemplate = ({ data }) => {
  const { title, image, intro } = data;
  const heroContent = { title, image, intro };

  const meta = {
    seoTitle: data.seo_title?.[0]?.text || `${title?.[0].text}`,
    seoDescription: data.seo_description?.[0]?.text || `${intro?.[0]?.text}`,
    ogImage: image?.url,
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} />
      {/* @TODO: Slices */}
      <BlockWrapper>{data.body && <BlocksRender blocks={data.body} />}</BlockWrapper>
    </Layout>
  );
};
