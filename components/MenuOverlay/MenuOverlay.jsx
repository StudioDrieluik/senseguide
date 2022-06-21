import React from 'react';
import Link from 'next/link';
import { LanguageWrapper, Menu, MenuItem, MenuList, PageDarkOverlay, Wrapper } from './MenuOverlay.styles';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

export const MenuOverlay = ({ menuIsOpen, setMenuIsOpen }) => {
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
            <MenuItem variants={items}><Link href="/diensten"><a>Diensten</a></Link></MenuItem>
            <MenuItem variants={items}><Link href="/voor-wie"><a>Voor wie</a></Link></MenuItem>
            <MenuItem variants={items}><Link href="/verhalen"><a>Verhalen</a></Link></MenuItem>
            <MenuItem variants={items}><Link href="/verhalen"><a>Projecten - TODO</a></Link></MenuItem>
            <MenuItem variants={items}><Link href="/workshops"><a>Workshops</a></Link></MenuItem>
            <MenuItem variants={items}><Link href="/over-ons"><a>Over ons</a></Link></MenuItem>
            <MenuItem variants={items}><Link href="/contact"><a>Contact</a></Link></MenuItem>
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
