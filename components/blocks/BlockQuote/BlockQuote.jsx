import { Container } from "../../Container/Container.styles";
import { Wrapper } from "./BlockQuote.styles";

export const BlockQuote = ({ block }) => (
  <Container medium>
    {block?.text && <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 84"><path d="M66 84V49.509C66 22.89 83.192 4.849 107.392 0l4.585 10.038c-11.206 4.28-18.408 16.977-18.408 27.295H112V84H66ZM0 84V49.509C0 22.89 17.248 4.844 41.417 0L46 10.038c-11.196 4.28-18.389 16.977-18.389 27.295h18.33V84H0Z" fill="#C3C1DE" fillRule="nonzero" opacity=".46"/></svg>
      <p>{block?.text[0].text}</p>
      {block?.author && <span>{block?.author[0].text}</span>}
    </Wrapper>}
  </Container>
);