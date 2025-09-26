"use client";

import { useCallback, useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fpsLimit: 60,
    particles: {
      color: {
        value: "#3b82f6",
      },
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          color: "#8b5cf6",
          opacity: 0.1,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
      },
      number: {
        value: 60,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: {
          polygon: {
            sides: 6,
          },
          triangle: {
            sides: 3,
          },
        },
      },
      size: {
        value: { min: 2, max: 4 },
      },
    },
  }), []);

  if (!init) {
    return null;
  }

  return (
    <>
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Subtle overlay to diffuse the particles */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, rgba(139, 92, 246, 0.08) 100%)",
        }}
      />
    </>
  );
};

export default ParticlesBackground;