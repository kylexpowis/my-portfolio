import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
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
import { Link as Scroll } from "react-scroll";

function App() {
  const location = useLocation();

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
              {location.pathname !== "/projects" && ( // Only render About button if not on the Projects route
                <Button color="inherit" sx={{ color: "#26A69A" }}>
                  <Scroll
                    to="aboutme"
                    spy={true}
                    href="/about"
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Scroll>
                </Button>
              )}
              <Button
                color="inherit"
                component={Link}
                to="/projects"
                sx={{ color: "#26A69A" }}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                sx={{ color: "#26A69A" }}
              >
                Contact
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
