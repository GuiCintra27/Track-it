export type History = {
  day: string;
  habits: {
    id: number;
    name: string;
    date: Date;
    weekDay: number;
    historyId: null | number;
    done: Boolean;
  }[];
};
