import { gql } from '@apollo/client'

export const LANGUAGE_SWITCH = gql`
  fragment languageSwitch on EntryInterface {
    languageSwitch {
      language
      url
      current
    }
  }
`;
