import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { ProgressBar } from "./circularProgressBar";

import { useTodayHabitsApi } from "@/hooks/api/today";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setTodayHabits } from "@/components/infra/storage/habits-slice";

export function Footer() {
  const { todayHabits, isFetching } = useTodayHabitsApi();
  const progress = useAppSelector((state) => state.todayHabits.progress);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setTodayHabits({
        habits: todayHabits,
        loading: isFetching,
      })
    );
  }, [todayHabits, isFetching, dispatch]);
  
  return (
    <StyledFooter>
      <Link href={"/"}>Hábitos</Link>
      <Link href={"/today"}>
        <ProgressBar percentage={progress ? progress : 0} />
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
