import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../../src/styles.css";
import psscreenshot from "/pairsniperscreenshot.jpeg";
import Button from "@mui/material/Button";

function PairSniper() {
  return (
    <div className="flex justify-center">
      <Box
        sx={{
          color: "white",
          borderRadius: "35px",
          display: "flex",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
          flexDirection: "column",
        }}
        className="h-30 w-[100%] flex justify-center p-5 md:w-[95%] "
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <img
            style={{
              md: "20vh",
              xs: "20vh",
            }}
            src={psscreenshot}
            alt="pair sniper screenshot"
          />
          <p style={{ textAlign: "center" }}>
            Pair Sniper Demo:{" "}
            {
              <a href="http://www.psdemo.com" target="_blank">
                <Button>Deploying Soon</Button>
              </a>
            }
          </p>
        </Box>
        <Box
          sx={{
            color: "white",
            padding: "20px",
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              maxHeight: "30vh",
              fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#26A69A",
                textAlign: { xs: "left", sm: "left", md: "left" },
                fontWeight: "bold",
              }}
            >
              Project Summary:
            </Typography>
            PairSniper is a customised trading analytics platform that automates
            data aggregation from market exchanges. It visualises real-time data
            to help users focus on strategy and capitalise on opportunities
            efficiently. Designed for scalability, it initially catered to a
            specific client's trading strategy.
          </Typography>
        </Box>
        <Box
          className="rounded-lg border-2 border-gray-700 p-5"
          sx={{
            width: "55vh",
            height: "fit-content",
          }}
        >
          <div>
            <Typography
              variant="h5"
              sx={{
                color: "#26A69A",
                textAlign: { xs: "center", sm: "center", md: "left" },
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
              }}
            >
              Project Status / Outcome:
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}
            >
              <ul>
                <li>
                  Developed a scalable REST API using Express and Node, with TDD
                  practices via the Jest library.
                </li>
                <li>
                  Implemented a self-maintaining database with Supabase that
                  updates in real-time and pulls market data every 60 seconds,
                  using hosted cron functions for maintenance and updates.
                </li>
                <li>
                  Built a responsive front-end with React, MUI, and Tailwind,
                  leveraging Supabase's Real-Time feature for low-latency
                  updates.
                </li>
                <li>
                  This solution significantly reduces manual labor and increases
                  trading opportunities for the private client.
                </li>
              </ul>
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default PairSniper;
