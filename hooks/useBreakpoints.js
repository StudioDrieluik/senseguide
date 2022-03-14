import { useMediaQuery } from 'react-responsive';

const { BREAKPOINTS } = require('../constants/breakpoints');

const breakpointsAsNumbers = Object.assign(
  {},
  ...Object.entries(BREAKPOINTS).map(([key, value]) => ({
    [key]: Number(value.replace('px', '')),
  }))
);

const mediaQueries = {
  isXs: null,
  isSm: null,
  isMd: null,
  isLg: null,
  isXl: null,
  is2xl: null,
  is3xl: null,
};

export const useBreakpoints = () => {
  mediaQueries.isXs = useMediaQuery({
    query: `(min-width: 0px) and (max-width: ${breakpointsAsNumbers.xs - 1}px)`,
  });
  mediaQueries.isSm = useMediaQuery({
    query: `(min-width: ${breakpointsAsNumbers.xs}px) and (max-width: ${
      breakpointsAsNumbers.sm - 1
    }px)`,
  });
  mediaQueries.isMd = useMediaQuery({
    query: `(min-width: ${breakpointsAsNumbers.sm}px) and (max-width: ${
      breakpointsAsNumbers.md - 1
    }px)`,
  });
  mediaQueries.isLg = useMediaQuery({
    query: `(min-width: ${breakpointsAsNumbers.md}px) and (max-width: ${
      breakpointsAsNumbers.lg - 1
    }px)`,
  });
  mediaQueries.isXl = useMediaQuery({
    query: `(min-width: ${breakpointsAsNumbers.lg}px) and (max-width: ${
      breakpointsAsNumbers.xl - 1
    }px)`,
  });
  mediaQueries.is2xl = useMediaQuery({
    query: `(min-width: ${breakpointsAsNumbers.xl}px) and (max-width: ${
      breakpointsAsNumbers['2xl'] - 1
    }px)`,
  });
  mediaQueries.is3xl = useMediaQuery({ query: `(min-width: ${BREAKPOINTS['2xl']})` });

  return {
    ...mediaQueries,
  };
};
