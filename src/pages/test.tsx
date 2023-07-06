import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const Test = () => {
    return (
        <div>
            <h1>testファイル画面</h1>
            <p>これは別のファイルに遷移した画面です。</p>
            <Link to="/">homeページへ</Link>
        </div>
    );
};