"use client";

import Link from "next/link";

import { Form } from "../components/UI/form";
import { AuthLayout } from "../components/common/authLayout";

export default function SignIn() {
  return (
    <AuthLayout>
      <img src="/logo.svg" alt="Track It" />

      <Form.Root>
        <Form.Input placeholder="email" />
        <Form.Input placeholder="senha" />
        <Form.Button type="submit">Seguir</Form.Button>
      </Form.Root>

      <Link href={"/sign-up"}>Não tem uma conta? Cadastre-se!</Link>
    </AuthLayout>
  );
}
