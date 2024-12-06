import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="my-3 text-white"> Practica de React♾️</h1>
        <h3 className="text-white">  Bienvenido a la práctica de React </h3>
        <p className="text-white">
        En cada uno de los ejercicios que realicé, aplico conocimientos clave. Comencé con lo más sencillo y fui avanzando hacia conceptos más complejos. Lo más importante es que cada ejercicio lo hice con plena conciencia, permitiéndome comprender a fondo y afianzar mis conocimientos.        </p>
        <ListGroup>
          <ListGroup.Item>
            <Link to={"/contador"} className="text-decoration-none">
              Contador
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/lista"} className="text-decoration-none">
              Lista de Tareas
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/practica"} className="text-decoration-none">
              Practica
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/registro"} className="text-decoration-none">
              Registro
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/empleados"} className="text-decoration-none">
              Lista de Empleados
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/web-noticias"} className="text-decoration-none">
              Web de Noticias
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/web-clima"} className="text-decoration-none">
              Web del Clima
            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/blog-recetas"} className="text-decoration-none">
Blog de Recetas            </Link>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/carrito"} className="text-decoration-none">
Carrito de compra          </Link>{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default Home;
