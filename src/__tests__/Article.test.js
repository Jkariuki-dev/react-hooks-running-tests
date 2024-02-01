import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'Hello from the header'", () => {
  render(<Header />);

  expect(received.queryByText("Hello from the header")).toBeInTheDocument();
});
