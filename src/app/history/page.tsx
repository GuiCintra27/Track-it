"use client";

import { useAuth } from "@/hooks/useAuth";
import { Title } from "../../components/UI/title";
import { Footer } from "../../components/common/footer";
import { Header } from "../../components/common/header";
import { AppLayout } from "../../components/common/layouts/appLayout";

export default function Home() {
  useAuth();
  return (
    <AppLayout>
      <Header />
      <Title.Root>
        <Title.Title text="Histórico" />
      </Title.Root>
      <h3 className="has-no-habits-subtitle">
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </h3>
      <Footer />
    </AppLayout>
  );
}
