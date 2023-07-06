import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Test } from "./test";

export const TestUser = () => {
        // User型の配列と、その状態を管理するためのuseStateフックを定義
        const [users, setUsers] = useState<User[]>([]);
        // TestPageコンポーネントの表示状態を管理するためのuseStateフックを定義
        const [testPage, setTestPage] = useState(false);
    
        // User型のインターフェースを定義
        interface User {
            id: number;
            name: string;
            mail: string;
        }
    
        //ボタンクリック時の処理を定義する関数
        const handleButtonClick = () => {
            // バックエンドのAPIエンドポイントからユーザー情報を取得するためのfetchリクエストを送信する
            fetch("http://localhost:3000/api/users")
                // レスポンスをJSON形式に変換
                .then(response => response.json())
                // 取得したユーザー情報をusersの状態にセット
                .then(data => setUsers(data))
                // エラーハンドリング
                .catch(error => console.error(error));
        };
    
        //ボタンクリック時の処理を定義する関数
        const testButtonClick = () => {
            // TestPageの表示をtrueにする
            // if (testPage == false) {
            //     setTestPage(true);
            // }else{
            //     setTestPage(false);
            // }
            setTestPage(!testPage);
        };
    return (
        <div>
        <h1>請求書アプリ</h1>
        <p>フロント</p>
        <h2>シングルページ遷移画面</h2>
        <br />

        <button onClick={testButtonClick}>testファイルを{testPage ? "非表示" : "表示"}にする</button>
        <br />
        {testPage && <Test />}
        <br />
        <button onClick={handleButtonClick}>ユーザー情報を取得</button>
        {/* ボタンクリックでDBからレコード取得 */}
        {users.length > 0 ? (
            <ul>
                {/* 取得した情報を表示 */}
                {users.map(user => (
                    <li key={user.id}>
                        名前:{user.name} <br />
                        メールアドレス:{user.mail}
                    </li>
                ))}
            </ul>
        ) : (
            <p>ユーザー情報がありません。</p>
        )}
    </div>
    );
};