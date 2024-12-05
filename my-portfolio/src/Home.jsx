import Box from "@mui/material/Box";
import TechStack from "./components/techStack";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/featuredprojects";
import { useSpring, animated } from "@react-spring/web";

function Home() {
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
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
    delay: 900,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: { xs: "20px", sm: "40px", md: "60px" },
        backgroundColor: "#080808", 
      }}
    >
      {/* Profile Card */}
      <animated.div style={profileCardAnimation}>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#000",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ProfileCard />
        </Box>
      </animated.div>

      {/* Tech Stack */}
      <animated.div style={techStackAnimation}>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#000",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TechStack />
        </Box>
      </animated.div>

      {/* About Me */}
      <animated.div style={aboutMeAnimation}>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#000",
            borderRadius: "15px",
            padding: "20px",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <AboutMe />
        </Box>
      </animated.div>

      {/* Featured Projects */}
      <animated.div style={featuredProjectsAnimation}>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#000",
            borderRadius: "15px",
            padding: "20px",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <FeaturedProjects />
        </Box>
      </animated.div>
    </Box>
  );
}

export default Home;
