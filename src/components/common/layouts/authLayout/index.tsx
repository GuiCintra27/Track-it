import { styled } from "styled-components";
import React, { useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const {settings} = useAppSelector((state) => state.settings)
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(settings.theme)
  }, [settings.theme])
  
  return <Main data-theme={theme}>{children}</Main>;
}

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--auth-bg);

  padding-inline: 3.6rem;

  img {
    height: 18rem;
    width: 18rem;

    margin-bottom: 3.2rem;

    filter: brightness(var(--auth-brightness));
  }

  form {
    margin-bottom: 2.5rem;
  }

  a {
    font-size: 1.4rem;
    color: var(--light-blue);
    text-decoration: underline;
  }
`;
