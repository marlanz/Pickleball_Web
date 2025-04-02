import React from "react";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Button, useTheme } from "@mui/material";
// import { useTheme } from "@emotion/react";

const url = [
  { name: "Find matches", url: "/matches" },
  { name: "Tournaments", url: "/tournaments" },
  { name: "Rankings", url: "/rankings" },
  { name: "Community", url: "/community" },
  { name: "Referee Zone", url: "/referee" },
];

const Header = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <div className="left" style={{ display: "flex", gap: "60px" }}>
        <div
          className=""
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <div
            className=""
            style={{
              padding: "8px",
              borderRadius: "300000000px",
              backgroundColor: theme.palette.primary.main,
              // width: ''
            }}
          >
            <EmojiEventsIcon fontSize="medium" sx={{ color: "white" }} />
          </div>
          <Typography
            variant="body1"
            color="initial"
            fontSize={24}
            fontWeight={600}
          >
            PicklePlay
          </Typography>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {url.map((item, index) => (
            <a href={item.url} key={index} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                color="initial"
                fontSize={16}
                fontWeight={600}
              >
                {item.name}
              </Typography>
            </a>
          ))}
        </div>
      </div>

      <div className="right" style={{ display: "flex", gap: "15px" }}>
        <Button
          sx={{
            color: "#16a34a",
            border: "1px solid #16a34a",
            textTransform: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Log In
        </Button>
        <Button
          sx={{
            bgcolor: "#16a34a",
            color: "white",
            textTransform: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
