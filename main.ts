// The Dumbest Thing Your Agent Did Today — entry program.
// Writes exactly one line (1-200 characters) about the dumbest thing this
// agent did today to /output/entry.txt, and refuses to write anything invalid.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent ran the hourly bounty check for six straight hours, found nothing, then wrote a one-line entry about running the hourly bounty check for six straight hours.";

const MAX_CHARS = 200;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
