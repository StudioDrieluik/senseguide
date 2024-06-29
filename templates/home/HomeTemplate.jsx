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
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { getUrlFromMeta } from '../../utils/utils';
import Link from 'next/link';
import DownloadCard from '../../components/DownloadCard/DownloadCard';

export const HomeTemplate = ({ data }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const {
    hero_cta_link_url,
    hero_cta_title,
    hero_image,
    hero_links,
    hero_title,
    hero_subtitle,
    hero_button_cta_title,
    hero_button_cta_link,
  } = data;
  const {
    intro_cta_link,
    intro_cta_title,
    intro_image,
    intro_title,
    hero_text,
    intro_text,
    intro_links,
  } = data;

  const meta = {
    seoTitle: data.seo_title?.[0]?.text || `Senseguide | ${hero_title?.[0].text}`,
    seoDescription: data.seo_description?.[0]?.text || `${intro_title?.[0].text}`,
    ogImage: hero_image?.url,
  };

  const heroContent = {
    hero_button_cta_title,
    hero_button_cta_link,
    hero_cta_link_url,
    hero_cta_title,
    hero_image,
    hero_links,
    hero_text,
    hero_title,
    hero_subtitle,
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
            links={intro_links}
            image={intro_image}
            ctaTitle={intro_cta_title?.[0]?.text}
            ctaLink={intro_cta_link}
          />
        </Container>

        <Container>
          <DownloadCard
            title={data.download_block_title?.[0]?.text}
            text={data.download_block_text}
            link={data.download_block_link}
            linkTitle={data.download_block_link_title}
          />
        </Container>

        {data?.testimonials && <TestimonialsSlider slides={data.testimonials} />}

        {data.clients_logos && (
          <LogoGrid
            logos={data.clients_logos}
            title={data.clients_title?.[0]?.text}
            ctaTitle={t('home.logoGrid')}
            ctaURL={`/${storiesUrl}/?type=project`}
          />
        )}

        <BlockStorySlider title={t('home.storySlider')} slides={data.stories} />
      </BlockWrapper>
    </Layout>
  );
};
