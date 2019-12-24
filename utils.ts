// import { GITHUB, PROJ_NAME } from './environment';

export function getRelativePath(path: string): string {
  // if (GITHUB) {
  //   const valid = /[^\/].*/g.exec(path);
  //   return valid ? `/${PROJ_NAME}/${valid[0]}` : `/${PROJ_NAME}/`;
  // }
  return path;
}

export const breakpoints = {
  sm: '576',
  md: '768',
  lg: '992',
};

/**
 * @param {string} threshold
 * @param {string} displayWay 'max' or 'min'
 */
export const media = (
  threshold: 'sm' | 'md' | 'lg',
  displayWay: 'max' | 'min' = 'max',
) => {
  const breakpoint = breakpoints[threshold];
  return `@media (${displayWay}-width: ${breakpoint}px)`;
};
