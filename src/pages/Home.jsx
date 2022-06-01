import styled from "styled-components";
import Header from "../components/Header";
import Ad from "../components/Ad";
import Leftside from "../components/LeftSide";
import Main from "../components/Main";
import Rightside from "../components/RightSide";

const Home = () => {
  return (
    <Container>
      <Header />
      <Ad />
      <Layout>
        <Leftside />

        <Main />

        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
  padding-top: 56px;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-top: 56px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
