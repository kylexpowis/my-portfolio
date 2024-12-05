import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../../src/styles.css";
import { Avatar } from "@mui/material";

import kaibape from "../assets/kaibapeAIxpand.png";

function ProfileCard() {
  return (
    <div className="flex justify-center">
      <Box
        sx={{
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          color: "white",
        }}
        className="h-30 flex p-5"
      >
        <Avatar
          className="card"
          src={kaibape}
          alt="Kai"
          sx={{
            height: "auto",
            width: "15vh",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.8)",
          }}
        />
        <Box
          sx={{
            flexDirection: "column",
            textAlign: "right",
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              marginTop: "120px",
              marginBottom: "5px",
              fontFamily:
                "'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
              fontSize: { xs: "16px", sm: "18px", md: "24px" },
            }}
          >
            Kyle Powis
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
            }}
          >
            Full Stack Developer
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
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
              <FontAwesomeIcon icon={faGithub} size="2x" color="#ffffff" />
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
    </div>
  );
}

export default ProfileCard;
