import { TFunction } from "i18next";
import { SetStateAction } from "react";

import { SignInData, SignUpData } from "@/lib/types/auth";
import { setUserApiData, setUserLocalData } from "../storage/user-slice";

interface HandleFormProps {
  data: SignUpData | SignInData;
  dispatch: any;
  signUp: any;
  signInData: any;
  signUpStatus: any;
  signIn: any;
  successToast: any;
  router: any;
  t: TFunction<"translation", undefined>;
  setUserData: SetStateAction<any>;
}

export async function handleSignUpForm({
  data,
  signUp,
  setUserData
}: Pick<HandleFormProps, "data" | "signUp" | "setUserData">) {
  await signUp({ ...data });

  setUserData(data)
}

export async function handleSignInForm({
  data,
  signIn,
}: Pick<HandleFormProps, "signIn" | "data">) {
  await signIn({ ...data });
}

export async function handleSignIn({
  dispatch,
  signInData,
  successToast,
  router,
  t,
}: Omit<HandleFormProps, "signUp" | "signIn" | "data" | "signUpStatus" | "setUserData">) {
  await dispatch(
    setUserApiData({
      apiData: {
        id: signInData.id,
        name: signInData.name,
        image: signInData.image,
        token: signInData.token,
      },
    }),
    setUserLocalData({
      localData: {
        name: signInData.name,
        profileImage: signInData.image,
      },
    })
  );

  router.push("/");
  successToast(t("alerts.log-in"));
}
