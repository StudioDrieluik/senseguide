import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';

export const ABOUT_US_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allOver_onss(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          image
          intro
          _meta {
            uid
          }
          body {
            ${BLOCKS('Over_ons')}
          }
        }
      }
    }
  }
`;
