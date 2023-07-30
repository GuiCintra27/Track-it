"use client";

import Link from "next/link";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "../../components/UI/form";
import { AuthLayout } from "../../components/common/layouts/authLayout";
import { signUpSchema } from "../../lib/validations/sign-up-schema";

type SignUpData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const signUpForm = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = signUpForm;

  function handleSignUpForm(data: SignUpData) {
    console.log(data);
  }

  return (
    <AuthLayout>
      <img src="/logo.svg" alt="Track It" />

      <FormProvider {...signUpForm}>
        <Form.Root onSubmit={handleSubmit(handleSignUpForm)}>
          <Form.Input name="name" type="text" placeholder="nome" />
          <Form.Error field="name" />

          <Form.Input name="email" type="email" placeholder="email" />
          <Form.Error field="email" />

          <Form.Input name="password" type="password" placeholder="senha" />
          <Form.Error field="password" />

          <Form.Button disabled={isSubmitting} type="submit">
            Cadastrar
          </Form.Button>
        </Form.Root>
      </FormProvider>

      <Link href={"/sign-in"}>Já tem uma conta? Faça login!</Link>
    </AuthLayout>
  );
}
