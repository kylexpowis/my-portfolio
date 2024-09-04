import { Box, Typography, Chip, Container } from "@mui/material";
import pairsniperlogo from "/pairsniperlogo.svg";
import stolensocietylogoportfolio from "/stolensocietylogoportfolio.png";
import ncnewslogo from "/northcodersnewslogo.png";
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
          <div
            className="flex justify-center flex-wrap"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Chip
              label="Node"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="React"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Express"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="PostgreSQL"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Supabase"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Jest"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="MUI"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Tailwind"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Render"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Vercel"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Figma"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Photoshop"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
          </div>
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
          <div
            className="flex justify-center flex-wrap"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Chip
              label="Node"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="React"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Shopify"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Tailwind"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Netlify"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Figma"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Photoshop"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
          </div>
        </Box>
        <Box
          className="rounded-lg  p-5"
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
          <img
            className="card"
            src={ncnewslogo}
            alt="ncnewslogo"
            style={{
              height: "auto",
              width: "30vh",
              marginBottom: "10px",
              flexGrow: "1",
            }}
          />
          <Typography sx={{ color: "yellow", marginBottom: "20px" }}>
            {" "}
            UNDER CONSTRUCTION{" "}
          </Typography>
          <div
            className="flex justify-center flex-wrap"
            style={{
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Chip
              label="Node"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="React"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Express"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="PostgreSQL"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Supabase"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Jest"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="MUI"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
            <Chip
              label="Render"
              variant="outlined"
              className="text-sm rounded-full p-2 m-1"
              sx={{
                "& .MuiChip-label": {
                  color: "white",
                },
                "& .MuiChip-outlined": {
                  borderColor: "green",
                },
              }}
            ></Chip>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default FeaturedProjects;
