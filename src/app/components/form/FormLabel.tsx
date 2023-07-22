import Image from "next/image";
import { LabelHTMLAttributes } from "react";
import { styled } from "styled-components";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
  children: string
}

export function FormLabel({ children,...rest }: FormLabelProps) {  
  return (
    <Label {...rest}>
      <Image priority
        src="/cloud-upload.png"
        height={window.innerHeight*0.04}
        width={window.innerHeight*0.04}
        alt="Cloud Upload"/>
      <span>{children}</span>
    </Label>
  );
}

const Label = styled.label`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 2px dashed var(--light-blue);
  border-radius: 3px;

  color: var(--light-blue);
  font-size: 1.5rem;

  span{
    font-family:"Lexend Deca";
  }
`;
