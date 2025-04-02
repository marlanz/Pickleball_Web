import React from "react";
import Header from "../components/Header";
import CardMedia from "@mui/material/CardMedia";
import { tournaments } from "../data/tournaments";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import TournamentDescription from "../components/TournamentDescription";
import RegisteredPlayers from "../components/RegisteredPlayers";
import Referee from "../components/Referee";
import Matches from "../components/Matches";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import CustomChip from "../components/CustomChip";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CustomButton from "../components/CustomButton";
import CustomDivider from "../components/CustomDivider";
import TourMatchCard from "../components/TourMatchCard";
import TournamentList from "../components/TournamentList";

const tabItems = [
  {
    key: "1",
    label: "Tournament Description",
    children: <TournamentDescription />,
    icon: <AppleOutlined />,
  },
  {
    key: "2",
    label: "Registered Players",
    children: <RegisteredPlayers />,
    icon: <AndroidOutlined />,
  },
  {
    key: "3",
    label: "Referees & Sponors",
    children: <Referee />,
    icon: <AndroidOutlined />,
  },
  {
    key: "4",
    label: "Matches",
    children: <Matches />,
    icon: <AndroidOutlined />,
  },
];

const TournamentDetail = () => {
  return (
    <div style={{ position: "relative" }}>
      <CardMedia
        component={"img"}
        src={tournaments[1].imgUrl}
        sx={{ height: "350px", filter: "brightness(0.5)" }}
      />
      <div
        className="body"
        style={{
          padding: "0 80px",
          position: "absolute",
          top: 100,
          width: "1300px",
          // backgroundColor: "red",
        }}
      >
        <div
          className="tour-detail-card"
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
            padding: "40px",
            borderRadius: "15px",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <div
            className="left"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div
              className="header"
              style={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              <a
                href="/tournaments"
                className="back-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "13px" }} />
                <Typography variant="body1" color="#666666" fontSize={13}>
                  Back to Tournaments
                </Typography>
              </a>
              <div
                className="tour-chips"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CustomChip
                  title={"Featured"}
                  bgColor={"rgb(245 158 11)"}
                  color={"white"}
                />
                <CustomChip title={"Registration Open"} />
              </div>
            </div>
            <Typography
              variant="body1"
              color="initial"
              fontSize={36}
              fontWeight={700}
            >
              Summer Slam Championship 2024
            </Typography>
            <div className="tour-info" style={{ display: "flex", gap: "30px" }}>
              <div
                className="startendate"
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <CalendarMonthIcon
                  fontSize="small"
                  style={{ color: "#666666" }}
                />
                <Typography variant="body1" color="#666666">
                  December 5-7, 2024
                </Typography>
              </div>
              <div
                className="location"
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <LocationOnIcon fontSize="small" style={{ color: "#666666" }} />
                <Typography variant="body1" color="#666666">
                  Da Nang Sports Complex
                </Typography>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <EmojiEventsIcon
                  fontSize="small"
                  style={{ color: "#666666" }}
                />
                <Typography variant="body1" color="#666666">
                  1.500.000VND
                </Typography>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <GroupIcon fontSize="small" style={{ color: "#666666" }} />
                <Typography variant="body1" color="#666666">
                  32 participated
                </Typography>
              </div>
            </div>
            <div
              className="tour-chips"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <CustomChip
                title={"Mixed Doubles"}
                bgColor={"rgb(22, 163, 74, 0.1)"}
                color={"rgb(22, 163, 74)"}
              />
              <CustomChip
                title={"All levels"}
                bgColor={"rgb(37, 99, 235, 0.1) "}
                color={"rgb(37 99 235 )"}
              />
              <CustomChip
                title={"Registration Deadline: June 1, 2024"}
                bgColor={"rgb(71, 85, 105,0.1)"}
                color={"rgb(71, 85, 105)"}
              />
            </div>
            <div
              className="profile-pic"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <CardMedia
                component={"img"}
                src={tournaments[1].imgUrl}
                sx={{
                  borderRadius: "100000px",
                  height: "50px",
                  width: "50px",
                }}
              />
              <div className="">
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <Typography variant="body1" color="inherit" fontWeight={600}>
                    California Pickleball Association
                  </Typography>
                  <TaskAltIcon sx={{ color: "#3b82f6", fontSize: "13px" }} />
                </div>
                <Typography variant="body1" color="#666666" fontSize={14}>
                  Organizer
                </Typography>
              </div>
            </div>
          </div>
          <div
            className="right"
            style={{
              borderRadius: "8px",
              border: "2px solid rgb(22, 163, 74, 0.5)",
            }}
          >
            <div
              className="header"
              style={{
                backgroundColor: "rgb(22, 163, 74, 0.1)",
                padding: "20px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                fontSize={18}
                sx={{ mb: "5px" }}
                fontWeight={600}
              >
                Registration
              </Typography>
              <Typography variant="body1" color="#666666">
                Join this tournament
              </Typography>
            </div>
            <div className="body" style={{ padding: "20px" }}>
              <div
                className="fee"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" color="initial">
                  Participation
                </Typography>
                <Typography variant="body1" color="initial" fontWeight={600}>
                  120 Players
                </Typography>
              </div>
              <CustomDivider />
              <div
                className="fee"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" color="initial">
                  Registration Fee
                </Typography>
                <Typography variant="body1" color="initial" fontWeight={600}>
                  $75
                </Typography>
              </div>
              <CustomDivider />
              <div
                className="join-tour"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  color="rgb(245 158 11)"
                  fontSize={14}
                  fontWeight={600}
                >
                  Registration closes on June 1, 2024
                </Typography>
                <CustomButton title={"Join Tournament"} width={"100%"} />
                <Typography
                  variant="body1"
                  color="#666666"
                  fontSize={14}
                  sx={{ width: "320px" }}
                  textAlign={"center"}
                >
                  By registering, you agree to the tournament rules and
                  policies.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="" style={{ paddingBottom: "50px" }}>
          <Tabs
            defaultActiveKey="1"
            items={tabItems}
            tabBarStyle={{ fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
