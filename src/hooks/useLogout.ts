import { instance } from "@/services/instance";
import { userInfo } from "@/components/infra/storage/user-slice";

export function useLogout() {
  const logOut = () => {
    localStorage.removeItem(userInfo.userApiData);
    localStorage.removeItem(userInfo.userLocalData);
    delete instance.defaults.headers["Authorization"];
  };

  return { logOut };
}
