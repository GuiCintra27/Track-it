"use client";

import { Provider } from "react-redux";
import { useEffect } from "react";
import { Lexend_Deca } from "next/font/google";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import i18n from "@/lib/i18n";
import { store } from "@/global/store";
import GlobalStyle from "@/global/globalStyle";
import StyledComponentsRegistry from "../lib/registry";

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
  useEffect(() => {
    const storageSettings = window.localStorage.getItem("settings");

    if (storageSettings) {
      const settings = JSON.parse(storageSettings);
      i18n.changeLanguage(settings.language);
    } else i18n.changeLanguage(navigator.language);
  }, []);

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
