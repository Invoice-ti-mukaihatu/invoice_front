import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, IconButton, TextField, Typography } from "@mui/material";
import icon from "../../images/user_icon.png";
import { useNavigate } from "react-router-dom";
import { User, initUser } from "../../models/User";
import axios from "axios";
import Header from "../header/Header";

interface responseData {
  image_url: string;
}

export const UserEdit: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>(initUser);
  const [userImage, setUserImage] = useState<string>("");
  const updateUser = async () => {
    axios
      .put<string>(`/users`, user)
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        navigate("/menu");
      });
  };

  useEffect(() => {
    (async () => {
      const user = await axios.get<User>(`/users/me`);
      setUser(user.data);
    })();
    (async () => {
      axios
        .get<responseData>(`/users/icon`)
        .then((response) => {
          const image_url = response.data.image_url;
          setUserImage(image_url);
        })
        .catch((error) => {
          console.error("Error icon:", error);
        });
    })();
  }, [setUser, setUserImage]);
  return (
    <>
      <Header title="- ユーザー編集 -" logoutButton={true} userIcon={false} />
      <Container fixed>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container mt={10}>
            <Grid item xs={2} mt={1}>
              <Button>
                <Typography borderBottom={1}>ユーザー情報の編集</Typography>
              </Button>
              <Button>
                <Typography mt={2} color={"949497"} onClick={() => navigate("/password_edit")}>
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
                <Grid item xs={2}>
                  <IconButton>
                    {userImage ? (
                      <img
                        src={userImage}
                        alt="user icon"
                        style={{ width: "165px", height: "165px" }}
                      />
                    ) : (
                      <img
                        src={icon}
                        alt="default icon"
                        style={{ width: "165px", height: "165px" }}
                      />
                    )}
                  </IconButton>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}>
                  <Grid container spacing={4}>
                    <Grid item xs={5}>
                      <TextField
                        required
                        label="メールアドレス"
                        id="outlined-size-normal"
                        placeholder="test@example.com"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                      <TextField
                        required
                        label="ユーザー名"
                        id="outlined-size-normal"
                        placeholder="test_user"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={4}>
                      <TextField
                        required
                        label="氏名"
                        id="outlined-size-normal"
                        placeholder="山田 太郎"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={8}>
                      <TextField
                        required
                        label="住所"
                        id="outlined-size-normal"
                        placeholder="東京都千代田区丸の内1-8-3"
                        value={user.address}
                        onChange={(e) => setUser({ ...user, address: e.target.value })}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8} mt={5}>
                      <Button color="success" fullWidth variant="contained" onClick={updateUser}>
                        更新
                      </Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
