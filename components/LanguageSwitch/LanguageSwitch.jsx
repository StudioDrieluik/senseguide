import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Switch } from './LanguageSwitch.styles';

export default function LanguageSwitch() {
  const { defaultLocale, locale, locales } = useRouter();

  return (
    <Switch>
      {locales.map((l, i) => {
        const route = l === defaultLocale ? '/' : `/${l}`;
        return (
          <span key={i} className={locale === l ? 'active' : ''}>
            <a href={route}>{l.toUpperCase()}</a>
          </span>
        );
      })}
    </Switch>
  );
}
