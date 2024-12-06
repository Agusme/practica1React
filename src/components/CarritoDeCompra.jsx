import { useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";

const CarritoDeCompra = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getProductos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error en el servidor", error);
    }
  };
  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  useEffect(() => {
    getProductos();
  }, []);


  const EliminarDelCarrito=(prodEliminar)=>{
  const filtrado = carrito.filter((carr)=> carr !== prodEliminar)
  setCarrito(filtrado)
  }
 
  return (
    <div>
      <h2 className="text-center text-white my-5">Carrito de Compras 🛒</h2>
      <div>
        <h5 className="text-end bg-white">
          <h5 className="bg-white">
            Productos en el carrito:{" "}
            <Badge bg="success">{carrito.length}</Badge> 🛒
          </h5>
        </h5>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => {
              return (
                <tr key={index}>
                  <td>1</td>
                  <td>{producto.title}</td>
                  <td>{producto.price} </td>
                  <td>
                    <img
                      src={producto.image}
                      alt="imagen producto"
                      className="m-auto img-fluid w-25"
                    />{" "}
                  </td>
                  <td>
                    {" "}
                    <div>
                     
                      <Button
                        className="m-2"
                        onClick={() => agregarCarrito(producto)}
                      >
                        +
                      </Button>
                      <Button
                        className="m-2"
              onClick={()=>EliminarDelCarrito(producto)}
                      >
                     -
                      </Button>
                    </div>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CarritoDeCompra;
