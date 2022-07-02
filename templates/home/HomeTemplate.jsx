// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';

import { SplitHero } from '@/components/SplitHero/SplitHero';
import { TextImageCta } from '@/components/TextImageCta/TextImageCta';
import { Container } from '@/components/Container/Container.styles';
import { BlockWrapper } from '@/components/blocks/BlockWrapper.styles';
import { TestimonialsSlider } from '@/components/TestimonialsSlider/TestimonialsSlider';
import { BlockStorySlider } from '@/components/blocks/BlockStorySlider/BlockStorySlider';
import LogoGrid from '../../components/LogoGrid/LogoGrid';
import ROUTES from '../../config/senseguide/routes';
import { useRouter } from 'next/router';

export const HomeTemplate = ({ data }) => {
  const router = useRouter();
  const meta = {
    seoTitle: 'Home',
  };

  const { hero_cta_link_url, hero_cta_title, hero_image, hero_links, hero_title } = data;
  const { intro_cta_link, intro_cta_title, intro_image, intro_links, intro_title, intro_text } =
    data;

  const heroContent = {
    hero_cta_link_url,
    hero_cta_title,
    hero_image,
    hero_links,
    hero_title,
  };

  const storiesUrl = ROUTES.STORIES[router.locale];

  return (
    <Layout>
      <PageHead meta={meta} />
      <SplitHero {...heroContent} />

      <BlockWrapper>
        <Container>
          <TextImageCta
            title={intro_title?.[0]?.text}
            text={intro_text}
            image={intro_image}
            ctaTitle={intro_cta_title?.[0]?.text}
            ctaLink={intro_cta_link}
          />
        </Container>

        {data?.testimonials && <TestimonialsSlider slides={data.testimonials} />}

        {data.clients_logos && (
          <LogoGrid
            logos={data.clients_logos}
            title={data.clients_title?.[0]?.text}
            ctaTitle="Onze projecten"
            ctaURL={`/${storiesUrl}/?type=project`}
          />
        )}

        <BlockStorySlider title="Senseguide verhalen" slides={data.stories} />
      </BlockWrapper>
    </Layout>
  );
};
