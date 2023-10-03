import React from "react";
import { Container, Box, Button, Grid } from "@mui/material";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Top: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container fixed>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img src={logo} alt="ロゴ画像" style={{ width: "400px", marginBottom: "5rem" }} />
                <Grid container spacing={10} justifyContent="center">
                    <Grid item>
                        <Button onClick={() => navigate("/login")} color="success" variant="contained" sx={{ pt: 1, pb: 1, pl: 3, pr: 3 }}>
                            ログイン
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => navigate("/create")} color="success" variant="outlined" sx={{ pt: 1, pb: 1, pl: 3, pr: 3 }}>
                            新規登録
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default Top;