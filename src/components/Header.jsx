import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Button, CardMedia, IconButton, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../GlobalProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomAlert from "./CustomAlert";
// import { useTheme } from "@emotion/react";

const url = [
  { name: "Find matches", url: "/matches" },
  { name: "Tournaments", url: "/tournaments" },
  { name: "Rankings", url: "/rankings" },
  { name: "Community", url: "/community" },
  { name: "Referee Zone", url: "/referee" },
];

const Header = () => {
  const { isLogged, user, logout } = useGlobalContext();

  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleOpenAlert = (message, severity) => {
    setAlert({ ...alert, open: true, message: message, severity: severity });
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: "", severity: "" });
  };

  useEffect(() => {
    if (location.state?.open) {
      handleOpenAlert(location.state?.message, location.state?.severity);
    }
  }, [location.state]);

  return (
    <>
      <CustomAlert
        message={alert.message}
        handleCloseAlert={handleCloseAlert}
        severity={alert.severity}
        openAlert={alert.open}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <div className="left" style={{ display: "flex", gap: "60px" }}>
          <a
            href="/"
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div
              className=""
              style={{
                padding: "8px",
                borderRadius: "300000000px",
                backgroundColor: theme.palette.primary.main,
                // width: ''
              }}
            >
              <EmojiEventsIcon fontSize="medium" sx={{ color: "white" }} />
            </div>
            <Typography
              variant="body1"
              color="initial"
              fontSize={24}
              fontWeight={600}
            >
              PicklePlay
            </Typography>
          </a>
          <div
            className=""
            style={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {url.map((item, index) => (
              <a href={item.url} key={index} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={16}
                  fontWeight={600}
                >
                  {item.name}
                </Typography>
              </a>
            ))}
          </div>
        </div>

        <div className="right">
          {!isLogged ? (
            <div
              className="button-group"
              style={{ display: "flex", gap: "15px" }}
            >
              <Button
                sx={{
                  color: "#16a34a",
                  border: "1px solid #16a34a",
                  textTransform: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button
                sx={{
                  bgcolor: "#16a34a",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <div
              className="greet"
              style={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              <CardMedia
                component={"img"}
                src={user.avatarUrl}
                sx={{ width: "40px", height: "40px", borderRadius: "1000px" }}
              />
              <div className="right">
                <Typography variant="body1" color="initial" fontSize={15}>
                  Hello{" "}
                  <span style={{ fontWeight: 600, color: "#16a34a" }}>
                    Pickleball Lover
                  </span>
                  ,
                </Typography>
                <Typography variant="body1" color="initial" fontWeight={600}>
                  {user.email}
                </Typography>
              </div>
              <IconButton onClick={() => handleLogout()}>
                <LogoutIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
