import { z } from "zod";

import useAsync from "../../useAsync";
import * as authApi from "@/services/authApi";
import { signUpSchema } from "@/lib/validations/sign-up-schema";

type SignUp = z.infer<typeof signUpSchema>;

export default function useSaveSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync((body: SignUp) => authApi.signUp(body), false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
