import { styled } from "styled-components";
import { HtmlHTMLAttributes, useState } from "react";

interface HabitCheckIconProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function HabitCheckIcon({ ...rest }: HabitCheckIconProps) {
  const [done, setDone] = useState(false);
  function handleClick() {
    setDone(!done);
  }

  return (
    <Container onClick={handleClick} className={done ? "green" : undefined}>
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
