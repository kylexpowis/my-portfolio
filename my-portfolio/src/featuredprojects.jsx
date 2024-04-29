import * as React from "react";
import { Box, Typography } from "@mui/material";
import pairsniperlogo from "../public/pairsniperlogo.svg";
import northcoderslogo from "../public/northcoderslogo.png";

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
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Node
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              React
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Express
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              PostgreSQL
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Supabase
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Jest
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              MUI
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Tailwind
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Render
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Vercel
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Figma
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Photoshop
            </div>
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
            src={northcoderslogo}
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
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Node
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              React
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Express
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              PostgreSQL
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Supabase
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Jest
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              MUI
            </div>
            <div className="text-sm rounded-full border border-green-900 p-2 m-1">
              Render
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default FeaturedProjects;
