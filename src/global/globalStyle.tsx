"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #8fc549;
    --red: #e02929;
    --dark-blue: #126ba5;
    --blue: #0081CC;
    --light-blue: #52b6ff;
    --dark-gray: #666666;
    --default-subtitle: #bababa;
    --medium-gray: #cfcfcf;
    --stroke: #d4d4d4;
    --placeholder: #dbdbdb;
    --non-completed-habit: #e7e7e7;
    --light-gray: #ebebeb;
    --calendar-text: #0b0b0b;
    --calendar-button: #f1eeee;
    --calendar-inspect-list: rgba(255, 255, 255, .45);
    --calendar-inspect-list-item: #F6F3F3;
    --border: none;
    --body-bg-color: #f2f2f2;
    --auth-bg: #ffffff;
    --light: #ffffff;
    --gray-scale: 1;
    --brightness: 1;
    --auth-brightness: 1;
    --invert: 0;
  }

  [data-theme="dark"]{
    --green: #8fc549;
    --red: #c52d2d;
    --dark-blue: #5AB5F0;
    --blue: #0081CC;
    --light-blue: #52b6ff;
    --dark-gray: #DBD6D6;
    --default-subtitle: #bababa;
    --medium-gray: #cfcfcf;
    --stroke: #d4d4d4;
    --placeholder: #A6A1A1;
    --non-completed-habit: #e7e7e7;
    --light-gray: #3f3f3f;
    --calendar-text: #ffffff;
    --calendar-button: #777777;
    --calendar-inspect-list: rgba(132, 126, 126, .45);
    --calendar-inspect-list-item: #404040;
    --border: #dbd8d8;
    --body-bg-color: #2C2C2C;
    --auth-bg: #2C2C2C;
    --light: #404040;
    --gray-scale: 0;
    --brightness: 0.3;
    --auth-brightness: 1.25;
    --invert: 1;
  }
  
  * {
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    font-family: "Lexend Deca";
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

  .hidden{
    display: none;
  }
`;

export default GlobalStyle;
