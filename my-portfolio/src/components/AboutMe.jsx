// import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactMe from "./ContactMe";
import kaidublin from "../assets/kaidublincropped.png";

const AboutMe = () => {
  return (
    <div
      style={{
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
            maxHeight: "30vh",
            md: "20vh",
            xs: "20vh",
            borderRadius: "60px",
            marginTop: "20px",
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
            variant="h5"
            sx={{
              color: "#ffffff",
              textAlign: { xs: "center", sm: "center", md: "center" },
              fontWeight: "bold",
              fontFamily:
                "'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
            }}
          >
            About
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContactMe />
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
