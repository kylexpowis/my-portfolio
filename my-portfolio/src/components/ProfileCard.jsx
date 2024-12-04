// import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../../src/styles.css";
import { Avatar } from "@mui/material";

import kaibape from "../assets/kaibapeAIxpand.png";

function ProfileCard() {
  return (
    <div className="flex justify-center">
      <Box
        width={"30vw"}
        sx={{
          borderRadius: "35px",
          display: "flex",
          flexDirection: "column",
          boxShadow: {
            xs: "0px 2px 4px rgba(0, 0, 0, 0.8)",
            sm: "none",
            md: "none",
          },
          border: "4px solid grey", // Adds a grey border
        }}
        className="h-30 flex p-5"
      >
        <Avatar
          className="card"
          src={kaibape}
          alt="Kai"
          style={{
            height: "auto",
            width: "20vh",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.8)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#ffffff", textAlign: "right", fontWeight: "bold" }}
          >
            Kyle Powis
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "right" }}>
            Full Stack Developer
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <a
              href="https://github.com/kylexpowis"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ marginLeft: "auto" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#ffffff" />
            </a>
            <a
              href="https://www.linkedin.com/in/kylepowis"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#ffffff" />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProfileCard;
