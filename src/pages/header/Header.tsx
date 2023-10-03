import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import icon from "../../images/user_icon.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";

type Props = {
    title: string,
    logoutButton: boolean,
    userIcon: boolean
}

interface responseData {
    image_url: string;
}

const Header: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const [userImage, setUserImage] = useState<string>("");

    useEffect(() => {
        const userIconGet = async () => {
            axios.get<responseData>(`/users/icon`)
                .then((response) => {
                    const image_url = response.data.image_url;
                    setUserImage(image_url);
                })
                .catch((error) => {
                    console.error("Error icon:", error);
                });
        };
        userIconGet();
    }, []);

    // ログアウトボタンがクリックされたときの処理
    const handleLogout = async () => {
        // クッキーからトークンを削除
        document.cookie = "invoice_token=; max-age=0";
        navigate("/login");
    };

    // 戻るボタンがクリックされたときの処理
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#F8F8FB' }}>
            <Toolbar>
                <img src={logo} alt="ロゴアイコン" style={{ width: "50px", height: "50px", color: '#F8F8FB' }} />
                <IconButton onClick={handleGoBack} style={{ marginLeft: '10px' }}>
                    <ArrowBackIcon />
                    <Typography variant="button" >戻る</Typography>
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', color: '#505050' }}>
                    {props.title}
                </Typography>
                <Toolbar style={{ marginLeft: "auto" }}>
                    {props.logoutButton && (
                        <Button style={{ backgroundColor: '#F8F8FB', color: '#949497', border: '1px solid #949497', marginRight: '30px' }} variant="contained" onClick={handleLogout} >
                            ログアウト
                        </Button>
                    )}
                    {props.userIcon && (
                        <IconButton onClick={() => navigate("/user_edit")} >
                            {userImage ? (
                                <img src={userImage} alt="user icon" style={{ width: "50px", height: "50px" }} />
                            ) : (
                                <img src={icon} alt="default icon" style={{ width: "50px", height: "50px" }} />
                            )}
                        </IconButton>
                    )}
                </Toolbar>
            </Toolbar>
        </AppBar>
    );
};

export default Header;