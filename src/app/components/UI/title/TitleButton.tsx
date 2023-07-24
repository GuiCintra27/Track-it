import { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

export function TitleButton({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton {...rest}>
      <img src="/sum-icon.svg" alt="Adicionar Hábito" />
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

  img {
    width: 1.6rem;
  }
`;
