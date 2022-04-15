
import { v4 as uuidv4 } from 'uuid';
import { Accordion } from '../Accordion/Accordion';
import { BlockImage } from './BlockImage/BlockImage';
import { BlockQuote } from './BlockQuote/BlockQuote';
import { BlockTitleTextCta } from './BlockTitleTextCta/BlockTitleTextCta';
import { BlockVideo } from './BlockVideo/BlockVideo';

const renderBlock = block => {
  console.log(block.type);

  switch (block.type) {
    case "title__text___cta":
      return <BlockTitleTextCta block={block.primary} key={uuidv4()} />;
    case "quote":
      return <BlockQuote block={block.primary} key={uuidv4()} />;
    case "video":
      return <BlockVideo block={block.primary} key={uuidv4()} />;
    case "accordion":
      return <Accordion block={block.primary} fields={block.fields} key={uuidv4()} />
    case "images":
      return <BlockImage block={block.primary} images={block.fields} key={uuidv4()} />
    default:
      break;
  }
};

export const BlocksRender = ({ blocks }) => <>{blocks.map(block => renderBlock(block))}</>;
