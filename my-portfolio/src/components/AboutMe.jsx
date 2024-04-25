import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AboutMe = () => {
  return (
    <Box
      sx={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: "white",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        width: "auto",
        height: "50vh",
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Having discovered a deep-rooted passion for software development, I have
        used my experience during the Northcoders bootcamp to pivot my career
        into the industry. Coding allows me to harness my innate creativity and
        technical aptitude honed from my music experience to master programming
        languages and software development methodologies. My past work
        experience has given me exceptional people skills, allowing me to
        seamlessly adapt to various settings. I am eager to contribute my
        diverse skill set, enthusiasm and adaptability to a thriving software
        development team.
      </Typography>
    </Box>
  );
};

export default AboutMe;
