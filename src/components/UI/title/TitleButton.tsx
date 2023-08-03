import Image from "next/image";
import { styled } from "styled-components";
import { ButtonHTMLAttributes } from "react";

export function TitleButton({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton {...rest}>
      <Image src="/icons/sum-icon.svg" alt="Adicionar Hábito" className="img" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 3.5rem;
  width: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--light-blue);
  border: none;
  border-radius: 5px;

  &:active {
    background-color: var(--dark-blue);
  }

  .img {
    width: 1.6rem;
  }
`;
