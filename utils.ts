import { generateMedia } from 'styled-media-query';

// import { GITHUB, PROJ_NAME } from './environment';

export function getRelativePath(path: string): string {
  // if (GITHUB) {
  //   const valid = /[^\/].*/g.exec(path);
  //   return valid ? `/${PROJ_NAME}/${valid[0]}` : `/${PROJ_NAME}/`;
  // }
  return path;
}

export const breakpoints = {
  xs: '0',
  sm: '48em',
  md: '64em',
  lg: '75em',
};

export const media = generateMedia(breakpoints);
