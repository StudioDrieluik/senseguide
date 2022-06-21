import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Switch } from './LanguageSwitch.styles';

export default function LanguageSwitch() {
  const { locale, locales, asPath } = useRouter();

  return (
    <Switch>
      {locales.map((l, i) => {
        return (
          <span key={i} className={locale === l ? 'active' : ''}>
            <Link href={asPath} locale={l}>
              {l.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </Switch>
  );
}
