"use client";

import React from "react";

export function Dodecahedron({ className = "" }: { className?: string }) {
  return (
    <div className={`mil-dodecahedron ${className}`}>
      {[...Array(12)].map((_, i) => (
        <div key={i} className="mil-pentagon">
          {[...Array(5)].map((_, j) => (
            <div key={j}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
