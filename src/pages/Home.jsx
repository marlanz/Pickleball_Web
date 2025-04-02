import React from "react";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TournamentCard from "../components/TournamentCard";
import { tournaments } from "../data/tournaments";
import TournamentList from "../components/TournamentList";
import TextField from "@mui/material/TextField";
import MatchCard from "../components/MatchCard";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="banner"
        style={{
          backgroundColor: "#f0fdf4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 0",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          fontSize={40}
          fontWeight={700}
          textAlign={"center"}
        >
          Connect with{" "}
          <span style={{ color: "#16a34a" }}>Pickleball Players</span> Worldwide
        </Typography>
        <Typography
          variant="body1"
          color="#666666"
          textAlign={"center"}
          fontSize={18}
          sx={{ width: "700px", mt: "5px" }}
        >
          Find matches, join tournaments, and connect with players who share
          your passion for pickleball.
        </Typography>
        <div
          className="button-group"
          style={{ marginTop: "30px", display: "flex", gap: "15px" }}
        >
          <CustomButton title={"Find a match"} padding={"10px 24px"} />
          <CustomButton
            title={"Join a Tournament"}
            padding={"10px 24px"}
            outlined={true}
          />
        </div>
        <div className="featured-tour" style={{ marginTop: "100px" }}>
          <div
            className="header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontSize={24}
              fontWeight={700}
            >
              Featured Tournaments
            </Typography>
            <a
              href="/tournaments"
              style={{
                textDecoration: "none",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="#16a34a" fontSize={16}>
                View All Tournaments
              </Typography>
              <ArrowForwardIosIcon fontSize="xs" sx={{ color: "#16a34a" }} />
            </a>
          </div>
          <div
            className="tour-list"
            style={{ display: "flex", gap: "20px", marginTop: "20px" }}
          >
            {tournaments.slice(0, 3).map((tour, index) => (
              <TournamentCard key={index} tour={tour} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="matches"
        style={{
          backgroundColor: "#f8fafc",
          padding: "50px",
          paddingTop: "60px",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="left">
            <Typography
              variant="body1"
              color="initial"
              fontSize={24}
              fontWeight={700}
            >
              Find a Match
            </Typography>
            <Typography variant="body1" color="#666666" fontSize={16}>
              Browse and join available games in your area
            </Typography>
          </div>
          <div className="right">
            <TextField
              id=""
              label="Find a room"
              placeholder="Find a room"
              sx={{ width: "500px" }}
              // value={}
              // onChange={}
            />
          </div>
        </div>
        <div
          className="match-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // Ensures 3 columns per row
            gap: "30px", // Space between cards
            marginTop: "20px",
          }}
        >
          {tournaments.map((m, index) => (
            <MatchCard />
          ))}
        </div>
        <a
          href="/tournaments"
          style={{
            textDecoration: "none",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Typography variant="body1" color="#16a34a" fontSize={16}>
            View All Tournaments
          </Typography>
          <ArrowForwardIosIcon fontSize="xs" sx={{ color: "#16a34a" }} />
        </a>
      </div>
      <div
        className="rankings"
        style={{
          // backgroundColor: "#f8fafc",
          padding: "50px",
          paddingTop: "60px",
        }}
      >
        <div className="header">
          <Typography
            variant="body1"
            color="initial"
            fontSize={24}
            fontWeight={700}
          >
            Player Rankings
          </Typography>
          <Typography variant="body1" color="#666666" fontSize={16}>
            Top-ranked pickleball players based on tournament performance
          </Typography>
        </div>
        <div className="body">
          <div className="leaderboard"></div>
          <div className="top-performers"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
