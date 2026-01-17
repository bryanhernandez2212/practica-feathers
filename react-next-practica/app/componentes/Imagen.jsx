"use client";

import { useState } from 'react';
import { Button } from "reactstrap";

export function Imagen({color, imagen1, imagen2}) {
    const [src, setSrc] = useState(imagen1);

    const cambiarImagen = () => {
        setSrc(src === imagen1 ? imagen2 : imagen1);
    };

  return (
    <div>
        <img src={src} style={{ margin : '0 auto', display: 'block', height: '200px', width: '200px' }}></img>
        <br />
        <Button onClick={cambiarImagen} color={color} style={{ display: 'block', margin: '0 auto' }}>Cambiar imagen</Button>
    </div>
  );
}
