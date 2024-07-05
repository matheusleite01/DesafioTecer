import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

const handleButtonClick = jest.fn();

describe("Buttom component", () => {
  it("Should render component", () => {
    render(<Button>button</Button>);

    const button = screen.getByRole("button", { name: /button/i });

    expect(button).toBeInTheDocument();
  });

  it("Should calls handleClick when is passed", () => {
    render(<Button handleClick={handleButtonClick}>button</Button>);

    const button = screen.getByRole("button", { name: /button/i });

    fireEvent.click(button);

    expect(handleButtonClick).toHaveBeenCalled();
    
  });
});
