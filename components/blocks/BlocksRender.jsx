
import { nanoid } from 'nanoid';
import { Accordion } from '../Accordion/Accordion';
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
      return <BlockVideo block={block.primary} key={nanoid()} />;
    case "accordion":
      return <Accordion block={block.primary} fields={block.fields} key={nanoid()} />
    default:
      break;
  }
};

export const BlocksRender = ({ blocks }) => <>{blocks.map(block => renderBlock(block))}</>;
