import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Image src="/assets/not-found.png" alt="Not found" />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f6f6f6;
  display: grid;
  font-size: 14px;
  height: 100vh;
  place-items: center;
`;

const Image = styled.img`
  margin-bottom: 180px;
  object-fit: contain;
  width: 60%;

  @media screen and (min-width: 1200px) {
    margin-bottom: 140px;
    width: 30%;
  }
`;

export default NotFound;
