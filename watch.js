#!/usr/bin/env node
const { execSync } = require("child_process");
const chokidar = require("chokidar");
const path = require("path");

const TEMPLATES_DIR = path.join(__dirname, "templates");

console.log("Watching templates/ for changes...");

chokidar
  .watch(TEMPLATES_DIR, { ignoreInitial: true })
  .on("all", (event, filePath) => {
    const rel = path.relative(__dirname, filePath);
    console.log(`[${event}] ${rel} → rebuilding...`);
    try {
      execSync("node build.js", { stdio: "inherit" });
    } catch {
      console.error("Build failed.");
    }
  });
