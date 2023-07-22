"use client"

import Image from "next/image";
import { useState } from "react";
import { styled } from "styled-components";

export function Header() {
  const [profileImage, setProfileImage] = useState<undefined>(undefined);
  return (
    <StyledHeader>
      <Image
        priority
        src="/track-it-word.svg"
        height={50}
        width={100}
        alt="Track-It"
      />

      <Image
        priority
        src={profileImage ? profileImage : "/undefined-user.png"}
        height={50}
        width={50}
        alt="User Profile Image"
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;

  align-self: flex-start;

  padding: 1rem 1.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--dark-blue);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;
