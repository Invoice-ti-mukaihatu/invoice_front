import './Login.css';
import React, { useState } from "react";
import { User } from "../models/User";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


// export const Login = () => {

// interface LoginProps {
//     onSubmit: (mail: string, password: string) => void;
// }

// export const Login: React.FC<LoginProps> = ({ onSubmit }) => {
export const Login: React.FC = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // onSubmit(mail, password);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>-ログイン-</h1>
                <input type="email" value={mail} placeholder="メールアドレスを入力" onChange={(e) => setMail(e.target.value)} />
                <br />
                <input type="password" value={password} placeholder="パスワードを入力" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">ログイン</button>
            </form>
            <label>
                登録まだの方はこちら
                <Link to="/CreateUser">
                    <button className='createUser'>新規登録</button>
                </Link>
            </label>
        </div>
    );
};

// interface LoginProps {
//     onSubmit: (email: string, password: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ onSubmit }) => {
//     const [mail, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         onSubmit(mail, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1>ログイン</h1>
//             <label>
//                 メールアドレス
//                 <input type="email" value={mail} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <label>
//                 パスワード
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <button type="submit">ログイン</button>
//         </form>
//     );
// };

// export default Login;