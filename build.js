#!/usr/bin/env node
const nunjucks = require("nunjucks");
const fs = require("fs");
const path = require("path");

const TEMPLATES_DIR = path.join(__dirname, "templates");
const OUTPUT_DIR = path.join(__dirname, "site");
const PAGES_DIR = path.join(TEMPLATES_DIR, "pages");

const env = nunjucks.configure(TEMPLATES_DIR, {
  autoescape: false,
  trimBlocks: true,
  lstripBlocks: true,
});

const pages = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith(".njk"));

let count = 0;
for (const file of pages) {
  const src = path.join("pages", file);
  const out = path.join(OUTPUT_DIR, file.replace(".njk", ".html"));
  const html = env.render(src);
  fs.writeFileSync(out, html);
  count++;
}

console.log(`Built ${count} pages → site/`);
