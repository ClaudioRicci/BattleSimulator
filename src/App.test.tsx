import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Battle Simulator Header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Battle Simulator/i);
  expect(linkElement).toBeInTheDocument();
});
