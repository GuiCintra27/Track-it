import { SignInData, SignUpData } from "@/lib/types/auth";
import { setUserApiData, setUserLocalData } from "../storage/user-slice";
import { TFunction } from "i18next";

interface HandleFormProps {
  data: SignUpData | SignInData;
  dispatch: any;
  signUp: any;
  signInData: any;
  signIn: any;
  successToast: any;
  errorToast: any;
  router: any;
  signInError: any;
  signUpError: any;
  t: TFunction<"translation", undefined>;
}

export async function handleSignUpForm({
  data,
  dispatch,
  signUp,
  signInData,
  signIn,
  successToast,
  errorToast,
  router,
  signInError,
  signUpError,
  t,
}: HandleFormProps) {
  try {
    await signUp({ ...data });

    await handleSignInForm({
      data: { email: data.email, password: data.password },
      dispatch,
      signInData,
      signIn,
      successToast,
      errorToast,
      router,
      signInError,
      t,
    });
  } catch {
    if (signUpError.response?.status === 409) errorToast(t("alerts.conflict"));
    else errorToast(t("alerts.server-error"));
  }
}

export async function handleSignInForm({
  data,
  dispatch,
  signInData,
  signIn,
  successToast,
  errorToast,
  router,
  signInError,
  t,
}: Omit<HandleFormProps, "signUp" | "signUpError">) {
  try {
    await signIn({ ...data });

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
  } catch {
    if (
      signInError.response?.status === 401 ||
      signInError.response?.status === 422
    )
      errorToast(t("alerts.invalid-credentials"));
    else errorToast(t("alerts.server-error"));
  }
}
