// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

//import testing component
import Header from "../Header";

test("render and displays todo text", async () => {
  const title = "sample title";
  // Arrange
  render(<Header title={title} />);

  // screen.debug();

  // assert that the title message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.getByTestId("randomName")).toHaveTextContent(title);
});
