import React from "react";
import Typography from "@mui/material/Typography";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { CardMedia } from "@mui/material";
import { tournaments } from "../data/tournaments";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const rules = [
  "USAPA rules apply to all matches",
  "Match format: Best 2 of 3 games to 11 points, win by 2",
  "Double elimination format for all divisions",
  "Players must check in 30 minutes before scheduled match time",
  "Tournament director has final say on all disputes",
];
const TournamentDescription = () => {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between",
        // width: "1300px",
        gap: 20,
      }}
    >
      <div className="left" style={{}}>
        <div
          className=""
          style={{
            padding: "30px",
            width: "750px",
            // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            border: "1px solid #666666",
          }}
        >
          <div
            className="about-tour"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <DescriptionOutlinedIcon sx={{ fontSize: "18px" }} />
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              fontWeight={600}
            >
              About This Tournament
            </Typography>
          </div>
          <Typography
            variant="body1"
            color="#666666"
            fontSize={15}
            sx={{ mt: "12px" }}
          >
            Join us for the biggest pickleball event of the summer! The Summer
            Slam Championship brings together players of all skill levels for an
            exciting weekend of competition, camaraderie, and fun. With multiple
            divisions and formats, there's something for everyone.
          </Typography>
        </div>
        <div
          className=""
          style={{
            padding: "30px",
            // width: "800px",
            // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            marginTop: "30px",
            border: "1px solid #666666",
          }}
        >
          <div
            className="about-tour"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <DescriptionOutlinedIcon sx={{ fontSize: "18px" }} />
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              fontWeight={600}
            >
              Tournament Rules
            </Typography>
          </div>
          <div
            className="rules"
            style={{
              marginTop: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {rules.map((rule) => (
              <div
                className=""
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <CheckCircleOutlineOutlinedIcon sx={{ fontSize: "15px" }} />
                <Typography variant="body1" color="#666666" fontSize={15}>
                  {rule}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <div
          className="venue-info"
          style={{
            padding: "30px",
            width: "400px",
            // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
            border: "1px solid #666666",
            borderRadius: "10px",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <LocationOnOutlinedIcon sx={{ fontSize: "18px" }} />
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              fontWeight={600}
            >
              Venue Information
            </Typography>
          </div>
          <CardMedia
            src={tournaments[0].imgUrl}
            component={"img"}
            sx={{ mt: "12px", borderRadius: "10px", height: "200px" }}
          />
          <div className="location" style={{ marginTop: "12px" }}>
            <Typography variant="body1" color="initial" fontWeight={600}>
              Phoenix Sports Complex
            </Typography>
            <Typography
              variant="body1"
              color="#666666"
              fontSize={14}
              sx={{ mt: "5px" }}
            >
              1234 Sports Way, Phoenix, AZ 85001
            </Typography>
          </div>
        </div>
        <div
          className="venue-info"
          style={{
            padding: "30px",
            width: "400px",
            // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
            border: "1px solid #666666",
            borderRadius: "10px",
            marginTop: "30px",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <HelpOutlineOutlinedIcon sx={{ fontSize: "18px" }} />
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              fontWeight={600}
            >
              Need Help?
            </Typography>
          </div>

          <Typography
            variant="body1"
            color="initial"
            fontSize={14}
            sx={{ mt: "12px" }}
          >
            If you have any questions about this tournament, please contact the
            organizer directly.
          </Typography>

          <div
            className="profile-pic"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "12px",
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
                calipickleballorg@gmail.com
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDescription;
