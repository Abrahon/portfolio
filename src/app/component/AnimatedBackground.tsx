"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import type { Engine } from "@tsparticles/engine";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadTrianglesPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      //   init={particlesInit}
      options={{
        preset: "triangles",
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
}
