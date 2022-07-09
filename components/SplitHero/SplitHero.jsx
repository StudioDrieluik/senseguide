import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ArrowLink from '../ArrowLink/ArrowLink';
import { getUrlFromMeta } from '../../utils/utils';
import { Wrapper, Content } from './SplitHero.styles';

export const SplitHero = ({
  hero_cta_link_url,
  hero_cta_title,
  hero_image,
  hero_links,
  hero_title,
}) => {
  const heroCtaLink = getUrlFromMeta(hero_cta_link_url?._meta);
  return (
    <Wrapper>
      <div>
        <Image
          src={hero_image.url}
          width="700"
          height="1100"
          quality={70}
          style={{ height: '100%' }}
        />
      </div>
      <Content>
        {hero_title?.[0] && <h1>{hero_title[0].text}</h1>}
        <ul>
          {hero_links.map(link => {
            const title = link.title[0].text;
            const href = getUrlFromMeta(link?.hero_link?._meta);

            return (
              <li key={title}>
                <Link href={href}>
                  <a>
                    <h3>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h24v24H0z" />
                          <path
                            d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z"
                            fill="currentColor"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                      {title}
                    </h3>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {heroCtaLink && hero_cta_title && (
          <ArrowLink large white href={heroCtaLink}>
            {hero_cta_title?.[0]?.text}
          </ArrowLink>
        )}
      </Content>
    </Wrapper>
  );
};
