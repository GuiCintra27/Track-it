"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --light-blue: #52b6ff;
  --dark-blue: #126ba5;
  --light-gray: #ebebeb;
  --medium-gray: #cfcfcf;
  --body-bg-color: #f2f2f2;
  --stroke: #d4d4d4;
  --dark-gray: #666666;
  --placeholder: #dbdbdb;
  --non-completed-habit: #e7e7e7;
  --default-subtitle: #bababa;
  --green: #8fc549;
  font-family: "Lexend Deca";
}

* {
  text-decoration: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-size: 62.5%;
  background-color: var(--body-bg-color);
}

a {
  color: inherit;
}
`;

export default GlobalStyle;
