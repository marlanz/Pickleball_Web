import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomAlert = ({ message, handleCloseAlert, severity, openAlert }) => {
  return (
    <Snackbar
      open={openAlert} // Use 'alert' state to control visibility
      autoHideDuration={3000} // Automatically closes after 3 seconds
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleCloseAlert}
        severity={severity} // Corrected spelling of "success"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
