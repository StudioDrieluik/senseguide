import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ArrowLink from '../ArrowLink/ArrowLink';
import { getUrlFromMeta } from '../../utils/utils';
import { Wrapper, Content } from './SplitHero.styles';
import Button from '../Button/Button';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';

export const SplitHero = ({
  hero_button_cta_title,
  hero_button_cta_link,
  hero_cta_link_url,
  hero_cta_title,
  hero_image,
  hero_text,
  hero_links,
  hero_title,
  hero_subtitle,
}) => {
  const heroButtonCtaLink = getUrlFromMeta(hero_button_cta_link?._meta);
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
          priority
        />
      </div>
      <Content>
        {hero_title?.[0] && <h1 className="">{hero_title[0].text}</h1>}
        {hero_subtitle?.[0] && <h2 className="text-pretty">{hero_subtitle[0].text}</h2>}
        <div className="text-[1.8rem] md:text-[2rem]">
          <RichText render={hero_text} htmlSerializer={htmlSerializer} />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-[1rem] md:gap-[2.4rem] mt-[2.4rem] md:mt-[4.8rem]">
          <Button variant={'secondary-arrow-white'} href={heroButtonCtaLink}>
            {hero_button_cta_title?.[0]?.text}
          </Button>
          <Link href={heroCtaLink}>
            <a className="underline text-[1.8rem]">Of {hero_cta_title?.[0]?.text}</a>
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};
