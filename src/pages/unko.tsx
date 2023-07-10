import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const Unko = () => {
  return (
    <div>
      <h1>Unko画面</h1>
      <p>これはunko画面です。</p>
      <Link to="/">homeページへ</Link>
    </div>
  );
};
