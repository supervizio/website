/**
 * Vision POC Test - Validates inject.js works in a real browser
 * Run: node src/vision/test-poc.mjs
 */
import { readFileSync } from "fs";
import { chromium } from "playwright-core";

const INJECT_SCRIPT = readFileSync("src/vision/inject.js", "utf-8");
const URL = process.argv[2] || "http://localhost:3000";

async function main() {
  console.log("[Vision POC] Launching browser...");
  const browser = await chromium.launch({
    executablePath: "/opt/google/chrome/chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  console.log(`[Vision POC] Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: "networkidle" });

  console.log("[Vision POC] Injecting vision overlay...");
  await page.evaluate(INJECT_SCRIPT);

  // Verify injection
  const hasVision = await page.evaluate(() => !!window.__vision__);
  console.log(`[Vision POC] Overlay injected: ${hasVision}`);

  // Activate vision mode
  await page.evaluate(() => window.__vision__.toggle());
  const isActive = await page.evaluate(() => window.__vision__.active);
  console.log(`[Vision POC] Vision active: ${isActive}`);

  // Select elements via the exposed API
  const selectors = ["h1", "nav a", "button", "p"];
  for (const sel of selectors) {
    const result = await page.evaluate((s) => window.__vision__.select(s), sel);
    if (result) {
      console.log(`\n[Vision POC] Selected "${sel}":`);
      console.log(JSON.stringify(result, null, 2));
      break;
    }
  }

  // Take screenshot
  await page.screenshot({ path: "/tmp/vision-poc.png", fullPage: false });
  console.log("\n[Vision POC] Screenshot saved: /tmp/vision-poc.png");

  // Check history
  const history = await page.evaluate(() => window.__vision__.getHistory());
  console.log(`[Vision POC] History entries: ${history.length}`);

  await browser.close();
  console.log("[Vision POC] Done.");
}

main().catch((e) => {
  console.error("[Vision POC] Error:", e.message);
  process.exit(1);
});
