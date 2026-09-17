import { expect, test } from "@playwright/test";

test("shows the manager workflow and its human decision gate", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Manager workflow starter");
  await page.getByRole("button", { name: "Review request" }).click();

  await expect(page.getByRole("heading", { name: "Would you accept this work?" })).toBeFocused();
  await expect(page.getByText("Human owner is named")).toBeVisible();
});
