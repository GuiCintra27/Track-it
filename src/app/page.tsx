"use client";

import { AppLayout } from './components/common/app/layout'
import { Footer } from './components/common/footer/footer'
import { Header } from './components/common/header/header'

export default function Home() {
  return (
    <AppLayout >
      <Header />
      <Footer />
    </AppLayout>
  )
}
