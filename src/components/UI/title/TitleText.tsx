import dayjs from "dayjs";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";
interface TitleTextProps {
  text?: string;
}

export function TitleText({ text }: TitleTextProps) {
  const {t} = useTranslation();
  const weekdays = t("today.title").split("/");

  return (
    <StyledTitle>
      {text ? text : `${weekdays[dayjs().day()]}, ${t("today.date-format") === "pt" ? dayjs().format("DD/MM") : dayjs().format("MM/DD")}`}
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  color: var(--dark-blue);
  font-size: 2.3rem;
  font-weight: 400;
`;
