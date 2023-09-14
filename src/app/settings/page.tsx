"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@/components/UI/form";
import { Title } from "../../components/UI/title";
import { SettingsData } from "@/lib/types/settings";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Header } from "../../components/common/header";
import { settingsSchema } from "@/lib/validations/settings-schema";
import { AppLayout } from "../../components/common/layouts/appLayout";
import { handleSettingsForm } from "@/components/infra/fetch-logic/settings";

export default function Profile() {
  const { apiData } = useAppSelector((state) => state.user);
  const { settings } = useAppSelector((state) => state.settings);
  const dispatch = useDispatch();

  const formProps = { dispatch, settings };

  const themeList = [
    {
      value: "light",
      text: "Claro",
    },
    {
      value: "dark",
      text: "Escuro",
    },
  ];

  const languageList = [
    {
      value: "portuguese",
      text: "Português",
    },
    {
      value: "english",
      text: "Inglês",
    },
  ];

  const settingsForm = useForm<SettingsData>({
    resolver: zodResolver(settingsSchema),
  });

  const { handleSubmit } = settingsForm;

  useEffect(() => {
    if (!apiData) redirect("/sign-in");
  }, [apiData]);

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root className="display-block">
          <Title.Title text={"Configurações"} />
        </Title.Root>

        <div className="margin-inline">
          <FormProvider {...settingsForm}>
            <Form.Root
              onSubmit={handleSubmit((data) => {
                handleSettingsForm({ data, ...formProps });
              })}
            >
              <Form.Label text="Tema" imagePath="/icons/theme-icon.svg" />
              <Form.Select name="theme" optionsList={themeList} />
              <Form.Error field="theme" />

              <Form.Label text="Idioma" imagePath="/icons/language-icon.svg" />
              <Form.Select name="language" optionsList={languageList} />
              <Form.Error field="language" />

              <Form.Button className="margin-top" type="submit">
                Salvar Mudanças
              </Form.Button>
            </Form.Root>
          </FormProvider>
        </div>
      </div>
    </AppLayout>
  );
}
