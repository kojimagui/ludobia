import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render component", () => {
  render(<App />);
  const linkElement = screen.getByText("Digite o novo nome da loja aqui:");
  expect(linkElement).toBeInTheDocument();
});
