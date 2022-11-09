import React from "react";

import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import About from "./components/main/About";
import Posts from "./components/main/Posts";
import Login from "./components/main/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default Router;
