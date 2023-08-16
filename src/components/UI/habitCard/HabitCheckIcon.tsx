import { styled } from "styled-components";
import { HtmlHTMLAttributes } from "react";

interface HabitCheckIconProps extends HtmlHTMLAttributes<HTMLDivElement> {
  done: boolean;
}

export function HabitCheckIcon({ done, ...rest }: HabitCheckIconProps) {
  return (
    <Container {...rest} className={done ? "green" : undefined}>
      <img src="/icons/success-icon.svg" alt="Check Habit" />
    </Container>
  );
}

const Container = styled.div`
  width: 7rem;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e7e7e7;
  border-radius: 5px;

  background-color: var(--light-gray);

  &.green {
    background-color: var(--green);
  }

  img {
    width: 2.8rem;
    height: 3.5rem;
  }
`;
