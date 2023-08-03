import useAsync from "../../useAsync";
import * as authApi from "@/services/authApi";
import { SignInData } from "@/lib/types/auth";

export default function useSaveSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync((body: SignInData) => authApi.signIn(body), false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
