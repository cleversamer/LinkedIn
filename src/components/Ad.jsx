import styled from "styled-components";
import { Link } from "react-router-dom";

const Ad = () => {
  return (
    <Container>
      <h5>
        <Link to="/">Hiring in a hurry? - </Link>
      </h5>

      <p>
        Find talented pros in record time with Upwork and keep business moving.
      </p>
    </Container>
  );
};

const Container = styled.section`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 0;
  min-height: 50px;
  padding-bottom: 0;
  padding: 16px 0;
  text-align: center;
  text-decoration: underline;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    color: #434649;
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Ad;
