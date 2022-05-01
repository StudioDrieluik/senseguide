import Image from "next/image";
import Link from "next/link";
import { Container } from "../../Container/Container.styles";
import { ContentContainer, ImageContainer, Wrapper } from "./BlockHighlightedItem.styles";

export const BlockHighlightedItem = ({ block }) => {
  const color = block.highlighted_item_background_color.toLowerCase();

  return (
    <Container medium>
      <Wrapper className={`variant-${color}`}>
        <ImageContainer>
          <Image src={`https://picsum.photos/378/284?img=${1}`} layout="fill" />
        </ImageContainer>
        <ContentContainer>
          {/* TODO: Replace dummy content & global link */}
          <h4>Uitgelicht item</h4>
          <p>Asymmetrical hexagon migas kale chips, post-ironic tousled pitchfork. Tofu drinking vinegar sustainable, jean shorts bespoke butcher jianbing.</p>
          <Link href="#">Ontdek project</Link>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};
