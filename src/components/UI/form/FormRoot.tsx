import { FormHTMLAttributes, ReactNode } from "react";
import { styled } from "styled-components";

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function FormRoot({ children, ...rest }: FormRootProps) {
  return <Form {...rest}>{children}</Form>;
}

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
