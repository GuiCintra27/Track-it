"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { todayApi } from "@/hooks/api/today";
import { Title } from "../../components/UI/title";
import { Habit } from "../../components/UI/habitCard";
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

export default function Home() {
  const router = useRouter();
  const { checkHabit } = todayApi.checkHabit();
  const { uncheckHabit } = todayApi.uncheckHabit();
  const { reloadHabits } = todayApi.getHabits();
  const userApiData = useAppSelector((state) => state.user.apiData);
  const todayHabits = useAppSelector((state) => state.todayHabits);
  const dispatch = useDispatch();

  function handleHabitClick(done: boolean, id: number) {
    if (!done) handleCheckHabit({ id, checkHabit, reloadHabits, dispatch });
    else handleUncheckHabit({ id, uncheckHabit, reloadHabits, dispatch });
  }

  useEffect(() => {
    if (!userApiData) return router.push("/sign-in");
  });

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
          todayHabits.habits?.map((item: todayHabitsResponse) => (
            <Habit.Root
              key={item.id}
              marginBottom="1rem"
              className="flex-direction-row justify-content-space-between"
            >
              <Habit.FlexBox>
                <Habit.Header>
                  <Habit.Title text={item.name} />
                </Habit.Header>
                <Habit.Data
                  text="Sequência atual:"
                  validation={item.done}
                  days={item.currentSequence}
                />
                <Habit.Data
                  text="Seu recorde:"
                  validation={
                    item.currentSequence === item.highestSequence &&
                    item.highestSequence !== 0
                  }
                  days={item.highestSequence}
                />
              </Habit.FlexBox>
              <Habit.CheckIcon
                onClick={() => handleHabitClick(item.done, item.id)}
                done={item.done}
              />
            </Habit.Root>
          ))
        )}
      </div>

      <Footer />
    </AppLayout>
  );
}
