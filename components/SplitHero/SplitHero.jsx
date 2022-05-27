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
        <Image src={hero_image.url} layout="fill" />
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
                    <h3>{title}</h3>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {heroCtaLink && hero_cta_title && (
          <ArrowLink large href={heroCtaLink}>
            <a>{hero_cta_title?.[0]?.text}</a>
          </ArrowLink>
        )}
      </Content>
    </Wrapper>
  );
};
