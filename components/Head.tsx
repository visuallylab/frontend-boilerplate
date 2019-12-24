import {
  SITE_TITLE,
  SITE_DESC,
  FAVICON_PATH,
  LARGE_ICON_PATH,
  SITE_URL,
} from '@/constants';
import Head from 'next/head';

export default () => (
  <Head>
    <title>{SITE_TITLE}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={SITE_DESC} />
    <link rel="icon" type="image/x-icon" href={FAVICON_PATH} />
    <link rel="apple-touch-icon" href={LARGE_ICON_PATH} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:title" content={SITE_TITLE} />
    <meta property="og:description" content={SITE_DESC} />
    <meta property="og:image" content={LARGE_ICON_PATH} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </Head>
);
