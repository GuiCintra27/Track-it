import { HtmlHTMLAttributes, ReactNode } from "react";
import { styled } from "styled-components";

interface TitleRootProps extends HtmlHTMLAttributes<HTMLDivElement>{
  children: ReactNode;
}

export function TitleRoot({ children, ...rest }: TitleRootProps) {
  return <Title {...rest}>{children}</Title>;
}

const Title = styled.div`
  width: 100%;

  padding-inline: 1.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &.display-block{
    display: block;
  }
`;
