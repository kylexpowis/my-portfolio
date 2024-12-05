import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TechStack from "./components/techStack";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/featuredprojects";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";

function Home() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleProjects = () => {
    setIsProjectsOpen((prevState) => !prevState);
  };
  const toggleAbout = () => {
    setIsAboutOpen((prevState) => !prevState);
  };

  const profileCardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const techStackAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 300,
  });

  const aboutMeAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
    delay: 600,
  });

  const featuredProjectsAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 900,
  });

  const ResumeCVAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
    delay: 600,
  });

  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "40px", md: "60px" },
        backgroundColor: "#080808",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={1} justifyContent="space-between">
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <animated.div style={profileCardAnimation}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                width: "100%",
              }}
            >
              <ProfileCard />
            </Box>
          </animated.div>
        </Grid>

        {/* Tech Stack */}
        <Grid item xs={12} md={4}>
          <animated.div style={techStackAnimation}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <TechStack />
            </Box>
          </animated.div>
        </Grid>

        {/* About Box (Small Square) */}
        <Grid item xs={12} md={4}>
          <animated.div style={aboutMeAnimation}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#fff",
                cursor: "pointer",
                textAlign: "center",
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              onClick={toggleAbout}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily:
                    "'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
                }}
              >
                About
              </Typography>
            </Box>
          </animated.div>

          {/* About Me Dropdown */}
          <Collapse in={isAboutOpen}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                padding: "20px",
                width: "200px",
                marginTop: "5px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#fff",
              }}
            >
              <AboutMe />
            </Box>
          </Collapse>
        </Grid>

        {/* CV Box (Small Square) */}
        <Grid item xs={12} md={4}>
          <animated.div style={ResumeCVAnimation}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#fff",
                cursor: "pointer",
                textAlign: "center",
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              // onClick={toggleProjects}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily:
                    "'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
                }}
              >
                Resume/CV
              </Typography>
            </Box>
          </animated.div>

          {/* Featured Projects Dropdown */}
          <Collapse in={isProjectsOpen}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                color: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                marginTop: "5px",
                width: "200px",
              }}
            >
              <FeaturedProjects />
            </Box>
          </Collapse>
        </Grid>

        {/* Projects Box (Small Square) */}
        <Grid item xs={12} md={4}>
          <animated.div style={featuredProjectsAnimation}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#fff",
                cursor: "pointer",
                textAlign: "center",
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              onClick={toggleProjects}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily:
                    "'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif",
                }}
              >
                Projects
              </Typography>
            </Box>
          </animated.div>

          {/* Featured Projects Dropdown */}
          <Collapse in={isProjectsOpen}>
            <Box
              sx={{
                backgroundColor: "#000",
                borderRadius: "15px",
                color: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                marginTop: "5px",
                width: "200px",
              }}
            >
              <FeaturedProjects />
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
