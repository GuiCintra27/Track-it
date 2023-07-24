import { useState } from "react";
import { styled } from "styled-components";

interface HabitDayPops {
  children: string;
  editable: boolean;
}

export function HabitDay({ children, editable }: HabitDayPops) {
  const [selected, setSelected] = useState(false);

  function selectHabit(editable: boolean) {
    if (editable) {
      setSelected(!selected);
    }
  }

  return (
    <Container
      className={selected ? "selected" : undefined}
      onClick={() => selectHabit(editable)}
    >
      <p>{children}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--stroke);
  border-radius: 5px;

  font-size: 2rem;
  color: var(--placeholder);

  &.selected {
    background-color: var(--medium-gray);
    color: #fff;
  }
`;
