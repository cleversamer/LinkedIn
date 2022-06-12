import styled from "styled-components";
import { useSelector } from "react-redux";
import { getUserAuth } from "../store/user";

const PostRow = ({ onShowPost }) => {
  const user = useSelector(getUserAuth());

  return (
    <Container>
      <img
        src={user?.photoURL || "/assets/user.svg"}
        alt={user.displayName || "user"}
      />
      <button onClick={() => onShowPost()}>Start a post</button>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 8px 16px 0px 16px;

  img {
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
    transition-duration: 167ms;
    width: 45px;

    &:active {
      transform: scale(0.97);
    }
  }

  button {
    background-color: #fff;
    border-radius: 35px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    flex-grow: 1;
    margin: 4px 0;
    padding-left: 16px;
    text-align: left;
    transition-duration: 167ms;

    &:active {
      transform: scale(0.99);
    }
  }
`;

export default PostRow;
