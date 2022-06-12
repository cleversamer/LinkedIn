import styled from "styled-components";
import { Link } from "react-router-dom";

const SharedActor = () => {
  return (
    <Container>
      <Link to="/">
        <img src="/assets/user.svg" alt="user" />

        <div>
          <span>Title</span>
          <span>Info</span>
          <span>Date</span>
        </div>
      </Link>

      <button>
        <img src="/assets/ellipses.svg" alt="" />
      </button>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  padding: 12px 16px 0;

  a {
    cursor: auto;
    display: flex;
    flex-grow: 1;
    margin-right: 12px;
    overflow: hidden;

    &:active {
      transform: scale(1);
    }

    img {
      height: 48px;
      object-fit: contain;
      width: 48px;
    }

    & > div {
      display: flex;
      flex-basis: 0;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 700;
        }

        &:nth-child(n + 1) {
          color: #808080;
          font-size: 12px;
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
  }
`;

export default SharedActor;
