import Image from "next/image";
import { HtmlHTMLAttributes } from "react";
import { styled } from "styled-components";

export function HabitDeleteIcon({ ...res }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Icon {...res}>
      <Image src="/icons/trash-icon.svg" alt="Delete" className="img" />
    </Icon>
  );
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    width: 1.3rem;
    height: 1.5rem;
  }
`;
