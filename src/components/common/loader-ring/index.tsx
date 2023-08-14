import { ColorRing } from "react-loader-spinner";
import { styled } from "styled-components";

export function LoaderRing() {
  return (
    <Container>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
