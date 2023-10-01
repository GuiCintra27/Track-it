import { HtmlHTMLAttributes, ReactNode } from "react";
import { styled } from "styled-components";

interface HabitRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  marginBottom?: string;
}

export function HabitRoot({ children, marginBottom, ...rest }: HabitRootProps) {
  return <Container $margin_bottom={marginBottom} {...rest}>{children}</Container>;
}

const Container = styled.div<{$margin_bottom?: string}>`
  width: 90%;
  height: fit-content;

  padding: 1.5rem 1.8rem;
  margin-inline: auto;
  margin-bottom: ${props => props.$margin_bottom};

  display: flex;
  flex-direction: column;

  border-radius: 5px;

  background-color: var(--light);;

  &.flex-direction-row {
    flex-direction: row;
  }

  &.justify-content-space-between {
    justify-content: space-between;
  }
`;
