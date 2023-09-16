"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { apiData } = useAppSelector((state) => state.user);
  const { settings } = useAppSelector((state) => state.settings);
  const dispatch = useDispatch();

  const formProps = { i18n, dispatch, settings };

  const themeList = [
    {
      value: "light",
      text: t("settings.theme.light"),
    },
    {
      value: "dark",
      text: t("settings.theme.dark"),
    },
  ];

  const languageList = [
    {
      value: "pt",
      text: t("settings.language.pt"),
    },
    {
      value: "en",
      text: t("settings.language.en"),
    },
  ];

  const settingsForm = useForm<SettingsData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      theme: settings.theme,
      language: settings.language,
    },
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
          <Title.Title text={t("settings.title")} />
        </Title.Root>

        <div className="margin-inline">
          <FormProvider {...settingsForm}>
            <Form.Root
              onSubmit={handleSubmit((data) => {
                handleSettingsForm({ data, ...formProps });
              })}
            >
              <Form.Label
                text={t("settings.theme.title")}
                imagePath="/icons/theme-icon.svg"
              />
              <Form.Select
                name="theme"
                defaultOption={t("form.select.default-option")}
                optionsList={themeList}
              />
              <Form.Error field="theme" />

              <Form.Label
                text={t("settings.language.title")}
                imagePath="/icons/language-icon.svg"
              />
              <Form.Select
                name="language"
                defaultOption={t("form.select.default-option")}
                optionsList={languageList}
              />
              <Form.Error field="language" />

              <Form.Button className="margin-top" type="submit">
                {t("settings.save-changes")}
              </Form.Button>
            </Form.Root>
          </FormProvider>
        </div>
      </div>
    </AppLayout>
  );
}
