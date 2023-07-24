import { ReactNode } from "react";
import { styled } from "styled-components";

interface HabitHeaderProps {
  children: ReactNode;
}

export function HabitHeader({ children }: HabitHeaderProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: fit-content;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
