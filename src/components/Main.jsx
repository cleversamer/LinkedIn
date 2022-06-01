import styled from "styled-components";
import ShareBox from "./ShareBox";
import Article from "./Article";

const Main = () => {
  return (
    <Container>
      <ShareBox />
      <Article />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

export default Main;
