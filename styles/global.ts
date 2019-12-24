import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
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
  primary: 'rgb(28, 42, 77)',
};

export const HEADER_HEIGHT = '48px';
