import styled from "styled-components";

import { Form } from "../../form";

interface ProfileImageProps {
  profileImage: string;
  name: string;
}

export function ProfileImage({ profileImage, name }: ProfileImageProps) {
  return (
    <Container>
      <div>
        <img
          src={profileImage}
          alt="Foto de perfil do usuário"
          className="profile-image"
        />
        <Form.ProfileImageLabel name={name}>
          <img
            src="/icons/edit-pencil-icon.svg"
            alt="Alterar imagem de usuário"
            className="edit-profile-image"
          />
        </Form.ProfileImageLabel>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 21rem;
  margin: 3rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 21rem;
    height: 21rem;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    .profile-image {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 4/4;
      border-radius: 100%;
    }

    .edit-profile-image {
      position: absolute;
      top: 0;
      right: 0;

      filter:  brightness(var(--brightness)) invert(var(--invert));

      cursor: pointer;
    }
  }
`;
