"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { habitsApi } from "@/hooks/api/habits";
import { Title } from "../components/UI/title";
import { Habit } from "../components/UI/habitCard";
import { errorToast } from "@/components/UI/alerts";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { useAppSelector } from "@/hooks/useAppSelector";
import { LoaderRing } from "@/components/common/loader-ring";
import { AppLayout } from "../components/common/layouts/appLayout";
import { handleCreateHabit } from "@/components/infra/fetch-logic/habits";

export default function Home() {
  const router = useRouter();
  const userApiData = useAppSelector((state) => state.user.apiData);
  const { habitsLoading, habits, reloadHabits } = habitsApi.getHabits();
  const { createHabit } = habitsApi.postCreateHabit();
  const [toggleCreateCard, setToggleCreateCard] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState<number[]>([]);
  const createHabitProps = {
    data: { name: habitName, days: habitDays },
    reloadHabits,
    createHabit,
    errorToast,
    resetInputData,
  };

  function resetInputData() {
    setHabitName("");
    setHabitDays([]);
    setToggleCreateCard(false);
  }

  useEffect(() => {
    if (!userApiData) return router.push("/sign-in");
  }, []);

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root>
          <Title.Title text="Meus hábitos" />
          <Title.AddHabitButton
            onClick={() => setToggleCreateCard(!toggleCreateCard)}
          />
        </Title.Root>

        {toggleCreateCard && (
          <Habit.Root marginBottom="3rem">
            <Habit.Input
              type="text"
              onChange={(e) => setHabitName(e.target.value)}
              value={habitName}
              disabled={habitsLoading}
            />
            <Habit.DaysBox
              habitDays={habitDays}
              setHabitDays={setHabitDays}
              editable={true}
              loading={habitsLoading}
            />
            <Habit.Actions>
              <Habit.Button className="white" onClick={resetInputData}>
                Cancelar
              </Habit.Button>
              <Habit.Button
                submit={true}
                onClick={() => handleCreateHabit(createHabitProps)}
                disabled={habitsLoading}
              >
                Salvar
              </Habit.Button>
            </Habit.Actions>
          </Habit.Root>
        )}

        {habitsLoading ? (
          <LoaderRing />
        ) : habits && habits?.length > 0 ? (
          habits.map((item: { id: string; name: string; days: [] }) => (
            <Habit.Root key={item.id} marginBottom="1rem">
              <Habit.Header>
                <Habit.Title text={item.name} />
                <Habit.DeleteIcon id={item.id} reloadHabits={reloadHabits} />
              </Habit.Header>
              <Habit.DaysBox habitDays={item.days} editable={false} />
            </Habit.Root>
          ))
        ) : (
          <h3 className="has-no-habits-subtitle">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h3>
        )}
      </div>

      <Footer />
    </AppLayout>
  );
}
