import * as React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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

const EnvelopeIcon = () => {
  return <FontAwesomeIcon icon={faEnvelope} />;
};

const ContactMe = () => {
  return (
    <div
      className="card"
      style={{
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
          
        }}
        className="w-60 p-3"
      >
        <Typography variant="body1">
          Contact me on kylepowis@gmail.com
        </Typography>
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <a
              href="https://github.com/kylexpowis"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#26A69A" />
            </a>
            <a
              href="https://www.linkedin.com/in/kylepowis"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#26A69A" />
            </a>
            <a
              href="mailto:kylepowis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
            </a>
          </Box>
      </Box>
    </div>
  );
};

export default ContactMe;
