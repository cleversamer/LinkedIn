import styled from "styled-components";
import ShareBox from "./ShareBox";
import Article from "./Article";

const Main = () => {
  return (
    <Container>
      <ShareBox />
      <Articles>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </Articles>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;

  @media screen and (max-width: 768px) {
    order: 3;
  }
`;

const Articles = styled.div`
  @media screen and (max-width: 768px) {
    &:last-child {
      margin-bottom: 90px;
    }
  }
`;

export default Main;
