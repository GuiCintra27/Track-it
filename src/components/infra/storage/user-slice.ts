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

const initialState: User = {
  apiData: useLocalStorage.getItem("userApiData"),
  localData: useLocalStorage.getItem("userLocalData"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserApiData: (state, action: PayloadAction<Pick<User, "apiData">>) => {
      state.apiData = action.payload.apiData;
      useLocalStorage.setItem("userApiData", action.payload.apiData);
    },
  },
});

export const { setUserApiData } = userSlice.actions;
export const userReducer = userSlice.reducer;
