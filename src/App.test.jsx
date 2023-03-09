import { render, fireEvent, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "./__mocks__/placeholderApiMock";
import App from "./App";

// We set up a fake
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("<App /> should render", () => {
  render(<App />);
});

describe("<App />", () => {
  test("show loader if imageId is null", async () => {
    const { container, getByText, getByRole } = render(<App />);
    const loaderElement = getByText(/Loading.../i);
    const buttonToClick = getByRole("button");

    expect(container).toHaveTextContent("Loading...");
    fireEvent.click(buttonToClick);
    await waitFor(() => {
      expect(loaderElement).not.toBeInTheDocument();
    });
  });

  test("should show a img tag with src and alt text", async () => {
    const { container, getByRole } = render(<App />);
    const buttonToClick = getByRole("button");

    const htmlToMatch1 =
      '<img src="https://myfakecloud.com/photo1" alt="photo 1" />';
    const htmlToMatch2 =
      '<img src="https://myfakecloud.com/photo2" alt="photo 2" />';

    // First click sets the image to photo 1
    fireEvent.click(buttonToClick);
    await waitFor(() => {
      expect(container).toContainHTML(htmlToMatch1);
    });

    // Second click sets the image to photo 2
    fireEvent.click(buttonToClick);
    await waitFor(() => {
      expect(container).toContainHTML(htmlToMatch2);
    });
  });
});
