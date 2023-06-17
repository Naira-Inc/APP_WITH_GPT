import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Root Application Tests:", () => {
  test("renders App", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass("App");
  });
});
