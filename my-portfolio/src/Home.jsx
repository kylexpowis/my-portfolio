import React from "react";
import Box from "@mui/material/Box";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <AboutMe />
    </Box>
  );
}

export default Home;
