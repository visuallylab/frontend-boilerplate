import { getRelativePath } from '@/utils';

/* head meta tag data */
export const SITE_TITLE = 'BiiMe | BiiLabs';
export const SITE_DESC = 'Universal open DLT ID solution';
export const SITE_URL = 'biime.biilabs.io';
export const FAVICON_PATH = getRelativePath('//favicon.ico');
export const LARGE_ICON_PATH = getRelativePath('//large-icon.png');
export enum SectionId {
  Features = 'features',
  Scenarios = 'scenarios',
  HowItWork = 'how-it-work',
  Download = 'download',
}
