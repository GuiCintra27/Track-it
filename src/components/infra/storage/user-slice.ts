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

const initialState: User = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserApiData: (state, action: PayloadAction<User>) => {
      state.apiData = action.payload.apiData;
    },
  },
});

export const { setUserApiData } = userSlice.actions;
export const userReducer = userSlice.reducer;
