import { useMutation } from "@tanstack/react-query";

import * as api from "@/services/authApi";

export function useAuthApi() {
  const { data: signInData, mutate: signIn } = useMutation(api.signIn);

  const { mutate: signUp } = useMutation(api.signUp);

  return { signInData, signIn, signUp };
}
