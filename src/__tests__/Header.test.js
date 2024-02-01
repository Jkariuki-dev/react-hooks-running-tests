import "@testing-library/jest-dom";
import { render, received } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  expect(received.queryByText("hello from the Header!")).toBeInTheDocument();
});
