"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #8fc549;
    --dark-blue: #126ba5;
  --light-blue: #52b6ff;
  --dark-gray: #666666;
  --default-subtitle: #bababa;
  --medium-gray: #cfcfcf;
  --stroke: #d4d4d4;
  --placeholder: #dbdbdb;
  --non-completed-habit: #e7e7e7;
  --light-gray: #ebebeb;
  --body-bg-color: #f2f2f2;
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

.sweet-toast{
    font-size: 14px;
  }
`;

export default GlobalStyle;
