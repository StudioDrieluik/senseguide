import React from 'react';
import { PageDarkOverlay, Wrapper } from './MenuOverlay.styles';

export const MenuOverlay = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <>
      <Wrapper
        initial={{ x: '100%' }}
        animate={{ x: menuIsOpen ? 0 : '100%' }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
      >
        <div>Menu items komen hier</div>
      </Wrapper>
      <PageDarkOverlay
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ opacity: menuIsOpen ? 0.4 : 0, pointerEvents: menuIsOpen ? 'all' : 'none' }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </>
  );
};
