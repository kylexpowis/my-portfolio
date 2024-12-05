import { useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import PairSniper from "./components/PairSniper";
import kylepowiscv from "/KYLEPOWISCV2024May.pdf";
import StolenSociety from "./components/StolenSociety";

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
          style={{ backgroundColor: "rgba(10, 10, 10, 1)" }}
        >
          <Toolbar>
            <Typography>
              <span style={{ color: "#FFFFFF" }}>{"Kyle Powis"}</span>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                to="/"
                component={Link}
                onClick={handleHomeClick}
                sx={{ color: "white" }}
              >
                Home
              </Button>
              {location.pathname !== "/PairSniper" && (
                <>
                  <Button
                    color="inherit"
                    sx={{ color: "white", justifyContent: "flex-end" }}
                  ></Button>
                  <Button
                    color="inherit"
                    sx={{ color: "white", justifyContent: "flex-end" }}
                  ></Button>
                </>
              )}
              <Button
                color="inherit"
                sx={{ color: "white" }}
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
            <Route path="/PairSniper" element={<PairSniper />} />
            <Route path="/Stolensociety" element={<StolenSociety />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
