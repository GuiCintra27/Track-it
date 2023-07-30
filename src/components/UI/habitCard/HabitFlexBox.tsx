import { ReactNode } from "react";
import { styled } from "styled-components";

interface HabitFlexBoxProps {
  children: ReactNode;
}

export function HabitFlexBox({ children }: HabitFlexBoxProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
