"use client";

import { Button } from "reactstrap";
import { Alert } from "reactstrap";
import { useState } from "react";

export function Toast({ texto, color, colorBoton, textoBoton , posicion}) {
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(true);

  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    <div style={{ textAlign: posicion }}>
      <Alert color={color} isOpen={visible} toggle={onDismiss}>
        {texto}
      </Alert>
      <Button color={colorBoton} onClick={onDismiss}>
       { textoBoton }
      </Button>
    </div>
  );
}
