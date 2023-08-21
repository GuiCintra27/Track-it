import { SignInData, SignUpData } from "@/lib/types/auth";
import { setUserApiData } from "../storage/user-slice";

interface HandleFormProps {
  data: SignUpData | SignInData;
  dispatch: any;
  signUp: any;
  signIn: any;
  successToast: any;
  errorToast: any;
  router: any;
}

export async function handleSignUpForm({
  data,
  dispatch,
  signUp,
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
  signIn,
  successToast,
  errorToast,
  router,
}: Omit<HandleFormProps, "signUp">) {
  try {
    const response = await signIn({ ...data });

    dispatch(
      setUserApiData({
        apiData: {
          id: response.id,
          name: response.name,
          image: response.image,
          token: response.token,
        },
      })
    );
    
    router.push("/");
    successToast("Login realizado!");
  } catch (err: any) {
    if (err.response?.status === 401) errorToast("Email ou senha inválidos!");
    else errorToast("Houve um erro ao conectar com o servidor");
  }
}
