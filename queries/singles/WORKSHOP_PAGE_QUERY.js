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
    allWorkshops(lang: $lang) {
      edges {
        node {
          title
          short_time
          persons
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
