"use client";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/useAppSelector";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const {settings} = useAppSelector((state) => state.settings)
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(settings.theme)
  }, [settings.theme])
  
  return <Main data-theme={theme}>{children}</Main>;
}

const Main = styled.main`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--body-bg-color);

  .has-no-habits-subtitle {
    max-width: 90%;

    margin-inline: auto;

    font-size: 1.7rem;
    color: var(--dark-gray);
    font-weight: 400;
    text-align: justify;
  }

  .createHabitCard {
    margin-bottom: 3rem;
  }

  .container {
    max-height: 100%;
    overflow-y: scroll;

    > :first-child {
      margin-top: 2rem;
      margin-bottom: 2.2rem;
    }

    > :last-child {
      margin-bottom: 4rem;
    }

    .margin-inline{
      margin-inline: 8%;
    }
  }
`;
