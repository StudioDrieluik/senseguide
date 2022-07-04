// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import Story from '../../components/Story/Story';

export const WhoTemplate = ({ data, audience }) => {
  const { title, image, intro } = data;
  const heroContent = { title, image, intro };

  const meta = {
    seoTitle: data.seo_title?.[0]?.text || title,
    seoDescription: data.seo_description?.[0]?.text || intro,
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} />

      <Container medium>
        {audience.map(({ node: group }) => (
          <Story key={group._meta.uid} data={group} />
        ))}
      </Container>
    </Layout>
  );
};
