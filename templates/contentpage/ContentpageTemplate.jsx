// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import { BlocksRender } from '../../components/blocks/BlocksRender';
import { BlockWrapper } from '../../components/blocks/BlockWrapper.styles';

export const ContentpageTemplate = ({ data }) => {
  const { title, image, intro } = data;
  const heroContent = { title, image, intro };

  const meta = {
    seoTitle: `${title?.[0].text}`,
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
