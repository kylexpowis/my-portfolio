import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.2), 0 0 10px rgba(0, 255, 255, 0.2), 0 0 15px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.2), 0 0 25px rgba(0, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2), 0 0 15px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.2), 0 0 25px rgba(0, 255, 255, 0.2), 0 0 30px rgba(0, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 255, 255, 0.2), 0 0 10px rgba(0, 255, 255, 0.2), 0 0 15px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.2), 0 0 25px rgba(0, 255, 255, 0.2);
  }
`;

function TechStack() {
  return (
    <div className="card">
      <Box
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
          color: "white",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          flexDirection: "column",
          animation: `${glow} 2s infinite alternate`,
        }}
        className='w-80 p-1 md;p-5'
      >
        <Typography variant="h7" sx={{ marginBottom: "10px" }}>
          {" "}
          Tech Stack:{" "}
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
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
    </div>
  );
}

export default TechStack;
