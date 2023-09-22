"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useTranslation } from "react-i18next";

import { Title } from "../../components/UI/title";
import { Habit } from "../../components/UI/habitCard";
import { useTodayHabitsApi } from "@/hooks/api/today";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Footer } from "../../components/common/footer";
import { Header } from "../../components/common/header";
import { todayHabitsResponse } from "@/services/todayApi";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LoaderRing } from "@/components/common/loader-ring";
import { userInfo } from "@/components/infra/storage/user-slice";
import { AppLayout } from "../../components/common/layouts/appLayout";
import {
  handleCheckHabit,
  handleUncheckHabit,
} from "@/components/infra/fetch-logic/todayHabits";

export default function Today() {
  useEffect(() => {
    if (!useLocalStorage.getItem(userInfo.userApiData)) redirect("/sign-in");
  });
  
  const { t } = useTranslation();
  const { checkHabit, uncheckHabit } = useTodayHabitsApi();
  const todayHabits = useAppSelector((state) => state.todayHabits);

  function handleHabitClick(done: boolean, id: number) {
    if (!done) handleCheckHabit({ id, checkHabit, t });
    else handleUncheckHabit({ id, uncheckHabit, t });
  }

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root className="display-block">
          <Title.Title />
          <Title.Subtitle
            progress={todayHabits.progress}
            habitsText={t("today.subtitle.habits")}
            noHabitsText={t("today.subtitle.no-habits")}
          />
        </Title.Root>

        {todayHabits.loading ? (
          <LoaderRing />
        ) : (
          todayHabits.habits?.map(
            ({
              id,
              name,
              done,
              currentSequence,
              highestSequence,
            }: todayHabitsResponse) => (
              <Habit.Root
                key={id}
                marginBottom="1rem"
                className="flex-direction-row justify-content-space-between"
              >
                <Habit.FlexBox>
                  <Habit.Header>
                    <Habit.Title text={name} />
                  </Habit.Header>
                  <Habit.Data
                    text={t("today.sequence")}
                    dayText={t("today.day")}
                    validation={done}
                    days={currentSequence}
                  />
                  <Habit.Data
                    text={t("today.record")}
                    dayText={t("today.day")}
                    validation={
                      currentSequence === highestSequence &&
                      highestSequence !== 0
                    }
                    days={highestSequence}
                  />
                </Habit.FlexBox>
                <Habit.CheckIcon
                  onClick={() => handleHabitClick(done, id)}
                  done={done}
                />
              </Habit.Root>
            )
          )
        )}
      </div>

      <Footer />
    </AppLayout>
  );
}
