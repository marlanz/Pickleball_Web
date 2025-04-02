import React from "react";
import Typography from "@mui/material/Typography";

const Referee = () => {
  return (
    <div
      style={{
        padding: "30px",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        sx={{ mb: "5px" }}
        fontSize={20}
        fontWeight={600}
      >
        Tournament Referees
      </Typography>

      <Typography variant="body1" color="#666666" fontSize={16}>
        Certified officials who will be overseeing matches
      </Typography>
    </div>
  );
};

export default Referee;
