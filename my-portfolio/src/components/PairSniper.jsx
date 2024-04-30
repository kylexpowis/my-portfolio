import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import kaiImage from "../assets/kai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../../src/styles.css";
import { Avatar } from "@mui/material";

function PairSniper() {
  return (
    <div className="card flex justify-center">
      <Box
        sx={{
          color: "white",
          borderRadius: "35px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          flexDirection: "column",
        }}
        className="h-30 w-[100%] flex justify-center items-center p-5 md:w-[80%] "
      >
    
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Passionate Full Stack Developer, dedicated creator, relentless in
            pursuit of excellence.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default PairSniper;
