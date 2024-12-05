import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#000",
        borderRadius: "15px",
        padding: "20px",
        width: "auto",
        color: "white",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          color: "#ffffff",
          fontWeight: "bold",
          fontFamily:
            "'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
        }}
      >
        My about me text here
      </Typography>

      {/* Optional ContactMe component */}
      <Box
        sx={{
          marginTop: "10px",
        }}
      ></Box>
    </Box>
  );
};

export default AboutMe;
