import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuth } from "./store/user";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  const user = useSelector(getUserAuth());

  return (
    <Container>
      <Routes>
        {!user && <Route path="/login" element={<Navigate to="/" replace />} />}

        <Route path="/not-found" element={<NotFound />} />

        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}

        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;

export default App;
