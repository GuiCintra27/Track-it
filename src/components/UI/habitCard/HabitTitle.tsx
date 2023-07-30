import { styled } from "styled-components";

interface HabitTitleProps {
  text: string;
}

export function HabitTitle({ text }: HabitTitleProps) {
  return <Title>{text}</Title>;
}

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: var(--dark-gray);
`;
