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
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const Container = styled(CommonCard)`
  background-color: #fff;
  color: #958b7b;
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;

  div {
    button {
      align-items: center;
      color: rgba(0, 0, 0, 06);
      display: flex;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      min-height: 48px;
    }

    &:first-child {
      align-items: center;
      display: flex;
      padding: 8px 16px 0px 16px;

      img {
        border-radius: 50%;
        cursor: pointer;
        margin-right: 10px;
        transition-duration: 167ms;
        width: 45px;

        &:active {
          transform: scale(0.97);
        }
      }

      button {
        background-color: #fff;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        flex-grow: 1;
        margin: 4px 0;
        padding-left: 16px;
        text-align: left;
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
