"use client";

import { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormFeedback,
  Table
} from "reactstrap";

export function Formulario() {
  const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    edad: "",
    genero: "",
    rol: "",
    opciones: false,
    notas: "",
    fecha: "",
  };

  const [formulario, setFormulario] = useState(initialForm);
  const [modal, setModal] = useState(false);
  const [errores, setErrores] = useState({});
  const [registros, setRegistros] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    const hoy = new Date().toISOString().split("T")[0];

    // Solo letras para el nombre
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formulario.nombre)) {
      nuevosErrores.nombre = "Solo se permiten letras";
    }

    // Letras para el apellido
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formulario.apellido)) {
      nuevosErrores.apellido = "Solo se permiten letras";
    }

    // Email válido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
      nuevosErrores.email = "Correo electrónico inválido";
    }

    // Números positivos
    if (
      !/^\d+$/.test(formulario.edad) ||
      formulario.edad <= 0 ||
      formulario.edad > 100
    ) {
      nuevosErrores.edad = "Solo números positivos hasta 100";
    }

    // Fecha actial
    if (formulario.fecha < hoy) {
      nuevosErrores.fecha = "La fecha no puede ser menor al día de hoy";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const guardarRegistro = () => {
  if (validarFormulario()) {
    setRegistros([...registros, formulario]);
    setFormulario(initialForm);
  }
};

const eliminarRegistro = (index) => {
    const nuevosRegistros = registros.filter((_, i) => i !== index);
    setRegistros(nuevosRegistros);
  }

  const editarRegistro = (index) => {
    const registroAEditar = registros[index];
    setFormulario(registroAEditar);
    const nuevosRegistros = registros.filter((_, i) => i !== index);
    setRegistros(nuevosRegistros);
  }


  const styleForm = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <>
      <Form style={styleForm}>
        <h1>Formulario de Registro</h1>
        {/* Nombre */}
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            valid={errores.nombre ? false : true}
            invalid={errores.nombre ? true : false}
          />
          <FormFeedback>{errores.nombre}</FormFeedback>
        </FormGroup>

        {/* Apellido */}
        <FormGroup>
          <Label>Apellido</Label>
          <Input
            type="text"
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}
            valid={errores.apellido ? false : true}
            invalid={errores.apellido ? true : false}
          />
          <FormFeedback>{errores.apellido}</FormFeedback>
        </FormGroup>

        {/* Correo */}
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            valid={errores.email ? false : true}
            invalid={errores.email ? true : false}
          />
          <FormFeedback>{errores.email}</FormFeedback>
        </FormGroup>

        {/* Contraseña */}
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            type="password"
            name="password"
            value={formulario.password}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Edad */}
        <FormGroup>
          <Label>Edad</Label>
          <Input
            type="number"
            name="edad"
            value={formulario.edad}
            onChange={handleChange}
            valid={errores.edad ? false : true}
            invalid={errores.edad ? true : false}
          />
          <FormFeedback>{errores.edad}</FormFeedback>
        </FormGroup>

        {/* Género */}
        <FormGroup>
          <Label>Género</Label>

          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="Masculino"
              checked={formulario.genero === "Masculino"}
              onChange={handleChange}
            />
            <Label check>Masculino</Label>
          </FormGroup>

          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="Femenino"
              checked={formulario.genero === "Femenino"}
              onChange={handleChange}
            />
            <Label check>Femenino</Label>
          </FormGroup>
        </FormGroup>

        {/* Rol */}
        <FormGroup>
          <Label>Rol</Label>
          <Input
            type="select"
            name="rol"
            value={formulario.rol}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            <option value="admin">Admin</option>
            <option value="user">Usuario</option>
          </Input>
        </FormGroup>

        {/* Opciones */}
        <FormGroup check>
          <Input
            type="checkbox"
            name="opciones"
            checked={formulario.opciones}
            onChange={handleChange}
          />
          <Label check>Aceptar opciones</Label>
        </FormGroup>

        {/* Notas */}
        <FormGroup>
          <Label>Notas</Label>
          <Input
            type="textarea"
            name="notas"
            value={formulario.notas}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Fecha de registro */}
        <FormGroup>
          <Label>Fecha de registro</Label>
          <Input
            type="date"
            name="fecha"
            value={formulario.fecha}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            valid={errores.fecha ? false : true}
            invalid={errores.fecha ? true : false}
          />
          <FormFeedback>{errores.fecha}</FormFeedback>
        </FormGroup>

        <Button color="primary" onClick={guardarRegistro}>
          Guardar
        </Button>

        <Button
          color="primary"
          onClick={() => {
            if (validarFormulario()) {
              setModal(true);
            }
          }}
        >
          Mostrar
        </Button>

        <Button
          type="button"
          color="secondary"
          onClick={() => setFormulario(initialForm)}
        >
          Reiniciar
        </Button>
      </Form>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Información registrada
        </ModalHeader>

        <ModalBody>
          <p>Nombre: {formulario.nombre}</p>
          <p>Apellido: {formulario.apellido}</p>
          <p>Email: {formulario.email}</p>
          <p>Edad: {formulario.edad}</p>
          <p>Género: {formulario.genero}</p>
          <p>Opciones: {formulario.opciones ? "Aceptadas" : "No aceptadas"}</p>
          <p>Rol: {formulario.rol}</p>
          <p>Notas: {formulario.notas}</p>
        </ModalBody>
      </Modal>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.email}</td>
              <td>
                <Button color="danger" onClick={() => eliminarRegistro(index)}>
                  Eliminar
                </Button>
                <Button color="warning" onClick={() => editarRegistro(index)}>
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
