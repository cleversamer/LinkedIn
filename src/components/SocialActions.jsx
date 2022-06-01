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
  display: flex;
  align-items: center;
  padding: 4px 8px;
  min-height: 40px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    margin-right: 10px;

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
