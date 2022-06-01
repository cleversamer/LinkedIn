import styled from "styled-components";

const ShareBox = () => {
  return (
    <Container>
      <div>
        <img src="/assets/user.svg" alt="" />
        <button>Start a post</button>
      </div>

      <div>
        <button>
          <img src="/assets/photo-icon.svg" alt="" />
          <span>Photo</span>
        </button>

        <button>
          <img src="/assets/video-icon.svg" alt="" />
          <span>Video</span>
        </button>

        <button>
          <img src="/assets/event-icon.svg" alt="" />
          <span>Event</span>
        </button>

        <button>
          <img src="/assets/article-icon.svg" alt="" />
          <span>Article</span>
        </button>
      </div>
    </Container>
  );
};

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Container = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: #fff;

  div {
    button {
      color: rgba(0, 0, 0, 06);
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 45px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
        transition-duration: 167ms;

        &:active {
          transform: scale(0.97);
        }
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: #fff;
        text-align: left;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        transition-duration: 167ms;

        &:active {
          transform: scale(0.99);
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        cursor: pointer;
        transition-duration: 167ms;

        img {
          margin: 0 4px 0 -2px;
        }

        span {
          color: #70b5f9;
        }

        &:hover span {
          color: inherit;
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }
  }
`;

export default ShareBox;
