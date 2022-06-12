import { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
import PostRow from "./PostRow";
import ShareType from "./ShareType";

const ShareBox = () => {
  const [isPostVisible, setPostVisible] = useState(false);

  return (
    <Container>
      <PostRow onShowPost={() => setPostVisible(true)} />

      <ShareTypes>
        <ShareType imgUrl="/assets/photo-icon.svg" title="Photo" />
        <ShareType imgUrl="/assets/video-icon.svg" title="Video" />
        <ShareType imgUrl="/assets/event-icon.svg" title="Event" />
        <ShareType imgUrl="/assets/article-icon.svg" title="Article" />
      </ShareTypes>

      {isPostVisible && <PostModal onExit={() => setPostVisible(false)} />}
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

  button {
    align-items: center;
    color: rgba(0, 0, 0, 06);
    display: flex;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    min-height: 48px;
  }
`;

const ShareTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 4px;
`;

export default ShareBox;
