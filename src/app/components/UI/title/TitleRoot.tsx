import { ReactNode } from "react";
import { styled } from "styled-components";

interface TitleRootProps {
  children: ReactNode;
}

export function TitleRoot({ children }: TitleRootProps) {
  return <Title>{children}</Title>;
}

const Title = styled.div`
  width: 100%;

  padding-inline: 1.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
