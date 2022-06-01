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
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default SharedImage;
