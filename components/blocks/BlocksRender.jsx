import { BLOCK_TYPES } from '../../constants/blockTypes';
import { BlockImage } from './BlockImage';
import { BlockTextImageCta } from '@/components/blocks/BlockTextImageCta';

const renderBlock = block => {
  switch (block.typeHandle) {
    case BLOCK_TYPES.IMAGE:
      return <BlockImage key={block.id} block={block} />;
    case BLOCK_TYPES.TEXT_IMAGE_CTA:
      return <BlockTextImageCta key={block.id} block={block} />;
    default:
      break;
  }
};

export const BlocksRender = ({ blocks }) => <>{blocks.map(block => renderBlock(block))}</>;
