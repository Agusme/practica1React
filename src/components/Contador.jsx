import { useState } from "react";
import { Link } from "react-router-dom";

const Contador = () => {
const [contador, setContador]= useState(0)

const restar =()=>{
    setContador(contador-1)
}

const sumar =()=>{
    setContador(contador+1)
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
        <div className="text-end">
    <button className="btn btn-warning mt-3"> <Link to={'/'} className="text-decoration-none text-dark">◀️Volver</Link></button>
        </div>
        </>
    );
};

export default Contador;