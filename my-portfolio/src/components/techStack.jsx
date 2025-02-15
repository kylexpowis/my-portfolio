// import * as React from "react";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(216, 216, 216, 0.2), 0 0 10px rgba(216, 216, 216, 0.2), 0 0 15px rgba(216, 216, 216, 0.2), 0 0 20px rgba(216, 216, 216, 0.2), 0 0 25px rgba(216, 216, 216, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(216, 216, 216, 0.2), 0 0 15px rgba(216, 216, 216, 0.2), 0 0 20px rgba(216, 216, 216, 0.2), 0 0 25px rgba(216, 216, 216, 0.2), 0 0 30px rgba(216, 216, 216, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(216, 216, 216, 0.2), 0 0 10px rgba(216, 216, 216, 0.2), 0 0 15px rgba(216, 216, 216, 0.2), 0 0 20px rgba(216, 216, 216, 0.2), 0 0 25px rgba(216, 216, 216, 0.2);
  }
`;

function TechStack() {
  return (
    <div className="card">
      <Box
        sx={{
          color: "white",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          flexDirection: "column",
          animation: `${glow} 2s infinite alternate`,
        }}
        className="w-60 p-3"
      >
        {/* <Typography variant="h7" sx={{ marginBottom: "2px" }}>
          {" "}
          Tech Stack:{" "}
        </Typography> */}
        <Box
          sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "center" }}
        >
          <img
            className="card"
            style={{
              height: "auto",
              width: "15%",
              maxWidth: "100%",
              margin: "5px",
            }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />

          <img
            className="card"
            style={{
              height: "auto",
              width: "15%",
              maxWidth: "100%",
              margin: "5px",
            }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />

          <img
            className="card"
            style={{
              height: "auto",
              width: "15%",
              maxWidth: "100%",
              margin: "5px",
            }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          />

          <img
            className="card"
            style={{
              height: "auto",
              width: "15%",
              maxWidth: "100%",
              margin: "5px",
            }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          />

          <img
            className="card"
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
