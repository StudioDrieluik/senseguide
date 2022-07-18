import useTranslation from 'next-translate/useTranslation';
import React, { useCallback, useEffect, useState } from 'react';
import ContactFormOverlay from '../ContactFormOverlay/ContactFormOverlay';
import { Wrapper } from './StickyCta.styles';

const StickyCta = () => {
  const { t } = useTranslation('common');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handleKeyDown = useCallback(event => {
    if (event.key === 'Escape') {
      setOverlay(false);
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
    overlay ? (body.style.overflowY = 'hidden') : (body.style.overflowY = 'initial');

    return () => (document.querySelector('body').style.overflowY = 'initial');
  }, [overlay]);

  return (
    <>
      <Wrapper
        initial={!hasAnimated && { x: '20%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 3 }}
        onAnimationComplete={() => setHasAnimated(true)}
        onClick={() => setOverlay(true)}
      >
        {t('stickyCta')}
      </Wrapper>
      <ContactFormOverlay overlay={overlay} setOverlay={setOverlay}></ContactFormOverlay>
    </>
  );
};

export default StickyCta;
