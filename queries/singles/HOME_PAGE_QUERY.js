import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';
import { HEAD_META } from '../fragments/HEAD_META.js';

export const HOME_PAGE_QUERY = gql`
  ${BLOCKS}
  query ($site: [String]) {
    entry(site: $site, section: "homepage") {
      ... on homepage_homepage_Entry {
        ${HEAD_META()}
        seoTitle
        seoDescription
        title
        id
        url
        blocks {
          ...blocks
        }
      }
    }
  }
`;
