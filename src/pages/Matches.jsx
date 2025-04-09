import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomButton from "../components/CustomButton";
import { tournaments } from "../data/tournaments";
import MatchCard from "../components/MatchCard";
import { getPublicMatches } from "../data/matches";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const data = await getPublicMatches();
      setMatches(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

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
          Public Pickleball Matches
        </Typography>
        <Typography
          variant="body1"
          color="#666666"
          textAlign={"center"}
          fontSize={18}
          sx={{ width: "700px", mt: "5px" }}
        >
          Find pickleball matches that you want to join, or you can create a new
          one to compete with your friends
        </Typography>
        <div
          className="button-group"
          style={{ marginTop: "30px", display: "flex", gap: "15px" }}
        >
          <CustomButton
            fontsize={18}
            title={"Join a match"}
            padding={"10px 24px"}
          />
          <CustomButton
            title={"Create new match"}
            padding={"10px 24px"}
            outlined={true}
            bgColor={"white"}
            fontsize={18}
          />
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
          {matches?.map((m, index) => (
            <MatchCard data={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;
