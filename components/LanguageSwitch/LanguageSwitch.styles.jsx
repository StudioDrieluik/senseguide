import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Switch = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  a {
    opacity: 0.4;
    transition: opacity var(--transition);

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .active a {
    text-decoration: underline;
    opacity: 1;
  }
`;
