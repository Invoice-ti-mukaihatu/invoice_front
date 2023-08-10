import './Login.css';
import React, { useState } from "react";
import { User } from "../models/User";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // ログイン情報を送信し、レスポンスを受け取る
            const response = await axios.post("http://localhost:3000/login", { email, password });
            // ログインボタンがクリックされたときの処理
            navigate("/main");
            // 受け取ったトークンをコンソールに表示
            console.log("トークン: ", response.data.token);
        } catch (error) {
            // エラーハンドリング：ログインエラー時の処理
            console.error("ログインエラー:", error);
        }
    };

    return (
        <div>
            <h1>-ログイン-</h1>
            <input type="email" value={email} placeholder="メールアドレスを入力" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" value={password} placeholder="パスワードを入力" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>ログイン</button>

            <label>
                登録まだの方はこちら
                <Link to="/CreateUser">
                    <button className='createUser'>新規登録</button>
                </Link>
            </label>
        </div>
    );
};
