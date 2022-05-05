import React, { useState, useContext } from "react";
import { TextField, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// OnClick save New User Name to DB
// OnClick save New Avatar to DB (define dimensions for Avatar pic)

export default function EditProfile() {
  const { user } = useContext(UserContext);
  const [avatar, setAvatar] = useState(user.userProfile.avatar);
  const [userName, setUserName] = useState(user.username);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const token = JSON.parse(localStorage.getItem("userToken"));
  const config = {
    headers: { "x-access-token": token },
  };

  const editUserData = () => {
    axios
      .patch(
        "http://localhost:5000/api/users/me",
        { avatar: avatar, username: userName },
        config
      )
      .then((res) => {
        console.log("New Avatar Url: ", res);
      });
  };

  /*   const editUserName = () => {
    axios
      .patch(
        "http://localhost:5000/api/users/me",
        { username: userName },
        config
      )
      .then((res) => {
        console.log("New UserName: ", res);
      });
  }; */

  return (
    <div>
      <ChevronLeftIcon
        sx={{
          color: "#f2f2f2",
          position: "absolute",
          top: "18px",
          left: "10px",
        }}
        onClick={() => navigate("/profile")}
      />
      <Container
        sx={{
          width: "128px",
          height: "128px",
          bgcolor: "#801336",
          borderRadius: "100%",
          mt: "100px",
        }}
      >
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{
              height: "128px",
              lineHeight: "128px",
              verticalAlign: "middle",
            }}
          >
            <PhotoCamera
              sx={{
                fontSize: "64px",
                color: "#f2f2f2",
                opacity: "0.5",
              }}
            />
          </IconButton>
        </label>
      </Container>
      <br></br>
      <Typography variant="h5">{t("edit-profile-change-name")}</Typography>
      <br></br>
      <TextField
        id="fullWidth"
        label="Name"
        variant="standard"
        size="fullwidth"
        sx={{ mb: "30px" }}
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <br></br>
      <Typography variant="h5">{t("edit-profile-change-avatar")}</Typography>
      <br></br>
      <TextField
        id="fullWidth"
        label="Avatar Url"
        variant="standard"
        size="fullwidth"
        value={avatar}
        onChange={(event) => {
          setAvatar(event.target.value);
        }}
      />
      <br></br>

      <Button
        sx={{ px: 8, py: 1, color: "#f2f2f2", mt: "30px" }}
        variant="outlined"
        size="small"
        onClick={() => {
          editUserData();
        }}
      >
        {t("edit-profil-submit")}
      </Button>
    </div>
  );
}
