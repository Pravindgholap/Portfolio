import { Move, OutModes } from "tsparticles-engine";

export default {
  background: {
    color: {
      value: "black",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 8,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#000080",
    },
    links: {
      color: "#000080",
      distance: 250,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "random", 
      enable: true, 
      outModes: {
        default: "out", 
      },
      random: true, 
      speed: 5, 
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 100, 
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    shape: {
      type: ["circle", "square"], 
    },
    size: {
      value: { min: 3, max: 8 },
    },
  },
  detectRetina: true,
};
