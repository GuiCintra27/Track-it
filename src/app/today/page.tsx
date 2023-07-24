"use client";

import { Title } from "../components/UI/title";
import { AppLayout } from "../components/common/appLayout";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { Habit } from "../components/UI/habitCard";

export default function Home() {
  return (
    <AppLayout>
      <Header />
      <Title.Root className="display-block">
        <Title.Title text="Segunda, 17/05" />
        <Title.Subtitle text="Nenhum hábito concluído ainda" />
      </Title.Root>
      <Habit.Root className="flex-direction-row justify-content-space-between">
        <Habit.FlexBox>
          <Habit.Header>
            <Habit.Title text="Ler 1 capítulo de livro" />
          </Habit.Header>
          <Habit.Data>
            Sequência atual: <span className="green">5 dias</span>
          </Habit.Data>
          <Habit.Data>Seu recorde: 5 dias</Habit.Data>
        </Habit.FlexBox>
        <Habit.CheckIcon />
      </Habit.Root>
      <Footer />
    </AppLayout>
  );
}
