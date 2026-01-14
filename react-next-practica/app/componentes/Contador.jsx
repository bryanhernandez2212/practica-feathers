"use client";

import { useState } from "react";

export function Contador () {
    const [numero, setNumero] = useState(0);

    return ( 
        <div>
            <p style={{ color: 'black'}}>Contador : {numero}</p>
            <button onClick={() => setNumero(numero + 1)}  style={{fontSize: '16px', display: 'block', margin: '0 auto'}}>Incrementar</button>
        </div>
    )
}

