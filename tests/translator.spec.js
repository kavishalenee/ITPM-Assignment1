const { test } = require("@playwright/test");

test("Positive case sample", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/");

  // Input box = first textarea
  const inputBox = page.locator("textarea").first();

  // Output box = second textarea (Tamil output)
  const outputBox = page.locator("textarea").nth(1);

  // Type input
  await inputBox.fill("vanakkam eppadi irukka?");

  // Wait for auto translation
  await page.waitForTimeout(3000);

  // Read Tamil output
  const actual = await outputBox.inputValue();

  console.log("Tamil Output:", actual);
});
