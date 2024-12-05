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
        variant="h7"
        sx={{
          color: "#ffffff",
          
        }}
      >
        Software Developer & Music Producer with a passion for innovation and tech
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
