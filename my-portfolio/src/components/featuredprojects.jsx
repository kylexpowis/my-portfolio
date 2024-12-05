import { Box, Container } from "@mui/material";
import pairsniperlogo from "/pairsniperlogo.svg";
import stolensocietylogoportfolio from "/stolensocietylogoportfolio.png";
import clusterbookslogo from "/clusterbookslogo2.png";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Container
        flex
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Box
          className="rounded-lg p-5"
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
            width: "35vh",
            height: "fit-content",
            minHeight: "490px",
            maxHeight: "490px",
            "@media (max-width: 600px)": {
              minHeight: "auto",
              maxHeight: "auto",
            },
          }}
        >
          <Link to="/PairSniper">
            <img
              className="card"
              src={pairsniperlogo}
              alt="pairsniperlogo"
              style={{
                height: "auto",
                width: "30vh",
                marginBottom: "10px",
                flexGrow: "1",
              }}
            />
          </Link>
        </Box>
        <Box
          className="rounded-lg p-5"
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
            width: "35vh",
            height: "fit-content",
            minHeight: "490px",
            maxHeight: "490px",
            "@media (max-width: 600px)": {
              minHeight: "auto",
              maxHeight: "auto",
            },
          }}
        >
          <Link
            to="https://northcoders.com/project-phase/cluster-books"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="card"
              alt="cluster books logo"
              src={clusterbookslogo}
              style={{
                height: "auto",
                width: "30vh",
                marginBottom: "10px",
                flexGrow: "1",
              }}
            />
          </Link>
        </Box>
        <Box
          className="rounded-lg p-5"
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
            width: "35vh",
            height: "fit-content",
            minHeight: "490px",
            maxHeight: "490px",
            "@media (max-width: 600px)": {
              minHeight: "auto",
              maxHeight: "auto",
            },
          }}
        >
          <Link to="/Stolensociety">
            <img
              className="card"
              src={stolensocietylogoportfolio}
              alt="stlolensocietylogo"
              style={{
                height: "auto",
                width: "30vh",
                marginBottom: "10px",
                flexGrow: "1",
              }}
            />
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default FeaturedProjects;
