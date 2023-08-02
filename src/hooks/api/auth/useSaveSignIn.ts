import { z } from "zod";

import useAsync from "../../useAsync";
import * as authApi from "@/services/authApi";
import { signInSchema } from "@/lib/validations/sign-in-schema";

type SignIn = z.infer<typeof signInSchema>;

export default function useSaveSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync((body: SignIn) => authApi.signIn(body), false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
