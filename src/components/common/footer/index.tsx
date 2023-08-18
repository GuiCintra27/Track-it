import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { ProgressBar } from "./circularProgressBar";

import { todayApi } from "@/hooks/api/today";
import { setTodayHabits } from "@/components/infra/storage/habits-slice";
import { useAppSelector } from "@/hooks/useAppSelector";

export function Footer() {
  const { habits, habitsLoading } = todayApi.getHabits();
  const progess = useAppSelector((state) => state.todayHabits.progress);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(
      setTodayHabits({
        habits,
        loading: habitsLoading,
      })
    );
  }, [habits, habitsLoading, dispatch]);

  return (
    <StyledFooter>
      <Link href={"/"}>Hábitos</Link>
      <Link href={"/today"}>
        <ProgressBar percentage={progess ? progess : 0} />
      </Link>
      <Link href={"/history"}>Histórico</Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: fit-content;
  max-height: 7rem;

  position: relative;

  margin-top: auto;
  padding: 2.4rem 3rem;

  display: flex;
  justify-content: space-between;

  background-color: #fff;
  color: var(--light-blue);

  a {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;
