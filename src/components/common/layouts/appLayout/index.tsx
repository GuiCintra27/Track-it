"use client";
import { styled } from "styled-components";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--body-bg-color);

  .has-no-habits-subtitle{
    max-width: 90%;

    margin-inline: auto;

    font-size: 1.7rem;
    color: var(--dark-gray);
    font-weight: 400;
    text-align: justify;
  }

  > :nth-child(2) {
    margin-top: 2rem;
    margin-bottom: 2.2rem;
  }

  .createHabitCard{
    margin-bottom: 3rem;
  }
`;
