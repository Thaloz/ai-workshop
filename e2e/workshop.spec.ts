import { expect, test } from "@playwright/test";

test("reviews and approves a client follow-up plan", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Client happiness");
  await page.getByRole("button", { name: "Review Riverbank Health" }).click();
  await expect(page.getByLabel("Riverbank Health review")).toBeFocused();
  await expect(page.getByText("Average response time increased")).toBeVisible();
  await page.getByRole("button", { name: "Approve follow-up plan" }).click();
  await expect(page.getByRole("status")).toHaveText("Plan approved. No client message was sent.");
  await expect(
    page.getByText("Riverbank Health plan approved for manager follow-up"),
  ).toBeVisible();
});
