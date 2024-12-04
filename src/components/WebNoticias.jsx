/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WebNoticias = () => {

  const apiKey = "dc31507cee9c482f80955cce75597de1";
  const baseUrl = "https://newsapi.org/v2/top-headlines";

  const [newsByCountry, setNewsByCountry] = useState([]);
  const [newsByCategory, setNewsByCategory] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categorias, setCategorias] = useState("");
  const [pais, setPais] = useState("");

  const getNewsByCategory = async (category) => {
    const url = `${baseUrl}?category=${category}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "ok") {
        setNewsByCategory(data.articles);
      } else {
        throw new Error("Error fetching news");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getNewsByCountry = async (country) => {
    const url = `${baseUrl}?country=${country}&apiKey=${apiKey}`;
    console.log("Fetching news for country:", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        setNewsByCountry(data.articles);
      } else {
        throw new Error("Error fetching news by country");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const filterNews = () => {
    if (!pais) {
      setFilteredArticles(newsByCategory);
    } else {
      const filteredByCountry = newsByCountry.filter((newCountry) =>
        newsByCategory.some((newCategory) => newCategory.title === newCountry.title)
      );
      setFilteredArticles(filteredByCountry);
    }
  };

  const handleCategoria = async (e) => {
    const nuevaCategoria = e.target.value;
    setCategorias(nuevaCategoria);
    await getNewsByCategory(nuevaCategoria);
    filterNews();
  };

  const handlePais = async (e) => {
    const nuevoPais = e.target.value;
    setPais(nuevoPais);
    await getNewsByCountry(nuevoPais);
    filterNews();
  };

  useEffect(() => {
    filterNews();
  }, [newsByCountry, newsByCategory]); 


  return (
    <div>
      <h3 className="text-white text-center my-3">Noticias</h3>
      <div className="border-bottom"></div>
      <div className="m-5">
        <Form className="border  p-3">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2" className="text-white">
              Buscar por categoría:{" "}
            </Form.Label>

            <Col sm="10">
              <Form.Select
                aria-label="Default select example"
                value={categorias}
                onChange={handleCategoria}
              >
                <option>Opciones</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnologia</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2" className="text-white">
              Buscar por País:{" "}
            </Form.Label>

            <Col sm="10">
              <Form.Select onChange={handlePais} value={pais}>
                <option value="">Seleccionar país</option>
                <option value="ae">Emiratos Árabes Unidos (AE)</option>
                <option value="at">Austria (AT)</option>
                <option value="be">Bélgica (BE)</option>
                <option value="bg">Bulgaria (BG)</option>
                <option value="br">Brasil (BR)</option>
                <option value="ca">Canadá (CA)</option>
                <option value="ch">Suiza (CH)</option>
                <option value="cn">China (CN)</option>
                <option value="co">Colombia (CO)</option>
                <option value="cz">República Checa (CZ)</option>
                <option value="de">Alemania (DE)</option>
                <option value="eg">Egipto (EG)</option>
                <option value="fr">Francia (FR)</option>
                <option value="gb">Reino Unido (GB)</option>
                <option value="gr">Grecia (GR)</option>
                <option value="hk">Hong Kong (HK)</option>
                <option value="hu">Hungría (HU)</option>
                <option value="id">Indonesia (ID)</option>
                <option value="ie">Irlanda (IE)</option>
                <option value="il">Israel (IL)</option>
                <option value="in">India (IN)</option>
                <option value="it">Italia (IT)</option>
                <option value="jp">Japón (JP)</option>
                <option value="kr">Corea del Sur (KR)</option>
                <option value="lt">Lituania (LT)</option>
                <option value="lv">Letonia (LV)</option>
                <option value="ma">Marruecos (MA)</option>
                <option value="mx">México (MX)</option>
                <option value="ng">Nigeria (NG)</option>
                <option value="nl">Países Bajos (NL)</option>
                <option value="no">Noruega (NO)</option>
                <option value="ph">Filipinas (PH)</option>
                <option value="pl">Polonia (PL)</option>
                <option value="pt">Portugal (PT)</option>
                <option value="ro">Rumania (RO)</option>
                <option value="ru">Rusia (RU)</option>
                <option value="sa">Arabia Saudita (SA)</option>
                <option value="se">Suecia (SE)</option>
                <option value="sg">Singapur (SG)</option>
                <option value="sk">Eslovaquia (SK)</option>
                <option value="th">Tailandia (TH)</option>
                <option value="tr">Turquía (TR)</option>
                <option value="tw">Taiwán (TW)</option>
                <option value="ua">Ucrania (UA)</option>
                <option value="us">Estados Unidos (US)</option>
                <option value="ve">Venezuela (VE)</option>
                <option value="za">Sudáfrica (ZA)</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Form>
        <Row>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((articles, index) => (
              <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={
                      articles.urlToImage || "https://via.placeholder.com/150"
                    }
                    className="img-fluid alturaImg"
                  />
                  <Card.Body>
                    <Card.Title>{articles.title}</Card.Title>
                    <Card.Text>{articles.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={articles.url}
                      target="_blank"
                    >
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No hay noticias en esta categoría</p>
          )}
        </Row>
      </div>
      <div className="text-end">
        <button className="btn btn-warning">
          <Link to={"/"} className="text-black text-decoration-none">
            ⬅️Volver
          </Link>
        </button>
      </div>
    </div>
  );
};

export default WebNoticias;
