"use client";

import { useState } from "react";
import { styled } from "styled-components";

export function Header() {
  const [profileImage, setProfileImage] = useState<undefined>(undefined);
  return (
    <StyledHeader>
      <img
        src="/logo/track-it-word.svg"
        alt="Track-It"
        className="track-it-word"
      />

      <img
        src={profileImage ? profileImage : "/undefined-user.png"}
        alt="User Profile Image"
        className="profile-image "
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

  .track-it-word {
    width: 10rem;
    height: 5rem;
  }

  .profile-image {
    width: 5rem;
    height: 5rem;
  }
`;
