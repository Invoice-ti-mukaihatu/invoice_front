import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // ログイン情報を送信し、レスポンスを受け取る
      const response = await axios.post("/login", { email, password });
      // ログインボタンがクリックされたときの処理
      navigate("/menu");
      // 受け取ったトークンをコンソールに表示
      console.log("トークン: ", response.data.token);
    } catch (error) {
      // エラーハンドリング：ログインエラー時の処理
      console.error("ログインエラー:", error);
    }
  };

  return (
    <Container fixed>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          - ログイン -
        </Typography>

        <Grid item xs={9.5}>
          <Grid
            mt={10}
            container
            padding={"10% 5% 10% 5%"}
            sx={{
              backgroundColor: "F1F1F4",
              border: "D8D8DB",
              borderRadius: "10%",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="メールアドレス"
                  id="outlined-size-normal"
                  placeholder="test@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="パスワード"
                  id="outlined-size-normal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} mt={5}>
                <Button color="success" fullWidth variant="contained" onClick={handleLogin}>
                  ログイン
                </Button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
