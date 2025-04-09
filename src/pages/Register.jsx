import { useEffect, useState } from "react";

import {
  CardMedia,
  Typography,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
  Link,
  Grid2,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../../GlobalProvider";
import { BASE_URL } from "../constants";
import { tournaments } from "../data/tournaments";
import CustomButton from "../components/CustomButton";
import MUIDatePicker from "../components/MUIDatePicker";
import dayjs from "dayjs";
import { message } from "antd";
import CustomAlert from "../components/CustomAlert";

const Register = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const { loading, setLoading } = useGlobalContext();

  const [showPassword, setShowPassword] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: dayjs("2022-04-17"),
    phoneNumber: "",
    secondName: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDateChange = (newValue) => {
    setForm({
      ...form,
      dateOfBirth: newValue,
    });
  };

  const handleOpenAlert = (message, severity) => {
    setAlert({ open: true, message: message, severity: severity });
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: "", severity: "" });
  };

  // const validateForm = () => {
  //   const { fullName, email, password, confirmPassword } = form;
  //   if (!fullName || !email || !password || !confirmPassword) {
  //     setInfo({
  //       isError: true,
  //       message: "Please fill in all fields.",
  //     });
  //     return false;
  //   }
  //   if (password !== confirmPassword) {
  //     setInfo({
  //       isError: true,
  //       message: "Please fill in all fields.",
  //     });
  //     return false;
  //   }
  //   return true;
  // };

  const handleRegister = async () => {
    setLoading(true);
    const body = {
      firstName: form.firstName,
      lastName: form.lastName,
      secondName: form.secondName,
      email: form.email,
      passwordHash: form.password,
      dateOfBirth: form.dateOfBirth,
      phoneNumber: form.phoneNumber,
      gender: "",
    };
    try {
      const response = await axios.post(`${BASE_URL}/Auth/register`, body);
      if (response.status === 200) {
        navigate("/login", {
          state: {
            open: true,
            message: "Create account successfully",
            severity: "success",
          },
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleRegister();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [form]);

  return (
    <div style={{}}>
      <CustomAlert
        message={alert.message}
        severity={alert.severity}
        handleCloseAlert={handleCloseAlert}
      />
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
          <Grid2 container gap={5}>
            <Grid2 sx={{}}>
              <CardMedia
                component={"img"}
                src={"/src/assets/login.jpg"}
                sx={{ width: "470px", borderRadius: "15px", height: "100%" }}
              />
            </Grid2>
            <Grid2
              sx={{
                width: "500px",
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
                  Please register to continue
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
                <div className="name" style={{ display: "flex", gap: "10px" }}>
                  <TextField
                    id=""
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    name="lastName"
                  />
                  <TextField
                    id=""
                    label="Second Name"
                    placeholder="Enter your second name"
                    value={form.secondName}
                    onChange={handleInputChange}
                    fullWidth
                    name="secondName"
                  />
                  <TextField
                    id=""
                    label="First Name"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    name="firstName"
                  />
                </div>
                <MUIDatePicker
                  value={form.dateOfBirth}
                  onChange={handleDateChange}
                />
                <TextField
                  id=""
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  value={form.phoneNumber}
                  onChange={handleInputChange}
                  fullWidth
                  name="phoneNumber"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">+84</InputAdornment>
                      ),
                    },
                  }}
                />
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
                <TextField
                  id=""
                  label="Re-enter Password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleInputChange}
                  fullWidth
                  name="confirmPassword"
                />
                <div className="">
                  <CustomButton
                    title={"Login"}
                    width={"100%"}
                    padding={"10px 20px"}
                    handleClick={handleRegister}
                    loading={loading}
                    loadingState={"Registering..."}
                  />
                  <Typography
                    variant="body1"
                    color="initial"
                    fontSize={16}
                    textAlign={"center"}
                    sx={{ marginTop: "15px" }}
                    // fontFamily={fontFamily.msr}
                  >
                    Already have an account?{" "}
                    <a
                      href="/login"
                      sx={{
                        cursor: "pointer",
                        // fontFamily: fontFamily.msr,
                        fontWeight: 600,
                      }}
                    >
                      Sign in now!
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

export default Register;
