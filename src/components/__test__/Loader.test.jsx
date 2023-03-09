import { render, screen } from "@testing-library/react";
import { Loader } from "../Loader";

test("Should", () => {
  render(<Loader />);
});

test("<Loader /> should show wanted message", () => {
  const { getByRole } = render(<Loader message="Hello i am loading" />);
  const paragraphTag = getByRole("dialog");
  expect(paragraphTag).toHaveTextContent("Hello i am loading");
});
