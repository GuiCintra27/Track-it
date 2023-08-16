import { ReactNode } from "react";
import { styled } from "styled-components";

interface HabitDataProps {
  text: string;
  validation: boolean;
  days: number;
}

export function HabitData({ text, validation, days }: HabitDataProps) {
  return (
    <Data>
      {text}{" "}
      <span className={validation ? "green" : ""}>
        {days}
        {days > 1 ? " Dias" : " Dia"}
      </span>
    </Data>
  );
}

const Data = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--dark-gray);

  .green {
    color: var(--green);
  }
`;
