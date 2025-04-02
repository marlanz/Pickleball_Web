import { Typography } from "@mui/material";
import React from "react";

const CustomChip = ({ title, bgColor, color }) => {
  return (
    <div
      className="chip"
      style={{
        backgroundColor: bgColor ? bgColor : "#16a34a",
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="body1"
        color={color ? color : "white"}
        fontSize={12}
        fontWeight={600}
      >
        {title}
      </Typography>
    </div>
  );
};

export default CustomChip;
