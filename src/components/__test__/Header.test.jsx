import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

test("Header should render", () => {
  render(<Header />);
});

test("Header should contain correct HTML", () => {
  const { container } = render(<Header />);
  const expectedHTML = '<h1 role="heading">Welcome to our test site</h1>';
  expect(container).toContainHTML(expectedHTML);
});
