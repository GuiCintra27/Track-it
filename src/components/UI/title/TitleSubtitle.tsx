import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

interface TitleSubtitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function TitleSubtitle({ text, ...rest }: TitleSubtitleProps) {
  return <StyledSubtitle {...rest}>{text}</StyledSubtitle>;
}

const StyledSubtitle = styled.h3`
  color: var(--default-subtitle);
  font-size: 1.8rem;
  font-weight: 400;

  &.green {
    color: var(--green);
  }
`;
