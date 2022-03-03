import { render, screen } from "@testing-library/react";
import App from "./App";

test("New user form is visible", () => {
  render(<App />);
  expect(screen.getByText(/add new user/i)).toBeVisible();
});
