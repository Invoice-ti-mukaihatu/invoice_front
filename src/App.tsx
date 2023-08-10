import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { Test } from "./pages/test";
import { Unko } from "./pages/unko";
import { Home } from "./pages/home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

// import Login from './pages/Login';
import './pages/Login.css';
import { TestUser } from "./pages/testUser";
import axios from "axios";

export const App = () => {
  axios.defaults.withCredentials = true;

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/main" Component={Main} />
        <Route path="/test" Component={Test} />
        <Route path="/unko" Component={Unko} />
        <Route path="/testUser" Component={TestUser} />
      </Routes>
    </BrowserRouter>
  );
};