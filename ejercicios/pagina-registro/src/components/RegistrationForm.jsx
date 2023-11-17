import { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import ImgFormAlt from '../assets/form2.svg';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí la lógica para enviar los datos del formulario al servidor o hacer otras acciones necesarias.
    console.log("Formulario enviado:", formData);
  };

  return (
    <Container className="m-auto border rounded shadow bg-white p-5">
      <Row>
        <Col sm={4} className="d-flex">
          <Image src={ImgFormAlt} className="mx-auto d-block w-100 " />
        </Col>

        <Col sm={8}>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su apellido"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control 
                type="tel"
                placeholder="Ingrese su teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required  
                />
              </Form.Group>

              <Form.Group as={Col} controlId="confirmPassword">
                <Form.Label>Confirmar Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="Confirme su contraseña"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required  
                />
              </Form.Group>
            </Row>

            <Button variant="outline-primary" className="w-100 mt-2" type="submit">
                Registrarse
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;