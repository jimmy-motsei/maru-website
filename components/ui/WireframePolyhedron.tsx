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

// 12 pentagonal faces — 5 vertex indices in CCW winding order (outward normals).
// Derived from the vertex ordering above; verified: each vertex in exactly 3 faces,
// each edge in exactly 2 faces, dot(normal, centroid) > 0 for all 12 faces.
const FACES: number[][] = [
  [0,  8,  4, 13, 12],
  [0, 16,  1,  9,  8],
  [0, 12,  2, 17, 16],
  [1, 14, 15,  5,  9],
  [1, 16, 17,  3, 14],
  [2, 12, 13,  6, 10],
  [2, 10, 11,  3, 17],
  [3, 11,  7, 15, 14],
  [4,  8,  9,  5, 18],
  [4, 18, 19,  6, 13],
  [5, 15,  7, 19, 18],
  [6, 19,  7, 11, 10],
];

// One logo per face, in face-index order (0–11)
// Slugs are Simple Icons CDN identifiers: https://cdn.simpleicons.org/<slug>/<hex>
// microsoftazure 404s on the CDN — replaced with `microsoft`
const CYAN_HEX = "04B3CC";
const TOOL_LOGOS = [
  "openai", "hubspot", "googlegemini", "make",
  "zapier", "salesforce", "notion", "airtable",
  "microsoft", "whatsapp", "googledrive", "slack",
];

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
  const logoImagesRef = useRef<HTMLImageElement[]>([]);
  const logosLoadedRef = useRef(false);

  // Preload all 12 Simple Icons SVGs once on mount — CDN, crossOrigin required to prevent canvas taint
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    TOOL_LOGOS.forEach((slug, i) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        images[i] = img;
        loaded++;
        if (loaded === TOOL_LOGOS.length) {
          logoImagesRef.current = images;
          logosLoadedRef.current = true;
        }
      };
      img.onerror = () => {
        // Silent fail — face renders with tint only if CDN slug is wrong
        loaded++;
        if (loaded === TOOL_LOGOS.length) {
          logoImagesRef.current = images;
          logosLoadedRef.current = true;
        }
      };
      img.src = `https://cdn.simpleicons.org/${slug}/${CYAN_HEX}`;
    });
  }, []);

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

      // Compute z-range once per frame for consistent depth mapping
      const allZ = rotated.map((v) => v[2]);
      const zMin = Math.min(...allZ);
      const zMax = Math.max(...allZ);

      // --- Face pass (before edges so edges render on top) ---
      for (let faceIndex = 0; faceIndex < FACES.length; faceIndex++) {
        const face = FACES[faceIndex];

        // 1. Get 3D rotated positions of first 3 verts for normal computation
        const v0 = rotated[face[0]];
        const v1 = rotated[face[1]];
        const v2 = rotated[face[2]];

        // 2. z-component of (e1 × e2) — sufficient for camera-aligned cull check
        const e1x = v1[0] - v0[0], e1y = v1[1] - v0[1];
        const e2x = v2[0] - v0[0], e2y = v2[1] - v0[1];
        const normalZ = e1x * e2y - e1y * e2x;

        // 3. Back-face cull — skip faces pointing away from camera
        if (normalZ <= 0) continue;

        // 4. Depth alpha — average rotated z of all 5 face vertices
        const avgZ = face.reduce((sum, i) => sum + rotated[i][2], 0) / 5;
        const t = zMax === zMin ? 0.5 : (avgZ - zMin) / (zMax - zMin);
        const depthAlpha = opacity * (0.05 + 0.95 * t);

        // 5. Projected 2D pentagon points
        const pts = face.map((i) => projected[i]);

        // 6. Centroid of projected pentagon
        const faceCx = pts.reduce((sum, p) => sum + p[0], 0) / 5;
        const faceCy = pts.reduce((sum, p) => sum + p[1], 0) / 5;

        // 7. Inscribed circle radius — min distance from centroid to each edge midpoint
        let inscribedRadius = Infinity;
        for (let k = 0; k < 5; k++) {
          const p1 = pts[k];
          const p2 = pts[(k + 1) % 5];
          const midX = (p1[0] + p2[0]) / 2;
          const midY = (p1[1] + p2[1]) / 2;
          const dist = Math.sqrt((midX - faceCx) ** 2 + (midY - faceCy) ** 2);
          inscribedRadius = Math.min(inscribedRadius, dist);
        }
        const iconSize = inscribedRadius * 1.1; // 110% — fills face comfortably

        // 8. Clip to pentagon, draw logo
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k][0], pts[k][1]);
        ctx.closePath();
        ctx.clip();

        // Subtle cyan face tint
        ctx.globalAlpha = depthAlpha * 0.06;
        ctx.fillStyle = `rgba(4, 179, 204, 1)`;
        ctx.fill();

        // Draw logo if preloaded
        if (logosLoadedRef.current && logoImagesRef.current[faceIndex]) {
          ctx.globalAlpha = depthAlpha * 0.75;
          ctx.drawImage(
            logoImagesRef.current[faceIndex],
            faceCx - iconSize / 2,
            faceCy - iconSize / 2,
            iconSize,
            iconSize
          );
        }

        ctx.restore(); // release clip region
      }

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
