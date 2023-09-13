import { ButtonHTMLAttributes } from "react";
import { ThreeDots } from "react-loader-spinner";
import { styled } from "styled-components";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function FormButton({ children, ...rest }: FormButtonProps) {
  return (
    <Button {...rest}>
      {rest.disabled ? (
        <ThreeDots
          height="100%"
          width="50"
          radius="10"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        children
      )}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 4.5rem;

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: none;
  background: var(--light-blue);

  color: #fff;
  font-size: 2rem;

  &:active {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.7;
  }

  &.white {
    background: #fff;
    color: var(--ligth-blue);
  }

  &.margin-top{
    margin-top: 3rem;
  }
`;
