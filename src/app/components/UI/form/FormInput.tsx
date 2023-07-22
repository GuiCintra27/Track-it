import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

export function FormInput({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <Input {...rest} />;
}

const Input = styled.input`
  width: 100%;
  height: 4.5rem;

  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--stroke);
  background: #fff;

  &::placeholder {
    font-size: 2rem;
    color: var(--placeholder);
  }

  &.hidden{
    display: none;
  }
`;
