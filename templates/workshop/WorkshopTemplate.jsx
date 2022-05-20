// import useTranslation from 'next-translate/useTranslation';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import { Hero } from '../../components/Hero/Hero';
import { ContentWrapper, Intro, Meta } from './WorkshopTemplate.styles';
import Button from '../../components/Button/Button';

export const WorkshopTemplate = ({ data }) => {
  const { title, image, intro } = data;
  const heroContent = { title, image, intro };

  const meta = {
    seoTitle: `Workshop — ${title[0].text}}`,
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} isWorkshop />

      <Container>
        <ContentWrapper>
          {intro?.[0] && <Intro>{intro[0].text}</Intro>}
          <Meta>
            <ul>
              {data.time?.[0] && <li>
                <h4>Tijdsduur</h4>
                <span>{data.time[0].text}</span>
              </li>}
              {data.persons?.[0] && <li>
                <h4>Aantal personen</h4>
                <span>{data.persons[0].text}</span>
              </li>}
              {data.location?.[0] && <li>
                <h4>Locatie</h4>
                <span>{data.location[0].text}</span>
              </li>}
            </ul>
            {/* @TODO: Aanmelden */}
            <Button href="#" variant="secondary">Aanmelden</Button>
          </Meta>
        </ContentWrapper>
        {/* @TODO: FAQ toevoegen? */}
      </Container>
    </Layout>
  );
};
