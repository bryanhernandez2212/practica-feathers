"use client";

import { useState } from "react";
import { Button } from "reactstrap";

export function Contador () {
    const [numero, setNumero] = useState(0);

    return ( 
        <div>
            <p style={{ color: 'blue', textAlign: 'center' }}>Contador : {numero}</p>
            <Button onClick={() => setNumero(numero + 1)}  style={{fontSize: '16px', display: 'block', margin: '0 auto'}}>Incrementar</Button>
        </div>
    )
}

