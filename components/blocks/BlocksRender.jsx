
import { Accordion } from '../Accordion/Accordion';
import { BlockImage } from './BlockImage/BlockImage';
import { BlockQuote } from './BlockQuote/BlockQuote';
import { BlockTitleTextCta } from './BlockTitleTextCta/BlockTitleTextCta';
import { BlockVideo } from './BlockVideo/BlockVideo';

const renderBlock = (block, index) => {
  console.log(block.type);

  switch (block.type) {
    case "title__text___cta":
      return <BlockTitleTextCta block={block.primary} key={index} />;
    case "quote":
      return <BlockQuote block={block.primary} key={index} />;
    case "video":
      return <BlockVideo block={block.primary} key={index} />;
    case "accordion":
      return <Accordion block={block.primary} fields={block.fields} key={index} />
    case "images":
      return <BlockImage block={block.primary} images={block.fields} key={index} />
    default:
      break;
  }
};

export const BlocksRender = ({ blocks }) => <>{blocks.map((block, index) => renderBlock(block, index))}</>;
