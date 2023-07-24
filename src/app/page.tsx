"use client";

import { useState } from "react";
import { Title } from "./components/UI/title";
import { AppLayout } from "./components/common/appLayout";
import { Footer } from "./components/common/footer";
import { Header } from "./components/common/header";
import { Habit } from "./components/UI/habitCard";

export default function Home() {
  const [habits, setHabits] = useState<undefined | []>(undefined);

  return (
    <AppLayout>
      <Header />
      <Title.Root>
        <Title.Title>Meus hábitos</Title.Title>
        <Title.AddHabitButton />
      </Title.Root>
      {!habits /* && habits?.length > 0 */ ? (
        <Habit.Root>
          <Habit.Header>
            <Habit.Title text="Ler 1 capítulo de livro" />
            <Habit.DeleteIcon />
          </Habit.Header>
          <Habit.DaysBox editable={false} />
        </Habit.Root>
      ) : (
        <h3>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h3>
      )}
      <Footer />
    </AppLayout>
  );
}
