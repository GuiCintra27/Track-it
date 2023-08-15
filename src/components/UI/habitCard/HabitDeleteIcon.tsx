import { handleDeleteHabit } from "@/components/infra/fetch-logic/habits";
import { habitsApi } from "@/hooks/api/habits";
import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

import { confirmAlert } from "../alerts";

interface HabitDeleteIconProps extends HtmlHTMLAttributes<HTMLDivElement> {
  id: string;
  reloadHabits: () => Promise<any>;
}

export function HabitDeleteIcon({ id, reloadHabits, ...res }: HabitDeleteIconProps) {
  const { deleteHabit } = habitsApi.deleteHabit();

  return (
    <Icon {...res} onClick={() => handleDeleteHabit({ id, deleteHabit, confirmAlert, reloadHabits })}>
      <img src="/icons/trash-icon.svg" alt="Delete" />
    </Icon>
  );
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.3rem;
    height: 1.5rem;
  }
`;
