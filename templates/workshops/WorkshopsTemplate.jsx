// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { Hero } from '../../components/Hero/Hero';
import Workshop from '../../components/Workshop/Workshop';
import { Container } from '../../components/Container/Container.styles';

export const WorkshopsTemplate = ({ data, workshops }) => {
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

      <Container medium>
        {workshops.map(({ node: workshop }) => (
          <Workshop data={workshop} key={workshop._meta.uid} />
        ))}
      </Container>
    </Layout>
  );
};
