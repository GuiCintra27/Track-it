"use client"

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "./circularProgressBar";

import { useTodayHabitsApi } from "@/hooks/api/today";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setTodayHabits } from "@/components/infra/storage/habits-slice";

export function Footer() {
  const { t } = useTranslation();
  const { todayHabits, isFetching } = useTodayHabitsApi();
  const {habits, progress} = useAppSelector((state) => state.todayHabits);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todayHabits !== habits)
    dispatch(
      setTodayHabits({
        habits: todayHabits,
        loading: isFetching,
      })
    );
  }, [todayHabits, isFetching, dispatch, habits]);
  
  return (
    <StyledFooter>
      <Link href={"/"}>{t("footer.habits")}</Link>
      <Link href={"/today"}>
        <ProgressBar percentage={progress ? progress : 0} text={t("footer.progress-bar")} />
      </Link>
      <Link href={"/history"}>{t("footer.history")}</Link>
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

  background-color: var(--light);
  color: var(--light-blue);

  a {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;
