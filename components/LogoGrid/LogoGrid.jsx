import React from 'react';
import { Container } from '@/components/Container/Container.styles';
import { Content, LogosWrapper, Wrapper } from './LogoGrid.styles';
import ArrowLink from '../ArrowLink/ArrowLink';

const LogoGrid = ({ logos, title, ctaTitle, ctaURL }) => {
  if (!logos) return null;

  return (
    <Container>
      <Wrapper>
        <Content>
          <h2>{title}</h2>
          {ctaURL && ctaTitle && <ArrowLink href={ctaURL}>{ctaTitle}</ArrowLink>}
        </Content>
        <LogosWrapper>
          {logos.map(({ client_logo: logo }) => (
            <div key={logo.url}>
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
        </LogosWrapper>
      </Wrapper>
    </Container>
  );
};

export default LogoGrid;
