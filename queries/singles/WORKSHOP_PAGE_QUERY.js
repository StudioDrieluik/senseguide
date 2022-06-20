import { gql } from '@apollo/client';

export const WORKSHOP_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allWorkshopss(lang: $lang) {
      edges {
        node {
          title
          image
          intro
        }
      }
    }
    allWorkshops(lang: $lang, first: 99) {
      edges {
        node {
          title
          short_time
          persons
          price
          location
          intro
          _meta {
            uid
          }
        }
      }
    }
  }
`;
