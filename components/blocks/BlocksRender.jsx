import { Accordion } from '../Accordion/Accordion';
import { BlockContactCard } from './BlockContactCard/BlockContactCard';
import { BlockTeamMember } from './BlockTeamMember/BlockTeamMember';
import { BlockHighlightedItem } from './BlockHighlightedItem/BlockHighlightedItem';
import { BlockImage } from './BlockImage/BlockImage';
import { BlockImageText } from './BlockImageText/BlockImageText';
import { BlockQuote } from './BlockQuote/BlockQuote';
import { BlockStorySlider } from './BlockStorySlider/BlockStorySlider';
import { BlockTitleTextCta } from './BlockTitleTextCta/BlockTitleTextCta';
import { BlockVideo } from './BlockVideo/BlockVideo';
import { BlockEmbed } from './BlockEmbed/BlockEmbed';

const renderBlock = (block, index) => {
  switch (block.type) {
    case 'title__text___cta':
      return <BlockTitleTextCta block={block.primary} key={index} />;
    case 'quote':
      return <BlockQuote block={block.primary} key={index} />;
    case 'video':
      return <BlockVideo block={block.primary} key={index} />;
    case 'embed':
      return <BlockEmbed block={block.primary} key={index} />;
    case 'accordion':
      return <Accordion block={block.primary} fields={block.fields} key={index} />;
    case 'images':
    case 'image_slider':
      return <BlockImage block={block.primary} images={block.fields} key={index} />;
    case 'story_slider':
      return (
        <BlockStorySlider
          title={block.primary?.story_slider_title?.[0]?.text}
          slides={block.fields}
          key={index}
        />
      );
    case 'highlighted_item':
      return <BlockHighlightedItem block={block.primary} key={index} />;
    case 'contact_card':
      return <BlockContactCard block={block.primary} key={index} />;
    case 'team_member':
      return <BlockTeamMember block={block.primary} key={index} />;
    case 'image__title__text___cta':
      return <BlockImageText block={block.primary} key={index} />;
    default:
      break;
  }
};

export const BlocksRender = ({ blocks }) => (
  <>{blocks.map((block, index) => renderBlock(block, index))}</>
);
