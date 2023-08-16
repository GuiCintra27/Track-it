import dayjs from "dayjs";
import { styled } from "styled-components";
interface TitleTextProps {
  text?: string;
}

export function TitleText({ text }: TitleTextProps) {
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return (
    <StyledTitle>
      {text ? text : `${weekdays[dayjs().day()]}, ${dayjs().format("DD/MM")}`}
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  color: var(--dark-blue);
  font-size: 2.3rem;
  font-weight: 400;
`;
