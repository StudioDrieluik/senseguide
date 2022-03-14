import { gql } from '@apollo/client';
import { IMAGES } from './IMAGES';

export const BLOCKS = gql`
  fragment blocks on MatrixBlockInterface {
    id
    typeHandle
    ... on blocks_image_BlockType {
      image {
        ${IMAGES('hero')}
      }
    }
  }
`;
