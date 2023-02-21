import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { App, action } from "./App";

describe("App", () => {
  it("should show thank you after form submission", async () => {
    const routes = [
      {
        path: "/",
        element: <App />,
        action: action,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const nameInput = screen.getByLabelText("Name:");
    await userEvent.type(nameInput, "test");

    const saveButton = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveButton);

    expect(router.state.location.pathname).toBe("/thankyou");
  });
});
