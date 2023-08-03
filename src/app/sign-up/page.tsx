"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { SignUpData } from "@/lib/types/auth";
import { Form } from "../../components/UI/form";
import useSaveSignUp from "@/hooks/api/auth/useSaveSignUp";
import useSaveSignIn from "@/hooks/api/auth/useSaveSignIn";
import { errorToast, succesToast } from "@/components/UI/alerts";
import { signUpSchema } from "../../lib/validations/sign-up-schema";
import { handleSignUpForm } from "@/components/infra/fetch-logic/auth";
import { AuthLayout } from "../../components/common/layouts/authLayout";

export default function SignUp() {
  const dispatch = useDispatch();
  const { signUp } = useSaveSignUp();
  const { signIn } = useSaveSignIn();
  const router = useRouter();

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

  const signUpFormProps = {
    dispatch,
    signUp,
    signIn,
    succesToast,
    errorToast,
    router,
  };

  return (
    <AuthLayout>
      <img src="/logo/logo.svg" alt="Track It" />

      <FormProvider {...signUpForm}>
        <Form.Root
          onSubmit={handleSubmit((data) =>
            handleSignUpForm({ data, ...signUpFormProps })
          )}
        >
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
