import styled from "styled-components";
import { Link } from "react-router-dom";

const SharedActor = () => {
  return (
    <Container>
      <Link to="/">
        <img src="/assets/user.svg" alt="" />

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
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 12px 16px 0;
  margin-bottom: 8px;

  a {
    cursor: auto;
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    &:active {
      transform: scale(1);
    }

    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: #808080;
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
