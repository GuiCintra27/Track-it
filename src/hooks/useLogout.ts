import { instance } from "@/services/instance";
import { userInfo } from "@/components/infra/storage/user-slice";

export function useLogout() {
  localStorage.removeItem(userInfo.userApiData);
  localStorage.removeItem(userInfo.userLocalData);
  delete instance.defaults.headers["Authorization"];
}
