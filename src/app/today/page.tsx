"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

import { Title } from "../../components/UI/title";
import { Habit } from "../../components/UI/habitCard";
import { useTodayHabitsApi } from "@/hooks/api/today";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Footer } from "../../components/common/footer";
import { Header } from "../../components/common/header";
import { todayHabitsResponse } from "@/services/todayApi";
import { LoaderRing } from "@/components/common/loader-ring";
import { AppLayout } from "../../components/common/layouts/appLayout";
import {
  handleCheckHabit,
  handleUncheckHabit,
} from "@/components/infra/fetch-logic/todayHabits";

export default function Today() {
  const { checkHabit, uncheckHabit } = useTodayHabitsApi();
  const todayHabits = useAppSelector((state) => state.todayHabits);
  const userApiData = useAppSelector((state) => state.user.apiData);

  useEffect(() => {
    if (!userApiData) redirect("/sign-in");
  });

  function handleHabitClick(done: boolean, id: number) {
    if (!done) handleCheckHabit({ id, checkHabit });
    else handleUncheckHabit({ id, uncheckHabit });
  }

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root className="display-block">
          <Title.Title />
          <Title.Subtitle progress={todayHabits.progress} />
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
                    text="Sequência atual:"
                    validation={done}
                    days={currentSequence}
                  />
                  <Habit.Data
                    text="Seu recorde:"
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
