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
      }}
    >
      <Container
        flex
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          <Link to="/PairSniper">
            <img className="card" src={pairsniperlogo} alt="pairsniperlogo" />
          </Link>
        </Box>
        <Box
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
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
              style={{}}
            />
          </Link>
        </Box>
        <Box
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          <Link to="/Stolensociety">
            <img
              className="card"
              src={stolensocietylogoportfolio}
              alt="stlolensocietylogo"
              style={{}}
            />
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default FeaturedProjects;
