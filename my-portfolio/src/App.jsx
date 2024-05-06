import React, { useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import FeaturedProjects from "./components/featuredprojects";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Link as Scroll } from "react-scroll";
import AboutMe from "./components/AboutMe";
import PairSniper from "./components/PairSniper";
import kylepowiscv from "/KYLEPOWISCV2024May.pdf";

function App() {
  const location = useLocation();
  const scrollRef = useRef(null);

  const handleHomeClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar
          position="fixed"
          color="default"
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
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
                to="/"
                component={Link}
                onClick={handleHomeClick}
                sx={{ color: "#26A69A" }}
              >
                Home
              </Button>
              {location.pathname !== "/PairSniper" && (
                <>
                  <Button
                    color="inherit"
                    sx={{ color: "#26A69A", justifyContent: "flex-end" }}
                  >
                    <Scroll
                      to="aboutme"
                      href="/about"
                      smooth={true}
                      duration={800}
                    >
                      About
                    </Scroll>
                  </Button>
                  <Button
                    color="inherit"
                    sx={{ color: "#26A69A", justifyContent: "flex-end" }}
                  >
                    <Scroll
                      to="FeaturedProjects"
                      href="/projects"
                      smooth={true}
                      duration={800}
                    >
                      Projects
                    </Scroll>
                  </Button>
                </>
              )}
              <Button
                color="inherit"
                sx={{ color: "#26A69A" }}
                href={kylepowiscv}
                rel="noopener noreferrer"
                target="_blank"
              >
                CV
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <div className="background-gradient" />
        <div ref={scrollRef} style={{ paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<FeaturedProjects />} />
            <Route path="/PairSniper" element={<PairSniper />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
