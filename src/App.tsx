import React, { useState } from "react";

export const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    // User型のインターフェースを定義する
    interface User {
        id: number;
        mail: string;
    }

    const handleButtonClick = () => {
        fetch("http://localhost:3000/api/users") // バックエンドのポート番号を指定
        .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>請求書アプリ</h1>
            <p>フロント</p>
            <a href="https://www.yahoo.co.jp/">YAHOOへ遷移</a><br />

            <button onClick={handleButtonClick}>ユーザー情報を取得</button>
            
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.mail}</li>
                    ))}
                </ul>
            ) : (
                <p>ユーザー情報がありません。</p>
            )}
        </div>
    );
};
