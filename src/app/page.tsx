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
  const { habitsLoading, habits, reloadHabits } = habitsApi.getHabits(
    userApiData?.token
  );
  const { createHabit } = habitsApi.postCreateHabit();
  const [toggleCreateCard, setToggleCreateCard] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState<number[]>([]);
  const createHabitProps = {
    data: { name: habitName, days: habitDays },
    reloadHabits,
    createHabit,
    token: userApiData?.token,
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

    //REFATORAR
    //API DO LOGIN
    //PARA FICAR IGUAL
    //AO DO HABITS
  }, []);
  return (
    <AppLayout>
      <Header />

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

      {habits && habits?.length > 0 ? (
        <Habit.Root>
          <Habit.Header>
            <Habit.Title text="Ler 1 capítulo de livro" />
            <Habit.DeleteIcon />
          </Habit.Header>
          <Habit.DaysBox editable={false} />
        </Habit.Root>
      ) : habitsLoading ? (
        <LoaderRing />
      ) : (
        <h3 className="has-no-habits-subtitle">
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h3>
      )}

      <Footer />
    </AppLayout>
  );
}
