import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import styled from 'styled-components';
import { Hero } from '../components/Hero/Hero';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page404 = () => (
  <Layout>
    <PageHead
      meta={{
        seoTitle: 'Pagina niet gevonden',
      }}
    />
    <Wrapper>
      <Hero withBreadcrumbs={false} title="Pagina niet gevonden" />
    </Wrapper>
  </Layout>
);

export default Page404;
