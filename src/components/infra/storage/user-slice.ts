import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  apiData?: {
    id: number;
    name: string;
    image: string;
    email: string;
    password: string;
    token: string;
  };
  localData?: {
    profileImage: string;
  };
}

const userInfo = {
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
  },
});

export const { setUserApiData } = userSlice.actions;
export const userReducer = userSlice.reducer;
