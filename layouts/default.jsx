import { TheHeader } from '@/components/TheHeader';
import { TheFooter } from '@/components/TheFooter';
import GlobalStyle from '@/styles/global';

export const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <TheHeader />
    <main>{children}</main>
    <TheFooter />
  </div>
);
