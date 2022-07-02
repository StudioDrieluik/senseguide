// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import Story from '../../components/Story/Story';

export const ServicesTemplate = ({ data }) => {
  const { title, image, intro } = data;
  const heroContent = { title, image, intro };

  console.log(data);
  // return null;

  const meta = {
    seoTitle: 'Diensten',
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} />

      <Container medium>
        {data?.services?.map(({ service: group }) => (
          <Story key={group?._meta.uid} data={group} />
        ))}
      </Container>
    </Layout>
  );
};
