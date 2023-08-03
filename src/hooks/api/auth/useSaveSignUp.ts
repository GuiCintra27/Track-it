import useAsync from "../../useAsync";
import * as authApi from "@/services/authApi";
import { SignUpData } from "@/lib/types/auth";

export default function useSaveSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync((body: SignUpData) => authApi.signUp(body), false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
