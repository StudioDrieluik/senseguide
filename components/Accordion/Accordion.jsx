import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Container } from '../Container/Container.styles';
import { Panel, PanelContent, PanelGroup, PanelHeading, PanelIcon, PanelTitle } from './Accordion.styles';

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
      {block?.accordion_text && <p>{block?.accordion_text[0].text}</p>}

      {fields && (
        <PanelGroup>
          {fields.map(({ accordion_item_title: title, accordion_item_text: content }) => {
            // @TODO: Alternatief voor ID, nanoid fixt elke keer een nieuwe op click
            const id = `${title[0].text}-id`;

            return (
              <Panel id={id} key={id}>
                <PanelHeading onClick={() => handleToggle(id)}>
                  <PanelIcon className={(id === toggle) ? 'animate' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><g stroke="#202124" strokeWidth="2.2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path className="horizontal" d="M1.438 9.508h15.124"/><path className="vertical" d="M9.008 1.938v15.124"/></g></PanelIcon>
                  <PanelTitle>{title?.[0].text}</PanelTitle>
                </PanelHeading>
                {id === toggle && (
                  <PanelContent>
                    {content.map(({ text }) => (
                      <p key={nanoid()}>{text}</p>
                    ))}
                  </PanelContent>
                )}
              </Panel>
            );
          })}
        </PanelGroup>
      )}
    </Container>
  );
};
