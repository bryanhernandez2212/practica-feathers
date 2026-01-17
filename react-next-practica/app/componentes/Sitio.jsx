"use client";

import { useState, useEffect } from "react";
import { Button } from "reactstrap";

export function Sitio({ colorSitio, primerColor, segundoColor }) {

  const [color, setColor] = useState(primerColor);

  const cambiarColor = () => {
    setColor(color === primerColor ? segundoColor : primerColor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <Button color={colorSitio} onClick={cambiarColor} style={{ display: 'block', margin: '0 auto' }}>
      Cambiar fondo
    </Button>
  );
}
