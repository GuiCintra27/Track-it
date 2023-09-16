import { ReactNode } from "react";
import { styled } from "styled-components";

interface HabitDataProps {
  text: string;
  validation: boolean;
  dayText: string;
  days: number;
}

export function HabitData({ text, validation, dayText, days }: HabitDataProps) {
  return (
    <Data>
      {text}{" "}
      <span className={validation ? "green" : ""}>
        {days}
        {days > 1 ? `${dayText}s` : dayText}
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
