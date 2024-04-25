import React from "react";
import Box from "@mui/material/Box";
import TechStack from "./components/TechStack";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";

function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Box>
            <ProfileCard />
          </Box>
          <Box sx={{ paddingTop: "30px" }}>
            <TechStack />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          height: "100vh",
          textAlign: "right",
        }}
      >
        <div id="aboutme">
          <AboutMe />
        </div>
      </Box>
    </>
  );
}

export default Home;
