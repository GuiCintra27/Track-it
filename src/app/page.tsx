"use client";

import { useEffect, useState } from "react";

import { Title } from "../components/UI/title";
import { Habit } from "../components/UI/habitCard";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AppLayout } from "../components/common/layouts/appLayout";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const userApiData = useAppSelector((state) => state.user.apiData);
  const [habits, setHabits] = useState<undefined | []>(undefined);

  useEffect(() => {
    if (!userApiData ) router.push("/sign-in");
  }, []);

  return (
    <AppLayout>
      <Header />

      <Title.Root>
        <Title.Title text="Meus hábitos" />
        <Title.AddHabitButton />
      </Title.Root>

      {habits && habits?.length > 0 ? (
        <Habit.Root>
          <Habit.Header>
            <Habit.Title text="Ler 1 capítulo de livro" />
            <Habit.DeleteIcon />
          </Habit.Header>
          <Habit.DaysBox editable={false} />
        </Habit.Root>
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
