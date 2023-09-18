"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { useAuthApi } from "@/hooks/api/auth";
import { SignInData } from "@/lib/types/auth";
import { Form } from "../../components/UI/form";
import { errorToast, successToast } from "@/components/UI/alerts";
import { signInSchema } from "../../lib/validations/sign-in-schema";
import { handleSignInForm } from "@/components/infra/fetch-logic/auth";
import { AuthLayout } from "../../components/common/layouts/authLayout";

export default function SignIn() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const { signInData, signIn, signInError } = useAuthApi();
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

  const signInFormProps = {
    dispatch,
    signInData,
    signIn,
    successToast,
    errorToast,
    router,
    signInError,
    t
  };

  return (
    <AuthLayout>
      <img src="/logo/logo.svg" alt="Track It" />

      <FormProvider {...signInForm}>
        <Form.Root
          onSubmit={handleSubmit((data) =>
            handleSignInForm({ data, ...signInFormProps })
          )}
        >
          <Form.Input name="email" type="text" placeholder={t("auth.email")} />
          <Form.Error field="email" />

          <Form.Input name="password" type="password" placeholder={t("auth.password")} />
          <Form.Error field="password" />

          <Form.Button disabled={isSubmitting} type="submit">
            {t("auth.sign-in")}
          </Form.Button>
        </Form.Root>
      </FormProvider>
      <Link href={"/sign-up"}>{t("auth.create-account")}</Link>
    </AuthLayout>
  );
}
