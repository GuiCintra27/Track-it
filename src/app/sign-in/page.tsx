"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { SignInData } from "@/lib/types/auth";
import { Form } from "../../components/UI/form";
import useSaveSignIn from "@/hooks/api/auth/useSaveSignIn";
import { errorToast, succesToast } from "@/components/UI/alerts";
import { signInSchema } from "../../lib/validations/sign-in-schema";
import { handleSignInForm } from "@/components/infra/fetch-logic/auth";
import { AuthLayout } from "../../components/common/layouts/authLayout";

export default function SignIn() {
  const dispatch = useDispatch();
  const { signIn } = useSaveSignIn();
  const router = useRouter();

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

  const signInFormProps = { dispatch, signIn, succesToast, errorToast, router };

  return (
    <AuthLayout>
      <img src="/logo/logo.svg" alt="Track It" />

      <FormProvider {...signInForm}>
        <Form.Root
          onSubmit={handleSubmit((data) =>
            handleSignInForm({ data, ...signInFormProps })
          )}
        >
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
