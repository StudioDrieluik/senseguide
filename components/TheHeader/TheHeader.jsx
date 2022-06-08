import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { Logo } from '../Logo';
import { MenuOverlay } from '../MenuOverlay/MenuOverlay';
import { Menu, Wrapper, LanguageSwitch, Hamburger } from './TheHeader.styles';

const pagesWithWhiteLogo = ['/'];

export const TheHeader = () => {
  const { t } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = t('common:menu', {}, { returnObjects: true });
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
        <LanguageSwitch>
          <a href="/">NL</a>
          <a href="/en">EN</a>
        </LanguageSwitch>
        <Hamburger onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {menuIsOpen ? 'Sluit' : 'Menu'}
        </Hamburger>
      </Menu>
      <MenuOverlay menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </Wrapper>
  );
};
