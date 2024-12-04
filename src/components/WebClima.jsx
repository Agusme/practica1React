import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WebClima = () => {
const [lugar, setLugar]= useState('');
const [clima , setClima]= useState(null)
const getLugar = async (e) => {
    e.preventDefault();
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${lugar}&appid=0c89f6a39d19f18c760e8065a09eb985`;

    try {
      const response = await fetch(url);
      const data = await response.json(); 
      console.log("Coordenadas:", data);
      if (data.length > 0) {
        const { lat, lon } = data[0]; 
        getClima(lat, lon); 
        setLugar('')
      } else {
        console.log("No se encontró el lugar");
      }
   
    } catch (error) {
      console.error("Error al obtener las coordenadas:", error);
    }
  };
  const getClima = async (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c89f6a39d19f18c760e8065a09eb985&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json(); 
      console.log("Clima:", data);
      if (data && data.main) {
        setClima(data); // Si hay datos del clima, actualizar el estado
        setTimeout(() => {
          setClima(null); // Limpiar los datos del clima después de 5 segundos
        }, 5000);
      } else {
        console.log("No se pudo obtener el clima");
        setClima(null); // Asegurarse de que el estado del clima sea nulo si no hay datos
      }

    } catch (error) {
      console.error("Error al obtener el clima:", error);
    }
  };



    return (
    <>
   <div className="d-flex justify-content-center ">
   <Form className="border my-5 p-3 w-75 rounded" onSubmit={getLugar}>
        <div className="text-center text-white">
          <h3 className="my-3">Web del clima ☀️🌤️🌦️🌧️🌈</h3>
        </div>
        <Form.Group as={Row} className="my-5 justify-content-between " controlId="formPlaintextPassword">
          <Form.Label column sm="5" className="text-white">
            <h5>¿De donde quieres saber el clima?</h5>{" "}
          </Form.Label>

          <Col sm="5">
            <Form.Control  value={lugar} onChange={(e)=>setLugar(e.target.value)}></Form.Control>
          </Col>
        </Form.Group>
        {clima && (
        <div className="text-center text-white">
          <h5>Clima en {clima.name}, {clima.sys.country}</h5>
          <p>Temperatura: {clima.main.temp}°C</p>
          <p>Descripción: {clima.weather[0].description}</p>
          <p>Humedad: {clima.main.humidity}%</p>
        </div>
      )}
      </Form>
   </div>
   <div className="text-end">
   <Button className="btn btn-warning"><Link to={'/'} className="text-decoration-none text-black">⬅️Volver</Link></Button>

   </div>
    </>
  );
};

export default WebClima;
