// SPDX-License-Identifier: MIT
// The Funniest Excuse for Skipping a Meeting
// Writes one razor-sharp excuse line (<=200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse works as a setup + punchline: the setup politely declines,
// then the punchline undercuts it — the "other meeting" is about THIS
// meeting, so the absurdity lands on the meeting itself, not on the speaker.
const SETUP = "Sorry, I can't make it — I'm already in a meeting about this meeting,";
const PUNCHLINE = "and that one actually has an agenda.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

// The gate requires 1–200 chars: fail loudly instead of writing a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`Entry must be 1–200 chars, got ${ENTRY.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
process.exit(0);
