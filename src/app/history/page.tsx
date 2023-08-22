"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import { Title } from "../../components/UI/title";
import { Footer } from "../../components/common/footer";
import { Header } from "../../components/common/header";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AppLayout } from "../../components/common/layouts/appLayout";

export default function History() {
  const userApiData = useAppSelector((state) => state.user.apiData);

  useEffect(() => {
    if (!userApiData) redirect("/sign-in");
  });
  return (
    <AppLayout>
      <Header />
      <Title.Root>
        <Title.Title text="Histórico" />
      </Title.Root>
      <div className="container">
        <h3 className="has-no-habits-subtitle">
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </h3>
      </div>
      <Footer />
    </AppLayout>
  );
}
