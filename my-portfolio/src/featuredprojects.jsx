import * as React from "react";
import { Box, Typography, Chip } from "@mui/material";
import pairsniperlogo from "../public/pairsniperlogo.svg";
import ncnewslogo from "../public/northcodersnewslogo.png";

function FeaturedProjects() {
  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          height: "100vh",
          flexWrap: "wrap",
        }}
      >
        <Box
          className="rounded-lg border-2 border-gray-700 p-5"
          sx={{
            width: "35vh",
            height: "fit-content",
          }}
        >
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
          <Typography>Pair Sniper</Typography>
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
          className="rounded-lg border-2 border-gray-700 p-5"
          sx={{
            width: "35vh",
            height: "fit-content",
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
          <Typography>NC News</Typography>
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
      </Box>
    </div>
  );
}

export default FeaturedProjects;
