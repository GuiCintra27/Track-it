"use client";

import { Provider } from "react-redux";
import { Lexend_Deca } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import i18n from "@/lib/i18n";
import { store } from "@/global/store";
import GlobalStyle from "@/global/globalStyle";
import StyledComponentsRegistry from "../lib/registry";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

const lexendDeca = Lexend_Deca({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    useEffect(() => {
      const storageSettings = window.localStorage.getItem("settings");

      if (storageSettings) {
        const settings = JSON.parse(storageSettings);
        i18n.changeLanguage(settings.language);
      } else i18n.changeLanguage(navigator.language);
    }, [window, navigator]);
  }
  
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={lexendDeca.className}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <Provider store={store}>
              <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
            </Provider>
            <GlobalStyle />
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
