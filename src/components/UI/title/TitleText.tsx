import { styled } from "styled-components";

interface TitleTextProps {
  text: string;
}

export function TitleText({ text }: TitleTextProps) {
  return <StyledTitle>{text}</StyledTitle>;
}

const StyledTitle = styled.h1`
  color: var(--dark-blue);
  font-size: 2.3rem;
  font-weight: 400;
`;
