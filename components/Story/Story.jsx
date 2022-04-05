import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { ContentWrapper, ImageContainer, ImageWrapper, Tag, TagList, Wrapper } from './Story.styles';


const Story = ({ data }) => (
  <Wrapper>
    {data?.image?.url && <ImageWrapper>
      <ImageContainer>
        <Image src={data?.image.url} layout="fill" />
      </ImageContainer>
    </ImageWrapper>}
    <ContentWrapper>
      <Link href={`/voor-wie/${data._meta.uid}`} passHref>
        <a>
          <h3>{data.title[0].text}</h3>
        </a>
      </Link>
      {data?.tags && <TagList>
        {data.tags.map(({tag}) => (
          <Tag>{tag[0].text}</Tag>
        ))}
      </TagList>}
      {data.intro?.[0] && <p>{data.intro[0].text}</p>}
    </ContentWrapper>

  </Wrapper>
);

export default Story;
