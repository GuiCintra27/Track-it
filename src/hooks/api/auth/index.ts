import { useMutation } from "@tanstack/react-query";

import * as api from "@/services/authApi";

export function useAuthApi() {
  const { data: signInData, mutate: signIn, error: signInError } = useMutation(api.signIn);

  const { status: signUpStatus, mutate: signUp, error: signUpError } = useMutation(api.signUp);

  return { signIn, signInData, signInError, signUp, signUpStatus, signUpError };
}
