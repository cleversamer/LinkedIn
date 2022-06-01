import styled from "styled-components";
import { Link } from "react-router-dom";

const Leftside = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />

          <Link to="/">
            <Photo />
            <PhotoLink>Welcome, there!</PhotoLink>
          </Link>

          <Link to="/">
            <AddPhotoText>Add a photo</AddPhotoText>
          </Link>
        </UserInfo>

        <Widget>
          <Link to="/">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/assets/widget-icon.svg" alt="" />
          </Link>
        </Widget>

        <Item>
          <span>
            <img src="/assets/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <Link to="/">
          <span>Groups</span>
        </Link>

        <Link to="/">
          <span>
            Events
            <img src="/assets/plus-icon.svg" alt="" />
          </span>
        </Link>

        <Link to="/">
          <span>Follow Hashtags</span>
        </Link>

        <Link to="/">
          <span>Discover more</span>
        </Link>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;

  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

const ArtCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: box-shadow 83ms;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-break: break-word;
  word-wrap: break-word;
`;

const CardBackground = styled.div`
  background-position: center;
  background-size: 462px;
  background: url("/assets/card-bg.svg");
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  background-clip: content-box;
  background-color: white;
  background-image: url("/assets/photo.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: none;
  box-sizing: border-box;
  height: 72px;
  margin: -38px auto 12px;
  width: 72px;
`;

const PhotoLink = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  margin-top: 4px;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 12px;
  padding-top: 12px;

  & > a {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4px 12px;
    text-decoration: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  display: block;
  font-size: 12px;
  padding: 12px;
  text-align: left;

  span {
    align-items: center;
    color: rgba(0, 0, 0, 1);
    display: flex;

    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  padding: 8px 0 0;
  text-align: left;

  a {
    color: black;
    font-size: 12px;
    padding: 4px 12px 4px 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    &:last-child {
      border-top: 1px solid #d6cec2;
      color: rgba(0, 0, 0, 0.6);
      padding: 12px;
      text-decoration: none;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default Leftside;
