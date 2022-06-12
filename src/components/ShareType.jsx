import styled from "styled-components";

const ShareType = ({ imgUrl, title }) => {
  return (
    <Container>
      <img src={imgUrl} alt="" />
      <span>{title}</span>
    </Container>
  );
};

const Container = styled.button`
  cursor: pointer;
  transition-duration: 167ms;

  img {
    margin: 0 4px 0 -2px;
  }

  span {
    color: #70b5f9;
  }

  &:hover span {
    color: inherit;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default ShareType;
