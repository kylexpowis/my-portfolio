import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TechStack() {
  return (
    <Box
      sx={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: "white",
        padding: "20px",
        borderRadius: "25px",
        backgroundColor: "#1f2937",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
        width: "30vw",
        height: "10vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h7" sx={{ marginBottom: "10px" }}>
        {" "}
        Tech Stack:{" "}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <img
          style={{
            height: "auto",
            width: "15%",
            maxWidth: "100%",
            margin: "5px",
          }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />

        <img
          style={{
            height: "auto",
            width: "15%",
            maxWidth: "100%",
            margin: "5px",
          }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />

        <img
          style={{
            height: "auto",
            width: "15%",
            maxWidth: "100%",
            margin: "5px",
          }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        />

        <img
          style={{
            height: "auto",
            width: "15%",
            maxWidth: "100%",
            margin: "5px",
          }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        />

        <img
          style={{
            height: "auto",
            width: "15%",
            maxWidth: "100%",
            margin: "5px",
          }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
        />
      </Box>
    </Box>
  );
}

export default TechStack;
