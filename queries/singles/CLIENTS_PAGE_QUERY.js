import { gql } from '@apollo/client';

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
          grid_1 {
            text
            title: title1
            subtitle: subtitle1
            klant {
              ... on Klant {
                title
                logo
              }
            }
          }
          grid_2 {
            text
            title: title1
            subtitle: subtitle1
            klant {
              ... on Klant {
                title
                logo
              }
            }
          }
        }
      }
    }
  }
`;
