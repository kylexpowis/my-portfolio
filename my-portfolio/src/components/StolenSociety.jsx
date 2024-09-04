import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../src/styles.css";
import Button from "@mui/material/Button";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import sslandingpage from "/sslandingpage.png";
import ssstorepage from "/ssstorepage.png";
import ssproductspage from "/ssproductspage.png";
import sstracksuitpage from "/sstracksuitpage.png";

function StolenSociety() {
  const images = [sslandingpage, ssstorepage, ssproductspage, sstracksuitpage];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
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
              width: "100%",
              height: "auto",
              maxHeight: "60vh", // Adjust this as needed
            }}
            src={images[currentIndex]}
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
          <>
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Stolen Society Landing Page:{" "}
              {
                <a href="https://stolensociety.co.uk" target="_blank">
                  <Button>stolensociety.co.uk</Button>
                </a>
              }
            </p>
          </>
          <>
            <p style={{ textAlign: "center", marginTop: "2px" }}>
              Stolen Society Store:{" "}
              {
                <a href="https://store.stolensociety.co.uk" target="_blank">
                  <Button>store.stolensociety.co.uk</Button>
                </a>
              }
            </p>
          </>
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
            This project is a basic shopify store for a clothing brand, however
            they wanted their main page to be seperate so they can remove the
            store when and needed for limmited/exclusive drops.
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
                    Built a resposnive landing page with email signup using
                    React and Tailwind. Connecting to mailchimp API.
                  </li>
                  <li>
                    Implemented a pre order button within the shopify store,
                    overriding the original buy now buttons due to client
                    preference as they are creating items to order.
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
                Javascript, Shopify Liquid.
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
                  React, Tailwind, Express, Node.
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
                  Netlify (Deployment), Photoshop, Todoist
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
                  <li>Basic planning on Todoist and Figma.</li>
                  <li>
                    Develop wireframes using Figma, refining UI and schema as
                    needed.
                  </li>

                  <li>Use Mailchimp API to collect customer emails.</li>
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
                Issues with Mailchimp API not destructuring JSON objects
                properly, causing errors when trying to collecting customer
                emails.
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
                Refactored code multiple times with no results, changed
                deployment from Vercel to Netlify and the issue was resolved,
                this is due to Vercel compatibility with React projects.
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default StolenSociety;
