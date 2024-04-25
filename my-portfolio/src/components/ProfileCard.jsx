import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import kaiImage from "../assets/kai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../../src/styles.css";
import { Avatar } from "@mui/material";

function ProfileCard() {
  return (
    <div className="card flex justify-center">
      <Box
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
          color: "white",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          flexDirection: "column",
        }}
        className="h-30 w-[100%] flex justify-center items-center p-5 md:w-[80%] "
      >
        <Avatar
          src={kaiImage}
          alt="Kai"
          style={{
            height: "auto",
            width: "23vh",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.4)",
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
            variant="h6"
            gutterBottom
            sx={{ color: "#26A69A ", textAlign: "center" }}
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
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#26A69A" />
            </a>
            <a
              href="https://www.linkedin.com/in/kylepowis"
              target="_blank"
              rel="noopener noreferrer"
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
