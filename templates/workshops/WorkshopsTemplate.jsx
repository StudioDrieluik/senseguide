// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { Hero } from '../../components/Hero/Hero';

export const WorkshopsTemplate = ({ data }) => {
  const meta = {
    seoTitle: 'Workshops',
  };

  const { title, image, intro } = data;

  const heroContent = { title, image, intro };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} breadcrumbs="dit zijn breadcrumbs"/>

      {/* @TODO: Tonen van workshops */}
      <section>
        <h1>Workshops</h1>
      </section>
    </Layout>
  );
};
