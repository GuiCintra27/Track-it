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
`;
