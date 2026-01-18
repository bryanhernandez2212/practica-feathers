"use client";

import { useState } from "react";
import { Button } from "reactstrap";

export function Contador ({posicion, color}) {
    const [numero, setNumero] = useState(0);

    return ( 
        <div style={{ textAlign: posicion }}>
            <p style={{ color: color }}>Contador : {numero}</p>
            <Button onClick={() => setNumero(numero + 1)}>Incrementar</Button>
        </div>
    )
}

