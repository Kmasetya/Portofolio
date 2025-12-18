import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  const options = useMemo(
    () => ({
      preset: "stars",
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        opacity: {
          value: 0.7,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
          },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
          bounce: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Particles
        init={particlesInit}
        options={options}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
