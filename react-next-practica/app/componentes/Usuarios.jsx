"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardText, Button , CardFooter} from "reactstrap";

export function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [card, setCard] = useState(false);

  const obtenerUsuarios = () => {
  fetch("https://fakestoreapi.com/users")
    .then(response => response.json())
    .then(data => {
      setUsuarios(data);
      console.log(data);
      setCard(true);
    });
};


  return (
    <div>
    <Button onClick={obtenerUsuarios}>Ver usuarios</Button>
      {usuarios.map((usuario) => (
        <Card onClick={obtenerUsuarios} key={usuario.id} style={{ marginBottom: '10px', display: card ? 'block' : 'none' }}
        >
          <CardHeader>Nombre: {usuario.username}</CardHeader>
          <CardBody>
            <CardText>
              Correo electrónico: {usuario.email}
            </CardText>
          </CardBody>
          <CardFooter>Dirección: {usuario.address.city}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
