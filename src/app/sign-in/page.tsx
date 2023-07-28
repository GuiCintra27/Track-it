"use client";

import Link from "next/link";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "../components/UI/form";
import { AuthLayout } from "../components/common/authLayout";
import { signInSchema } from "../lib/validations/sign-in-schema";

type SignInData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const signInForm = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = signInForm;

  function handleSignInForm(data: SignInData) {
    console.log(data);
  }

  return (
    <AuthLayout>
      <img src="/logo.svg" alt="Track It" />

      <FormProvider {...signInForm}>
        <Form.Root onSubmit={handleSubmit(handleSignInForm)}>
          <Form.Input name="email" type="text" placeholder="email" />
          <Form.Error field="email" />

          <Form.Input name="password" type="password" placeholder="senha" />
          <Form.Error field="password" />

          <Form.Button disabled={isSubmitting} type="submit">
            Seguir
          </Form.Button>
        </Form.Root>
      </FormProvider>
      <Link href={"/sign-up"}>Não tem uma conta? Cadastre-se!</Link>
    </AuthLayout>
  );
}
