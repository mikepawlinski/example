import { screen, render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText("hi")).toBeInTheDocument();
  });
});
