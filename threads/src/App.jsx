import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      {" "}
      {/* Use Router instead of BrowserRouter */}
      <Container maxW="620px">
        <Header />
        <Routes>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
