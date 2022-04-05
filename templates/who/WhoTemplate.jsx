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
    seoTitle: 'Voor wie',
  };

  console.log(audience[0].node.tags.map((tag) => tag))

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent}/>

      <Container medium>
        {audience.map(({node: group}) => (
          <Story key={group._meta.uid} data={group}/>
        ))}
      </Container>
    </Layout>
  );
};
