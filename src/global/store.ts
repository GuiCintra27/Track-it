import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/components/infra/storage/user-slice";
import { TodayHabitsReducer } from "@/components/infra/storage/habits-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todayHabits: TodayHabitsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
