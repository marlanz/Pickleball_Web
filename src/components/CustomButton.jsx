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
}) => {
  return (
    <Button
      onClick={handleClick}
      sx={{
        bgcolor: bgColor ? bgColor : !outlined ? "#16a34a" : "",
        color: color ? color : !outlined ? "white" : "#16a34a",
        border: outlined && "1px solid #16a34a",
        textTransform: "none",
        borderRadius: "8px",
        padding: padding ? padding : "8px 12px",
        fontSize: "15px",
        fontWeight: 600,
        width: width ? width : "auto",
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
