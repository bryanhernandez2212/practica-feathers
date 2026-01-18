"use client";

import { Table, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faDisplay} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import productos from "../data/productos.json";

export function Tabla() {
  const [modal, setModal] = useState(false);
  const [productoActual, setProductoActual] = useState(null);

  const toggle = () => setModal(!modal);

  const mostrarImagen = (producto) => {
    setProductoActual(producto);
    setModal(true);
  };

  const obtenerIcono = (icono) => {
    if (icono === "apple") return faApple;
    if (icono === "display") return faDisplay;
  };

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Ícono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>{item.nombre}</td>
              <td>{item.categoria}</td>
              <td>
                <FontAwesomeIcon icon={obtenerIcono(item.icono)} />
              </td>
              <td>
                <Button color="secondary" onClick={() => mostrarImagen(item)}>
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {productoActual?.nombre}
        </ModalHeader>
        <ModalBody>
          <img
            src={productoActual?.imagen}
            alt={productoActual?.nombre}
            style={{ width: "100%" }}
          />
        </ModalBody>
      </Modal>
    </>
  );
}
