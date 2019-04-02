import { useEffect } from 'react';
import { GITHUB, PROJ_NAME } from './environment';

export function getRelativePath(path: string): string {
  if (GITHUB) {
    const valid = /[^\/].*/g.exec(path);
    return valid ? `/${PROJ_NAME}/${valid[0]}` : `/${PROJ_NAME}/`;
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
