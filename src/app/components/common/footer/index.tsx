import { styled } from "styled-components";
import { ProgressBar } from "./circularProgressBar";
import Link from "next/link";

export function Footer() {
  return (
    <StyledFooter>
      <Link href={"/habits"}>Hábitos</Link>
      <ProgressBar percentage={30} />
      <Link href={"/history"}>Histórico</Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: fit-content;
  max-height: 7rem;

  position: relative;

  margin-top: auto;
  padding: 2.4rem 3rem;

  display: flex;
  justify-content: space-between;

  background-color: #fff;
  color: var(--light-blue);
  
  a{
    font-weight: 400;
    font-size: 1.8rem;
  }
`;
