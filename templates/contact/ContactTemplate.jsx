import React from 'react';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Hero } from '@/components/Hero/Hero';
import { Container } from '@/components/Container/Container.styles';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Wrapper } from './ContactTemplate.styles';

export const ContactTemplate = ({ data }) => {
  const { title, intro, text } = data;
  const heroContent = { title, intro };

  const meta = {
    seoTitle: data.seo_title?.[0]?.text || `${title?.[0].text}`,
    seoDescription: data.seo_description?.[0]?.text || `${intro?.[0].text}`,
  };

  return (
    <Layout>
      <PageHead meta={meta} />
      <Hero {...heroContent} />

      <Container>
        <Wrapper>
          {text && (
            <div>
              <RichText render={text} htmlSerializer={htmlSerializer} />
            </div>
          )}
          <ContactForm></ContactForm>
        </Wrapper>
      </Container>
    </Layout>
  );
};
