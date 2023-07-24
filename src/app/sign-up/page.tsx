"use client";
import Image from "next/image";
import Link from "next/link";

import { Form } from "../components/UI/form";
import { FormEvent, useRef, useState } from "react";
import { AuthLayout } from "../components/common/authLayout";

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
        <Form.Input placeholder="nome" />
        <Form.Button type="submit">Cadastrar</Form.Button>
      </Form.Root>

      <Link href={"/sign-in"}>Já tem uma conta? Faça login!</Link>
    </AuthLayout>
  );
}
