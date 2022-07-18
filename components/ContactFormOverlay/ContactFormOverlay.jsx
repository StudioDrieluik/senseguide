import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { CloseButton, ContentWrapper, PageDarkOverlay, Wrapper } from './ContactFormOverlay.styles';

export default function ContactFormOverlay({ overlay, setOverlay }) {
  const { t } = useTranslation('common');
  return (
    <Wrapper>
      <ContentWrapper
        initial={{ y: 50,  opacity: 0, pointerEvents: 'none' }}
        animate={{ y: overlay ? 0 : 50, opacity: overlay ? 1 : 0, pointerEvents: overlay ? 'all' : 'none' }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.75, delay: 0}}
      >
        <CloseButton onClick={() => setOverlay(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><g stroke="#000" strokeWidth="1.875" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="m12.625 1.375-11.25 11.25M12.625 12.625 1.375 1.375"/></g></svg>
          {t('menu.close')}
        </CloseButton>
        <ContactForm introText overlay></ContactForm>
      </ContentWrapper>

      <PageDarkOverlay
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ opacity: overlay ? 0.4 : 0, pointerEvents: overlay ? 'all' : 'none' }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.25, delay: 0 }}
        onClick={() => setOverlay(!overlay)}
      />
    </Wrapper>
  );
}
