import styled from "styled-components";

export const CalendarContainer = styled.div`
  margin: auto;
  padding-inline: 2rem;

  .calendar-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1rem;

    border-radius: 10px;
    background: var(--light);

    .react-calendar__navigation {
      display: flex;
      gap: 1rem;

      button {
        height: 3rem;
        min-width: 2rem;

        border-radius: 5px;
        border: 1px solid var(--border);
        background-color: var(--calendar-button);

        font-size: 1.5rem;
        color: var(--calendar-text);
      }
    }

    .react-calendar__month-view__weekdays {
      margin-bottom: 1rem;

      font-size: 1.5rem;
      color: var(--calendar-text);

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .calendar-tile {
      height: 6rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      background-color: transparent;

      color: var(--calendar-text);

      abbr {
        height: 60%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 600;
      }

      &.day abbr {
        clip-path: circle(40% at 50%);
      }

      &.fail abbr {
        background-color: var(--red);
      }

      &.success abbr {
        background-color: var(--green);
      }

      &.today abbr {
        background-color: var(--dark-blue);

        border-radius: 10px;

        clip-path: none;
      }

      &.today.button {
        background-color: var(--dark-blue);
        
        border-radius: 10px;
      }

      &.color-white {
        color: white;
      }

      &.opacity {
        opacity: 0.6;
      }

      &.weekend {
        color: red;
      }
    }
  }
`;
