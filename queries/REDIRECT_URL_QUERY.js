import { gql } from '@apollo/client'

export const REDIRECT_URL_QUERY = gql`
  query entry($siteId: [String], $id: [QueryArgument]) {
    entry(site: $siteId, id: $id) {
      url
      slug
    }
  }
`;
