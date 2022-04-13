import { TheHeader } from '@/components/TheHeader/TheHeader';
import { TheFooter } from '@/components/TheFooter/TheFooter';
import GlobalStyle from '@/styles/global';

export const Layout = ({ children }) => (
  <div className="content">
    <GlobalStyle />
    <TheHeader />
    <main>{children}</main>
    <TheFooter />
  </div>
);
