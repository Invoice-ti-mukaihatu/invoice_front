import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import axios from "axios";
import { BACKEND_BASE_URL } from "./env";
import { Menu } from "./pages/menu/Menu";
import { UserEdit } from "./pages/userEdit/UserEdit";
import { PasswordEdit } from "./pages/passwordEdit/PasswordEdit";

export const App = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = BACKEND_BASE_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/menu" Component={Menu} />
        <Route path="/user_edit" Component={UserEdit} />
        <Route path="/password_edit" Component={PasswordEdit} />
      </Routes>
    </BrowserRouter>
  );
};
