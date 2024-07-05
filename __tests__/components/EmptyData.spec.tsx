import EmptyData from "@/components/EmptyData";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { toast } from "sonner";

jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("EmptyData component", () => {
  it("Should render component", () => {
    render(<EmptyData error="error" />);

    const textData = screen.getByText(/No Data Found/i);

    expect(textData).toBeInTheDocument();
  });
  it("should display an error toast when error prop is provided", () => {
    const errorMessage = "An error occurred";
    render(<EmptyData error={errorMessage} />);

    expect(toast.error).toHaveBeenCalledWith(errorMessage);
  });
});
