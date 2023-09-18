import { useMutation } from "@tanstack/react-query";

import * as api from "@/services/authApi";

export function useAuthApi() {
  const { data: signInData, mutate: signIn, error: signInError } = useMutation(api.signIn);

  const { mutate: signUp, error: signUpError } = useMutation(api.signUp);

  return { signInData, signIn, signUp, signInError, signUpError };
}
