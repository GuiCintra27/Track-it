import { styled } from "styled-components";
import { HabitDay } from "./HabitDay";

interface HabitDaysBoxProps {
  editable: boolean;
}

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function HabitDaysBox({ editable }: HabitDaysBoxProps) {
  return (
    <Container>
      {weekDays.map((item,index ) => (
        <HabitDay key={index} editable={editable}>{item}</HabitDay>
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
