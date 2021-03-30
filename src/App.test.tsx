/*
 * @Author: kingford
 * @Date: 2021-03-30 12:31:03
 * @LastEditTime: 2021-03-30 12:35:30
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
