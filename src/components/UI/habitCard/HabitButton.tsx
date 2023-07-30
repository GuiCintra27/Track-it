import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

interface HabitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function HabitButton({ children, ...rest }: HabitButtonProps) {
  return <Button {...rest}>{children}</Button>;
}

const Button = styled.button`
  width: 8.5rem;
  height: 3.5rem;

  border: none;
  border-radius: 0.5rem;
  background: var(--light-blue);

  font-size: 1.6rem;
  font-family: "Lexend Deca";
  color: #fff;

  &.white {
    color: var(--light-blue);
    background: #fff;
  }

  &:active{
    filter: brightness(.9);
  }
`;
