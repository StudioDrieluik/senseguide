import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';

export const AUDIENCE_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allAudiences(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          image
          intro
          tags {
            tag
          }
          _meta {
            uid
          }
          body {
            ${BLOCKS()}
          }
        }
      }
    }
  }
`;
