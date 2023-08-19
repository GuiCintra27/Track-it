import { useMutation } from "@tanstack/react-query";

import * as api from "@/services/authApi";

export function authApi() {
  const { mutate: signIn } = useMutation(api.signIn);

  const { mutate: signUp } = useMutation(api.signUp);

  return { signIn, signUp };
}
