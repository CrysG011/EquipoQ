// import { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import ImgFormAlt from "../assets/form2.svg";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  console.log(errors);

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Formulario enviado:", formData);
  // };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Formulario enviado correctamente");
    reset();
  });

  return (
    <Container className="m-auto border rounded shadow bg-white p-5">
      <Row>
        <Col sm={4} className="d-flex">
          <Image src={ImgFormAlt} className="mx-auto d-block w-100 " />
        </Col>

        <Col sm={8}>
          <Form
            // onSubmit={handleSubmit}
            onSubmit={onSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  //required
                  autoFocus
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "El nombre es requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener al menos 2 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "El nombre debe tener máximo 20 caracteres",
                    },
                  })}
                />
                {errors.firstName && (
                  <span className="text-danger">
                    {errors.firstName.message}
                  </span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su apellido"
                  name="lastName"
                  // value={formData.lastName}
                  // onChange={handleChange}
                  //required
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "El apellido es requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener al menos 2 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "El apellido debe tener máximo 20 caracteres",
                    },
                  })}
                />
                {errors.lastName && (
                  <span className="text-danger">{errors.lastName.message}</span>
                )}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                //required
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Correo no válido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingrese su teléfono"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
                //required
                {...register("phone", {
                  required: {
                    value: true,
                    message: "El teléfono es requerida",
                  },
                  minLength: {
                    value: 6,
                    message: "El teléfono debe tener al menos 6 números",
                  },
                  maxLength: {
                    value: 10,
                    message: "El teléfono debe tener máximo 10 números",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  //required
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El correo es requerido",
                    },
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="confirmPassword">
                <Form.Label>Confirmar Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme su contraseña"
                  name="confirmPassword"
                  // value={formData.confirmPassword}
                  // onChange={handleChange}
                  //required
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "La confirmación del correo es requerido",
                    },
                    validate: (value) =>
                      value === watch("password") ||
                      "Las contraseñas no coinciden",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-danger">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </Form.Group>
            </Row>

            <Button
              variant="outline-primary"
              className="w-100 mt-2"
              type="submit"
            >
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
