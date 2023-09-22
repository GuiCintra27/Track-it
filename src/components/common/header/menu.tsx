import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { redirect } from "next/navigation";
import { useTranslation } from "react-i18next";

import { useLogout } from "@/hooks/useLogout";

export function Menu() {
  const { t } = useTranslation();
  const [logged, setLogged] = useState(true);

  const menuList = [
    {
      icon: "user-icon.svg",
      name: t("header.profile"),
      url: "/profile",
      function: () => {},
    },
    {
      icon: "settings-icon.svg",
      name: t("header.settings"),
      url: "/settings",
      function: () => {},
    },
    {
      icon: "logout-icon.svg",
      name: t("header.log-out"),
      url: "",
      function: () => setLogged(false),
    },
  ];

  if (!logged) {
    useLogout();
    redirect("/sign-in");
  }

  return (
    <Container>
      {menuList.map((item, index) => (
        <div key={index}>
          <Link href={item.url} onClick={item.function} className="content">
            <img src={`/icons/${item.icon}`} alt={item.name} />
            <p>{item.name}</p>
          </Link>
          {index !== menuList.length - 1 && <div className="separator" />}
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  min-width: 12.75rem;

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1;
  bottom: 0.5rem;
  right: 0.5rem;

  transform: translateY(100%);

  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 1rem;

  border-radius: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
  }

  .separator {
    height: 0.1rem;
    width: 100%;

    margin: 0.8rem 0;

    background-color: var(--stroke);
  }

  .content {
    display: flex;
    padding: 0.4rem;
    gap: 0.8rem;

    img {
      height: 1.6rem;
      aspect-ratio: 4/4;
    }

    p {
      font-size: 1.3rem;
      color: #666666;
    }

    &:active {
      background-color: var(--medium-gray);
      filter: brightness(1.1);
      border-radius: 0.25rem;
    }
  }
`;
