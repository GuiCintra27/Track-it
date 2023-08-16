import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

interface TitleSubtitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  progress?: number;
}

export function TitleSubtitle({ progress, ...rest }: TitleSubtitleProps) {
  return (
    <StyledSubtitle
      className={progress && progress > 0 ? "green" : ""}
      {...rest}
    >
      {progress && progress > 0
        ? `${progress}% dos hábitos concluídos`
        : "Nenhum hábito concluído ainda"}
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
