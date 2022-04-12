import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import { Wrapper, Content, ImageWrapper } from './TextImageCta.styles';

export const TextImageCta = ({ title, text, image, ctaTitle, ctaLink }) => {
  return (
    <Wrapper>
      <Content>
        <h2>{title}</h2>
        <RichText render={text} htmlSerializer={htmlSerializer} />
        {ctaTitle && <a href="">{ctaTitle}</a>}
      </Content>
      {image && (
        <ImageWrapper>
          <Image alt={title} src={image.url} width="480" height={600} />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};
