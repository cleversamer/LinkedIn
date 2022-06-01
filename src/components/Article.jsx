import styled from "styled-components";
import SharedActor from "./SharedActor";
import Description from "./Description";
import SharedImage from "./SharedImage";
import SocialCounts from "./SocialCounts";
import SocialActions from "./SocialActions";

const Article = () => {
  return (
    <Container>
      <SharedActor />
      <Description />
      <SharedImage />
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

export default Article;
