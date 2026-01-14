import React from 'react';
import { Titulo } from './componentes/Titulo';
import { Parrafo } from './componentes/Parrafo';
import { Imagen } from './componentes/Imagen';
import { Contador } from './componentes/Contador';
import { Sitio } from './componentes/Sitio';

export default function Home() {
  return (
    <main>
      <Titulo texto="Bienvenido a mi aplicación" color="black" tamaño="34px" fuente="Arial" posicion="center"/>
      <Parrafo texto="Este es un párrafo de ejemplo para saber como funcionan los componentes dentro de react"  color="black" tamaño="16px" posicion="center"/>
      <Imagen ></Imagen>

      <Contador />  
      
     <Sitio />
   
    </main>
  );
  }