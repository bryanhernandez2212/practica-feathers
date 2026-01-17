"use client";

import { Button } from "reactstrap";
import { Alert } from "reactstrap";
import { useState } from "react";

export function Toast({ texto, color, colorBoton, textoBoton }) {
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(true);

  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    <div>
      <Alert color={color} isOpen={visible} toggle={onDismiss}>
        {texto}
      </Alert>
      <Button style={{ display: 'block', margin: '0 auto' }} color={colorBoton} onClick={onDismiss}>
       { textoBoton }
      </Button>
    </div>
  );
}
