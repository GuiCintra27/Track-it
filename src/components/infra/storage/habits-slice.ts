import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodayHabits {
  habits?: [
    {
      id: number;
      name: string;
      done: boolean;
      currentSequence: number;
      highestSequence: number;
    }
  ];
  loading?: boolean;
  progress?: number;
}

const initialState: TodayHabits = {};

export const todayHabitsSlice = createSlice({
  name: "todayHabits",
  initialState,
  reducers: {
    setTodayHabits: (
      state,
      action: PayloadAction<Pick<TodayHabits, "habits" | "loading">>
    ) => {
      const habits = action.payload.habits;
      if (habits) {
        let completedHabits = 0;

        if (habits) {
          for (const habit of habits) {
            if (habit.done) completedHabits++;
          }
        }

        state.habits = habits;
        state.progress = Math.floor((completedHabits / habits.length) * 100);
      }
      state.loading = action.payload.loading;
    },
  },
});

export const { setTodayHabits } = todayHabitsSlice.actions;
export const TodayHabitsReducer = todayHabitsSlice.reducer;
