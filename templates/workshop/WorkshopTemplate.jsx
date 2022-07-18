// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import { ContentBlocks, ContentWrapper, Intro, Meta } from './WorkshopTemplate.styles';
import Button from '../../components/Button/Button';
import { BlocksRender } from '../../components/blocks/BlocksRender';
import useTranslation from 'next-translate/useTranslation';

export const WorkshopTemplate = ({ data }) => {
  const { title, image, intro } = data;
  const heroContent = { title, image, intro };
  const { t } = useTranslation('common');

  const meta = {
    seoTitle: data.seo_title?.[0]?.text || `Workshop - ${title?.[0].text}`,
    seoDescription: data.seo_description?.[0]?.text || `${intro?.[0]?.text}`,
    ogImage: image?.url,
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} isWorkshop />

      <Container>
        <ContentWrapper>
          <ContentBlocks className="is-workshop">
            {intro?.[0] && <Intro>{intro[0].text}</Intro>}
            {data.body && <BlocksRender blocks={data.body} />}
          </ContentBlocks>
          <Meta>
            <ul>
              {data.time?.[0] && (
                <li>
                  <h4>{t('workshop.time')}</h4>
                  <span>{data.time[0].text}</span>
                </li>
              )}
              {data.persons?.[0] && (
                <li>
                  <h4>{t('workshop.persons')}</h4>
                  <span>{data.persons[0].text}</span>
                </li>
              )}
              {data.location?.[0] && (
                <li>
                  <h4>{t('workshop.location')}</h4>
                  <span>{data.location[0].text}</span>
                </li>
              )}
              {data?.price?.[0].text && (
                <li>
                  <h4>{t('workshop.price')}</h4>
                  <span>€ {data?.price?.[0].text}</span>
                  {data.price_information?.[0] && <p>{data.price_information[0].text}</p>}
                </li>
              )}
            </ul>
            {/* @TODO: Aanmelden */}
            <Button href="mailto:contact@senseguide.nl" variant="secondary">
              {t('workshop.signUp')}
            </Button>
          </Meta>
        </ContentWrapper>
        {/* @TODO: FAQ toevoegen? */}
      </Container>
    </Layout>
  );
};
