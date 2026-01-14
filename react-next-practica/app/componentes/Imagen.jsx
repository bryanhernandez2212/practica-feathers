"use client";

import { useState } from 'react';

export function Imagen() {
    const [src, setSrc] = useState('/images/React.png');

    const cambiarImagen = () => {
        setSrc(src === '/images/React.png' ? '/images/next.png' : '/images/React.png');
    };

  return (
    <div>
        <img src={src} style={{ margin : '0 auto', display: 'block', height: '200px', width: '200px' }}></img>
        <br />
        <button onClick={cambiarImagen}
        style={{fontSize: '16px', display: 'block', margin: '0 auto'}}
        >Cambiar imagen</button>
    </div>
  );
}
