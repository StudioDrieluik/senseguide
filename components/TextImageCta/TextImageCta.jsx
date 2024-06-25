import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import { Wrapper, Content, ImageWrapper } from './TextImageCta.styles';
import { getUrlFromMeta } from '../../utils/utils';
import Link from 'next/link';
import ArrowLink from '../ArrowLink/ArrowLink';

export const TextImageCta = ({ title, text, links, image, ctaTitle, ctaLink }) => {
  const href = getUrlFromMeta(ctaLink?._meta);
  return (
    <Wrapper>
      <Content>
        <h2>{title}</h2>
        <RichText render={text} htmlSerializer={htmlSerializer} />
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:mt-[2.4rem] mb-[4.8rem]">
            {links?.map(link => {
              const title = link.title[0].text;
              const href = getUrlFromMeta(link?.link?._meta);

              if (!href) return null;

              return (
                <div key={title} className="relative group">
                  <Link href={href}>
                    <a className="leading-tight !no-underline bg-white rounded-[0.8rem] min-h-[3.5lh] py-[1.5rem] h-full text-center items-center flex justify-center px-[1.5rem] hover:bg-[--color-primary-300] hover:!text-white !duration-200 !transition-all">
                      {title}
                    </a>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="absolute right-1 md:right-2 top-1 md:top-2 w-[1.75rem] md:w-[2rem] h-auto opacity-20 group-hover:opacity-100 group-hover:text-white duration-200"
                    style={{ transform: 'rotate(-45deg)' }}
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h24v24H0z" />
                      <path
                        d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z"
                        fill="currentColor"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
        {href && <ArrowLink href={href}>{ctaTitle}</ArrowLink>}
      </Content>
      {image && (
        <ImageWrapper>
          <Image alt={title} src={image.url} width="480" height={600} />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};
