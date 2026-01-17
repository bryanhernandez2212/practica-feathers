import React from 'react';
import { Titulo } from './componentes/Titulo';
import { Parrafo } from './componentes/Parrafo';
import { Imagen } from './componentes/Imagen';
import { Contador } from './componentes/Contador';
import { Sitio } from './componentes/Sitio';
import { Toast } from './componentes/Toast';
import Example from './componentes/Modal';
import Carousel  from './componentes/Carrusel';

export default function Home() {
  return (
    <main>
      <Titulo texto="Bienvenido a mi app" color="black" tamaño="34px" fuente="Arial" posicion="center"/>

      <Parrafo texto="Este es un párrafo de ejemplo para saber como funcionan los componentes dentro de react"  color="black" tamaño="16px" posicion="center"/>

      <Imagen color="primary" imagen1="/images/React.png" imagen2="/images/next.png"></Imagen>

      <Contador />  

      <Sitio colorSitio="warning" primerColor="lightblue" segundoColor="white" />
 
      <Toast color="danger" texto="sisisi" colorBoton="danger" textoBoton="Click"/>

      <Example />

      <Carousel />
   
    </main>
  );
  }