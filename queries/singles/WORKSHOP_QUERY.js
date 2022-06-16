import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';

export const WORKSHOP_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allWorkshops(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          time
          persons
          price
          price_information
          location
          intro
          _meta {
            uid
          }
          body {
            ${BLOCKS('Workshop')}
          }
        }
      }
    }
  }
`;
