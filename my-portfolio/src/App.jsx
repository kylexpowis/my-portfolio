import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FeaturedProjects from "./featuredprojects";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar
          position="fixed"
          color="default"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "0.9rem" }}
            >
              <span style={{ color: "#26A69A" }}>{"<"}</span>
              <span style={{ color: "#26A69A" }}>Kyle </span>
              <span style={{ color: "white" }}>Powis</span>
              <span style={{ color: "#26A69A" }}>/</span>
              <span style={{ color: "#26A69A" }}>{">"}</span>
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{ color: "#26A69A" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/projects"
                sx={{ color: "#26A69A" }}
              >
                Featured Projects
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <div style={{ paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<FeaturedProjects />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
