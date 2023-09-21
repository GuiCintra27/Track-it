import { TFunction } from "i18next";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

import { History } from "@/lib/types/history";

interface InspectProps {
  habits: History;
  t: TFunction<"translation", undefined>;
  setinspectDayHabits: Dispatch<SetStateAction<any>>;
}

export function Inspect({ setinspectDayHabits, habits, t }: InspectProps) {
  return (
    <Container>
      <div className="layer" onClick={() => setinspectDayHabits(null)}></div>
      <div className="habitList">
        <p className="title">{t("history.habit-list-title")}</p>
        <img
          src="icons/close-icon.svg"
          onClick={() => setinspectDayHabits(null)}
          className="close"
          alt={t("history.close-list")}
        />

        {habits.habits.map((item) => (
          <Item key={item.id}>
            <p className="name">{item.name}</p>
            <p className={item.done ? "success" : "fail"}>
              {item.done ? t("history.complete") : t("history.incomplete")}
            </p>
          </Item>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 2rem;

  background-color: rgb(9 7 7 / 0.4);

  .habitList {
    height: 70%;
    width: 90%;
    z-index: 3;

    margin-inline: 2rem;

    padding: 1.5rem 1.2rem;

    display: flex;
    flex-direction: column;

    border-radius: 1rem;

    background-color: var(--calendar-inspect-list);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);

    overflow-y: scroll;

    .title {
      margin-inline: auto;
      margin-bottom: 3.7rem;

      font-size: 2.4rem;
      color: var(--calendar-text);
    }
  }

  .close {
    position: absolute;
    top: 2.2rem;
    right: 2rem;

    width: 1.8rem;

    filter: invert(var(--invert));
  }

  .layer {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;
  }
`;

const Item = styled.div`
  width: 100%;

  margin-bottom: 1.7rem;

  padding: 0.7rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--calendar-inspect-list-item);

  border-radius: 1rem;

  font-size: 1.8rem;
  color: var(--calendar-text);
  word-break: break-word;

  .name {
    max-width: 17rem;
  }

  .success {
    color: var(--green);
  }

  .fail {
    color: var(--red);
    filter: brightness(1.2);
  }
`;
