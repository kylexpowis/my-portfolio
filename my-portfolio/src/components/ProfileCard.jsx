import * as React from "react";
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
        width={"100vw"}
        sx={{
          color: "white",
          borderRadius: "35px",
          display: "flex",
          alignItems: "center",

          flexDirection: "column",
          boxShadow: {
            xs: "0px 2px 4px rgba(0, 0, 0, 0.8)",
            sm: "none",
            md: "none",
          },
        }}
        className="h-30 flex justify-center items-center p-5 "
      >
        <Avatar
          className="card"
          src={kaibape}
          alt="Kai"
          style={{
            height: "auto",
            width: "30vh",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.8)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#26A69A ", textAlign: "center", fontWeight: "bold" }}
          >
            Kyle Powis
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Passionate Full Stack Developer, dedicated creator, relentless in
            pursuit of excellence.
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
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#26A69A" />
            </a>
            <a
              href="https://www.linkedin.com/in/kylepowis"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#26A69A" />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProfileCard;
