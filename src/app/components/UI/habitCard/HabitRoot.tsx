import { HtmlHTMLAttributes, ReactNode } from "react";
import { styled } from "styled-components";

interface HabitRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function HabitRoot({ children, ...rest }: HabitRootProps) {
  return <Container {...rest}>{children}</Container>;
}

const Container = styled.div`
  width: 90%;
  height: fit-content;

  padding: 1.5rem 1.8rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  border-radius: 5px;

  background-color: #fff;

  &.flex-direction-row{
    flex-direction: row;
  }

  &.justify-content-space-between{
    justify-content: space-between;
  }
`;
