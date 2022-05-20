import Image from "next/image";
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import { Container } from "../../Container/Container.styles";
import { ContactLinks, ContentWrapper, ImageWrapper, Wrapper } from "./BlockContactCard.styles";

export const BlockContactCard = ({ block }) => {
  const { phone, email_address, image: defaultImage } = block.contact_person;
  const image = block.contact_image ? block?.contact_image : defaultImage;

  return (
    <Container medium>
      <Wrapper className={block.background == 'none' ? '' : `variant-${block.background}`}>
        {image?.url && <ImageWrapper>
          <Image src={image.url} layout="fill" />
        </ImageWrapper>}
        <ContentWrapper>
          {block.contact_title && <h4>{block?.contact_title?.[0]?.text}</h4>}
          {block.contact_text && <RichText render={block.contact_text} htmlSerializer={htmlSerializer} />}
          {(phone || email_address) &&
            <ContactLinks>
              {phone && (
                <a href={`tel:${phone}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29"><g fill="none" fillRule="evenodd"><path d="M0 0h30v29H0z"/><path d="M10.836 14.139v-.002a9.726 9.726 0 0 0 4.575 4.404h0c.297.135.645.11.917-.068l2.933-1.892v-.001a.958.958 0 0 1 .888-.08l5.488 2.274h0c.382.156.612.54.561.94h0c-.36 2.713-2.75 4.748-5.581 4.748h-.001c-8.803-.001-15.938-6.898-15.938-15.406h-.001c0-2.738 2.103-5.048 4.912-5.396h0a.938.938 0 0 1 .97.543l2.355 5.31h0c.123.278.094.598-.077.852l-1.95 2.879h-.001a.868.868 0 0 0-.064.883l.014.012Z" stroke="currentColor" strokeWidth="2.682" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                  <span>{phone}</span>
                </a>
              )}
              {email_address && (
                <a href={`mailto:${email_address?.[0]?.text}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29"><g fill="none" fillRule="evenodd"><path d="M0 0h30v29H0z"/><g strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2.682"><path d="M3.75 6.344h22.5V21.75h0c0 .5-.42.906-.938.906H4.687h0c-.519 0-.938-.406-.938-.907 0 0 0 0 0 0V6.343h.001Z"/><path d="M26.25 6.344 15 16.313 3.75 6.343"/></g></g></svg>
                  <span>{email_address?.[0]?.text}</span>
                </a>
              )}
            </ContactLinks>
          }
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};
