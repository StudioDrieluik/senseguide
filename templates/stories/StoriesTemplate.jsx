// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import Story from '../../components/Story/Story';

export const StoriesTemplate = ({ data, stories }) => {
  // const heroContent = { title, image, intro };

  const meta = {
    seoTitle: 'Verhalen',
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero title="Senseguide verhalen" />

      <Container medium>
        {stories.map(({ node: group }) => (
          <Story key={group._meta.uid} data={group} />
        ))}
      </Container>
    </Layout>
  );
};
