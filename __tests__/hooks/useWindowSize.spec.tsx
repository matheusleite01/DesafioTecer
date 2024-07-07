import React from "react";
import { render, screen } from "@testing-library/react";
import useWindowSize from "@/hooks/useWindowSize";

const resizeWindow = (width: number, height: number) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};

const TestComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <span data-testid="width">{width}</span>
      <span data-testid="height">{height}</span>
    </div>
  );
};

describe("useWindowSize", () => {
  it("should return the initial window size", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("width").textContent).toBe(
      String(window.innerWidth),
    );
    expect(screen.getByTestId("height").textContent).toBe(
      String(window.innerHeight),
    );
  });

  it("should update window size on resize", () => {
    render(<TestComponent />);
    resizeWindow(1024, 768);

    expect(screen.getByTestId("width").textContent).toBe("1024");
    expect(screen.getByTestId("height").textContent).toBe("768");
  });
});
