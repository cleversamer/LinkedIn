import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo src="/assets/login-logo.svg" alt="LinkedIn logo" />

      <Join>
        <JoinBtn>
          <Link to="/login">Join now</Link>
        </JoinBtn>

        <SignInBtn>
          <Link to="/login">Sign In</Link>
        </SignInBtn>
      </Join>
    </Nav>
  );
};

const Nav = styled.nav`
  position: relative;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 135px;
  height: 34px;
  object-fit: contain;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

const Join = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JoinBtn = styled.span`
  display: inline-block;
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
  }

  &:active {
    transform: scale(0.98);
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const SignInBtn = styled.span`
  display: inline-block;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 0 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Navbar;
