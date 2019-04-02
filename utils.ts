import { useEffect } from 'react';
import { GITHUB, env } from './environment';

export function getRelativePath(path: string) {
  return GITHUB ? `/${env('PROJ_NAME')}/${path}` : path;
}

/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30551
 */
export function useAsyncEffect(
  effect: () => Promise<void | (() => void)>,
  dependencies?: any[],
) {
  return useEffect(() => {
    const cleanupPromise = effect();
    return () => {
      cleanupPromise.then(cleanup => cleanup && cleanup());
    };
  }, dependencies);
}
