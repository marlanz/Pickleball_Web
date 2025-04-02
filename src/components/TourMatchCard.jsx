import React from "react";
import Typography from "@mui/material/Typography";
import CustomChip from "./CustomChip";
import { CardMedia } from "@mui/material";
import { tournaments } from "../data/tournaments";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const TourMatchCard = () => {
  return (
    <div style={{ borderRadius: "10px", border: "2px solid #666666" }}>
      <div
        className="header"
        style={{
          padding: "20px",
          backgroundColor: "#3b82f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          color="white"
          fontSize={20}
          fontWeight={600}
        >
          Pickleball Champion
        </Typography>
        <CustomChip title={"Completed"} />
      </div>
      <div className="body" style={{ padding: "20px" }}>
        <div
          className="vs"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <Typography variant="body1" color="#666666" fontSize={13}>
            Player 1
          </Typography>
          <Typography variant="body1" color="#666666" fontSize={13}>
            VS
          </Typography>
          <Typography variant="body1" color="#666666" fontSize={13}>
            Player 3
          </Typography>
        </div>
        <div
          className="result"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            backgroundColor: "rgb(71, 85, 105,0.1)",
            borderRadius: "10px",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <div
            className="left"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <CardMedia
              component={"img"}
              src={tournaments[0].imgUrl}
              sx={{ borderRadius: "10000px", width: "50px", height: "50px" }}
            />
            <Typography variant="body1" color="initial" fontWeight={600}>
              Player 1
            </Typography>
          </div>
          <div
            className="middle"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontWeight={600}
              fontSize={18}
            >
              11-8, 11-9
            </Typography>
            <Typography variant="body1" color="#666666">
              Final Score
            </Typography>
          </div>
          <div
            className="right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <CardMedia
              component={"img"}
              src={tournaments[0].imgUrl}
              sx={{ borderRadius: "10000px", width: "50px", height: "50px" }}
            />
            <Typography variant="body1" color="initial" fontWeight={600}>
              Player 1
            </Typography>
          </div>
        </div>
        <div
          className="tour-info"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <div
            className="left"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div
              className="datetiem"
              style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
            >
              <CalendarMonthOutlinedIcon
                sx={{
                  fontSize: "18px",
                  padding: "8px",
                  borderRadius: "8px",
                  bgcolor: "rgb(71, 85, 105,0.1)",
                  backgroundColor: "rgb(22, 163, 74, 0.1)",
                  color: "rgb(22, 163, 74)",
                }}
              />
              <div className="">
                <Typography variant="body1" color="#666666" fontSize={14}>
                  Date & Time
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={15}
                  color="initial"
                  fontWeight={600}
                >
                  2024-06-15 at 09:00:00
                </Typography>
              </div>
            </div>
            <div
              className="datetiem"
              style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
            >
              <PersonOutlineOutlinedIcon
                sx={{
                  fontSize: "18px",
                  padding: "8px",
                  borderRadius: "8px",
                  bgcolor: "rgb(71, 85, 105,0.1)",
                }}
              />
              <div className="">
                <Typography variant="body1" color="#666666" fontSize={14}>
                  Referee
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={15}
                  color="initial"
                  fontWeight={600}
                >
                  James Wilson
                </Typography>
              </div>
            </div>
          </div>
          <div
            className="right"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div
              className="datetiem"
              style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
            >
              <CalendarMonthOutlinedIcon
                sx={{
                  fontSize: "18px",
                  padding: "8px",
                  borderRadius: "8px",
                  bgcolor: "rgb(71, 85, 105,0.1)",
                }}
              />
              <div className="">
                <Typography variant="body1" color="#666666" fontSize={14}>
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontWeight={600}
                  fontSize={15}
                >
                  Court 1, Phoenix Sports Complex
                </Typography>
              </div>
            </div>
            <div
              className="datetiem"
              style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
            >
              <PersonOutlineOutlinedIcon
                sx={{
                  fontSize: "18px",
                  padding: "8px",
                  borderRadius: "8px",
                  bgcolor: "rgb(71, 85, 105,0.1)",
                }}
              />
              <div className="">
                <Typography variant="body1" color="#666666" fontSize={14}>
                  Category
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontSize={15}
                  fontWeight={600}
                >
                  Men's Singles
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourMatchCard;
