"use client";

import Link from "next/link";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "../../components/UI/form";
import { AuthLayout } from "../../components/common/layouts/authLayout";
import { signUpSchema } from "../../lib/validations/sign-up-schema";
import useSaveSignUp from "@/hooks/api/auth/useSaveSignUp";

type SignUpData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const { signUp } = useSaveSignUp();
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

  async function handleSignUpForm(data: SignUpData) {
    try {
      const response = await signUp({ ...data });
      console.log(response);
    } catch (err: any) {
      if (err.response?.status === 409) {
        /*   Toast.fire({
            icon: "error",
            title: "Email ou número de telefone já cadastrado",
            customClass: "sweet-toast",
        }); */
      } else {
        /*   Toast.fire({
            icon: "error",
            title: "Houve um problema ao registrar usuário",
            customClass: "sweet-toast",
        }); */
      }
    }
  }

  return (
    <AuthLayout>
      <img src="/logo/logo.svg" alt="Track It" />

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
