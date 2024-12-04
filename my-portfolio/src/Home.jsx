import Box from "@mui/material/Box";
import TechStack from "./components/techStack";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import FeaturedProjects from "./components/featuredprojects";
import { useSpring, animated } from "@react-spring/web";

function Home() {
  const profileCardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const techStackAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 300,
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <Box sx={{ marginTop: "-50px" }}>
            <animated.div style={profileCardAnimation}>
              <ProfileCard />
            </animated.div>
          </Box>
          <Box sx={{ paddingTop: "30px" }}>
            <animated.div style={techStackAnimation}>
              <TechStack />
            </animated.div>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          height: "100%",
          textAlign: "right",
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <div id="aboutme">
          <AboutMe />
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <div id="FeaturedProjects">
            <FeaturedProjects />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Home;
