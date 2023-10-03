import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export const UserCreate: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");

  const navigate = useNavigate();

  const handleCreate = async () => {
    // パスワードと確認用パスワードが一致するか確認
    if (password !== confirmPassword) {
      setPasswordMismatchError("*パスワードが一致しません");
      return;
    }

    await axios.post("/create", { email, password, username, name, address })
      .then(() => {
        // 登録成功時の処理
        navigate("/login");
      })
      .catch((error) => {
        // エラーハンドリング：新規登録エラー時の処理
        console.error("新規登録エラー:", error);
      });
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
              <Grid item xs={6}>
                <TextField
                  required
                  label="パスワードの確認"
                  id="outlined-size-normal"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                />
                {/* パスワードが一致しない場合のエラーメッセージ */}
                {passwordMismatchError && (
                  <Typography variant="body2" color="error">
                    {passwordMismatchError}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="ユーザー名"
                  id="outlined-size-normal"
                  type="search"
                  placeholder="ユーザーネーム"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="氏名"
                  id="outlined-size-normal"
                  type="text"
                  placeholder="氏名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="住所"
                  id="outlined-size-normal"
                  type="password"
                  placeholder="住所"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} mt={5}>
                <Button color="success" fullWidth variant="contained" onClick={handleCreate}>
                  新規登録
                </Button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
}; 