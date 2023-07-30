"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { styled } from "styled-components";

interface CircularProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: CircularProgressBarProps) {
  return (
    <Box>
      <CircularProgressbar
        value={percentage}
        text={"Hoje"}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
    </Box>
  );
}

const Box = styled.div`
  width: 9rem;
  height: 9rem;
  
  transform: translateY(-60%);

  padding: .8rem;

  display: flex;

  background-color: var(--light-blue);
  border-radius: 100%;
`;
