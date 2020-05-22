import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders text 'Hi'", () => {
  const { getByText } = render(<App />);
  const greeting = getByText(/hi/i);
  expect(greeting).toBeInTheDocument();
});
