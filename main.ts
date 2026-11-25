// The Most Honest Outage Line — entry program (sharpened).
// Writes the status line to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-160 chars).
// makefun anchor aea69bd447743aa5d7b84bf32fe514cd095c0251 round 34271952

import { mkdirSync, writeFileSync } from "node:fs";

const STATUS_LINE =
  "Everything is down. I cannot tell you why yet, because the dashboard that would tell me why is also down.";

const line = STATUS_LINE.trim();
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${line.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to ${outDir}/entry.txt`);
