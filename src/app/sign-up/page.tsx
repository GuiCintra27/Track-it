"use client";

import Link from "next/link";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { useAuthApi } from "@/hooks/api/auth";
import { SignUpData } from "@/lib/types/auth";
import { Form } from "../../components/UI/form";
import { errorToast, successToast } from "@/components/UI/alerts";
import { signUpSchema } from "../../lib/validations/sign-up-schema";
import { AuthLayout } from "../../components/common/layouts/authLayout";
import {
  handleSignIn,
  handleSignUpForm,
} from "@/components/infra/fetch-logic/auth";

export default function SignUp() {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { signIn, signInData, signInError, signUp, signUpStatus, signUpError } =
    useAuthApi();
  const [userData, setUserData] = useState<SignUpData | null>(null);

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

  const signInProps = {
    dispatch,
    signInData,
    successToast,
    router,
    t,
  };

  const dependencies = [
    signUpError,
    signUpStatus,
    signInData,
    signInError,
    signInProps,
    signIn,
    userData,
    t,
  ]

  useEffect(() => {
    if (signUpError instanceof AxiosError) {
      if (signUpError.response?.status === 409)
        errorToast(t("alerts.conflict"));
      else errorToast(t("alerts.server-error"));
    }

    if (signUpStatus === "success") {
      signIn(userData!);
    }

    if (signInError instanceof AxiosError)
      errorToast(t("alerts.automatic-log-in"));

    if (signInData) handleSignIn(signInProps);
  }, dependencies );

  return (
    <AuthLayout>
      <img src="/logo/logo.svg" alt="Track It" />

      <FormProvider {...signUpForm}>
        <Form.Root
          onSubmit={handleSubmit((data) =>
            handleSignUpForm({ data, signUp, setUserData })
          )}
        >
          <Form.Input name="name" type="text" placeholder={t("auth.name")} />
          <Form.Error field="name" />

          <Form.Input name="email" type="email" placeholder={t("auth.email")} />
          <Form.Error field="email" />

          <Form.Input
            name="password"
            type="password"
            placeholder={t("auth.password")}
          />
          <Form.Error field="password" />

          <Form.Button disabled={isSubmitting} type="submit">
            {t("auth.sign-up")}
          </Form.Button>
        </Form.Root>
      </FormProvider>

      <Link href={"/sign-in"}>{t("auth.have-account")}</Link>
    </AuthLayout>
  );
}
