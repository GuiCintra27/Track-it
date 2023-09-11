import { SignInData, SignUpData } from "@/lib/types/auth";
import { setUserApiData, setUserLocalData } from "../storage/user-slice";

interface HandleFormProps {
  data: SignUpData | SignInData;
  dispatch: any;
  signUp: any;
  signInData: any;
  signIn: any;
  successToast: any;
  errorToast: any;
  router: any;
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
    });
  } catch (err: any) {
    if (err.response?.status === 409)
      errorToast("Email ou nome de usuário já está em uso");
    else errorToast("Houve um erro ao conectar com o servidor");
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
}: Omit<HandleFormProps, "signUp">) {
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
        }
      })
    );
    
    router.push("/");
    successToast("Login realizado!");
  } catch (err: any) {
    if (err.response?.status === 401) errorToast("Email ou senha inválidos!");
    else errorToast("Houve um erro ao conectar com o servidor");
  }
}
