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
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Container = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

export default Article;
