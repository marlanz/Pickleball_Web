import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  title,
  padding,
  color,
  bgColor,
  handleClick,
  outlined,
  width,
  fontsize,
  loading,
  loadingState,
  disabled,
}) => {
  return (
    <>
      {loading ? (
        <>
          <Button
            onClick={handleClick}
            sx={{
              textTransform: "none",
              borderRadius: "10px",
              padding: padding ? padding : "8px 12px",
              fontSize: fontsize ? fontsize : "15px",
              fontWeight: 600,
            }}
            loading
            fullWidth
            variant="outlined"
            loadingPosition="start"
          >
            {loadingState}
          </Button>
        </>
      ) : (
        <Button
          onClick={handleClick}
          sx={{
            bgcolor: bgColor ? bgColor : !outlined ? "#16a34a" : "",
            color: color ? color : !outlined ? "white" : "#16a34a",
            border: outlined && "1px solid #16a34a",
            textTransform: "none",
            borderRadius: "10px",
            padding: padding ? padding : "8px 12px",
            fontSize: fontsize ? fontsize : "15px",
            fontWeight: 600,
            width: width ? width : "auto",
          }}
          fullWidth
          disabled={disabled}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
