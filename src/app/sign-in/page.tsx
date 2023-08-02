"use client";

import Link from "next/link";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "../../components/UI/form";
import { AuthLayout } from "../../components/common/layouts/authLayout";
import { signInSchema } from "../../lib/validations/sign-in-schema";
import useSaveSignIn from "@/hooks/api/auth/useSaveSignIn";

type SignInData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { signIn } = useSaveSignIn();
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

  async function handleSignInForm(data: SignInData) {
    try {
      const response = await signIn({ ...data });
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
