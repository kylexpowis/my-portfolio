import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactMe from "./ContactMe";
import kaidublin from "../assets/kaidublincropped.png";

const AboutMe = () => {
  return (
    <div
      style={{
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            maxHeight: "40vh",
            md: "20vh",
            xs: "20vh",
            borderRadius: "60px",
          }}
          src={kaidublin}
          alt="Kaidublin"
        />
        <Box
          sx={{
            color: "white",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "auto",
            flexDirection: "column",
            maxWidth: "700px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginBottom: "10px", textAlign: "left", maxHeight: "30vh" }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#26A69A",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "bold",
              }}
            >
              About Me
            </Typography>
            Having discovered a deep-rooted passion for software development, I
            have used my experience during the Northcoders bootcamp to pivot my
            career into the industry. Coding allows me to harness my innate
            creativity and technical aptitude honed from my music production
            experience to master programming languages and software development
            methodologies. My past work experience has given me exceptional
            people skills, allowing me to seamlessly adapt to various settings.
            I am eager to contribute my diverse skill set, enthusiasm and
            adaptability to a thriving software development team.
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <ContactMe />
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
