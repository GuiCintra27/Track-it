import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

export function HabitDeleteIcon({ ...res }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Icon {...res}>
      <img src="/icons/trash-icon.svg" alt="Delete" />
    </Icon>
  );
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.3rem;
    height: 1.5rem;
  }
`;
