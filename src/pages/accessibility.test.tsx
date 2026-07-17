import { cleanup, render, screen } from "@testing-library/react";
import axe from "axe-core";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { EmployeesPage } from "./WebsitePages";

afterEach(cleanup);

async function expectNoAxeViolations() {
  const results = await axe.run(document.body, {
    rules: { "color-contrast": { enabled: false } },
  });
  expect(results.violations.map(({ id, nodes }) => ({ id, nodes: nodes.length }))).toEqual([]);
}

describe("public page accessibility", () => {
  it("gives the homepage a clear document structure and labelled form", async () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByLabelText(/Full name/)).toBeRequired();
    expect(screen.getByLabelText(/Work email/)).toBeRequired();
    expect(screen.getByLabelText(/Company name/)).toBeRequired();
    expect(screen.getByLabelText(/Message/)).toBeRequired();
    await expectNoAxeViolations();
  });

  it("gives the employee page one primary heading and a main landmark", async () => {
    render(<MemoryRouter initialEntries={["/employees"]}><EmployeesPage /></MemoryRouter>);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(
      screen.getByAltText(/MobPae employee app dashboard/)
    ).toBeInTheDocument();
    await expectNoAxeViolations();
  });
});
