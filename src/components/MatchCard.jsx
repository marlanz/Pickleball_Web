import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { Card } from "@mui/material";
import CustomButton from "./CustomButton";
import { getRoomOwner, getVenuesById } from "../data/matches";
import dayjs from "dayjs";
import { matchFormat, matchStatus } from "../constants";
const MatchCard = ({ data }) => {
  const [room, setRoom] = useState({ owner: "", venue: "" });

  const fetchRoomOwner = async () => {
    try {
      const response = await getRoomOwner(data.roomOwner);
      setRoom({ ...room, owner: `${response.firstName} ${response.lastName}` });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchVenueName = async () => {
    if (!data.venueId) {
      setRoom((prev) => ({ ...prev, venue: "N/A" }));
      return;
    }

    try {
      const response = await getVenuesById(data.venueId);
      setRoom((prev) => ({
        ...prev,
        venue: response?.name || "N/A",
      }));
    } catch (err) {
      console.error("Failed to fetch venue:", err);
      setRoom((prev) => ({ ...prev, venue: "N/A" }));
    }
  };

  useEffect(() => {
    fetchRoomOwner();
    fetchVenueName();
  }, [data?.roomOwner, data?.venueId]);

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
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            color="#666666"
            fontSize={14}
            sx={{ mt: "2px" }}
          >
            Hosted by {room?.owner}
          </Typography>
        </div>
        <div className="right">
          <div
            className="chip"
            style={{
              backgroundColor: matchStatus[data.status]?.bgColor,
              display: "inline-block",
              padding: "5px 12px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="body1"
              color={matchStatus[data.status]?.color}
              fontSize={13}
              fontWeight={600}
            >
              {matchStatus[data.status]?.name}
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
            {dayjs(data.matchDate).format("DD/MM/YYYY")}
          </Typography>
        </div>
        <div className="schedule" style={{ display: "flex", gap: 8 }}>
          <StarIcon style={{ color: "#666666" }} fontSize="small" />
          <Typography variant="body1" color="#666666" fontSize={14}>
            {matchFormat[data.matchFormat]}
          </Typography>
        </div>
        <div className="schedule" style={{ display: "flex", gap: 8 }}>
          <LocationOnIcon style={{ color: "#666666" }} fontSize="small" />
          <Typography variant="body1" color="#666666" fontSize={14}>
            {!data.venueId ? "Not Available" : room?.venue}
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
