import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticlesComponent = ({ theme = "dark" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    initEngine();
  }, []);

  const particlesConfig = {
    background: {
      color: "transparent",
    },
    particles: {
      color: {
        value: theme === "dark" ? "#ffffff" : "#000000",
      },
      links: {
        enable: true,
        color: theme === "dark" ? "#ffffff" : "#000000",
        distance: 150,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "connect"]
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        connect: {
          distance: 150,
          radius: 60
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={particlesConfig}
    />
  );
};

export default ParticlesComponent;