import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import AddInput from "../AddInput";

const mockFun = jest.fn();

describe("addinput", function () {
  test("checking input", function () {
    // ARRANGE
    render(<AddInput todos={[]} setTodos={() => {}} />);
    screen.debug();
    // ACT
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "some text" } });

    expect(inputElement.value).toBe("some text");
  });

  test("clicking on add button calling setTodos", function () {
    // ARRANGE
    render(<AddInput todos={[]} setTodos={mockFun} />);

    // ACT
    const addBtn = screen.getByRole("button");
    fireEvent.click(addBtn);

    // ASSERT
    expect(mockFun).toBeCalled();
  });
});
