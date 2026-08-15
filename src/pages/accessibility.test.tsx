import { cleanup, render, screen } from "@testing-library/react";
import axe from "axe-core";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

afterEach(cleanup);

async function expectNoAxeViolations() {
  const results = await axe.run(document.body);
  expect(results.violations.map(({ id, nodes }) => ({ id, nodes: nodes.length }))).toEqual([]);
}

describe("public page accessibility", () => {
  it("gives the homepage a clear document structure and labelled form", async () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByLabelText(/Full name/)).toBeRequired();
    expect(screen.getByLabelText(/Email/)).toBeRequired();
    expect(screen.getByLabelText(/Company name/)).toBeRequired();
    expect(screen.getByLabelText(/Message/)).toBeRequired();
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toHaveTextContent("How It Works");
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toHaveTextContent("About");
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((node) => node.textContent)
    ).toEqual([
      "Features You’ll Love And Use Every Day",
      "Simple for employees. Controlled for employers.",
      "Redefining Salary Access For India’s Workforce",
      "Built for employees, employers, and partners",
      "No risk. No overhead. Real workforce value.",
      "Built for payroll teams, finance teams, and founders.",
      "The founding team behind MobPae",
      "Ready to offer salary access at work?",
      "Everything you need to know.",
      "Request a MobPae demo",
    ]);
    await expectNoAxeViolations();
  });
});
