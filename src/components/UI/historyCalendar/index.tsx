import { TFunction } from "i18next";
import Calendar from "react-calendar";
import { Dispatch, SetStateAction, useState } from "react";

import { Inspect } from "./inspect";
import { History } from "@/lib/types/history";
import { CalendarContainer } from "./calendarContainer";

interface HistoryCalendarProps {
  mainDate: Date;
  setMainDate: Dispatch<SetStateAction<Date>>;
  history: History[] | undefined;
  t: TFunction<"translation", undefined>;
}

export function HistoryCalendar({
  mainDate,
  setMainDate,
  history,
  t,
}: HistoryCalendarProps) {
  const [inspectDayHabits, setinspectDayHabits] = useState<History | null>(
    null
  );

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const customClasses: string[] = [];
    const today = new Date();

    const actualDay = today.getDate();
    const actualMonth = today.getMonth();
    const actualYear = today.getFullYear();

    const dateDay = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();

    if (dateYear === actualYear) {
      if (view === "decade" && dateYear === actualYear)
        customClasses.push("today button color-white");
      else if (dateMonth === actualMonth) {
        if (view === "year") customClasses.push("today color-white");
        else if (view === "month" && dateDay === actualDay)
          customClasses.push("today color-white");
      }
    } else if (
      view === "century" &&
      actualYear - dateYear === (actualYear % 10) - 1
    )
      customClasses.push("today button color-white");

    if (view === "month") customClasses.push("day");

    if (view === "month" && (date.getDay() === 0 || date.getDay() === 6))
      customClasses.push("weekend");

    if (view === "month" && dateMonth !== mainDate.getMonth())
      customClasses.push("opacity");

    if (view === "month" && history) {
      let habitsDone: string | null = null;

      history.map((item) => {
        const dayStr = [
          item.day.slice(3, 6),
          item.day.slice(0, 3),
          item.day.slice(6, item.day.length),
        ];
        const habitDate = new Date(dayStr.join(""));

        const habitDay = habitDate.getDate();
        const habitMonth = habitDate.getMonth();
        const habitYear = habitDate.getFullYear();

        if (
          habitDay === dateDay &&
          habitMonth === dateMonth &&
          habitYear === dateYear
        ) {
          item.habits.map((habit) => {
            if (habitsDone?.slice(0, 4) !== "fail") {
              habit.done
                ? (habitsDone = "success color-white")
                : (habitsDone = "fail color-white");
            }
          });
        }
      });

      habitsDone && customClasses.push(habitsDone);
    }

    return `calendar-tile ${customClasses.join(" ")}`;
  };

  return (
    <CalendarContainer>
      <Calendar
        value={mainDate}
        calendarType="hebrew"
        className={"calendar-box"}
        locale={t("history.locale")}
        tileClassName={tileClassName}
        onActiveStartDateChange={({ activeStartDate }) =>
          setMainDate(new Date(activeStartDate!))
        }
        onClickDay={(value) => {
          history?.map((item) => {
            const habitDate = new Date(item.habits[0].date);
            if (
              value.getDate() === habitDate.getDate() &&
              value.getMonth() === habitDate.getMonth()
            )
              setinspectDayHabits(item);
          });
        }}
      />

      {inspectDayHabits && (
        <Inspect
          setinspectDayHabits={setinspectDayHabits}
          habits={inspectDayHabits}
          t={t}
        />
      )}
    </CalendarContainer>
  );
}
