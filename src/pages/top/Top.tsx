import React from "react";
import { Link } from "react-router-dom";
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
                        <Button onClick={() => navigate("/login")} color="success" variant="contained">
                            ログイン
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/create">
                            <Button color="secondary" variant="contained" style={{ backgroundColor: "#F8F8FB", color: "green" }}>
                                新規登録
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Top;