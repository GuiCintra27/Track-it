import { useRouter } from "next/navigation";
import { useAppSelector } from "./useAppSelector";

//Verify if user is logged
export function useAuth() {
  const router = useRouter();
  const userApiData = useAppSelector((state) => state.user.apiData);

  if (!userApiData) return router.push("/sign-in");
}
