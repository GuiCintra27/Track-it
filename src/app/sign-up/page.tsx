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
        <Form.Input placeholder="nome" />
        <Form.Button type="submit">Cadastrar</Form.Button>
      </Form.Root>

      <Link href={"/sign-in"}>Já tem uma conta? Faça login!</Link>
    </AuthLayout>
  );
}
