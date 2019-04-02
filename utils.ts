import { useEffect } from 'react';
import { GITHUB, env } from './environment';

export function getRelativePath(path: string): string {
  if (GITHUB) {
    const valid = /[^\/].*/g.exec(path);
    return valid ? `/${env('PROJ_NAME')}/${valid[0]}` : '';
  }
  return path;
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
