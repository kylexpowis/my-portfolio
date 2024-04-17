import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FeaturedProjects from "./featuredprojects";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" color="primary" style={{ zIndex: 1100 }}>
        {" "}

        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Featured Projects
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: "5px" }}>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<FeaturedProjects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
