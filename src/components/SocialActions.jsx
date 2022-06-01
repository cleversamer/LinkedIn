import styled from "styled-components";

const SocialActions = () => {
  return (
    <Container>
      <button>
        <img src="/assets/like-icon.svg" alt="" />
        <span>Like</span>
      </button>

      <button>
        <img src="/assets/comments-icon.svg" alt="" />
        <span>Comment</span>
      </button>

      <button>
        <img src="/assets/share-icon.svg" alt="" />
        <span>Share</span>
      </button>

      <button>
        <img src="/assets/Send-icon.svg" alt="" />
        <span>Send</span>
      </button>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  min-height: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 4px 8px;

  button {
    align-items: center;
    color: #0a66c2;
    display: inline-flex;
    margin-right: 10px;
    padding: 8px;

    &:active {
      transform: scale(0.98);
    }

    img {
      margin-right: 4px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export default SocialActions;
