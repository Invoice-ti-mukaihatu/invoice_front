
import React from "react";
import './home.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>homeファイル画面</h1>
      <Link to="/test">
        <button>testページへ</button>
      </Link>
      <br />
      <Link to="/unko">unkoページへ</Link>
      <br />
      <Link to="/testUser">testUserページへ</Link>
    </div>
  );
};
