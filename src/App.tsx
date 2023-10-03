import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import axios from "axios";
import { BACKEND_BASE_URL } from "./env";
import { Menu } from "./pages/menu/Menu";
import { UserEdit } from "./pages/userEdit/UserEdit";
import { PasswordEdit } from "./pages/passwordEdit/PasswordEdit";
import { UserCreate } from "./pages/userCreate/UserCreate";
import Top from "./pages/top/Top";

export const App = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = `${BACKEND_BASE_URL}/api`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Top} />
        <Route path="/login" Component={Login} />
        <Route path="/create" Component={UserCreate} />
        <Route path="/menu" Component={Menu} />
        <Route path="/user_edit" Component={UserEdit} />
        <Route path="/password_edit" Component={PasswordEdit} />
      </Routes>
    </BrowserRouter>
  );
};
