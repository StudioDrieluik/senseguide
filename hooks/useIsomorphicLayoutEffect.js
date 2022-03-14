import { useLayoutEffect, useEffect } from 'react';
import { IS_BROWSER } from '@/constants/browser';

/**
 * Use this hook to use the useLayoutEffect hook safely on both client and server side (= isomorphic) without
 * getting warnings.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 * See: https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
 * See: https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */
export const useIsomorphicLayoutEffect = IS_BROWSER ? useLayoutEffect : useEffect;
