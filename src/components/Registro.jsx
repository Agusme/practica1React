import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registro = () => {
  const [name, setName] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [email, setEmail] = useState("");
  const [errorContrasenia, setErrorContrasenia] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [formValide, setFormValide] = useState(false);
  const [formData, setFormData] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const validacionContrasenia = () => {
    if (contrasenia.length < 8) {
      setErrorContrasenia("La contraseña debe tener al menos 8 caracteres");
    } else if (!/\d/.test(contrasenia)) {
      // Check if there is at least one number
      setErrorContrasenia("La contraseña debe tener al menos un número");
    } else {
      setErrorContrasenia(""); // Clear the error if validation passes
    }
  };

  const validacionEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErrorEmail("El correo no es válido");
    } else {
      setErrorEmail("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validacionContrasenia();
    validacionEmail();
    if (!errorEmail && !errorContrasenia && name) {
      setFormValide(true);
      alert("Formulario Enviado con exito ✅");
      setFormData({ name, email, contrasenia });
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      setFormValide(false);
      alert("Corrige los errores antes de enviar");
    }
  };
  console.log(formData);

  console.log("datos enviados" + formValide);
  return (
    <>
    <h3 className="my-3 text-center">Formulario de Registro: </h3>
      <Form className="bg-secondary p-5" onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formId">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
          <Form.Text className="text-muted">El nombre es obligatorio</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
              validacionEmail();
            }}
            value={email}
            required
          />
          {errorEmail ? (
            <Form.Text className="text-danger">{errorEmail}</Form.Text>
          ) : (
            <Form.Text className="text-muted">
No compartiremos el email con nadie mas            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setContrasenia(event.target.value);
              validacionContrasenia();
            }}
            value={contrasenia}
            required
          />
          <Form.Text className="text-muted">
            {errorContrasenia && (
              <p className="text-danger">{errorContrasenia} </p>
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!name || errorEmail || errorContrasenia}
        >
          Submit
        </Button>
      </Form>
      {showMessage && (
        <p className="text-success">Formulario enviado exitosamente</p>
      )}
      <div className="text-end my-2">
        <button className="btn btn-warning">
          <Link to={"/"} className="text-decoration-none text-dark">
            {" "}
            ⬅️Volver
          </Link>
        </button>
      </div>{" "}
    </>
  );
};

export default Registro;
