import { Wrapper, FooterContainer, FooterTopLinks, FooterMenu, FooterCredits } from './TheFooter.styles';
import { Container } from '../Container/Container.styles';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export const TheFooter = () => {
  const { t } = useTranslation('common');
  const { locale } =useRouter();

  return (
    <Wrapper>
      <Container>
        <FooterContainer>
          <img src="/logo.svg" width="210" height="32" loading="lazy" alt="Logo Senseguide" />
          <FooterTopLinks>
            {/* @TODO: Ophalen vanuit config? */}
            <a href={locale == 'nl' ? 'tel:+31631902336' : 'tel:0631902336'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29"><g fill="none" fillRule="evenodd"><path d="M0 0h30v29H0z"/><path d="M10.836 14.139v-.002a9.726 9.726 0 0 0 4.575 4.404h0c.297.135.645.11.917-.068l2.933-1.892v-.001a.958.958 0 0 1 .888-.08l5.488 2.274h0c.382.156.612.54.561.94h0c-.36 2.713-2.75 4.748-5.581 4.748h-.001c-8.803-.001-15.938-6.898-15.938-15.406h-.001c0-2.738 2.103-5.048 4.912-5.396h0a.938.938 0 0 1 .97.543l2.355 5.31h0c.123.278.094.598-.077.852l-1.95 2.879h-.001a.868.868 0 0 0-.064.883l.014.012Z" stroke="#000" strokeWidth="2.682" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
              <span>{locale == 'nl' ? '+31 6 3190 2336' : '06 3190 2336'}</span>
            </a>
            <a href="mailto:contact@senseguide.nl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29"><g fill="none" fillRule="evenodd"><path d="M0 0h30v29H0z"/><g strokeLinecap="round" strokeLinejoin="round" stroke="#000" strokeWidth="2.682"><path d="M3.75 6.344h22.5V21.75h0c0 .5-.42.906-.938.906H4.687h0c-.519 0-.938-.406-.938-.907 0 0 0 0 0 0V6.343h.001Z"/><path d="M26.25 6.344 15 16.313 3.75 6.343"/></g></g></svg>
              <span>contact@senseguide.nl</span>
            </a>
          </FooterTopLinks>
        </FooterContainer>
        <FooterContainer>
          <FooterMenu>
            <span>Copyright 2022 Senseguide</span>
            <a href="/info/algemene-voorwaarden-senseguide"><span>{t('terms')}</span></a>
            <a href="/info/privacystatement"><span>Privacystatement</span></a>
          </FooterMenu>
          <FooterCredits>
            <span>{locale == 'nl' ? 'Realisatie' : 'Created by'}: <a href="https://studiodrieluik.nl" target="_blank" rel="noreferrer">Studio Drieluik</a></span>
          </FooterCredits>
        </FooterContainer>
      </Container>
    </Wrapper>
  )
};
