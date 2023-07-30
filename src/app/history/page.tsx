"use client";

import { Title } from "../../components/UI/title";
import { AppLayout } from "../../components/common/layouts/appLayout";
import { Footer } from "../../components/common/footer";
import { Header } from "../../components/common/header";

export default function Home() {
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
