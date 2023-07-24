import { styled } from "styled-components";

interface TitleTextProps {
  children: string;
}

export function TitleText({ children }: TitleTextProps) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h1`
  color: var(--dark-blue);
  font-size: 2.3rem;
  font-weight: 400;
`;
