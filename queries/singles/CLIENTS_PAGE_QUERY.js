import { gql } from '@apollo/client';
import { TYPE_META } from '../fragments/TYPE_META';

export const CLIENTS_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allKlantens(lang: $lang) {
      edges {
        node {
          title
          subtitle
          cta_title
          cta_text
          cta_button_url
          cta_button_title
          _meta {
            type
            uid
          }
          grid_1 {
            text
            title: title1
            subtitle: subtitle1
            logo
            link {
              ${TYPE_META()}
            }
          }
          grid_2 {
            text
            title: title1
            subtitle: subtitle1
            logo
            link {
              ${TYPE_META()}
            }
          }
        }
      }
    }
  }
`;
