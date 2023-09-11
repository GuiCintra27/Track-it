import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  apiData?: {
    id: number;
    name: string;
    image: string;
    token: string;
  };
  localData?: {
    profileImage: string | any;
    name: string;
  };
}

export const userInfo = {
  userApiData: "userApiData",
  userLocalData: "userLocalData"
}

const initialState: User = {
  apiData: useLocalStorage.getItem(userInfo.userApiData),
  localData: useLocalStorage.getItem(userInfo.userLocalData),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserApiData: (state, action: PayloadAction<Pick<User, "apiData">>) => {
      state.apiData = action.payload.apiData;
      useLocalStorage.setItem(userInfo.userApiData, action.payload.apiData);
    },
    setUserLocalData: (state, action: PayloadAction<Pick<User, "localData">>) => {
      state.localData = action.payload.localData;
      useLocalStorage.setItem(userInfo.userLocalData, action.payload.localData)
    }
  },
});

export const { setUserApiData, setUserLocalData } = userSlice.actions;
export const userReducer = userSlice.reducer;
