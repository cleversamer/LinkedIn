import styled from "styled-components";
import Header from "../components/Header";
import Ad from "../components/Ad";
import LeftSide from "../components/LeftSide";
import Main from "../components/Main";
import RightSide from "../components/RightSide";

const Home = () => {
  return (
    <Container>
      <Header />

      <Ad />

      <Layout>
        <LeftSide />

        <Main />

        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  padding-top: 56px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding-top: 56px;
    padding: 0;
  }
`;

const Layout = styled.div`
  column-gap: 25px;
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  margin: 25px 0;
  row-gap: 25px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
