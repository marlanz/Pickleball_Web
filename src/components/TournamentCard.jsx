import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { tournaments } from "../data/tournaments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CustomButton from "./CustomButton";
import PeopleIcon from "@mui/icons-material/People";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CustomChip from "./CustomChip";
import { useNavigate } from "react-router-dom";

const TournamentCard = ({}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/tournaments/1");
    console.log("hello");
  };

  return (
    <Card sx={{ width: "450px", borderRadius: "10px" }}>
      <div className="" style={{ position: "relative" }}>
        <CardMedia
          src={tournaments[0].imgUrl}
          component={"img"}
          sx={{ width: "100%", height: "150px", filter: "brightness(0.7)" }}
        />
        <div className="" style={{ position: "absolute", top: 15, left: 15 }}>
          <CustomChip title={"Registration Open"} />
        </div>
      </div>
      <div className="card-content" style={{ padding: "20px" }}>
        <div
          className="header-tour"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="chip-format" style={{ display: "inline-block" }}>
            <div
              className="format-organizers"
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "10px",
                backgroundColor: "#dcfce7",
              }}
            >
              <PeopleIcon sx={{ color: "#16a34a", fontSize: "13px" }} />
              <Typography
                variant="body1"
                color="#16a34a"
                fontSize={12}
                fontWeight={600}
              >
                Mixed Doubles
              </Typography>
            </div>
          </div>
          <div
            className="right"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <Typography variant="body1" color="#666666" fontSize={13}>
              By California Pickleball Association
            </Typography>
            <TaskAltIcon sx={{ color: "#3b82f6", fontSize: "13px" }} />
          </div>
        </div>
        <Typography
          variant="body1"
          color="initial"
          fontSize={18}
          fontWeight={600}
          sx={{ mt: "15px" }}
        >
          Summer Slam Championship
        </Typography>
        <div
          className="info"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "13px",
          }}
        >
          <div
            className="left"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              className="startendate"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <CalendarMonthIcon
                fontSize="small"
                style={{ color: "#666666" }}
              />
              <Typography variant="body1" color="#666666" fontSize={14}>
                December 5-7, 2024
              </Typography>
            </div>
          </div>
          <div
            className="right"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              className="location"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <LocationOnIcon fontSize="small" style={{ color: "#666666" }} />
              <Typography variant="body1" color="#666666" fontSize={14}>
                Da Nang Sports Complex
              </Typography>
            </div>
          </div>
        </div>
        <div
          className="imp-information"
          style={{
            marginTop: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="left" style={{ display: "inline-block" }}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                backgroundColor: "#F9FAFC",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="body1"
                color="#EF9B1E"
                fontWeight={600}
                fontSize={14}
              >
                Prize pool
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={14}
                fontWeight={600}
              >
                1.500.000VND
              </Typography>
            </div>
          </div>

          <div className="right" style={{ display: "inline-block" }}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                backgroundColor: "#F9FAFC",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="body1"
                color="#3b82f6"
                fontWeight={600}
                fontSize={14}
              >
                Participants
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                fontSize={14}
                fontWeight={600}
              >
                35 players
              </Typography>
            </div>
          </div>
        </div>
        <div
          className="button-group"
          style={{ marginTop: "25px", display: "flex", gap: "15px" }}
        >
          <CustomButton
            title={"Join Tournament"}
            width={"60%"}
            handleClick={handleNavigate}
          />
          <CustomButton title={"Read more"} width={"40%"} outlined={true} />
        </div>
      </div>
    </Card>
  );
};

export default TournamentCard;
