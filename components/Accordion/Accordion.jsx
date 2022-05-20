import { useState } from 'react';
import { Container } from '../Container/Container.styles';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import {
  Panel,
  PanelContent,
  PanelGroup,
  PanelHeading,
  PanelIcon,
  PanelTitle,
} from './Accordion.styles';

export const Accordion = ({ block, fields }) => {
  const [toggle, setToggle] = useState(null);

  let handleToggle = id => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  return (
    <Container>
      {block?.accordion_title && <h2>{block?.accordion_title[0].text}</h2>}
      {block?.accordion_text && (
        <RichText render={block?.accordion_text} htmlSerializer={htmlSerializer} />
      )}

      {fields && (
        <PanelGroup>
          {fields.map(({ accordion_item_title: title, accordion_item_text: content }) => {
            const id = `${title?.[0]?.text}-id`;

            return (
              <Panel id={id} key={id}>
                <PanelHeading onClick={() => handleToggle(id)} aria-expanded={id === toggle}>
                  <PanelIcon
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 19"
                  >
                    <g
                      stroke="#202124"
                      strokeWidth="2.2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path className="horizontal" d="M1.438 9.508h15.124" />
                      <path className="vertical" d="M9.008 1.938v15.124" />
                    </g>
                  </PanelIcon>
                  <PanelTitle>{title?.[0].text}</PanelTitle>
                </PanelHeading>
                <PanelContent aria-expanded={id === toggle}>
                  <RichText render={content} htmlSerializer={htmlSerializer} />
                </PanelContent>
              </Panel>
            );
          })}
        </PanelGroup>
      )}
    </Container>
  );
};
