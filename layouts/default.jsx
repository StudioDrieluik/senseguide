import { TheHeader } from '@/components/TheHeader/TheHeader';
import { TheFooter } from '@/components/TheFooter/TheFooter';
import GlobalStyle from '@/styles/global';
import { motion } from 'framer-motion';

export const Layout = ({ children }) => (
  <div className="content">
    <GlobalStyle />
    <TheHeader />
    <motion.main
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5, delay: 0.25 }}
    >{children}</motion.main>
    <TheFooter />
  </div>
);
