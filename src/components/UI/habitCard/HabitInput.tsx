import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

export function HabitInput({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <Input {...rest} />;
}

const Input = styled.input`
  width: 100%;
  height: 4.5rem;

  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--stroke);
  background: #fff;

  font-size: 2rem;
  color: var(--dark-gray);

  &:disabled{
    opacity: .7;
  }

  &::placeholder {
    font-size: 2rem;
    color: var(--placeholder);
  }
`;
