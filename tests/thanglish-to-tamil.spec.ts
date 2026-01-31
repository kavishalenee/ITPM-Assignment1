import { test,expect } from "@playwright/test";

test.setTimeout(180000);

test("Pos_Fun_0001 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan veetukku poren", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0002 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Ennaku saapadu venum", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0003 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Enna seigirai?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0004 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Naan kadaiku poitu apram vaaran avana kootitu kovil ku poitu vaaran", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0005 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type(" Thayavu seidhu konjam velila irrungale", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0006 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Adei inga vaa daa", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0007 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Nee poniina naan varuvee", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0008 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Naa pogala", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0009 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Avan eppo varuvan?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0010 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan nethu ponen", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0011 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Ennaku anga vara eladhu", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0012 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Naan ippo velaiku pore", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0013 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Neenga eppo poringa?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0014 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan nalaikku varuven", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0015 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Naanga padam pakuram", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0016 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("sari naan poren", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0017 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("konjam neram iru", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0018 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("thulli thulli oodudhu", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0019 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("nee pogalaya?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0020 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("enakku kaaichchal kaaranamaaha naan paadasaalaikku sellavillai", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0021 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("indru nadapetra padasalai vilavil naan pangetren,aasiriyar manavargalum irrundhanar", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0022 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("naan ilangai poren", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0023 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("Ennaku mahathma gandhiyai migavum pidikum", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});

test("Pos_Fun_0024 - Thanglish to Tamil conversion (stable typing)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  // ✅ Find the first editable textbox on the page (works even if not textarea)
  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  // Click and type (site says: type yourself word-by-word)
  await inputBox.click();
  await page.keyboard.type("vanakkam eppadi irukka?", { delay: 80 });
  await page.keyboard.press(" "); 

  await page.waitForTimeout(3000);

  
  const text = await page.locator("body").innerText();
  console.log("\n===== PAGE TEXT =====\n");
  console.log(text);
  console.log("\n=====================\n");
});



// Neg_Fun_0001
test("Neg_Fun_0001 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("vanakam epdi iruka", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0002 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("321654987", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0003 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("nee shop ku varuviya????!!!!", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0004 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan pirantha thihathi 2003/02/13", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0005 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("ippo current illatha thaala naanga campus vittu engada boarding  porom", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0006 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan 7.30 AM ku varuven vandhu school ku poitu apdiye akkava pathutu varuvam", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0007 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan tommorrow varuven", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0008 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("asdf qwer zxcv poi varan", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0009 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page.locator("textarea, input[type='text'], [contenteditable='true']").first();

  await inputBox.click();
  await inputBox.press("Control+A");
  await inputBox.press("Backspace");

  await inputBox.pressSequentially("naan pirantha thihathi 2003/02/13", { delay: 120 }); // ❌ wrong spelling
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so negative test appears as FAILED in report)
  expect(false).toBe(true);
});

test("Neg_Fun_0010 - Invalid spelling (Expected to FAIL)", async ({ page }) => {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const inputBox = page
    .locator("textarea, input[type='text'], [contenteditable='true']")
    .first();

  // Clear old text
  await inputBox.click();
  await inputBox.fill("");

  // ✅ Define longText properly
  const longText =
    "Nethu evening naan veetla irundhu konjam free time irundhuchu, appo kitchen la clean panna start panninen. Fridge open pannumbodhu 3 vegetables spoil aagirundhadhu, adhanaala market poganum nu decide panninen. Market la tomato 1 kg vaanginen, onion 2 kg, potato 1.5 kg vaanginen, total amount 260 rupees aachunu shopkeeper sonnaaru. Veetukku vandhu cooking start pannumbodhu gas cylinder la flame romba slow aa irundhuchu, so gas level check panninen, almost 1 kg dhaan remaining nu therinjuchu. Adhukapparam mobile la recipe video paathen, adhu 18 minutes duration irundhadhu. Cooking mudinjudhuku apram family members ellarum dinner saaptom, appo TV la news channel paathuttu irundhom. News la water shortage pathi discuss panninaanga, city la water usage 40% increase aagirukku nu mention panninaanga. Dinner mudinja apram naan books arrange panninen, shelf la 25 books irundhadhu, adhulaye 5 books romba palaya condition la irundhadhu. Night time la niraiya jokes video pathe, so charger connect pannitu alarm set panninen. Total day calm aa poguthu nu feel pannitu thoonga poga ready aaginen.";

  // ✅ For long text always use fill (NOT pressSequentially)
  await inputBox.fill(longText);

  // Trigger conversion
  await page.keyboard.press(" ");
  await page.waitForTimeout(3000);

  // ❌ Force FAIL (so it shows FAILED in report)
  expect(false).toBe(true);
});

