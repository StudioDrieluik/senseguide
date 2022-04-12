// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { BlocksRender } from '@/components/blocks/BlocksRender';
import { SplitHero } from '@/components/SplitHero/SplitHero';
import { TextImageCta } from '@/components/TextImageCta/TextImageCta';
import { Container } from '@/components/Container/Container.styles';
import { BlockWrapper } from '../../components/blocks/BlockWrapper.styles';

export const HomeTemplate = ({ data }) => {
  const meta = {
    seoTitle: 'Home',
  };

  const { hero_cta_link, hero_cta_title, hero_image, hero_links, hero_title } = data;
  const { intro_cta_link, intro_cta_title, intro_image, intro_links, intro_title, intro_text } =
    data;

  const heroContent = {
    hero_cta_link,
    hero_cta_title,
    hero_image,
    hero_links,
    hero_title,
  };

  console.log(data);

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
            ctaLink={intro_cta_link?.[0]?.text}
          />
        </Container>
      </BlockWrapper>
      {/* {data.slices && <BlocksRender blocks={data.slices} />} */}
    </Layout>
  );
};
