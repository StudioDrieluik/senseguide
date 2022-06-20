import React, { useEffect, useState } from 'react';
import { Wrapper } from './StickyCta.styles';

const StickyCta = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleClick = () => {
    window.alert('formulier');
  };

  return (
    <Wrapper
      initial={!hasAnimated && { x: '20%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 3 }}
      onAnimationComplete={() => setHasAnimated(true)}
      onClick={handleClick}
    >
      Neem contact op
    </Wrapper>
  );
};

export default StickyCta;
