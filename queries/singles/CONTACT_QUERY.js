import { gql } from '@apollo/client';

export const CONTACT_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allContacts(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          text
          intro
          _meta {
            uid
          }
        }
      }
    }
  }
`;
