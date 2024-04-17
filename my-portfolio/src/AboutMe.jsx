import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import kaiImage from "../src/assets/kai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  return (
    <Box
      sx={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: "white",
        padding: "20px",
        borderRadius: "25px",
        backgroundColor: "#1f2937",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
        width: "70vw",
        height: "70vh",
        flexDirection: "column",
      }}
    >
      <img
        src={kaiImage}
        alt="Kai"
        style={{
          height: "190px",
          width: "auto",
          borderRadius: "100px",
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
          sx={{ color: "#52BE80", textAlign: "center" }}
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
          <FontAwesomeIcon icon={faGithub} size="2x" color="#52BE80" />
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#52BE80" />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
