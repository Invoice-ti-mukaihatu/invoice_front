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
import { getInvoiceToken } from "./utils/auth";

export const App = () => {
  axios.defaults.baseURL = `${BACKEND_BASE_URL}/api`;
  // トークン保持してればheadersで渡す
  axios.interceptors.request.use(
    (config: any) => {
      const token = getInvoiceToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

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
