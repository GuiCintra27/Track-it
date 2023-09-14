import React from "react";
import { styled } from "styled-components";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return <Main data-theme={''}>{children}</Main>;
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
