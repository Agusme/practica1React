/* import { useState } from "react";
import { Form } from "react-bootstrap";

const PracticaEvent = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [inputAlumno, setInputAlumno] = useState("");
  const [alumnoEditado, setAlumnoEditado] = useState("");
  const [nuevoValorAlumno, setNuevoValorAlumno] = useState(""); // Estado para el nuevo valor

  const manejadorDeEvento = (event) => {
    setInputAlumno(event.target.value);
    console.log(event.target.value);
  };

  const sumarAlummno = (event) => {
    event.preventDefault();
    if (inputAlumno.trim()) {
      setAlumnos([...alumnos, inputAlumno]);
      setInputAlumno("");
    }
  };
  const eliminar = (alumnoEliminado) => {
    setAlumnos(alumnos.filter((alumno) => alumno !== alumnoEliminado));
  };
  const editar = (alumno) => {
    setAlumnoEditado(alumno); // Establecer el alumno que se va a editar
    setNuevoValorAlumno(alumno); // Establecer el valor inicial en el input
  };

  const ManejoDeAlumnoAEditar = (e) => {
    setNuevoValorAlumno(e.target.value); // Actualizar el valor del alumno editado
  };

  const guardarEdicion = () => {
    setAlumnos(
      alumnos.map((alumno) =>
        alumno === alumnoEditado ? nuevoValorAlumno : alumno
      )
    );
    setAlumnoEditado(""); // Limpiar el alumno editado
    setNuevoValorAlumno(""); // Limpiar el nuevo valor
  };

  return (
    <div>
      <h1>Lista de alumnos</h1>
      <Form onSubmit={sumarAlummno}>
        <input type="text" onChange={manejadorDeEvento} value={inputAlumno} />
      </Form>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            {alumno}{" "}
            <button
              onClick={() => {
                eliminar(alumno);
              }}
            >
              x
            </button>{" "}
            <button
              onClick={() => {
                editar(alumno);
              }}
            >
              Editar
            </button>
            {alumno === alumnoEditado && ( // Solo mostrar el campo de edición si el alumno está siendo editado
              <>
                <input
                  type="text"
                  value={nuevoValorAlumno} // Mostrar el valor editado
                  onChange={ManejoDeAlumnoAEditar} // Actualizar el estado cuando el usuario escribe
                />
                <button onClick={guardarEdicion}>Guardar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticaEvent;
 */

import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PracticaEvent = () => {
  const [aprobados, setAprobados] = useState(["Agustina", "Mariana", "Rita"]);
  const [inputAprobado, setInputAprobado] = useState("");
  const [alumnoAEditar, setAlumnoAEditar] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [contenidoBoton, setContenidoBoton]= useState('FRASE QUE CAMBIARA')

  const manejadorDeEvento = (e) => {
    setInputAprobado(e.target.value);
  };
  const agregarAprobado = (e) => {
    e.preventDefault();
    setAprobados([...aprobados, inputAprobado]);
    setInputAprobado("");
  };
  const eliminar = (alumnoEliminado) => {
    setAprobados(aprobados.filter((aprobado) => aprobado !== alumnoEliminado));
  };
  const editar = (alumnoEditado) => {
    setModoEdicion(true);
    setAlumnoAEditar(alumnoEditado);
    setInputAprobado(alumnoEditado);
  };
  const guardarEdicion = (e) => {
    e.preventDefault();

    setAprobados(
      aprobados.map((aprobado) =>
        aprobado === alumnoAEditar ? inputAprobado : aprobado
      )
    );
    setModoEdicion(false);
  };
const cambiar =()=>{
  setContenidoBoton((prevContenido) => prevContenido === 'CAMBIAR'?  'Frase que cambia': 'CAMBIAR')
  
}
  return (
   <>
    <div>
      <h1 className="my-5">Lista de aprobados</h1>
      <form onSubmit={modoEdicion ? guardarEdicion : agregarAprobado}>
        <input  type="text" onChange={manejadorDeEvento} value={inputAprobado} />
        <button className="btn btn-primary mx-3" type="submit">
          {modoEdicion ? "Guardar Cambios" : "Enviar"}{" "}
        </button>
      </form>
      <ul className="my-3">
        {aprobados.map((aprobado, index) => (
          <li key={index} className="mt-3">
           <div>
           {aprobado}
            <button onClick={() => eliminar(aprobado)}>Eliminar</button>
            <button onClick={() => editar(aprobado)}>Editar</button>
           </div>
          </li>
        ))}
      </ul>
      
    </div>
    <div className="text-end">

    <button className="btn btn-warning"><Link  to={'/'} className="text-decoration-none text-black">⬅️Volver</Link></button>
   <Button className="btn btn-secondary" onClick={cambiar}> {contenidoBoton} </Button>
    </div>
   </>
  );
};

export default PracticaEvent;
