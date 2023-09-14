import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

interface HabitDeleteIconProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function HabitDeleteIcon({ ...res }: HabitDeleteIconProps) {
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

    filter: grayscale(var(--gray-scale));
  }
`;
