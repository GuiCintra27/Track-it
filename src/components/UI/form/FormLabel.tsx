import { LabelHTMLAttributes, ReactNode, useRef } from "react";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  children: ReactNode;
}

export function FormLabel({ name, children, ...rest }: FormLabelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  return <label htmlFor={name} onClick={handleClick} {...rest}>{children}</label>;
}
