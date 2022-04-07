import { gql } from '@apollo/client';

export const WORKSHOP_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allWorkshops(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          time
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
