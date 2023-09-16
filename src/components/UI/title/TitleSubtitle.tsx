import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

interface TitleSubtitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  progress?: number;
  habitsText: string;
  noHabitsText: string;
}

export function TitleSubtitle({
  progress,
  habitsText,
  noHabitsText,
  ...rest
}: TitleSubtitleProps) {
  return (
    <StyledSubtitle
      className={progress && progress > 0 ? "green" : ""}
      {...rest}
    >
      {progress && progress > 0 ? `${progress}% ${habitsText}` : noHabitsText}
    </StyledSubtitle>
  );
}

const StyledSubtitle = styled.h3`
  color: var(--default-subtitle);
  font-size: 1.8rem;
  font-weight: 400;

  &.green {
    color: var(--green);
  }
`;
