import { GITHUB, env } from './environment';

export function getRelativePath(path: string) {
  return GITHUB ? `/${env('PROJ_NAME')}/${path}` : path;
}
