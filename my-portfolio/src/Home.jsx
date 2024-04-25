import React from "react";
import Box from "@mui/material/Box";
import TechStack from "./components/TechStack";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        paddingLeft: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          marginRight: "20px",
        }}
      >
        <Box>
          <ProfileCard />
        </Box>
        <Box sx={{ paddingTop: "20px" }}>
          <TechStack />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <AboutMe />
      </Box>
    </Box>
  );
}

export default Home;
