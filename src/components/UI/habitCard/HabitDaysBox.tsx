import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";

import { HabitDay } from "./HabitDay";

interface HabitDaysBoxProps {
  editable: boolean;
  habitDays?: number[];
  setHabitDays?: Dispatch<SetStateAction<number[]>>;
  loading?: boolean;
}


export function HabitDaysBox({
  habitDays,
  setHabitDays,
  editable,
  loading,
}: HabitDaysBoxProps) {
  const {t} = useTranslation();

  const weekDays = t("home.week-days").split("");
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
