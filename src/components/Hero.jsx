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
  padding-top: 40px;
  padding-left: 12vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    align-items: center;
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
  padding-bottom: 0;
  width: 100%;
  font-size: 50px;
  font-weight: 200;
  line-height: 70px;
  color: #2977c9;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    width: 100%;
    line-height: 2;
  }
`;

const HeroImg = styled.img`
  width: 40vw;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Google = styled.button`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 300px;
  height: 56px;
  border-radius: 28px;
  z-index: 0;
  cursor: pointer;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 16px;
    width: 250px;
    height: 48px;

    &:active {
      transform: scale(0.98);
    }
  }
`;

const GoogleLogo = styled.img`
  margin-right: 10px;
`;

export default Hero;
