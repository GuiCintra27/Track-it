"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useAppSelector } from "@/hooks/useAppSelector";

import { Menu } from "./menu";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { apiData, localData } = useAppSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState("/undefined-user.png");

  useEffect(() => {
    if (localData?.profileImage) setProfileImage(localData?.profileImage);
    else if (apiData?.image) setProfileImage(apiData?.image);
  }, [localData, apiData]);

  return (
    <StyledHeader>
      <Link href={"/"}>
        <img
          src="/logo/track-it-word.svg"
          alt="Track-It"
          className="track-it-word"
        />
      </Link>

      <img
        src={profileImage}
        alt="User Profile Image"
        className="profile-image"
        onClick={() => setToggleMenu(!toggleMenu)}
      />

      {toggleMenu && <Menu />}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;

  position: relative;

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

    object-fit: cover;
    aspect-ratio: 4/4;

    border-radius: 100%;
  }
`;
