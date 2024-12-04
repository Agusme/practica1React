import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogDeRecetas = () => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [recetas, setRecetas] = useState([]);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  const [recetaEditada, setRecetaEditada] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (receta) => { setRecetaSeleccionada(receta); setShow(true); };

  console.log(nombre);
  console.log(ingredientes);
  console.log(descripcion);

  useEffect(() => {
    const recetasGuardadas = localStorage.getItem("recetas");
    if (recetasGuardadas) {
      setRecetas(JSON.parse(recetasGuardadas));
    }
  }, []);

  const agregarReceta = (e) => {
    e.preventDefault();
    if (nombre && ingredientes && descripcion) {
      const nuevaReceta = { nombre, ingredientes, descripcion };
      const nuevasRecetas = [...recetas, nuevaReceta];
      setRecetas(nuevasRecetas);

      localStorage.setItem("recetas", JSON.stringify(nuevasRecetas));
      limpiarFormulario();
    } else {
      alert("Por favor, completa todos los campos antes de agregar la receta.");
    }
  };
  const limpiarFormulario = () => {
    setNombre("");
    setIngredientes("");
    setDescripcion("");
  };
  console.log(recetas);

  const eliminarReceta = (recetaEliminada) => {
    const filtraReceta = recetas.filter(
      (receta) => receta.nombre !== recetaEliminada
    );
    console.log(filtraReceta);
    setRecetas(filtraReceta);
    localStorage.setItem("recetas", JSON.stringify(filtraReceta));
  };

  const editarReceta = (recetaAEditar, index) => {
    setModoEdicion(true);
    setRecetaEditada({ ...recetaAEditar, index });
    setNombre(recetaAEditar.nombre);
    setIngredientes(recetaAEditar.ingredientes);
    setDescripcion(recetaAEditar.descripcion);
  };
  const guardarEdicion = (e) => {
    e.preventDefault();

    const recetasActualizadas = recetas.map((receta, i) =>
      i === recetaEditada.index ? { nombre, ingredientes, descripcion } : receta
    );
    setRecetas(recetasActualizadas);
    localStorage.setItem("recetas", JSON.stringify(recetasActualizadas));
    limpiarFormulario();
    setRecetaEditada("");
    setModoEdicion(false);
  };

  return (
    <>
      <div className="text-light my-5">
        <h3 className="text-center">Bienvenidos al Blog de Recetas 🥞🥚🍳🍠</h3>
        <p className="text-center">
          Podrás compartir y también encontrar las mejores recetas para lucirte
          con tus seres queridos
        </p>
        <Row className="d-flex justify-content-around my-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="border  border-3 py-5 px-3 rounded "
          >
            <h5>Escribe tu receta favorita ⭐</h5>{" "}
            <div className="border-bottom border-3 "></div>
            <Form onSubmit={modoEdicion ? guardarEdicion : agregarReceta}>
              <Form.Group
                as={Row}
                className="my-5 justify-content-between "
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="5" className="text-white">
                  Nombre:
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="my-5 justify-content-between "
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="5" className="text-white">
                  Ingredientes :
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    value={ingredientes}
                    onChange={(e) => setIngredientes(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="my-5 justify-content-between "
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="5" className="text-white">
                  Paso a paso :
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Button
                type="submit"
                className="btn btn-warning w-100 mt-3 text-light"
              >
                {modoEdicion ? "Guardar Cambios" : "Agregar Receta"}{" "}
              </Button>{" "}
            </Form>
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="border  border-3 py-5  px-3 rounded"
          >
            <h5> Recetas compartidas 🍳</h5>{" "}
            <div className="border-bottom border-3 "></div>
            <div>
              {recetas &&
                recetas.map((receta, index) => (
                  <li key={index}>
<Button onClick={() => handleShow(receta)} className="btn btn-info">
  {receta.nombre}
</Button>          
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarReceta(receta.nombre)}
                    >
                      {" "}
                      x{" "}
                    </button>{" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => editarReceta(receta, index)}
                    >
                      ✏️
                    </button>
                  </li>
                ))}
            </div>
          </Col>
        </Row>
      </div>
      <div className="text-end">
        <Button className="btn btn-warning">
          <Link to={"/"} className="text-decoration-none text-black">
            ⬅️Volver
          </Link>
        </Button>
      </div>

      {show &&  recetaSeleccionada&& (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles de la receta</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h5>
              {recetaSeleccionada.nombre}
            </h5>
            <p><strong>Ingredientes:</strong> {recetaSeleccionada.ingredientes}</p>
  <p><strong>Paso a paso:</strong> {recetaSeleccionada.descripcion}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default BlogDeRecetas;
