import { useState, useEffect } from "react";
import styled from "styled-components";
import ShareBox from "./ShareBox";
import Article from "./Article";
import { onSnapshot } from "firebase/firestore";
import { postsQuery } from "../firebase";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <ShareBox />

      <Articles>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </Articles>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;

  @media screen and (max-width: 768px) {
    order: 3;
  }
`;

const Articles = styled.div`
  @media screen and (max-width: 768px) {
    &:last-child {
      margin-bottom: 90px;
    }
  }
`;

export default Main;
