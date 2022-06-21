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
  const withWhiteLogo = pagesWithWhiteLogo.includes(router.pathname);
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
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
