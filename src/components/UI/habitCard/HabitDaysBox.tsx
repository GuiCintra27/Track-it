import { styled } from "styled-components";

import { HabitDay } from "./HabitDay";
import { Dispatch, SetStateAction } from "react";

interface HabitDaysBoxProps {
  editable: boolean;
  habitDays?: number[];
  setHabitDays?: Dispatch<SetStateAction<number[]>>;
  loading?: boolean;
}

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function HabitDaysBox({
  habitDays,
  setHabitDays,
  editable,
  loading,
}: HabitDaysBoxProps) {
  return (
    <Container>
      {weekDays.map((item, index) => (
        <HabitDay
          key={index}
          editable={editable}
          index={index}
          habitDays={habitDays}
          setHabitDays={setHabitDays}
          loading={loading}
        >
          {item}
        </HabitDay>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 0.4rem;
`;
