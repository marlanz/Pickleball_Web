import React from "react";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { Card } from "@mui/material";
import CustomButton from "./CustomButton";
const MatchCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "white",
        p: "20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div className="left">
          <Typography
            variant="body1"
            color="initial"
            fontSize={17}
            fontWeight={600}
          >
            Evening Doubles
          </Typography>
          <Typography
            variant="body1"
            color="#666666"
            fontSize={14}
            sx={{ mt: "2px" }}
          >
            Hosted by Alex Chen
          </Typography>
        </div>
        <div className="right">
          <div
            className="chip"
            style={{
              backgroundColor: "#16a34a",
              display: "inline-block",
              padding: "5px 12px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              fontSize={13}
              fontWeight={600}
            >
              3 spots left
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "12px",
        }}
      >
        <div
          className="schedule"
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          <CalendarMonthIcon style={{ color: "#666666" }} fontSize="small" />
          <Typography variant="body1" color="#666666" fontSize={14}>
            Today, 6:00 PM - 8:00 PM
          </Typography>
        </div>
        <div className="schedule" style={{ display: "flex", gap: 8 }}>
          <StarIcon style={{ color: "#666666" }} fontSize="small" />
          <Typography variant="body1" color="#666666" fontSize={14}>
            Skill Level: Intermediate 3.5-4.0
          </Typography>
        </div>
        <div className="schedule" style={{ display: "flex", gap: 8 }}>
          <LocationOnIcon style={{ color: "#666666" }} fontSize="small" />
          <Typography variant="body1" color="#666666" fontSize={14}>
            Sunset Park Courts, Las Vegas
          </Typography>
        </div>
      </div>
      <div className="buton" style={{ marginTop: "20px" }}>
        <CustomButton title={"Join Match"} width={"100%"} />
      </div>
    </Card>
  );
};

export default MatchCard;
