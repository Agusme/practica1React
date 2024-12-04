import "./App.css";
/* import Contador from "./components/Contador";
 */
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contador from "./components/Contador";
import Home from "./components/Home";
import ListaDeTareas from "./components/ListaDeTareas";
import PracticaEvent from "./components/PracticaEvent";
import Registro from "./components/Registro";
import EmpleadoList from "./components/EmpleadoList";
import WebNoticias from "./components/WebNoticias";
import WebClima from "./components/WebClima";
import BlogDeRecetas from "./components/BlogDeRecetas";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contador" element={<Contador/>} />
          <Route path="/lista" element={<ListaDeTareas/>} />
          <Route path="/practica" element={<PracticaEvent/>} />
          <Route path="/registro" element={<Registro />}  />
          <Route path="/empleados" element={<EmpleadoList/>} />
          <Route path="/web-noticias" element={<WebNoticias/>} />
          <Route path="/web-clima" element={<WebClima/>} />
          <Route path="/blog-recetas" element={<BlogDeRecetas/>} />

        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
