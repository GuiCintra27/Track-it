"use client";

import { Provider } from "react-redux";
import { Lexend_Deca } from "next/font/google";

import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "@/global/globalStyle";
import { store } from "@/global/store";

const lexendDeca = Lexend_Deca({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={lexendDeca.className}>
        <StyledComponentsRegistry>
          <Provider store={store}>{children}</Provider>
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
