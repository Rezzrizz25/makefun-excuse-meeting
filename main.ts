// SPDX-License-Identifier: MIT
// The Funniest Excuse for Skipping a Meeting
// Writes one razor-sharp excuse line (<=200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, I can't make it — I'm already in a meeting about this meeting, and that one actually has an agenda.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
