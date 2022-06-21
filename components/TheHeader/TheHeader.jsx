import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo';
import { MenuOverlay } from '../MenuOverlay/MenuOverlay';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { Menu, Wrapper, LanguageSwitch, Hamburger } from './TheHeader.styles';

const pagesWithWhiteLogo = ['/'];
const englishPages = ['/en'];

export const TheHeader = () => {
  const { t } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menu = t('common:menu', {}, { returnObjects: true });
  const router = useRouter();
  const withWhiteLogo = pagesWithWhiteLogo.includes(router.pathname);
  const isEnglish = englishPages.includes(router.pathname);
  let variant;

  switch (true) {
    case withWhiteLogo:
      variant = 'white';
      break;
    default:
      variant = null;
      break;
  }

  console.log(isEnglish)

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
        <LanguageSwitch>
          <a href="/">NL</a>
          <a href="/en">EN</a>
        </LanguageSwitch>
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
