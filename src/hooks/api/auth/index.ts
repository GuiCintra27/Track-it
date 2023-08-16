import useSaveSignIn from "./useSaveSignIn";
import useSaveSignUp from "./useSaveSignUp";

export const authApi = {
  signIn: useSaveSignIn,
  signUp: useSaveSignUp
}