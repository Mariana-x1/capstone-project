import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    margin: 0;
    font-family: system-ui;
    margin: 0 auto;
    width: 360px;
    box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.5);
    padding-bottom: 1rem;
  }
`;
