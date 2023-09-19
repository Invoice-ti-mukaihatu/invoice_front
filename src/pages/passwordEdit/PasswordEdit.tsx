import * as React from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const PasswordEdit: React.FC = () => {
  const navigate = useNavigate();
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
          - パスワード編集 -
        </Typography>
        <Grid container mt={10}>
          <Grid item xs={2} mt={1}>
            <Button>
              <Typography color={"949497"} onClick={() => navigate("/user_edit")}>
                ユーザー情報の編集
              </Typography>
            </Button>
            <Button>
              <Typography mt={2} borderBottom={1}>
                パスワードの編集
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={9.5}>
            <Grid
              container
              padding={"10% 5% 10% 5%"}
              sx={{
                backgroundColor: "F1F1F4",
                border: "D8D8DB",
                borderRadius: "10%",
              }}
            >
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      label="パスワード"
                      id="outlined-size-normal"
                      type="password"
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
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6} mt={5}>
                    <Button color="success" fullWidth variant="contained">
                      更新
                    </Button>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
