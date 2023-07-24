import { ReactNode } from "react";
import { styled } from "styled-components";

interface HabitDataProps {
  children: ReactNode;
}

export function HabitData({ children }: HabitDataProps) {
  return <Data>{children}</Data>;
}

const Data = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--dark-gray);

  .green {
    color: var(--green);
  }
`;
