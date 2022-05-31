import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Image src="/assets/not-found.png" alt="Not found" />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 14px;
  background-color: #f6f6f6;
`;

const Image = styled.img`
  width: 60%;
  object-fit: contain;
  margin-bottom: 180px;

  @media screen and (min-width: 1200px) {
    .not-found__img {
      width: 30%;
      margin-bottom: 140px;
    }
  }
`;

export default NotFound;
