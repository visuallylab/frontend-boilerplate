import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  h1 {
    font-size: 2.5em;
    letter-spacing: 0.1em;
    margin-top: 12px;
  }
  p {
    font-size: 20px;
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
