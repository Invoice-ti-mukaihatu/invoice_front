import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          - メニュー -
        </Typography>

        {/* 後で削除すること！！！ */}
        <Button onClick={() => navigate("/user_edit")}>ユーザー情報の編集</Button>

        <Box sx={{ mt: 5 }}>
          <Button color="success" fullWidth variant="contained" sx={{ mt: 3, mb: 2, p: 2 }}>
            請求書新規作成
          </Button>
          <Button color="success" fullWidth variant="outlined" sx={{ mt: 3, mb: 2, p: 2 }}>
            未発行の請求書一覧
          </Button>
          <Button color="success" fullWidth variant="outlined" sx={{ mt: 3, mb: 2, p: 2 }}>
            発行済の請求書一覧
          </Button>
        </Box>
      </Box>
    </Container>
  );
};