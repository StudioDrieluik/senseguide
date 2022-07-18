import React from 'react';
import Link from 'next/link';
import { LanguageWrapper, Menu, MenuItem, MenuList, PageDarkOverlay, Wrapper } from './MenuOverlay.styles';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import useTranslation from 'next-translate/useTranslation';

export const MenuOverlay = ({ menuIsOpen, setMenuIsOpen }) => {
  const { t } = useTranslation('common');

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const items = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <>
      <Wrapper
        initial={{ x: '100%' }}
        animate={{ x: menuIsOpen ? 0 : '100%' }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: menuIsOpen ? 0 : 0.6 }}
      >
        <Menu>
          <MenuList
            animate={menuIsOpen ? "open" : "closed"}
            variants={variants}
          >
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/diensten"><a>{t('menu.services')}</a></Link></MenuItem>
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/voor-wie"><a>{t('menu.who')}</a></Link></MenuItem>
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/verhalen"><a>{t('menu.stories')}</a></Link></MenuItem>
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/verhalen?type=project"><a>{t('menu.projects')}</a></Link></MenuItem>
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/workshops"><a>Workshops</a></Link></MenuItem>
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/over-ons"><a>{t('menu.about')}</a></Link></MenuItem>
            <MenuItem onClick={() => setMenuIsOpen(!menuIsOpen)} variants={items}><Link href="/contact"><a>Contact</a></Link></MenuItem>
          </MenuList>
        </Menu>
        <LanguageWrapper
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: menuIsOpen ? 1 : 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: menuIsOpen ? 1 : 0 }}
        >
          <LanguageSwitch></LanguageSwitch>
        </LanguageWrapper>
      </Wrapper>
      <PageDarkOverlay
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ opacity: menuIsOpen ? 0.4 : 0, pointerEvents: menuIsOpen ? 'all' : 'none' }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: menuIsOpen ? 0 : 0.6  }}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </>
  );
};
