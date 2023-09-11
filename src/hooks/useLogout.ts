import { userInfo } from "@/components/infra/storage/user-slice";
import { useRouter } from "next/navigation";

export function useLogout() {
  localStorage.removeItem(userInfo.userApiData);
  localStorage.removeItem(userInfo.userLocalData);
  
  const router = useRouter();
  router.push("/sign-in");
}
