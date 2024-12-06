import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import {  Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const EmpleadoList = () => {
  let empleadosOriginales = [
    { id: 1, name: "Leo", title: "CEO", department: "Business" },
    { id: 2, name: "Aidan", title: "CMO", department: "Marketing" },
    { id: 3, name: "Sophia", title: "CFO", department: "Business" },
    { id: 4, name: "Sarah", title: "CTO", department: "Engineering" },
    { id: 5, name: "Jude", title: "Art Director", department: "Marketing" },
    { id: 6, name: "Ryan", title: "Frontend Dev", department: "Engineering" },
  ];
  const [inputBuscador, setInputBuscador] = useState("");
  const [empleados, setEmpleados] = useState(empleadosOriginales);


const manejarCambioInput = (e) => {
  const valorInput = e.target.value;
  setInputBuscador(valorInput);

  if (valorInput.trim() === "") {
    setEmpleados(empleadosOriginales);
  } else {
    const empleadosFiltrados = empleadosOriginales.filter((empleado) =>
      empleado.name.toLowerCase().includes(valorInput.toLowerCase())
    );
    setEmpleados(empleadosFiltrados);
  }
};


  return (
    <>
      <Container className="my-3 ">
        <h3 className="mb-3 text-center text-light ">Lista de empleados</h3>
        <div className="text-end">
          <button className="btn btn-warning">
            <Link to={"/"} className="text-decoration-none text-black">
              {" "}
              ⬅️Volver{" "}
            </Link>
          </button>
        </div>
        <div>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Busca el empleado"
                className="my-3"
                value={inputBuscador}
                onChange={manejarCambioInput}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex justify-content-center">
          <ListGroup className="border border-primary  justify-content-center">
            {empleados.map((empleado, index) => {
              return (
                <ListGroup.Item
                  className="p-5"
                  action
                  variant="success"
                  key={index}
                >
                  <Row>
                    <Col lg={4} md={4} sm={4}>
                      <img
                        src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=r${empleado.name}`}
                        alt="avatar"
                        className="img-fluid"
                      />
                    </Col>
                    <Col lg={8} md={8} sm={8}>
                      <p className="fw-semibold"> {empleado.name}</p>
                      <div className="d-flex">
                        <p className="me-2 p-2 ">{empleado.title} </p>
                        <p className="color-title rounded p-2 text-white fw-semibold">
                          {empleado.department}{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Container>
    </>
  );
};

export default EmpleadoList;
