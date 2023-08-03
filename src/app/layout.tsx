"use client";

import { Provider } from "react-redux";

import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "@/global/globalStyle";
import { store } from "@/global/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Provider store={store}>{children}</Provider>
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
