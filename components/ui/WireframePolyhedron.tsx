"use client";

import { useEffect, useRef } from "react";

const PHI = (1 + Math.sqrt(5)) / 2;

// Dodecahedron: 20 vertices, all at distance √3 from origin
const VERTICES: [number, number, number][] = [
  // (±1, ±1, ±1)
  [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
  [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
  // (0, ±φ, ±1/φ)
  [0, PHI, 1 / PHI], [0, PHI, -1 / PHI], [0, -PHI, 1 / PHI], [0, -PHI, -1 / PHI],
  // (±1/φ, 0, ±φ)
  [1 / PHI, 0, PHI], [-1 / PHI, 0, PHI], [1 / PHI, 0, -PHI], [-1 / PHI, 0, -PHI],
  // (±φ, ±1/φ, 0)
  [PHI, 1 / PHI, 0], [PHI, -1 / PHI, 0], [-PHI, 1 / PHI, 0], [-PHI, -1 / PHI, 0],
];

// Edge length² = (2/φ)² ≈ 1.528 — connect vertices at this distance
const EDGE_LEN_SQ = (2 / PHI) ** 2;

const EDGES: [number, number][] = (() => {
  const edges: [number, number][] = [];
  for (let i = 0; i < VERTICES.length; i++) {
    for (let j = i + 1; j < VERTICES.length; j++) {
      const dx = VERTICES[i][0] - VERTICES[j][0];
      const dy = VERTICES[i][1] - VERTICES[j][1];
      const dz = VERTICES[i][2] - VERTICES[j][2];
      if (Math.abs(dx * dx + dy * dy + dz * dz - EDGE_LEN_SQ) < 0.05) {
        edges.push([i, j]);
      }
    }
  }
  return edges; // should be exactly 30 edges
})();

export interface WireframePolyhedronProps {
  size: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  speedX?: number;
  speedY?: number;
  speedZ?: number;
  initX?: number;
  initY?: number;
  initZ?: number;
  className?: string;
}

export function WireframePolyhedron({
  size,
  color = "rgba(255,255,255,1)",
  strokeWidth = 1,
  opacity = 0.15,
  speedX = 0.0008,
  speedY = 0.0014,
  speedZ = 0.0004,
  initX = 0,
  initY = 0,
  initZ = 0,
  className,
}: WireframePolyhedronProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ x: initX, y: initY, z: initZ, raf: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cx = size / 2;
    const cy = size / 2;
    const scale = size * 0.28; // shape fills ~80% of canvas
    const camDist = 5; // camera distance (vertices range from -√3 to +√3 ≈ ±1.73)

    const state = stateRef.current;

    function rotateVertex(
      v: [number, number, number],
      ax: number,
      ay: number,
      az: number
    ): [number, number, number] {
      let [x, y, z] = v;

      // X-axis rotation
      let tmp = y * Math.cos(ax) - z * Math.sin(ax);
      z = y * Math.sin(ax) + z * Math.cos(ax);
      y = tmp;

      // Y-axis rotation
      tmp = x * Math.cos(ay) + z * Math.sin(ay);
      z = -x * Math.sin(ay) + z * Math.cos(ay);
      x = tmp;

      // Z-axis rotation
      tmp = x * Math.cos(az) - y * Math.sin(az);
      y = x * Math.sin(az) + y * Math.cos(az);
      x = tmp;

      return [x, y, z];
    }

    function project(v: [number, number, number]): [number, number] {
      const denom = v[2] + camDist;
      const f = camDist / denom;
      return [cx + v[0] * scale * f, cy + v[1] * scale * f];
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;

      // Rotate all vertices first so we have 3D Z for depth sorting
      const rotated = VERTICES.map((v) =>
        rotateVertex(v, state.x, state.y, state.z)
      );
      const projected = rotated.map((v) => project(v));

      // Sort edges back-to-front (painter's algorithm) and apply depth-based alpha
      const maxZ = Math.sqrt(3); // all vertices sit on a sphere of radius √3
      const sorted = EDGES.map(([i, j]) => ({
        i,
        j,
        midZ: (rotated[i][2] + rotated[j][2]) / 2,
      })).sort((a, b) => a.midZ - b.midZ);

      for (const { i, j, midZ } of sorted) {
        // Map midZ from [-√3, +√3] → [0.05, 1.0]
        const t = (midZ + maxZ) / (2 * maxZ);
        ctx.globalAlpha = opacity * (0.05 + 0.95 * t);
        ctx.beginPath();
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        state.x += speedX;
        state.y += speedY;
        state.z += speedZ;
      }

      state.raf = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(state.raf);
  }, [size, color, strokeWidth, opacity, speedX, speedY, speedZ]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
