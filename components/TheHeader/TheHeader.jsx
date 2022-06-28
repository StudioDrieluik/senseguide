import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { Logo } from '../Logo';
import { MenuOverlay } from '../MenuOverlay/MenuOverlay';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { Menu, Wrapper, Hamburger } from './TheHeader.styles';

const pagesWithWhiteLogo = ['/'];

export const TheHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  const withWhiteLogo = pagesWithWhiteLogo.includes(router.pathname);
  let lastScroll = 0;
  let variant;

  switch (true) {
    case withWhiteLogo:
      variant = 'white';
      break;
    default:
      variant = null;
      break;
  }

  const handleKeyDown = useCallback(event => {
    if (event.key === 'Escape') {
      setMenuIsOpen(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const body = document.body;
    const logo = document.querySelector('.logo');
    const currentScroll = window.scrollY;

    if (currentScroll <= 200) {
      body.classList.remove(scrollUp);
      logo.classList.remove('in-color');
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // Down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
      // Up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
      logo.classList.add('in-color');
    }
    lastScroll = currentScroll;
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
      document.addEventListener('scroll', handleScroll);
      document.querySelector('body').classList.remove(scrollDown);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    menuIsOpen ? (body.style.overflowY = 'hidden') : (body.style.overflowY = 'initial');

    return () => (document.querySelector('body').style.overflowY = 'initial');
  }, [menuIsOpen]);

  return (
    <Wrapper variant={variant}>
      <Link href="/">
        <a>
          <Logo variant={variant} />
        </a>
      </Link>
      <Menu>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <LanguageSwitch></LanguageSwitch>
        <Hamburger
          initial={false}
          animate={menuIsOpen ? 'open' : 'closed'}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <MenuToggle />
          {menuIsOpen ? 'Sluit' : 'Menu'}
        </Hamburger>
      </Menu>
      <MenuOverlay menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </Wrapper>
  );
};
