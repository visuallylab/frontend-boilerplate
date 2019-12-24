import { IParagraph } from '@/components/Paragraph';

/* site content */
export const PRODUCT = {
  SLOGAN: 'our ultimate solution',
  NAME: 'the awesome app',
  LOGO_PATH: 'http://unsplash.it/100/100?random&gravity=center',
  APP_STORE_DOWNLOAD_LINK: 'https://www.google.com',
  GOOGLE_PLAY_STORE_DOWNLOAD_LINK: 'GOOGLE_PLAY_STORE_DOWNLOAD_LINK',
};
export const COMPANY = {
  NAME: 'the awesome company',
  LOGO_PATH: 'http://unsplash.it/300/100?random&gravity=center',
  WEBSITE_URL: 'https://www.google.com',
  FACEBOOK_URL: 'https://www.google.com',
  TWITTER_URL: 'https://www.google.com',
  MEDIUM_URL: 'https://www.google.com',
  COPYRIGHT_YEAR: 2020,
};
export const FEATURES: IParagraph[] = [
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Make Money',
    description:
      'Occaecat velit cupidatat sint deserunt est fugiat reprehenderit.',
  },
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Selling Data',
    description: 'Duis non magna incididunt laborum aliqua.',
  },
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Protect your password',
    description:
      'Qui irure in dolor pariatur voluptate nisi nisi incididunt adipisicing excepteur.',
  },
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Send the email',
    description:
      'Ea velit ullamco id laboris aliquip reprehenderit enim irure.',
  },
];
export const SCENARIOS = [
  {
    title: 'Shopping mall',
    icon: 'http://unsplash.it/600/600?random&gravity=center',
  },
  {
    title: 'Smart City',
    icon: 'http://unsplash.it/600/600?random&gravity=center',
  },
  {
    title: 'Collage',
    icon: 'http://unsplash.it/600/600?random&gravity=center',
  },
  {
    title: 'Toilet',
    icon: 'http://unsplash.it/600/600?random&gravity=center',
  },
];
export const HOW_IT_WORKS: IParagraph[] = [
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Fetch data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum numquam laboriosam itaque dolorum eveniet fugit error, nulla quisquam earum debitis! Reprehenderit hic, odit eveniet modi dolorem beatae neque iste vero?',
  },
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Analysis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis consequatur sit odit! Rerum quasi officiis itaque voluptates ullam veniam tempore eos quod corporis reiciendis, rem nam commodi nemo necessitatibus.',
  },
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Learn',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia autem consectetur rem quidem cupiditate explicabo culpa mollitia quia doloribus, praesentium eius ducimus repellat rerum minus ipsam distinctio velit beatae?',
  },
  {
    icon: 'http://unsplash.it/600/600?random&gravity=center',
    title: 'Magic happen',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis blanditiis doloremque, fugit dolor libero minus perspiciatis at incidunt deserunt aut harum rem amet quasi, omnis deleniti vero tenetur unde dolorum!',
  },
];
export const CALL_TO_DOWNLOAD = 'Have the whole world in one APP';

/* head meta tag data */
export const SITE_TITLE = `${PRODUCT.NAME} | ${COMPANY.NAME}`;
export const SITE_DESC = PRODUCT.SLOGAN;
export const SITE_URL = '127.0.0.1';
export const FAVICON_PATH = '/favicon.ico';
export const LARGE_ICON_PATH = '/large-icon.png';

export enum SectionId {
  Features = 'features',
  Scenarios = 'scenarios',
  HowItWork = 'how-it-work',
  Download = 'download',
}
