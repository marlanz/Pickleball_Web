import React, { useEffect, useState } from "react";
import { tournaments } from "../data/tournaments";
import {
  Alert,
  Button,
  CardMedia,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  Typography,
  TextField,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../../GlobalProvider";

const Login = () => {
  const { login, user, loading } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleLogin();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [form]);

  if (user) {
    if (user.roleId) return <Navigate to={"/"} />;
  }

  const handleClose = () => {
    setAlert(false);
  };

  const handleOpen = () => {
    setAlert(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {
    login(form);
  };

  return (
    <div style={{}}>
      <div
        className="login-body"
        style={{
          backgroundColor: "rgb(22, 163, 74, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          className="login-container"
          style={{
            backgroundColor: "white",
            position: "absolute",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <Grid2 container>
            <Grid2 sx={{}}>
              <CardMedia
                component={"img"}
                src={"/src/assets/login.jpg"}
                sx={{ borderRadius: "15px" }}
              />
            </Grid2>
            <Grid2
              sx={{
                width: "450px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="" style={{ marginBottom: "30px" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={24}
                  sx={{ display: "flex", gap: 1 }}
                  // fontFamily={fontFamily.msr}
                >
                  Welcome to
                  <Typography
                    variant="body1"
                    color="#16a34a"
                    fontWeight={700}
                    fontSize={24}
                    // fontFamily={fontFamily.msr}
                  >
                    PicklePlay
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  color="#666666"
                  textAlign={"center"}
                >
                  Please sign in to continue
                </Typography>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <TextField
                  id=""
                  label="Email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleInputChange}
                  fullWidth
                  name="email"
                />
                <TextField
                  id=""
                  label="Password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleInputChange}
                  fullWidth
                  name="password"
                />
                <div className="">
                  <CustomButton
                    title={"Login"}
                    padding={"10px 20px"}
                    handleClick={handleLogin}
                    loading={loading}
                    loadingState={"Signing in..."}
                    width={"100%"}
                  />
                  <Typography
                    variant="body1"
                    color="initial"
                    fontSize={16}
                    textAlign={"center"}
                    sx={{ marginTop: "15px" }}
                    // fontFamily={fontFamily.msr}
                  >
                    Don&apos;t have an account yet?{" "}
                    <a
                      href="/register"
                      sx={{
                        cursor: "pointer",
                        // fontFamily: fontFamily.msr,
                        fontWeight: 600,
                      }}
                    >
                      Register now!
                    </a>
                  </Typography>
                </div>
              </div>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default Login;
