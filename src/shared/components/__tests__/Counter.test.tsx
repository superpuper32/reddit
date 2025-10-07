import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "@/app/store/index";
import Counter from "../Counter";

const renderWithProvider = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Counter Component", () => {
  test("renders counter with initial state", () => {
    renderWithProvider(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("increments counter when + button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProvider(<Counter />);

    const incrementButton = screen.getByText("+");
    await user.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrements counter when - button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProvider(<Counter />);

    const decrementButton = screen.getByText("-");
    await user.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
