import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function FeaturedProjects() {
  return (
    <div style={{ padding: "20px" }}>
      <Card
        variant="outlined"
        sx={{ marginBottom: 2, backgroundColor: "#334155" }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Pair Sniper
          </Typography>
          <Typography variant="body2">Description of Project 1...</Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{ marginBottom: 2, backgroundColor: "#334155" }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            NC News
          </Typography>
          <Typography variant="body2">Description of Project 2...</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeaturedProjects;
