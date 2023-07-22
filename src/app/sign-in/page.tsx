"use client";
import Image from "next/image";
import Link from "next/link";

import { Form } from "../components/UI/form";
import { AuthLayout } from "../components/common/auth/layout";

export default function SignIn() {
  return (
    <AuthLayout>
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
    </AuthLayout>
  );
}
