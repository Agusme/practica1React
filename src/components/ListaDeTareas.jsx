import { useState } from "react";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListaDeTareas = () => {
  const [tarea, setTarea] = useState([]);
  const [inputTarea, setInputTarea] = useState("");
  const [tareaAEditar, setTareaAEditar] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false); 

  const manejarCambio = (event) => {
    setInputTarea(event.target.value);

  };
  const agregarTarea = (event) => {
    event.preventDefault();
    if (inputTarea.trim()) {
      setTarea([...tarea, inputTarea]);
      setInputTarea("");
    }
  };
  const editarTarea =(tareaParaEditar)=>{
    setModoEdicion(true),
    setTareaAEditar(tareaParaEditar)
    setInputTarea(tareaParaEditar);

  }
  const guardarEdicion = (event) => {
    event.preventDefault();
    setTarea(
      tarea.map((tar) =>
        tar === tareaAEditar ? inputTarea : tar 
      )
    );
    setModoEdicion(false);
    setTareaAEditar(null);
    setInputTarea("");
  };
  const eliminarTarea = (tareaAEliminar) => {
    setTarea(tarea.filter((tar) => tar !== tareaAEliminar));
  };
  return (
    <div className="my-5">
      <h2 className="text-white">Lista de Tareas📓</h2>
      <div>
      <Form className="my-3" onSubmit={modoEdicion ? guardarEdicion : agregarTarea}>
      <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="agrega la tarea"
              onChange={manejarCambio}
              value={inputTarea} 

            />
          </Form.Group>
          <div className="text-end">
          <Button type="submit">{modoEdicion ? "Guardar Cambios" : "Agregar Tarea"}</Button>
          </div>
        </Form>
        <ListGroup>
          { tarea.length <= 0 ? <p className="text-white text-center display-6"> No hay tareas por hacer</p> : 
          tarea.map((tar, index) => (
            <ListGroupItem key={index}>
              {tar}
              <div className="text-end ">
              <Button onClick={() => eliminarTarea(tar)} className= "btn-danger mx-1" type="submit">Eliminar</Button>
              <Button onClick={() => editarTarea(tar)} className= "btn-warning" type="submit">Editar</Button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        <div className="text-end mt-3">
        <button className="btn btn-success text-bg-light"><Link to={'/'} className="text-decoration-none">◀️Volver </Link></button>

        </div>
      </div>
    </div>
  );
};

export default ListaDeTareas;
