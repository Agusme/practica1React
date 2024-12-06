import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Contador = () => {
const [contador, setContador]= useState(0)
const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert("El valor mínimo es 0");
    }
  };

const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    } else {
      alert('Alcanzaste el límite');
    }
  };
const reiniciar=()=>{
setContador(0)
}
    return (
        <>
        <h2  className="text-white  my-3">Contador de números</h2>
        <div className=" py-5 bg-success">
            <h3 className="text-center"> 
                {contador} </h3>
            <div className="d-flex text-center justify-content-around ">
                <button className="btn btn-warning fw-bold"  onClick={restar}>-</button>
                <button className="btn btn-warning fw-bold" onClick={sumar}>+</button>
            </div>
        </div>
        <div className="d-flex my-4 justify-content-center  justify-content-between">
            <Button className="btn btn-primary" onClick={reiniciar}>Reiniciar</Button>
    <button className="btn btn-warning"> <Link to={'/'} className="text-decoration-none text-dark">◀️Volver</Link></button>
        </div>
        </>
    );
};

export default Contador;