"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AxiosError } from "axios";
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
import { AuthLayout } from "../../components/common/layouts/authLayout";
import {
  handleSignIn,
  handleSignInForm,
} from "@/components/infra/fetch-logic/auth";

export default function SignIn() {
  const { t } = useTranslation();
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

  const signInProps = {
    dispatch,
    signInData,
    successToast,
    router,
    t,
  };

  useEffect(() => {
    if (signInError instanceof AxiosError) {
      if (
        signInError.response?.status === 401 ||
        signInError.response?.status === 422
      )
        errorToast(t("alerts.invalid-credentials"));
      else errorToast(t("alerts.server-error"));
    }

    if (signInData) handleSignIn(signInProps);
  }, [signInError, signInData, signInProps, t]);

  return (
    <AuthLayout>
      <img src="/logo/logo.svg" alt="Track It" />

      <FormProvider {...signInForm}>
        <Form.Root
          onSubmit={handleSubmit((data) => handleSignInForm({ data, signIn }))}
        >
          <Form.Input name="email" type="text" placeholder={t("auth.email")} />
          <Form.Error field="email" />

          <Form.Input
            name="password"
            type="password"
            placeholder={t("auth.password")}
          />
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
