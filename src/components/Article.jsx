import styled from "styled-components";
import ReactPlayer from "react-player";
import SharedActor from "./SharedActor";
import SocialCounts from "./SocialCounts";
import SocialActions from "./SocialActions";

const Article = ({ post }) => {
  return (
    <Container>
      <SharedActor post={post} />

      <Description>{post.description}</Description>

      {post.media.imageURL && (
        <SharedImage>
          <img src={post.media.imageURL} alt={post.author || "user"} />
        </SharedImage>
      )}

      {post.media.videoURL && (
        <SharedVideo>
          <ReactPlayer width="100%" url={post.media.videoURL} />
        </SharedVideo>
      )}

      <SocialCounts />
      <SocialActions />
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
  margin: 0 0 8px;
  overflow: visible;
  padding: 0;
`;

const Description = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  overflow: hidden;
  padding: 0 16px;
  text-align: left;
`;

const SharedImage = styled.div`
  background-color: #f9fafb;
  display: block;
  margin-top: 8px;
  position: relative;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const SharedVideo = styled.div`
  background-color: #f9fafb;
  display: block;
  margin-top: 8px;
  position: relative;
  width: 100%;

  iframe {
    width: 100%;
  }
`;

export default Article;
