"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Title } from "../components/UI/title";
import { useHabitsApi } from "@/hooks/api/habits";
import { Habit } from "../components/UI/habitCard";
import { errorToast } from "@/components/UI/alerts";
import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer";
import { confirmAlert } from "@/components/UI/alerts";
import { useAppSelector } from "@/hooks/useAppSelector";
import { LoaderRing } from "@/components/common/loader-ring";
import { AppLayout } from "../components/common/layouts/appLayout";
import {
  handleCreateHabit,
  handleDeleteHabit,
} from "@/components/infra/fetch-logic/habits";

export default function Home() {
  const { t } = useTranslation();
  const [toggleCreateCard, setToggleCreateCard] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState<number[]>([]);
  const { habits, habitsLoading, createHabit, deleteHabit, habitsError } =
    useHabitsApi();
  const userApiData = useAppSelector((state) => state.user.apiData);

  useEffect(() => {
    if (!userApiData) redirect("/sign-in");
  });

  const createHabitProps = {
    data: { name: habitName, days: habitDays },
    createHabit,
    errorToast,
    resetInputData,
  };

  function resetInputData() {
    setHabitName("");
    setHabitDays([]);
    setToggleCreateCard(false);
  }

  if (habitsError) errorToast(t("home.sign-in-error"));

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root>
          <Title.Title text={t("home.title")} />
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
              placeholder={t("home.habit-name")}
            />
            <Habit.DaysBox
              habitDays={habitDays}
              setHabitDays={setHabitDays}
              editable={true}
              loading={habitsLoading}
            />
            <Habit.Actions>
              <Habit.Button className="white" onClick={resetInputData}>
                {t("home.create-habit-cancel-button")}
              </Habit.Button>
              <Habit.Button
                submit={true}
                onClick={() => handleCreateHabit(createHabitProps)}
                disabled={habitsLoading}
              >
                {t("home.create-habit-save-button")}
              </Habit.Button>
            </Habit.Actions>
          </Habit.Root>
        )}

        {habitsLoading ? (
          <LoaderRing />
        ) : habits && habits?.length > 0 ? (
          habits.map(
            ({ id, name, days }: { id: number; name: string; days: [] }) => (
              <Habit.Root key={id} marginBottom="1rem">
                <Habit.Header>
                  <Habit.Title text={name} />
                  <Habit.DeleteIcon
                    onClick={() =>
                      handleDeleteHabit({ id, deleteHabit, confirmAlert, t })
                    }
                  />
                </Habit.Header>
                <Habit.DaysBox habitDays={days} editable={false} />
              </Habit.Root>
            )
          )
        ) : (
          <h3 className="has-no-habits-subtitle">
            {t("home.has-no-habits-subtitle")}
          </h3>
        )}
      </div>

      <Footer />
    </AppLayout>
  );
}
