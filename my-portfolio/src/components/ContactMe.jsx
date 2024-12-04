// import * as React from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// const EnvelopeIcon = () => {
//   return <FontAwesomeIcon icon={faEnvelope} />;
// };

const ContactMe = () => {
  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          color: "white",
          borderRadius: "25px",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          width: "50%",
          maxWidth: "300px",
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
            <FontAwesomeIcon icon={faGithub} size="2x" color="#fffff" />
          </a>
          <a
            href="https://www.linkedin.com/in/kylepowis"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#ffffff" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
