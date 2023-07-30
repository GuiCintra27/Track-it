import { ReactNode } from "react";
import { styled } from "styled-components";

interface HabitActionsProps {
  children: ReactNode;
}

export function HabitActions({ children }: HabitActionsProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  margin-top: 3rem;

  display: flex;
  align-self: flex-end;
  gap: 1.5rem;
`;
