import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Login = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default Login;
