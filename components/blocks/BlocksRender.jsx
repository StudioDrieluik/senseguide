
import { nanoid } from 'nanoid';
import { BlockQuote } from './BlockQuote/BlockQuote';
import { BlockTitleTextCta } from './BlockTitleTextCta/BlockTitleTextCta';
import { BlockVideo } from './BlockVideo/BlockVideo';

const renderBlock = block => {
  console.log(block.type);

  switch (block.type) {
    case "title__text___cta":
      return <BlockTitleTextCta block={block.primary} key={nanoid()} />;
    case "quote":
      return <BlockQuote block={block.primary} key={nanoid()} />;
    case "video":
      return <BlockVideo block={block} key={nanoid()} />;
    // case BLOCK_TYPES.TEXT_IMAGE_CTA:
    //   return <BlockTextImageCta key={block.id} block={block} />;
    default:
      break;
  }
};

export const BlocksRender = ({ blocks }) => <>{blocks.map(block => renderBlock(block))}</>;
