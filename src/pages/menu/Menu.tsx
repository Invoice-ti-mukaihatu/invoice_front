import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="- メニュー -" logoutButton={true} userIcon={true} />
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
    </>
  );
};
