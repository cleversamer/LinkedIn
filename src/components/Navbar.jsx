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
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin: auto;
  max-width: 1128px;
  padding: 12px 0 16px;
  position: relative;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 34px;
  object-fit: contain;
  width: 135px;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

const Join = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const JoinBtn = styled.span`
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  margin-right: 12px;
  padding: 10px 12px;

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
  background-color: rgba(0, 0, 0, 0);
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 0 20px;
  text-align: center;
  transition-duration: 167ms;

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
