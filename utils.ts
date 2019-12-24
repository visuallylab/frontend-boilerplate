import { generateMedia } from 'styled-media-query';

export const breakpoints = {
  xs: '0',
  sm: '48em',
  md: '64em',
  lg: '75em',
};

export const media = generateMedia(breakpoints);
