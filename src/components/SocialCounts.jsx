import styled from "styled-components";
import { Link } from "react-router-dom";

const SocialCounts = () => {
  const random = () => Math.floor(Math.random() * 100 + 1);

  return (
    <Container>
      <li>
        <button>
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt=""
          />

          <img
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
            alt=""
          />

          <span>{random()}</span>
        </button>
      </li>

      <span>⬤</span>

      <li>
        <Link to="/">{random()} comments</Link>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  align-items: center;
  border-bottom: 1px solid #e9e5ef;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  line-height: 1.3;
  list-style: none;
  overflow: auto;
  padding: 10px 16px;
  width: 100%;

  & * {
    font-weight: 600;
  }

  li {
    align-items: center;
    display: flex;

    button {
      align-items: center;
      display: flex;

      img {
        object-fit: contain;
        width: 20px;
      }

      span {
        margin-left: 3px;
      }
    }
  }

  & > span {
    font-size: 8px;
    margin: 0 8px;
  }
`;

export default SocialCounts;
