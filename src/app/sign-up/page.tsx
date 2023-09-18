"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { useAuthApi } from "@/hooks/api/auth";
import { SignUpData } from "@/lib/types/auth";
import { Form } from "../../components/UI/form";
import { errorToast, successToast } from "@/components/UI/alerts";
import { signUpSchema } from "../../lib/validations/sign-up-schema";
import { handleSignUpForm } from "@/components/infra/fetch-logic/auth";
import { AuthLayout } from "../../components/common/layouts/authLayout";

export default function SignUp() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const { signInData, signIn, signInError, signUp, signUpError } = useAuthApi();
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
    signInData,
    signIn,
    signInError,
    signUpError,
    successToast,
    errorToast,
    router,
    t
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
          <Form.Input name="name" type="text" placeholder={t("auth.name")} />
          <Form.Error field="name" />

          <Form.Input name="email" type="email" placeholder={t("auth.email")} />
          <Form.Error field="email" />

          <Form.Input name="password" type="password" placeholder={t("auth.password")} />
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
