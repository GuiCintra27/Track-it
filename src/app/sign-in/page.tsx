"use client";
import Image from "next/image";
import Link from "next/link";

import { Form } from "../components/form";
import { Main } from "./page.styles";

export default function SignIn() {
  return (
    <Main>
      <Image
        priority
        src="/logo.svg"
        height={180}
        width={180}
        alt="Track It"
        className="logo"
      />

      <Form.Root>
        <Form.Input placeholder="email" />
        <Form.Input placeholder="senha" />
        <Form.Button type="submit">Seguir</Form.Button>
      </Form.Root>

      <Link href={"/sign-up"}>Não tem uma conta? Cadastre-se!</Link>
    </Main>
  );
}
