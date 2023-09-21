"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Title } from "../../components/UI/title";
import { useHistoryApi } from "@/hooks/api/history";
import { Footer } from "../../components/common/footer";
import { Header } from "../../components/common/header";
import { useAppSelector } from "@/hooks/useAppSelector";
import { LoaderRing } from "@/components/common/loader-ring";
import { HistoryCalendar } from "@/components/UI/historyCalendar";
import { AppLayout } from "../../components/common/layouts/appLayout";

export default function History() {
  const { t } = useTranslation();
  const { history, historyLoading } = useHistoryApi();
  const [mainDate, setMainDate] = useState(new Date());
  const userApiData = useAppSelector((state) => state.user.apiData);

  useEffect(() => {
    if (!userApiData) redirect("/sign-in");
  });

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root>
          <Title.Title text={t("history.title")} />
        </Title.Root>

        {historyLoading ? (
          <LoaderRing />
        ) : (
          <HistoryCalendar
            mainDate={mainDate}
            setMainDate={setMainDate}
            history={history}
            t={t}
          />
        )}
      </div>

      <Footer />
    </AppLayout>
  );
}
