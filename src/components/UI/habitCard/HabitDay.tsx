import { Dispatch, HtmlHTMLAttributes, SetStateAction, useState } from "react";
import { styled } from "styled-components";

interface HabitDayPops extends HtmlHTMLAttributes<HTMLDivElement> {
  children: string;
  editable: boolean;
  habitDays?: number[];
  setHabitDays?: Dispatch<SetStateAction<number[]>>;
  index: number;
  loading?: boolean;
}

export function HabitDay({
  children,
  editable,
  habitDays,
  setHabitDays,
  index,
  loading,
}: HabitDayPops) {
  return (
    <Container
      loading={loading ? 0.7 : 1}
      className={habitDays?.includes(index) ? "selected" : undefined}
      onClick={() => {
        if (!loading && editable && setHabitDays && habitDays) {
          if (habitDays?.includes(index)) {
            const days = habitDays.filter((day) => day !== index);
            setHabitDays(days);
          } else {
            setHabitDays([...habitDays, index]);
          }
        }
      }}
    >
      <p>{children}</p>
    </Container>
  );
}

const Container = styled.div<{ loading: number }>`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--stroke);
  border-radius: 5px;

  font-size: 2rem;
  color: var(--placeholder);

  opacity: ${(props) => props.loading};

  &.selected {
    background-color: var(--medium-gray);
    color: var(--light);;
  }
`;
