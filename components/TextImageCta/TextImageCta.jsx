import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import { Wrapper, Content, ImageWrapper } from './TextImageCta.styles';
import { getUrlFromMeta } from '../../utils/utils';
import Link from 'next/link';

export const TextImageCta = ({ title, text, image, ctaTitle, ctaLink }) => {
  const href = getUrlFromMeta(ctaLink?._meta);
  return (
    <Wrapper>
      <Content>
        <h2>{title}</h2>
        <RichText render={text} htmlSerializer={htmlSerializer} />
        {href && <Link href={href}>{ctaTitle}</Link>}
      </Content>
      {image && (
        <ImageWrapper>
          <Image alt={title} src={image.url} width="480" height={600} />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};
