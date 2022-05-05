import Image from "next/image";
import { getUrlFromMeta } from "../../../utils/utils";
import ArrowLink from "../../ArrowLink/ArrowLink";
import { Container } from "../../Container/Container.styles";
import { ContentContainer, ImageContainer, Wrapper } from "./BlockHighlightedItem.styles";

export const BlockHighlightedItem = ({ block }) => {
  const color = block.highlighted_item_background_color.toLowerCase();
  const href = getUrlFromMeta(block.highlighted_item_entry._meta);
  const { image, title, intro } = block.highlighted_item_entry;

  if (href) {
    return (
      <Container medium>
        <Wrapper className={`variant-${color}`}>
          {image?.url && <ImageContainer>
            <Image src={image?.url} layout="fill" />
          </ImageContainer>}
          <ContentContainer>
            {title?.[0]?.text && <h4>{title?.[0]?.text}</h4>}
            {intro?.[0]?.text && <p>{intro?.[0]?.text}</p>}
            {/* @Lothar TODO: andere links dan stories ook toestaan? */}
            {block.link_title && href && <ArrowLink href={href}>{block?.link_title?.[0]?.text}</ArrowLink>}
          </ContentContainer>
        </Wrapper>
      </Container>
    );
  }

  return false;
};
