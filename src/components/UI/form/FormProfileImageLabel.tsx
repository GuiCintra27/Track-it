import { LabelHTMLAttributes, ReactNode, useRef } from "react";

interface FormProfileImageLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  children: ReactNode;
}

export function FormProfileImageLabel({ name, children, ...rest }: FormProfileImageLabelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  return <label htmlFor={name} onClick={handleClick} {...rest}>{children}</label>;
}
