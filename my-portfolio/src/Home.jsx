import React from "react";
import Box from "@mui/material/Box";
import TechStack from "./components/techStack";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/featuredprojects";

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
          flexDirection: { xs: "column", md: "row" },
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
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <Box sx={{ marginTop: "-50px" }}>
            <ProfileCard />
          </Box>
          <Box sx={{ paddingTop: "60px" }}>
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
          height: "100%",
          textAlign: "right",
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <div id="aboutme">
          <AboutMe />
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <div id="FeaturedProjects">
            <FeaturedProjects />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Home;
