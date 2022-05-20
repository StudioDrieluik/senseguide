import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Crumbs } from './Breadcrumbs.styles';

const convertBreadcrumb = string => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
};

export const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Crumbs aria-label="breadcrumbs">
      <ol>
        {breadcrumbs.map((breadcrumb, i, arr) => {
          // Not last item
          if (arr.length - 1 !== i) {
            return (
              <li key={breadcrumb.href}>
                <Link href={breadcrumb.href}>
                  <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><path d="m1 1 4 4-4 4" stroke="#80868B" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </li>
            );
          } else {
            return <li key={breadcrumb.href}><span>{convertBreadcrumb(breadcrumb.breadcrumb)}</span></li>
          }
        })}
      </ol>
    </Crumbs>
  );
};
