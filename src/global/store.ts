import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/components/infra/storage/user-slice";
import { TodayHabitsReducer } from "@/components/infra/storage/habits-slice";
import { settingsReducer } from "@/components/infra/storage/settings-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todayHabits: TodayHabitsReducer,
    settings: settingsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
