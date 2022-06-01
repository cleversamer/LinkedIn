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
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  padding: 10px 16px;
  width: 100%;
  border-bottom: 1px solid #e9e5ef;
  list-style: none;
  box-sizing: border-box;
  font-size: 14px;

  & * {
    font-weight: 600;
  }

  li {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        object-fit: contain;
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
