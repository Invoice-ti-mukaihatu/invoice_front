import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import axios from "axios";

export const App = () => {
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/main" Component={Main} />
      </Routes>
    </BrowserRouter>
  );
};