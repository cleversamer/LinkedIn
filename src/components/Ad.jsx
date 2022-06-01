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
  min-height: 50px;
  margin-top: 10px;
  padding: 16px 0;
  padding-bottom: 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Ad;
