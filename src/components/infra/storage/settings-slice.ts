import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Settings {
  settings: {
    theme: string;
    language: string
  }
}

export const settings = {
  settings: "settings",
}

const initialState: Settings = {
  settings: useLocalStorage.getItem(settings.settings) ? useLocalStorage.getItem(settings.settings) : {
    theme: '',
    language: ''
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Settings>) => {
      state.settings = action.payload.settings;
      useLocalStorage.setItem(settings.settings, action.payload.settings);
    },
  },
});

export const { setSettings } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
