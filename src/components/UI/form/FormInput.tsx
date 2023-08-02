import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { styled } from "styled-components";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function FormInput({ name,...rest }: FormInputProps) {
  const { register } = useFormContext();
  return <Input {...rest} {...register(name)} />;
}

const Input = styled.input`
  width: 100%;
  height: 4.5rem;

  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--stroke);
  background: #fff;

  font-size: 2rem;
  font-family: "Lexend Deca";
  color: var(--dark-gray);

  &::placeholder {
    font-size: 2rem;
    color: var(--placeholder);
  }

  &.hidden {
    display: none;
  }
`;
