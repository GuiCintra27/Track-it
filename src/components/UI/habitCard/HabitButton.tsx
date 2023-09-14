import { ButtonHTMLAttributes } from "react";
import { ThreeDots } from "react-loader-spinner";
import { styled } from "styled-components";

interface HabitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  submit?: boolean;
  children: string;
}

export function HabitButton({ submit, children, ...rest }: HabitButtonProps) {
  return (
    <Button {...rest}>
      {submit && rest.disabled ? (
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
  width: 8.5rem;
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
  background: var(--light-blue);

  font-size: 1.6rem;
  color: #fff;

  &.white {
    color: var(--light-blue);
    background: var(--light);
  }

  &:active {
    filter: brightness(0.9);
  }
`;
