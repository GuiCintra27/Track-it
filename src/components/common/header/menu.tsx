import Link from "next/link";
import styled from "styled-components";

const menuList = [
  {
    icon: 'user-icon.svg',
    name: "Perfil",
    url: "/profile"
  },
  {
    icon: 'settings-icon.svg',
    name: "Configurações",
    url: "/settings"
  },
  {
    icon: 'logout-icon.svg',
    name: "Sair",
    url: ""
  },
];

export function Menu() {
  return (
    <Container>
      {menuList.map((item, index) => (
        <div key={index}>
          <Link href={item.url} className="content">
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
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: .5rem;
  right: .5rem;
  
  transform: translateY(100%);

  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 1rem;

  border-radius: 1rem;

  & > div{
    display: flex;
    flex-direction: column;
  }

  .separator {
    height: .1rem;
    width: 100%;

    margin: .8rem 0;

    background-color: var(--stroke);
  }

  .content {
    display: flex;
    padding: .4rem;
    gap: 0.8rem;

    img {
      height: 1.6rem;
      aspect-ratio: 4/4;
    }

    p {
      font-size: 1.3rem;
      color: var(--dark-gray);
    }

    &:active{
      background-color: var(--medium-gray);
      filter: brightness(1.1);
      border-radius: .25rem;
    }
  }
`;
