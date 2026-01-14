"use client";

import { useState, useEffect } from "react";

export function Sitio() {

  const [color, setColor] = useState("lightblue");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <button onClick={() => setColor(color === "lightblue" ? "white" : "lightblue")}>
      Cambiar fondo
    </button>
  );
}
