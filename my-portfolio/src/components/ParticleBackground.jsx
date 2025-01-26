// src/components/ParticleBackground.js
import React from "react";
import Particles from "react-tsparticles"; // Import the tsparticles component

const ParticleBackground = () => {
  const particlesOptions = {
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      move: { speed: 1 },
      shape: { type: "circle" },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Particles params={particlesOptions} />
    </div>
  );
};

export default ParticleBackground;
