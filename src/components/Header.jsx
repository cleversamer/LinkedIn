import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/user";
import styled from "styled-components";

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    history("/");
  };

  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/home">
            <img src="/assets/home-logo.svg" alt="" />
          </Link>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>

          <SearchIcon>
            <img src="/assets/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link to="/">
                <img src="/assets/nav-home.svg" alt="" />
                <span>Home</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/">
                <img src="/assets/nav-network.svg" alt="" />
                <span>My Network</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/">
                <img src="/assets/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/">
                <img src="/assets/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/">
                <img src="/assets/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </Link>
            </NavList>

            <User>
              <Link to="/">
                <img src="/assets/user.svg" alt="" />
                <span>Me</span>
                <img src="/assets/down-icon.svg" alt="" />
              </Link>

              <SignOut onClick={handleSignOut}>Sign Out</SignOut>
            </User>

            <Work>
              <Link to="/">
                <img src="/assets/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/assets/down-icon.svg" alt="" />
                </span>
              </Link>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  @media screen and (max-width: 768px) {
    box-sizing: content-box;
    padding: 10px 12px;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1128px;
  min-height: 100%;
`;

const Logo = styled.span`
  font-size: 0px;
  margin-right: 8px;
`;

const Search = styled.div`
  flex-grow: 1;
  opacity: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      background-color: #eef3f8;
      border-color: #dce6f1;
      border-radius: 2px;
      border: none;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      font-size: 14px;
      font-weight: 400;
      height: 34px;
      line-height: 1.75;
      padding: 0 8px 0 40px;
      vertical-align: text-top;
      width: 218px;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      width: auto;

      input {
        padding-right: 30px;
        width: 100%;
      }
    }
  }
`;

const SearchIcon = styled.div`
  align-items: center;
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  left: 2px;
  margin: 0;
  pointer-events: none;
  position: absolute;
  top: 10px;
  width: 40px;
  z-index: 1;

  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

const Nav = styled.nav`
  display: block;
  margin-left: auto;
  overflow: auto;

  @media (max-width: 768px) {
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    padding: 0px 10px;
    position: fixed;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      border-bottom: 2px solid var(--white, #fff);
      border-color: rgba(0, 0, 0, 0.9);
      bottom: 0;
      left: 0;
      position: absolute;
      transform: scaleX(1);
      transition: transform 0.2s ease-in-out;
      width: 100%;
    }
  }
`;

const NavList = styled.li`
  align-items: center;
  display: flex;
  margin-right: 10px;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  background: white;
  border-radius: 0 0 5px 5px;
  display: none;
  font-size: 12px;
  height: 40px;
  position: absolute;
  text-align: center;
  top: 45px;
  transition-duration: 167ms;
  width: 100px;
  cursor: pointer;

  :active {
    transform: scale(0.99);
  }
`;

const User = styled(NavList)`
  a > svg {
    border-radius: 50%;
    width: 24px;
  }

  a > img {
    border-radius: 50%;
    height: 24px;
    width: 24px;
  }

  span {
    align-items: center;
    display: flex;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);

  & span > img {
    margin-left: 2px;
  }
`;

export default Header;
