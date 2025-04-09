import React, { useEffect, useState } from "react";

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

import { useGlobalContext } from "../../GlobalProvider";
import { rolesEnums } from "../constants";
import SponorModal from "../components/SponorModal";
import PlayerModal from "../components/PlayerModal";
import LogoutIcon from "@mui/icons-material/Logout";

const PickRole = () => {
  const { login, user, loading, logout } = useGlobalContext();

  const [role, setRole] = useState("");

  const [open, setOpen] = useState({
    playerModal: false,
    sponorModal: false,
  });

  const handleToggleRole = (role) => {
    setRole(role);
  };

  const handleOpenModal = () => {
    if (role === rolesEnums.PLAYER) {
      setOpen({ ...open, playerModal: true });
    } else {
      setOpen({ ...open, sponorModal: true });
    }
  };

  const handleCloseModal = () => {
    setOpen({ playerModal: false, sponorModal: false });
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
            <Grid2
              sx={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button startIcon={<LogoutIcon />} onClick={() => logout()}>
                Logout
              </Button>
              <div className="" style={{ marginBottom: "30px" }}>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={32}
                  sx={{ display: "flex", gap: 1 }}
                  // fontFamily={fontFamily.msr}
                >
                  Welcome to
                  <Typography
                    variant="body1"
                    color="#16a34a"
                    fontWeight={700}
                    fontSize={32}
                    // fontFamily={fontFamily.msr}
                  >
                    PicklePlay
                  </Typography>
                  <Typography variant="body1" color="initial" fontSize={32}>
                    , {`${user.lastName} ${user.secondName} ${user.firstName}`}
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  color="#666666"
                  textAlign={"center"}
                  fontSize={17}
                >
                  It seems like your first time joining, please pick a role to
                  continue
                </Typography>
              </div>
              <div
                className="selection"
                style={{ display: "flex", gap: "50px", marginBottom: "30px" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    padding: "100px",
                    borderRadius: "10px",
                    bgcolor: role === rolesEnums.PLAYER && "rgb(22, 163, 74)",
                    color: role === rolesEnums.PLAYER && "white",
                    fontWeight: role === rolesEnums.PLAYER && 600,
                  }}
                  onClick={() => handleToggleRole(rolesEnums.PLAYER)}
                >
                  Player
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    padding: "100px",
                    borderRadius: "10px",
                    bgcolor: role === rolesEnums.SPONNOR && "rgb(22, 163, 74)",
                    color: role === rolesEnums.SPONNOR && "white",
                    fontWeight: role === rolesEnums.SPONNOR && 600,
                  }}
                  onClick={() => handleToggleRole(rolesEnums.SPONNOR)}
                >
                  Sponor
                </Button>
              </div>
              <Button
                sx={{
                  textTransform: "none",
                  p: "10px 25px",
                  width: "100%",
                  borderRadius: "10px",
                  bgcolor: role && "rgb(22, 163, 74)",
                  color: role && "white",
                  fontWeight: 600,
                  fontSize: 16,
                }}
                variant={!role && "outlined"}
                disabled={!role}
                onClick={() => handleOpenModal()}
              >
                Choose Role
              </Button>
            </Grid2>
          </Grid2>
        </div>
      </div>
      <SponorModal open={open.sponorModal} handleClose={handleCloseModal} />
      <PlayerModal open={open.playerModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default PickRole;
