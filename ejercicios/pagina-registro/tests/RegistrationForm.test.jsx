import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Para extender las expectativas de Jest
import RegistrationForm from "../src/components/RegistrationForm";

test("renders RegistrationForm component", () => {
  render(<RegistrationForm />);

  // Verifica que el formulario se renderice correctamente
  expect(screen.getByTestId("registration-form")).toBeInTheDocument();
});

test("submits form with valid data", () => {
  render(<RegistrationForm />);

  // Simula la entrada de datos en el formulario
  fireEvent.change(screen.getByLabelText(/Nombre/i), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByLabelText(/Teléfono/i), {
    target: { value: "1234567890" },
  });

  // Simula el envío del formulario
  fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

  // Verifica que la función de envío se haya llamado con los datos correctos
  expect(mySubmitFunction).toHaveBeenCalledWith({
    name: "John",
    phone: "1234567890",
  });
});
