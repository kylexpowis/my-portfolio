import * as React from "react";
import { Box, Typography } from "@mui/material";
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

const ContactMe = () => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          color: "white",
          borderRadius: "25px",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          animation: `${glow} 2s infinite alternate`,
          width: "40%",
          textAlign: "center",
          padding: "20px",
        }}
        className="p-3"
      >
        <Typography variant="body1">
          Contact me on kylepowis@gmail.com
        </Typography>
      </Box>
    </div>
  );
};

export default ContactMe;
