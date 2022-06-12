import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuth } from "./store/user";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  const user = useSelector(getUserAuth());
  const localUser = localStorage.getItem("token");

  return (
    <Container>
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={user && localUser ? <Home /> : <Login />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;

export default App;
