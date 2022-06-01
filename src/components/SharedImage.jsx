import styled from "styled-components";
import { Link } from "react-router-dom";

const SharedImage = () => {
  return (
    <Container>
      {" "}
      <Link to="/">
        <img src="/assets/avatar.jpg" alt="" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f9fafb;
  display: block;
  margin-top: 8px;
  position: relative;
  width: 100%;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

export default SharedImage;
