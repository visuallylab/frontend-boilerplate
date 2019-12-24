import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    /* Github system font stack https://css-tricks.com/snippets/css/system-font-stack/ */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2.5em;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    font-size: 20px;
    font-family: HelveticaNeue-Light, -apple-system, system-ui, Arial, sans-serif;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.5em;
      letter-spacing: inherit;
    }
    p {
      font-weight: 300;
      font-size: 20px;
    }
  }
`;

export const colors = {
  primary: '#333',
};

export const HEADER_HEIGHT = '48px';
