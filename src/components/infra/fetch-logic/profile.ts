import { ChangeProfileData } from "@/lib/types/profile-data";
import { setUserLocalData } from "../storage/user-slice";
import { AnyAction, Dispatch } from "redux";

interface HandleFormProps {
  data: ChangeProfileData;
  dispatch: Dispatch<AnyAction>;
  localData: {
    profileImage: any;
    name: string;
  };
  apiData: {
    profileImage: any
    name: string
  };
  successToast: any;
  errorToast: any;
}

export async function handleChangeProfileForm({
  data,
  dispatch,
  localData,
  apiData,
  successToast,
  errorToast,
}: HandleFormProps) {
  try {
    let profileImage = data.profileImage[0];

    if (data.profileImage !== "/undefined-user.png")
      await getBase64(profileImage).then((base64) => (profileImage = base64));
    else {
      if (!data.name) return;
      if (localData.profileImage) profileImage = localData.profileImage;
      else if (apiData.profileImage) profileImage = apiData.profileImage;
    }


    dispatch(
      setUserLocalData({
        localData: {
          name: data.name
            ? data.name
            : localData?.name
              ? localData?.name
              : apiData.name,
          profileImage,
        },
      })
    );

    successToast("Mudanças feitas com sucesso!");
  } catch (error) {
    console.log(error);
    errorToast("Oops... Parece que houve algum erro");
  }
}

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
