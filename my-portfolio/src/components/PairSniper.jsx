import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../src/styles.css";
import psscreenshot from "/pairsniperhomescreen.png";
import scvscreenshot from "/singlecoinviewscreen.png";
import Button from "@mui/material/Button";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function PairSniper() {
  const [currentImage, setCurrentImage] = React.useState(psscreenshot);

  const handlePrevClick = () => {
    setCurrentImage(psscreenshot);
  };

  const handleNextClick = () => {
    setCurrentImage(scvscreenshot);
  };

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
        className="justify-center p-5 md:w-[95%]"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
            alignItems: "center",
          }}
        >
          <img
            style={{
              md: "20vh",
              xs: "20vh",
            }}
            src={currentImage}
            alt="screenshot"
          />
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={handlePrevClick}
              style={{ marginRight: "25px", marginTop: "20px " }}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={handleNextClick}
              style={{ marginLeft: "25px", marginTop: "20px" }}
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Pair Sniper Demo Link:{" "}
            {
              <a href="https://fe-demo-data.vercel.app/" target="_blank">
                <Button>CLICK HERE</Button>
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
              fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#26A69A",
                textAlign: { xs: "center", sm: "center", md: "left" },
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
              }}
            >
              Project Summary
            </Typography>
            PairSniper is a private customised trading analytics platform that automates
            data aggregation from market exchanges. It visualises real-time data
            to help users focus on strategy and capitalise on opportunities
            efficiently. Designed for scalability, it initially catered to a
            specific client's trading strategy.
          </Typography>
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
              fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#26A69A",
                textAlign: { xs: "center", sm: "center", md: "left" },
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
              }}
            >
              Role
            </Typography>
            Project Manager & Full Stack Developer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          {/* Box for Project Status / Outcome */}
          <Box
            className="rounded-lg border-2 border-gray-700 p-5"
            sx={{
              width: { xs: "100%", sm: "100%", md: "49%" },
              display: "flex",
              height: "auto",
              flexDirection: "column",
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
                Project Status / Outcome
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                <ul>
                  <li>
                    Developed a scalable REST API using Express and Node, with
                    TDD practices via the Jest library.
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
                    This solution significantly reduces manual labor and
                    increases trading opportunities for the private client.
                  </li>
                </ul>
              </Typography>
            </div>
          </Box>

          {/* Box for Languages */}
          <Box
            className="rounded-lg border-2 border-gray-700 p-5"
            sx={{
              width: { xs: "100%", sm: "100%", md: "49%" },
              display: "flex",
              height: "auto",
              flexDirection: "column",
              marginLeft: { xs: "0", sm: "0", md: "2%" },
              marginTop: { xs: "20px", sm: "20px", md: "0" },
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
                Languages
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                Javascript, SQL
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#26A69A",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                }}
              >
                Frameworks
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                    textAlign: { xs: "center", sm: "center", md: "left" },
                  }}
                >
                  React, Tailwind, Express, Node, Jest
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#26A69A",
                    textAlign: { xs: "center", sm: "center", md: "left" },
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  Tools
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                  }}
                >
                  Supabase, Vercel, Postgres, Render, Figma, Excalidraw,
                  Photoshop, Todoist
                </Typography>
              </Typography>
            </div>
          </Box>
        </Box>
        {/* this box surrounds approac and problem*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            marginTop: "20px",
          }}
        >
          <Box
            className="rounded-lg border-2 border-gray-700 p-5"
            sx={{
              width: { xs: "100%", sm: "100%", md: "49%" },
              display: "flex",
              height: "auto",
              flexDirection: "column",
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
                Approach
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" } }}
              >
                <ul>
                  <li>
                    Implemented Agile methodologies and utilised a Kanban system
                    for efficient task tracking.
                  </li>
                  <li>
                    Developed wireframes using Figma/Excalidraw, refining UI and
                    schema as needed.
                  </li>
                  <li>
                    Initially used Node.js, Express, PostgreSQL, React,
                    ElephantSQL, and Firebase, later transitioning to Supabase
                    for enhanced scalability.
                  </li>
                  <li>
                    Started with Binance API, later migrated to CoinMarketCap
                    API for improved scalability, reliance, and increased data
                    coverage.
                  </li>
                  <li>
                    Tested system's handling of complex datasets using live API
                    data by building a seed generation function.
                  </li>
                </ul>
              </Typography>
            </div>
          </Box>
          {/* Box for Problems and Issues*/}
          <Box
            className="rounded-lg border-2 border-gray-700 p-5"
            sx={{
              width: { xs: "100%", sm: "100%", md: "49%" },
              display: "flex",
              height: "auto",
              flexDirection: "column",
              marginLeft: { xs: "0", sm: "0", md: "2%" },
              marginTop: { xs: "20px", sm: "20px", md: "0" },
            }}
          >
            <div>
              <Typography
                variant="h5"
                sx={{
                  color: "#A80101",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                }}
              >
                Problem:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                The client had a unique trading strategy which proved
                successful. However, it was labor-intensive and prone to errors,
                leading to missed trading opportunities.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#26A69A",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                }}
              >
                Solution:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                There was a need for an automated system that could handle
                complex data-handling and ensure fast, accurate data retrieval
                for effective trading strategy execution.
              </Typography>
            </div>
          </Box>
        </Box>

        <Box
          className="rounded-lg border-2 border-gray-700 p-5"
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" },
            display: "flex",
            height: "auto",
            flexDirection: "column",
            marginTop: { xs: "20px", sm: "20px", md: "20px" },
          }}
        >
          {/* Box to wrap collaborator data*/}
          <div>
            <Typography
              variant="h5"
              sx={{
                color: "#26A69A",
                textAlign: { xs: "center", sm: "center", md: "left" },
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                paddingBottom: "5px",
              }}
            >
              Collaborators
            </Typography>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                  fontWeight: "bold",
                }}
              >
                Mohammed Saabir Ahmed
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                Full Stack Developer
              </Typography>
            </Box>
            <a
              href="https://github.com/ProdiGeeZ"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#26A69A" />
            </a>

            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                  fontWeight: "bold",
                }}
              >
                Ima Khan
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                Full Stack Developer
              </Typography>
            </Box>

            <a
              href="https://github.com/imaa04"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                marginLeft: "-20px",
              }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#26A69A" />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default PairSniper;
