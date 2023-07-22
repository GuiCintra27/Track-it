import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function FormButton({ children, ...rest }: FormButtonProps) {
  return <Button {...rest}>{children}</Button>;
}

const Button = styled.button`
  width: 100%;
  height: 4.5rem;

  padding: 1rem;

  border-radius: 0.5rem;
  border: none;
  background: var(--light-blue);

  color: #fff;
  text-align: center;
  font-size: 2rem;

  &:hover {
    filter: brightness(1.5);
  }

  &.white {
    background: #fff;
    color: var(--ligth-blue);
  }
`;
