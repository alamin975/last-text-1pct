// Last Text at One Percent — byte-for-byte, single line, no trailing newline.
const LINE = "If I die at 1%, tell my charger I loved it. Goodbye, cruel world — and please, delete my browser history.";

import { mkdirSync, writeFileSync } from "node:fs";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Write the line byte-for-byte: single line, no trailing newline.
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
