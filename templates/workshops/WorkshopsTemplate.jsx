// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { Hero } from '../../components/Hero/Hero';
import Workshop from '../../components/Workshop/Workshop';
import { Container } from '../../components/Container/Container.styles';

export const WorkshopsTemplate = ({ data, workshops }) => {
  const meta = {
    seoTitle: 'Workshops',
  };

  const { title, image, intro } = data;
  const heroContent = { title, image, intro };

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
