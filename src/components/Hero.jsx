import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <HeroLeft>
        <Heading>Welcome to your professional community</Heading>

        <Google>
          <GoogleLogo src="/assets/google.svg" alt="Google logo" />
          Sign In with Google
        </Google>
      </HeroLeft>

      <HeroImg
        src="/assets/login-hero.svg"
        alt="Boy and girl sitting on a table, drinking coffee, and working on their laptops"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 12vw;
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding-left: 0;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
    padding-bottom: 40px;
  }
`;

const Heading = styled.h1`
  color: #2977c9;
  font-size: 50px;
  font-weight: 200;
  line-height: 70px;
  padding-bottom: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    font-weight: 300;
    line-height: 2;
    text-align: center;
    width: 100%;
  }
`;

const HeroImg = styled.img`
  object-fit: contain;
  width: 40vw;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Google = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 28px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 56px;
  justify-content: center;
  margin-top: 40px;
  transition-duration: 167ms;
  width: 300px;
  z-index: 0;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    height: 48px;
    margin-top: 20px;
    width: 250px;

    &:active {
      transform: scale(0.98);
    }
  }
`;

const GoogleLogo = styled.img`
  margin-right: 10px;
`;

export default Hero;
