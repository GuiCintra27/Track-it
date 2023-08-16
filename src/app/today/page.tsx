"use client";

import { useEffect } from "react";
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
import dayjs from "dayjs";

export default function Home() {
  const router = useRouter();
  const { checkHabit } = todayApi.checkHabit();
  const { uncheckHabit } = todayApi.uncheckHabit();
  const { habits, habitsLoading, reloadHabits } = todayApi.getHabits();
  const userApiData = useAppSelector((state) => state.user.apiData);
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  function handleHabitClick(done: boolean, id: number) {
    if (!done) handleCheckHabit({ id, checkHabit, reloadHabits });
    else handleUncheckHabit({ id, uncheckHabit, reloadHabits });
  }

  useEffect(() => {
    if (!userApiData) return router.push("/sign-in");
  }, []);

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root className="display-block">
          <Title.Title
            text={`${weekdays[dayjs().day()]}, ${dayjs().format("DD/MM")}`}
          />
          <Title.Subtitle text="Nenhum hábito concluído ainda" />
        </Title.Root>

        {habitsLoading ? (
          <LoaderRing />
        ) : (
          habits.map((item: todayHabitsResponse) => (
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
